import type { Metadata } from "next";
import Image from "next/image";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Grúas en Chula Vista, National City, Logan Heights, Spring Valley y San Ysidro | CloseBy Towing",
  description:
    "Servicio de grúa y asistencia vial en Chula Vista, National City, Logan Heights, Spring Valley y San Ysidro. Llegamos en 15-25 minutos. Hablamos español. Llama: (858) 999-9293",
  keywords:
    "grúa Chula Vista, grúa National City, grúa Logan Heights, grúa Spring Valley, grúa San Ysidro, tow truck español, remolque sur San Diego, asistencia vial español",
  openGraph: {
    title: "Grúas en Chula Vista, National City, Logan Heights y Más | CloseBy Towing",
    description:
      "Servicio de grúa 24/7 en el sur de San Diego. Chula Vista, National City, Logan Heights, Spring Valley y San Ysidro. Hablamos español.",
    url: "https://www.closebytowing.com/lugares",
    type: "website",
  },
  alternates: {
    canonical: "https://www.closebytowing.com/lugares",
    languages: {
      es: "https://www.closebytowing.com/lugares",
      en: "https://www.closebytowing.com",
    },
  },
};

const VECINDARIOS = [
  {
    nombre: "Chula Vista",
    slug: "chula-vista",
    descripcion:
      "La segunda ciudad más grande del condado de San Diego — y una de las áreas donde más servimos. Ya sea que estés en Eastlake, Otay Ranch, o por la bahía, llegamos rápido.",
    detalle:
      "Cubrimos toda Chula Vista: desde la I-805 y la 54 hasta Otay Lakes Road. Si tu carro se descompuso en el estacionamiento de un centro comercial, en la autopista o en tu casa — estamos cerca.",
    servicios: ["Grúa plataforma", "Arranque de batería", "Cambio de llanta", "Cerrajería", "Entrega de gasolina"],
    tiempo: "15-20 min",
    referencia: "I-805, SR-54, Otay Ranch, Eastlake, Bonita",
  },
  {
    nombre: "National City",
    slug: "national-city",
    descripcion:
      "Estamos muy cerca de National City y llegamos en minutos. Si necesitas una grúa en la Mile of Cars, la Plaza Bonita o cualquier calle del área — cuenta con nosotros.",
    detalle:
      "National City es una de nuestras zonas de respuesta más rápida. Conocemos cada esquina — desde la 8th Street hasta Sweetwater Road, la I-5 y la 805.",
    servicios: ["Grúa plataforma", "Arranque de batería", "Cambio de llanta", "Cerrajería", "Entrega de gasolina"],
    tiempo: "10-15 min",
    referencia: "Mile of Cars, Plaza Bonita, I-5, 24th St, Sweetwater",
  },
  {
    nombre: "Logan Heights",
    slug: "logan-heights",
    descripcion:
      "Servimos a la comunidad de Logan Heights y Barrio Logan con orgullo. Si necesitas ayuda en la carretera, estamos a minutos de distancia.",
    detalle:
      "Logan Heights y Barrio Logan son parte del corazón de nuestra comunidad. Cubrimos desde Chicano Park hasta la I-5, incluyendo las calles residenciales y las zonas comerciales.",
    servicios: ["Grúa plataforma", "Arranque de batería", "Cambio de llanta", "Cerrajería", "Entrega de gasolina"],
    tiempo: "10-15 min",
    referencia: "Barrio Logan, Chicano Park, I-5, 28th St, National Ave",
  },
  {
    nombre: "Spring Valley",
    slug: "spring-valley",
    descripcion:
      "Spring Valley y las comunidades cercanas como Lemon Grove y La Presa son parte de nuestra zona de servicio principal. Llegamos rápido, sin importar la hora.",
    detalle:
      "Cubrimos Spring Valley completo: Jamacha Road, Sweetwater Springs, Campo Road y todas las áreas residenciales. Si tu carro no enciende o necesitas remolque — una llamada y estamos ahí.",
    servicios: ["Grúa plataforma", "Arranque de batería", "Cambio de llanta", "Cerrajería", "Entrega de gasolina"],
    tiempo: "15-20 min",
    referencia: "Jamacha Rd, Campo Rd, Sweetwater Springs, Lemon Grove",
  },
  {
    nombre: "San Ysidro",
    slug: "san-ysidro",
    descripcion:
      "Cerca de la frontera y necesitas una grúa — llegamos rápido a San Ysidro y las áreas cercanas. Servicio confiable para la comunidad fronteriza.",
    detalle:
      "Servimos toda la zona de San Ysidro: desde Beyer Blvd hasta la frontera, incluyendo las calles cerca del outlet y las zonas residenciales. También cubrimos Otay Mesa.",
    servicios: ["Grúa plataforma", "Arranque de batería", "Cambio de llanta", "Cerrajería", "Entrega de gasolina"],
    tiempo: "15-25 min",
    referencia: "Beyer Blvd, Las Americas Outlet, Otay Mesa, I-5, I-805",
  },
];

const REVIEWS = [
  { name: "Carlos M.", date: "Hace 2 semanas", text: "Se me descompuso el carro en Chula Vista y llegaron en menos de 20 minutos. Muy profesionales. Totalmente recomendado.", stars: 5, area: "Chula Vista" },
  { name: "María G.", date: "Hace 1 mes", text: "Mi carro se descompuso en la I-5 cerca de National City de noche. CloseBy llegó rapidísimo. Muy amables y hablaban español.", stars: 5, area: "National City" },
  { name: "Roberto L.", date: "Hace 3 semanas", text: "Me quedé sin batería en el estacionamiento de Plaza Bonita. Me arrancaron el carro en minutos. Precio justo y servicio rápido.", stars: 5, area: "National City" },
  { name: "Ana P.", date: "Hace 1 mes", text: "Dejé las llaves adentro del carro en Logan Heights. Llegaron rápido y abrieron el carro sin dañarlo. Excelente servicio!", stars: 5, area: "Logan Heights" },
  { name: "Jorge R.", date: "Hace 2 meses", text: "Los llamé por WhatsApp desde Spring Valley y respondieron de inmediato. La grúa llegó en 15 minutos. Muy profesional todo.", stars: 5, area: "Spring Valley" },
  { name: "Patricia S.", date: "Hace 1 semana", text: "Se ponchó mi llanta cerca de San Ysidro y vinieron a cambiarla. Rápidos, amables y buen precio. Los recomiendo mucho.", stars: 5, area: "San Ysidro" },
  { name: "Miguel D.", date: "Hace 3 semanas", text: "Necesitaba grúa en Otay Ranch. Fueron muy cuidadosos con mi carro. Servicio de primera en Chula Vista.", stars: 5, area: "Chula Vista" },
  { name: "Laura V.", date: "Hace 2 meses", text: "Me quedé sin gasolina cerca de National City. Me trajeron gasolina en 20 minutos. Salvaron mi día!", stars: 5, area: "National City" },
];

const PREGUNTAS = [
  {
    pregunta: "¿En qué áreas de San Diego ofrecen servicio?",
    respuesta:
      "Servimos todo el sur de San Diego incluyendo Chula Vista, National City, Logan Heights, Barrio Logan, Spring Valley, San Ysidro, Otay Mesa, Lemon Grove, La Mesa, Bonita y todas las áreas circundantes. También cubrimos el resto del condado de San Diego.",
  },
  {
    pregunta: "¿Cuánto tiempo tardan en llegar a mi zona?",
    respuesta:
      "En National City y Logan Heights nuestro tiempo de respuesta es de 10 a 15 minutos. En Chula Vista y Spring Valley de 15 a 20 minutos. En San Ysidro y Otay Mesa de 15 a 25 minutos. Los tiempos pueden variar según el tráfico.",
  },
  {
    pregunta: "¿Trabajan de noche y fines de semana?",
    respuesta:
      "Sí, estamos disponibles las 24 horas del día, los 7 días de la semana en todas nuestras zonas de servicio. No importa si es de madrugada, fin de semana o día festivo.",
  },
  {
    pregunta: "¿Puedo comunicarme en español?",
    respuesta:
      "Sí, nuestro equipo habla español. Puedes llamarnos o escribirnos por WhatsApp y te atenderemos en tu idioma sin problema.",
  },
  {
    pregunta: "¿Cuánto cuesta el servicio de grúa?",
    respuesta:
      "El servicio de grúa comienza desde $95. El precio final depende de la distancia y el tipo de vehículo. Siempre te damos el precio exacto antes de llegar — sin sorpresas.",
  },
  {
    pregunta: "¿Qué formas de pago aceptan?",
    respuesta:
      "Aceptamos efectivo, tarjetas de crédito y débito (Visa, Mastercard, American Express), y también pagos por Zelle y Venmo.",
  },
];

const WHATSAPP_SVG = (
  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function LugaresPage() {
  return (
    <main className="bg-slate-950 text-white" lang="es">

      {/* ══════════════════════════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[75vh] flex items-center justify-start overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/grua-san-diego.webp"
            alt="CloseBy Towing — servicio de grúa en el sur de San Diego"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/20 to-transparent" />
        </div>

        <div className="relative z-10 w-full mx-auto max-w-[1800px] px-4 sm:px-6 pt-32 pb-20">
          <div className="max-w-xl lg:max-w-2xl lg:ml-14">
            <div className="flex justify-start mb-8">
              <div className="inline-flex items-center gap-2.5 bg-[#25D366]/15 border border-[#25D366]/40 rounded-full px-5 py-2.5">
                <span className="w-2.5 h-2.5 bg-[#25D366] rounded-full animate-pulse" />
                <span className="text-[#25D366] text-sm font-bold tracking-wide">Disponible Ahora &mdash; Hablamos Espa&ntilde;ol</span>
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-5 leading-[0.95] text-left">
              <span className="text-white">Gr&uacute;as en tu </span>
              <span className="text-amber-400">Vecindario</span>
            </h1>

            <p className="text-xl sm:text-2xl font-bold text-amber-300/90 mb-6 tracking-wide text-left">
              Chula Vista &bull; National City &bull; Logan Heights &bull; Spring Valley &bull; San Ysidro
            </p>

            <p className="text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed text-left">
              Somos de aqu&iacute; y conocemos cada calle. Servicio de gr&uacute;a y asistencia vial 24/7 en el sur de San Diego. Llegamos en 10-25 minutos.
            </p>

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
                WhatsApp
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
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          QUICK NAV — Jump to your neighborhood
      ══════════════════════════════════════════════════════════════ */}
      <section className="bg-[#1e1e4a] py-8">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-slate-400 text-sm font-bold uppercase tracking-widest mb-5">
            Encuentra tu vecindario
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {VECINDARIOS.map((v) => (
              <a
                key={v.slug}
                href={`#${v.slug}`}
                className="inline-flex items-center gap-2 bg-slate-800/60 border border-slate-700/50 hover:border-amber-400/50 hover:bg-slate-800 text-white font-bold px-5 py-3 rounded-xl transition-all"
              >
                <svg className="w-4 h-4 text-amber-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {v.nombre}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          LO QUE DICEN NUESTROS CLIENTES — Scrolling Reviews
      ══════════════════════════════════════════════════════════════ */}
      <section className="bg-[#1e1e4a] pt-6 pb-8 lg:pb-10 overflow-hidden">
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
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex gap-1">
                      {Array.from({ length: review.stars }).map((_, s) => (
                        <svg key={s} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs font-bold bg-amber-400/15 text-amber-300 px-2.5 py-0.5 rounded-full">
                      {review.area}
                    </span>
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
          INDIVIDUAL NEIGHBORHOOD SECTIONS
      ══════════════════════════════════════════════════════════════ */}
      {VECINDARIOS.map((barrio, index) => (
        <section
          key={barrio.slug}
          id={barrio.slug}
          className={`${index % 2 === 0 ? "bg-slate-950" : "bg-slate-900"} py-20 lg:py-28 scroll-mt-20`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left — Info */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <svg className="w-6 h-6 text-amber-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs font-bold bg-amber-400/15 text-amber-300 px-3 py-1 rounded-full uppercase tracking-wider">
                    Tiempo de llegada: {barrio.tiempo}
                  </span>
                </div>

                <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
                  Gr&uacute;as en <span className="text-amber-400">{barrio.nombre}</span>
                </h2>

                <p className="text-lg text-slate-300 leading-relaxed mb-4">
                  {barrio.descripcion}
                </p>

                <p className="text-slate-400 leading-relaxed mb-8">
                  {barrio.detalle}
                </p>

                {/* Reference streets */}
                <div className="flex items-start gap-3 mb-8 bg-slate-800/40 border border-slate-700/30 rounded-xl px-5 py-4">
                  <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                  </svg>
                  <div>
                    <p className="text-sm font-bold text-white mb-1">Zonas de cobertura</p>
                    <p className="text-sm text-slate-400">{barrio.referencia}</p>
                  </div>
                </div>

                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(`Hola, necesito ayuda en ${barrio.nombre}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5b] text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/40 hover:scale-[1.02] justify-center"
                  >
                    {WHATSAPP_SVG}
                    WhatsApp
                  </a>
                  <a
                    href={`tel:${CONTACT.phoneRaw}`}
                    className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-300 text-slate-900 px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-lg shadow-amber-400/20 hover:shadow-amber-400/40 hover:scale-[1.02] justify-center"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    Llamar Ahora
                  </a>
                </div>
              </div>

              {/* Right — Services available */}
              <div className="bg-slate-800/40 border border-slate-700/40 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">
                  Servicios disponibles en {barrio.nombre}
                </h3>
                <div className="space-y-4">
                  {barrio.servicios.map((servicio) => (
                    <div key={servicio} className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-amber-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <span className="text-white font-medium">{servicio}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-slate-700/40">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-amber-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-bold">Tiempo de respuesta</p>
                      <p className="text-amber-400 font-bold text-lg">{barrio.tiempo}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-amber-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-bold">Gr&uacute;a desde</p>
                      <p className="text-amber-400 font-bold text-lg">$95</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ══════════════════════════════════════════════════════════════
          PHOTO SECTION
      ══════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="relative aspect-[21/9] rounded-3xl overflow-hidden">
            <Image
              src="/images/spanish-photo.webp"
              alt="CloseBy Towing — servicio profesional de grúa en el sur de San Diego"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
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
              &iquest;Necesitas <span className="text-amber-400">Ayuda</span> Ahora?
            </h2>
            <p className="text-slate-400 text-lg mb-6 max-w-xl mx-auto">
              No te quedes varado. Ll&aacute;manos o escr&iacute;benos por WhatsApp y llegamos en minutos a tu vecindario.
            </p>

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
                {WHATSAPP_SVG}
                WhatsApp
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
            description:
              "Servicio de grúa y asistencia vial en Chula Vista, National City, Logan Heights, Spring Valley y San Ysidro. Disponible 24/7. Hablamos español.",
            url: "https://www.closebytowing.com/lugares",
            telephone: CONTACT.phone,
            areaServed: VECINDARIOS.map((v) => ({
              "@type": "City",
              name: v.nombre,
            })),
            availableLanguage: ["English", "Spanish"],
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
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
