# UI Visibility Control System

## Overview

The CloseBy Towing website now includes a powerful admin panel that allows you to hide/show website elements with visual toggle switches. No code editing required!

---

## Quick Access

**Admin Panel URL:** `https://yourdomain.com/admin` (or `http://localhost:3000/admin` for local development)

**Login:** Use the admin password (set in `.env.local` as `ADMIN_PASSWORD`)

---

## How It Works

1. **Navigate to `/admin`** in your browser
2. **Enter your admin password** to log in
3. **You'll be redirected to `/admin/visibility`** - the control panel
4. **Click toggle switches** to hide (left) or show (right) elements
5. **Click "Save Changes"** to apply your changes
6. **Refresh your website** to see the changes take effect

---

## Controllable Elements

### Header Elements
- **Logo** - CloseBy Towing logo and brand text
- **Phone Button** - Call button in header
- **Services Menu** - Services dropdown menu
- **Reviews Link** - Link to reviews section
- **Service Area Link** - Link to service area section
- **About Link** - Link to about page
- **Contact Link** - Link to contact page
- **Login Links** - Partner login/signup links

### Home Page Sections
- **Hero** - Main hero section with CTA
- **Value** - "Why CloseBy Towing?" section
- **Reviews** - Customer testimonials carousel
- **Services** - Service cards grid
- **Service Area** - Service area map with cities
- **FAQ** - Frequently asked questions

### Footer Elements
- **Main Footer** - Entire footer section
- **Back To Top** - Back to top button bar
- **Partner Links** - Partner portal section in footer

### CTA Buttons
- **Phone Buttons** - All phone call buttons
- **Online Booking Button** - Online booking CTA
- **Whatsapp Button** - WhatsApp contact link

### Popups & Modals
- **Left Popup** - Main booking popup/form
- **Mobile Bottom Bar** - Mobile bottom navigation

---

## Technical Details

### File Structure

```
/src
  /app
    /admin
      page.tsx                    # Login page
      /visibility
        page.tsx                  # Control panel
    /api
      /admin
        /auth
          route.ts                # Authentication API
        /visibility
          route.ts                # Visibility config API
  /components
    Header.tsx                    # Updated with visibility checks
    Footer.tsx                    # Updated with visibility checks
  /hooks
    useVisibility.ts              # Hook to fetch visibility config
  /lib
    constants.ts                  # Contains UI_VISIBILITY config
/docs
  VISIBILITY_CONTROL.md           # This file
```

### How Components Check Visibility

Components use the `useVisibility` hook to check if they should render:

```typescript
import { useVisibility } from '@/hooks/useVisibility';

const { config } = useVisibility();

// Then check before rendering
{config.homePage.hero && <Hero />}
```

### Data Storage

Visibility settings are stored in **Firebase Firestore** at:
- Collection: `settings`
- Document: `visibility`

This ensures your settings persist across sessions and server restarts.

---

## Environment Variables

Add this to your `.env.local` file:

```env
# Admin password for visibility control panel
ADMIN_PASSWORD=your-secure-password-here
```

If not set, it defaults to `admin123` (change this for production!).

---

## Security Notes

- Admin panel is not linked anywhere on the public site
- You must know the direct URL to access it
- Password protected with session authentication
- Only you should know the admin password
- Consider using a strong, unique password for production

---

## Common Use Cases

### 1. Temporarily Hide Reviews Section
1. Log in to admin panel
2. Toggle "Reviews" to OFF (left)
3. Save changes
4. Reviews section disappears from homepage

### 2. Remove Login Links
1. Log in to admin panel
2. Toggle "Login Links" to OFF
3. Save changes
4. Partner login/signup links disappear from header and footer

### 3. Simplify Homepage for Testing
1. Log in to admin panel
2. Turn OFF: Reviews, FAQ, Service Area
3. Keep ON: Hero, Value, Services
4. Save changes
5. Get a cleaner, simpler homepage

### 4. Restore Everything
1. Log in to admin panel
2. Toggle all switches to ON (right)
3. Save changes
4. Full site is back

---

## Troubleshooting

### Changes Not Showing
- **Hard refresh your browser** (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
- **Check you clicked "Save Changes"** in the admin panel
- **Clear browser cache** if needed

### Can't Log In
- **Check your password** in `.env.local`
- **Restart dev server** after changing environment variables
- **Check browser console** for errors

### Toggle Not Working
- **Check Firebase connection** - ensure firebaseAdmin is configured
- **Check browser console** for API errors
- **Verify Firestore permissions** in Firebase console

---

## Reverting Changes

If something goes wrong:

1. **Via Admin Panel:** Log in and toggle everything back ON
2. **Via Code:** The default config in `useVisibility.ts` shows everything by default
3. **Via Firebase:** Delete the `settings/visibility` document to reset to defaults

---

## Future Enhancements

Possible future additions:
- Bulk toggle (hide/show all at once)
- Preset modes (Production, Minimal, Coming Soon)
- Scheduled visibility (show/hide on specific dates)
- A/B testing configurations
- User role-based visibility
- Activity log of changes

---

## Support

For issues or questions:
- Check browser console for errors
- Verify Firebase connection
- Ensure environment variables are set
- Check this documentation

---

**Last Updated:** 2025-11-18
**Version:** 1.0
**Compatibility:** Next.js 15+, React 19+
