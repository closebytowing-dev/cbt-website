import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Grúas en San Diego | Servicio 24/7 | CloseBy Towing",
  description:
    "Servicio de grúas en San Diego disponible 24/7. Respuesta rápida en 15-25 minutos. Servimos Chula Vista, National City, Logan Heights, San Ysidro y todo el condado de San Diego. Llámanos ahora.",
  keywords:
    "grúas San Diego, grúa cerca de mi, tow truck San Diego español, servicio de grúa 24 horas, remolque San Diego, grúa Chula Vista, grúa National City",
  openGraph: {
    title: "Grúas en San Diego | Servicio 24/7 | CloseBy Towing",
    description:
      "¿Necesitas una grúa en San Diego? Respuesta en 15-25 minutos. Servicio profesional 24/7 en todo el condado.",
    url: "https://www.closebytowing.com/gruas",
    type: "website",
  },
  alternates: {
    canonical: "https://www.closebytowing.com/gruas",
  },
};

const SERVICIOS = [
  {
    titulo: "Servicio de Grúa",
    descripcion: "Grúa plataforma y remolque para todo tipo de vehículo. Llegamos rápido a donde estés.",
    icono: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    titulo: "Arranque de Batería",
    descripcion: "¿Batería muerta? Te ayudamos a arrancar tu vehículo en minutos, sin necesidad de grúa.",
    icono: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    titulo: "Apertura de Vehículo",
    descripcion: "¿Llaves adentro del carro? Abrimos tu vehículo sin dañarlo. Servicio rápido y seguro.",
    icono: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
  },
  {
    titulo: "Cambio de Llanta",
    descripcion: "Llanta ponchada en la carretera? Cambiamos tu llanta donde sea que te encuentres.",
    icono: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    titulo: "Entrega de Gasolina",
    descripcion: "¿Te quedaste sin gasolina? Te llevamos combustible directo a tu ubicación.",
    icono: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    titulo: "Recuperación de Accidente",
    descripcion: "Servicio profesional de recuperación después de un accidente. Tu seguridad es prioridad.",
    icono: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
  },
];

const AREAS_SERVIDAS = [
  "Chula Vista",
  "National City",
  "Logan Heights",
  "Barrio Logan",
  "San Ysidro",
  "Otay Ranch",
  "Downtown San Diego",
  "Sherman Heights",
  "Golden Hill",
  "Paradise Hills",
  "Imperial Beach",
  "Nestor",
  "Palm City",
  "Otay Mesa",
  "Lincoln Park",
  "Skyline",
];

const PUNTOS_CONFIANZA = [
  {
    titulo: "Respuesta Rápida",
    detalle: "15-25 minutos",
    descripcion: "Llegamos rápido porque estamos cerca. Nuestros operadores conocen cada calle de San Diego.",
    icono: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    titulo: "Licenciados y Asegurados",
    detalle: "100% Legal",
    descripcion: "Operamos con todas las licencias y seguros requeridos. Tu vehículo está protegido con nosotros.",
    icono: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    titulo: "Precios Justos y Transparentes",
    detalle: "Sin Sorpresas",
    descripcion: "Te damos el precio antes de llegar. Sin cargos escondidos ni sorpresas al final.",
    icono: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    titulo: "Operadores Locales",
    detalle: "De San Diego",
    descripcion: "Somos de aquí. Conocemos la comunidad y hablamos tu idioma. Estamos para servirte.",
    icono: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
];

export default function GruasPage() {
  return (
    <main className="bg-slate-950 text-white" lang="es">

      {/* ══════════════════════════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Photo placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-amber-400/40 text-2xl font-bold tracking-widest border-2 border-dashed border-amber-400/30 px-12 py-8 rounded-2xl">
              [ FOTO AQU&Iacute; ]
            </span>
          </div>
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-32 pb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 rounded-full px-5 py-2 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-amber-300 text-sm font-semibold tracking-wide">Disponible 24/7 &mdash; Servicio en Espa&ntilde;ol</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4 leading-tight">
            <span className="text-white">Gr&uacute;as en </span>
            <span className="text-amber-400">San Diego</span>
          </h1>

          <p className="text-xl sm:text-2xl font-bold text-amber-300 mb-6 tracking-wide">
            R&aacute;pido, Confiable y Disponible 24/7
          </p>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            &iquest;Necesitas una gr&uacute;a en San Diego? CloseBy Towing llega a ti en 15-25 minutos.
            Servimos toda el &aacute;rea de San Diego, d&iacute;a y noche.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="group inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-300 text-slate-900 px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-lg shadow-amber-400/20 hover:shadow-amber-400/40 hover:scale-[1.02]"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Llamar Ahora: {CONTACT.phone}
            </a>
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5b] text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all shadow-lg hover:scale-[1.02]"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Escr&iacute;benos por WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full">
            <path d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z" fill="#0f172a" />
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          NUESTROS SERVICIOS
      ══════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-900 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Nuestros <span className="text-amber-400">Servicios</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Todo lo que necesitas para salir de cualquier emergencia en la carretera.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICIOS.map((servicio) => (
              <div
                key={servicio.titulo}
                className="group bg-slate-800/60 border border-slate-700/50 rounded-2xl p-8 hover:border-amber-400/40 hover:bg-slate-800 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-amber-400/10 rounded-xl flex items-center justify-center text-amber-400 mb-5 group-hover:bg-amber-400/20 transition-colors">
                  {servicio.icono}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{servicio.titulo}</h3>
                <p className="text-slate-400 leading-relaxed">{servicio.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          POR QUÉ ELEGIRNOS (Trust Section)
      ══════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-950 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Photo placeholder */}
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-slate-800 via-slate-800/80 to-slate-900 rounded-3xl border-2 border-dashed border-amber-400/25 flex items-center justify-center">
                <span className="text-amber-400/40 text-2xl font-bold tracking-widest">
                  [ FOTO AQU&Iacute; ]
                </span>
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-amber-400/5 rounded-3xl -z-10" />
            </div>

            {/* Trust points */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
                &iquest;Por Qu&eacute; <span className="text-amber-400">Elegirnos</span>?
              </h2>
              <p className="text-slate-400 text-lg mb-10">
                Somos la opci&oacute;n de confianza para la comunidad hispana de San Diego.
              </p>

              <div className="space-y-6">
                {PUNTOS_CONFIANZA.map((punto) => (
                  <div key={punto.titulo} className="flex gap-5 items-start group">
                    <div className="flex-shrink-0 w-12 h-12 bg-amber-400/10 rounded-xl flex items-center justify-center text-amber-400 group-hover:bg-amber-400/20 transition-colors">
                      {punto.icono}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-lg font-bold text-white">{punto.titulo}</h3>
                        <span className="text-xs font-bold bg-amber-400/15 text-amber-300 px-2.5 py-0.5 rounded-full">
                          {punto.detalle}
                        </span>
                      </div>
                      <p className="text-slate-400 leading-relaxed">{punto.descripcion}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          ÁREAS QUE SERVIMOS
      ══════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-900 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              &Aacute;reas que <span className="text-amber-400">Servimos</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Cubrimos todo el condado de San Diego. Estamos cerca de ti, sin importar d&oacute;nde est&eacute;s.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {AREAS_SERVIDAS.map((area) => (
              <div
                key={area}
                className="bg-slate-800/50 border border-slate-700/40 rounded-xl px-5 py-4 text-center hover:border-amber-400/40 hover:bg-slate-800 transition-all duration-300"
              >
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-amber-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white font-medium">{area}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-500 mt-8 text-sm">
            ...y todas las &aacute;reas circundantes del condado de San Diego.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          CTA FINAL
      ══════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-950 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-[#1e2a4a] to-[#162038] border border-slate-700/50 rounded-3xl p-10 sm:p-14 text-center shadow-2xl">
            <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/25 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-amber-300 text-sm font-semibold">Operadores Disponibles Ahora</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              &iquest;Necesitas una <span className="text-amber-400">Gr&uacute;a</span> Ahora?
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
              No te quedes varado. Ll&aacute;manos ahora y llegamos en 15-25 minutos. Servicio r&aacute;pido, profesional y en espa&ntilde;ol.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-300 text-slate-900 px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-lg shadow-amber-400/20 hover:shadow-amber-400/40 hover:scale-[1.02]"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                {CONTACT.phone}
              </a>
              <a
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5b] text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all shadow-lg hover:scale-[1.02]"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 text-slate-500 text-sm">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Servicio en Espa&ntilde;ol
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                24/7 Disponible
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Sin Cargos Escondidos
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "CloseBy Towing",
            description: "Servicio de grúas en San Diego disponible 24/7. Respuesta rápida en 15-25 minutos.",
            url: "https://www.closebytowing.com/gruas",
            telephone: CONTACT.phone,
            areaServed: {
              "@type": "City",
              name: "San Diego",
              "@id": "https://www.wikidata.org/wiki/Q16552",
            },
            availableLanguage: ["English", "Spanish"],
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              opens: "00:00",
              closes: "23:59",
            },
          }),
        }}
      />
    </main>
  );
}
