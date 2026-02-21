import type { Metadata } from "next";
import Image from "next/image";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Grúas en San Diego | Servicio 24/7 | CloseBy Towing",
  description:
    "Necesitas una grúa en San Diego — CloseBy Towing ofrece servicio de grúa rápido y confiable en toda el área. Llegamos en 15-25 minutos. Llama ahora: (858) 999-9293",
  keywords:
    "grúas San Diego, grúa cerca de mi, tow truck San Diego español, servicio de grúa 24 horas, remolque San Diego, grúa Chula Vista, grúa National City, grúa San Ysidro",
  openGraph: {
    title: "Grúas en San Diego | Servicio 24/7 | CloseBy Towing",
    description:
      "Necesitas una grúa en San Diego — Respuesta en 15-25 minutos. Servicio profesional 24/7 en todo el condado. Hablamos español.",
    url: "https://www.closebytowing.com/gruas",
    type: "website",
  },
  alternates: {
    canonical: "https://www.closebytowing.com/gruas",
    languages: {
      "es": "https://www.closebytowing.com/gruas",
      "en": "https://www.closebytowing.com",
    },
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
    descripcion: "Batería muerta — te ayudamos a arrancar tu vehículo en minutos, sin necesidad de grúa.",
    icono: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    titulo: "Apertura de Vehículo",
    descripcion: "Llaves adentro del carro — abrimos tu vehículo sin dañarlo. Servicio rápido y seguro.",
    icono: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
  },
  {
    titulo: "Cambio de Llanta",
    descripcion: "Llanta ponchada en la carretera — cambiamos tu llanta donde sea que te encuentres.",
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
    descripcion: "Te quedaste sin gasolina — te llevamos combustible directo a tu ubicación.",
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
  "Coronado",
  "El Cajon",
  "Poway",
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
    titulo: "Precios Justos Sin Sorpresas",
    detalle: "Transparente",
    descripcion: "Te damos el precio antes de llegar. Sin cargos escondidos ni sorpresas al final.",
    icono: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    titulo: "Operadores Locales de San Diego",
    detalle: "De Aquí",
    descripcion: "Somos de aquí. Conocemos la comunidad, las calles y los vecindarios. Estamos para servirte.",
    icono: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    titulo: "Hablamos Español",
    detalle: "Tu Idioma",
    descripcion: "Nuestro equipo habla español. Comunícate con nosotros sin barreras, como en casa.",
    icono: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
  },
];

const PREGUNTAS = [
  {
    pregunta: "Tiempo de llegada",
    respuesta: "Nuestro tiempo promedio de respuesta es de 15 a 25 minutos en toda el área de San Diego. Dependiendo del tráfico y tu ubicación exacta, puede ser incluso más rápido.",
  },
  {
    pregunta: "Costo del servicio de grúa",
    respuesta: "El servicio de grúa comienza desde $95. El precio final depende de la distancia y el tipo de vehículo. Siempre te damos el precio exacto antes de llegar — sin sorpresas.",
  },
  {
    pregunta: "Disponibilidad nocturna",
    respuesta: "Sí, estamos disponibles las 24 horas del día, los 7 días de la semana. No importa si es de madrugada, fin de semana o día festivo — siempre hay alguien listo para ayudarte.",
  },
  {
    pregunta: "Servicio en español",
    respuesta: "Sí, nuestro equipo habla español. Puedes llamarnos o escribirnos por WhatsApp y te atenderemos en tu idioma sin problema.",
  },
  {
    pregunta: "Formas de pago aceptadas",
    respuesta: "Aceptamos efectivo, tarjetas de crédito y débito (Visa, Mastercard, American Express), y también pagos por Zelle y Venmo.",
  },
];

const REVIEWS = [
  { name: "Carlos M.", date: "Hace 2 semanas", text: "Excelente servicio. Llegaron en menos de 20 minutos y fueron muy profesionales. Totalmente recomendado.", stars: 5 },
  { name: "María G.", date: "Hace 1 mes", text: "Mi carro se descompuso en la I-5 de noche y CloseBy llegó rapidísimo. Muy amables y hablaban español. Gracias!", stars: 5 },
  { name: "Roberto L.", date: "Hace 3 semanas", text: "Precio justo y servicio rápido. Me quedé sin batería en el estacionamiento de Walmart y me arrancaron el carro en minutos.", stars: 5 },
  { name: "Ana P.", date: "Hace 1 mes", text: "Dejé las llaves adentro del carro y estaba desesperada. Llegaron rápido y abrieron el carro sin dañarlo. Excelente!", stars: 5 },
  { name: "Jorge R.", date: "Hace 2 meses", text: "Los llamé por WhatsApp y respondieron de inmediato. Grúa llegó en 15 minutos. Muy profesional todo.", stars: 5 },
  { name: "Patricia S.", date: "Hace 1 semana", text: "Se ponchó mi llanta en la 805 y vinieron a cambiarla. Rápidos, amables y buen precio. Los recomiendo mucho.", stars: 5 },
  { name: "Miguel D.", date: "Hace 3 semanas", text: "Tuve un accidente menor y necesitaba grúa. Fueron muy cuidadosos con mi carro. Servicio de primera.", stars: 5 },
  { name: "Laura V.", date: "Hace 2 meses", text: "Me quedé sin gasolina cerca de National City. Me trajeron gasolina en 20 minutos. Salvaron mi día!", stars: 5 },
];

export default function GruasPage() {
  return (
    <main className="bg-slate-950 text-white" lang="es">

      {/* ══════════════════════════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex items-center justify-start overflow-hidden">
        {/* Hero photo */}
        <div className="absolute inset-0">
          <Image
            src="/images/grua-san-diego.webp"
            alt="Grúa CloseBy Towing con el horizonte de San Diego al atardecer"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Light gradient overlays — just enough for text readability, let the sunset shine */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/20 to-transparent" />
        </div>

        {/* Hero content — middle left */}
        <div className="relative z-10 w-full max-w-xl lg:max-w-2xl ml-6 lg:ml-16 px-6 pt-32 pb-20">
          {/* Badge */}
          <div className="flex justify-start mb-8">
            <div className="inline-flex items-center gap-2.5 bg-[#25D366]/15 border border-[#25D366]/40 rounded-full px-5 py-2.5">
              <span className="w-2.5 h-2.5 bg-[#25D366] rounded-full animate-pulse" />
              <span className="text-[#25D366] text-sm font-bold tracking-wide">Disponible Ahora &mdash; Hablamos Espa&ntilde;ol</span>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-5 leading-[0.95] text-left">
            <span className="text-white">Gr&uacute;as en </span>
            <span className="text-amber-400">San Diego</span>
          </h1>

          <p className="text-xl sm:text-2xl font-bold text-amber-300/90 mb-6 tracking-wide text-left">
            Servicio R&aacute;pido, Profesional y Disponible 24/7
          </p>

          <p className="text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed text-left">
            Tu carro se averi&oacute;. No te preocupes &mdash; llegamos a ti en 15-25 minutos. Servimos Chula Vista, National City, Spring Valley, Logan Heights, Barrio Logan y toda el &aacute;rea de San Diego.
          </p>

          {/* CTA Buttons — WhatsApp FIRST and BIGGEST */}
          <div className="flex flex-col items-start gap-4">
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 bg-[#25D366] hover:bg-[#1ebe5b] text-white px-14 py-6 rounded-2xl font-black text-2xl transition-all shadow-xl shadow-[#25D366]/25 hover:shadow-[#25D366]/40 hover:scale-[1.03] w-full sm:w-auto justify-center"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Escr&iacute;benos por WhatsApp
            </a>
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-300 text-slate-900 px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-lg shadow-amber-400/20 hover:shadow-amber-400/40 hover:scale-[1.02] w-full sm:w-auto justify-center"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Llamar Ahora: {CONTACT.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          LO QUE DICEN NUESTROS CLIENTES — Scrolling Reviews
      ══════════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-r from-amber-500 to-amber-400 pt-10 pb-8 lg:pb-10 overflow-hidden">
        <div className="mx-auto max-w-[1600px] px-6 mb-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Lo Que Dicen Nuestros <span className="text-amber-400">Clientes</span>
          </h2>
        </div>

        <div className="relative">
          <div className="flex gap-5 animate-[scrollLeft_50s_linear_infinite] w-max">
            {[...REVIEWS, ...REVIEWS].map((review, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[420px] min-h-[200px] bg-slate-800/60 border border-slate-700/50 rounded-2xl p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: review.stars }).map((_, s) => (
                      <svg key={s} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-4">&ldquo;{review.text}&rdquo;</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white font-bold">{review.name}</span>
                  <span className="text-slate-500 text-sm">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          NUESTROS SERVICIOS DE GRÚA
      ══════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-950 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Nuestros <span className="text-amber-400">Servicios</span> de Gr&uacute;a
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Todo lo que necesitas para salir de cualquier emergencia en la carretera.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICIOS.map((servicio) => (
              <div
                key={servicio.titulo}
                className="group bg-slate-900/80 border border-slate-700/50 rounded-2xl p-8 hover:border-amber-400/40 hover:bg-slate-800/80 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-amber-400/10 rounded-xl flex items-center justify-center text-amber-400 mb-5 group-hover:bg-amber-400/20 transition-colors">
                  {servicio.icono}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{servicio.titulo}</h3>
                <p className="text-slate-400 leading-relaxed">{servicio.descripcion}</p>
              </div>
            ))}
          </div>

          {/* WhatsApp mid-page CTA */}
          <div className="mt-14 text-center">
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5b] text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/40 hover:scale-[1.02]"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Pide tu Servicio por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          PHOTO SECTION
      ══════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="relative aspect-[21/9] rounded-3xl overflow-hidden">
            <Image
              src="/images/spanish-photo.webp"
              alt="CloseBy Towing — servicio de grúa profesional en San Diego"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          POR QUÉ ELEGIRNOS
      ══════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-950 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Por Qu&eacute; <span className="text-amber-400">Elegirnos</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Somos la opci&oacute;n de confianza para la comunidad hispana de San Diego.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {PUNTOS_CONFIANZA.map((punto) => (
              <div key={punto.titulo} className="flex gap-5 items-start group bg-slate-900/60 border border-slate-700/40 rounded-2xl p-7 hover:border-amber-400/30 transition-all">
                <div className="flex-shrink-0 w-14 h-14 bg-amber-400/10 rounded-xl flex items-center justify-center text-amber-400 group-hover:bg-amber-400/20 transition-colors">
                  {punto.icono}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1.5">
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
      </section>

      {/* ══════════════════════════════════════════════════════════════
          ÁREAS QUE SERVIMOS
      ══════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-900 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              &Aacute;reas que <span className="text-amber-400">Servimos</span> en San Diego
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Cubrimos todo el condado de San Diego. Estamos cerca de ti, sin importar d&oacute;nde est&eacute;s.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {AREAS_SERVIDAS.map((area) => (
              <div
                key={area}
                className="bg-slate-800/50 border border-slate-700/40 rounded-xl px-5 py-4 text-center hover:border-amber-400/40 hover:bg-slate-800 transition-all duration-300"
              >
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-amber-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white font-medium text-sm">{area}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-500 mt-8 text-sm">
            ...y todas las &aacute;reas circundantes del condado de San Diego.
          </p>
        </div>
      </section>

      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* ══════════════════════════════════════════════════════════════
          PREGUNTAS FRECUENTES
      ══════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-900 py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Preguntas <span className="text-amber-400">Frecuentes</span>
            </h2>
          </div>

          <div className="space-y-4">
            {PREGUNTAS.map((faq) => (
              <details
                key={faq.pregunta}
                className="group bg-slate-800/60 border border-slate-700/50 rounded-2xl overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer px-7 py-5 text-white font-bold text-lg hover:bg-slate-800/80 transition-colors list-none">
                  {faq.pregunta}
                  <svg className="w-5 h-5 text-amber-400 flex-shrink-0 ml-4 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </summary>
                <div className="px-7 pb-6 text-slate-400 leading-relaxed">
                  {faq.respuesta}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          CTA FINAL
      ══════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-950 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-[#1e2a4a] to-[#162038] border border-slate-700/50 rounded-3xl p-10 sm:p-16 text-center shadow-2xl">
            <div className="inline-flex items-center gap-2 bg-[#25D366]/15 border border-[#25D366]/30 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2.5 h-2.5 bg-[#25D366] rounded-full animate-pulse" />
              <span className="text-[#25D366] text-sm font-bold">Operadores Disponibles Ahora</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
              Necesitas una <span className="text-amber-400">Gr&uacute;a</span> Ahora
            </h2>
            <p className="text-slate-400 text-lg mb-6 max-w-xl mx-auto">
              No te quedes varado. Ll&aacute;manos ahora y llegamos en 15-25 minutos.
            </p>

            {/* Big phone number */}
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="block text-4xl sm:text-5xl font-black text-amber-400 hover:text-amber-300 transition-colors mb-10"
            >
              {CONTACT.phone}
            </a>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-300 text-slate-900 px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-lg shadow-amber-400/20 hover:shadow-amber-400/40 hover:scale-[1.02] w-full sm:w-auto justify-center"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Escr&iacute;benos por WhatsApp
              </a>
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="inline-flex items-center gap-3 bg-transparent hover:bg-white/10 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all border-2 border-white/30 hover:border-white/50 w-full sm:w-auto justify-center"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Llamar Ahora
              </a>
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
            description: "Servicio de grúas en San Diego disponible 24/7. Respuesta rápida en 15-25 minutos. Hablamos español.",
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

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: PREGUNTAS.map((faq) => ({
              "@type": "Question",
              name: faq.pregunta,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.respuesta,
              },
            })),
          }),
        }}
      />
    </main>
  );
}
