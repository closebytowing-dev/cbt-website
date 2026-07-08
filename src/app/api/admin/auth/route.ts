import { NextRequest, NextResponse } from 'next/server';
import { checkAdminPassword, adminSessionToken } from '@/lib/apiSecurity';

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();

    const adminPassword = process.env.ADMIN_PASSWORD;

    // No default/fallback password, EVER (removed the old `|| 'admin123'`
    // backdoor, P1.4 #3). If ADMIN_PASSWORD is unset, the admin area is closed.
    if (!adminPassword) {
      console.error('ADMIN_PASSWORD is not configured — admin area disabled.');
      return NextResponse.json({ success: false, error: 'Admin area not configured' }, { status: 503 });
    }

    if (!checkAdminPassword(password, adminPassword)) {
      return NextResponse.json({ success: false, error: 'Invalid password' }, { status: 401 });
    }

    // Issue an httpOnly session cookie that the staff-only Admin-SDK write routes
    // (e.g. /api/admin/visibility) verify server-side. Auto-sent same-origin and
    // not readable by JS (XSS-safe). Replaces the old client-only sessionStorage
    // gate that any anonymous caller could skip.
    const res = NextResponse.json({ success: true });
    res.cookies.set('admin_session', adminSessionToken(adminPassword), {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 8, // 8 hours
    });
    return res;
  } catch (error) {
    console.error('Admin auth error:', error);
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}
