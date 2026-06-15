"use client";

import { useState } from "react";
import { CONTACT } from "@/lib/constants";

const AREAS = [
  "Chula Vista",
  "National City",
  "Logan Heights",
  "Barrio Logan",
  "San Ysidro",
  "Spring Valley",
  "Downtown",
  "El Cajon",
  "La Mesa",
  "Coronado",
  "Mission Valley",
  "Pacific Beach",
];

const HORARIO = [
  { dia: "Lunes", horario: "24 horas" },
  { dia: "Martes", horario: "24 horas" },
  { dia: "Miércoles", horario: "24 horas" },
  { dia: "Jueves", horario: "24 horas" },
  { dia: "Viernes", horario: "24 horas" },
  { dia: "Sábado", horario: "24 horas" },
  { dia: "Domingo", horario: "24 horas" },
];

export default function ContactoPage() {
  const [form, setForm] = useState({ nombre: "", telefono: "", email: "", mensaje: "" });
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => setEnviado(false), 5000);
  };

  return (
    <main className="bg-slate-950 text-white" lang="es">

      {/* ══════════════════════════════════════════════════════════════
          HERO — Split design with gradient mesh
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e1e4a] via-slate-950 to-[#0f172a]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-400/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#25D366]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2.5 bg-[#25D366]/15 border border-[#25D366]/40 rounded-full px-5 py-2.5 mb-8">
              <span className="w-2.5 h-2.5 bg-[#25D366] rounded-full animate-pulse" />
              <span className="text-[#25D366] text-sm font-bold tracking-wide">Disponible Ahora &mdash; Hablamos Espa&ntilde;ol</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-[0.95]">
              <span className="text-white">Cont&aacute;ctanos</span>
            </h1>

            <p className="text-xl sm:text-2xl text-slate-300 mb-12 leading-relaxed">
              Estamos listos para ayudarte. Ll&aacute;manos, escr&iacute;benos por WhatsApp o env&iacute;anos un mensaje &mdash; respondemos de inmediato.
            </p>

            {/* ── 3 Contact cards ── */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {/* WhatsApp */}
              <a
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-[#25D366]/10 border-2 border-[#25D366]/30 hover:border-[#25D366] rounded-2xl p-8 transition-all hover:scale-[1.03] hover:shadow-xl hover:shadow-[#25D366]/10"
              >
                <div className="w-16 h-16 bg-[#25D366]/20 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-[#25D366]/30 transition-colors">
                  <svg className="w-8 h-8 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <p className="text-[#25D366] font-black text-xl mb-1">WhatsApp</p>
                <p className="text-slate-400 text-sm">Respuesta inmediata</p>
              </a>

              {/* Phone */}
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="group relative bg-amber-400/10 border-2 border-amber-400/30 hover:border-amber-400 rounded-2xl p-8 transition-all hover:scale-[1.03] hover:shadow-xl hover:shadow-amber-400/10"
              >
                <div className="w-16 h-16 bg-amber-400/20 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-amber-400/30 transition-colors">
                  <svg className="w-8 h-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <p className="text-amber-400 font-black text-xl mb-1">{CONTACT.phone}</p>
                <p className="text-slate-400 text-sm">Llamar ahora</p>
              </a>

              {/* Email */}
              <a
                href={`mailto:${CONTACT.email}`}
                className="group relative bg-sky-400/10 border-2 border-sky-400/30 hover:border-sky-400 rounded-2xl p-8 transition-all hover:scale-[1.03] hover:shadow-xl hover:shadow-sky-400/10"
              >
                <div className="w-16 h-16 bg-sky-400/20 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-sky-400/30 transition-colors">
                  <svg className="w-8 h-8 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <p className="text-sky-400 font-black text-xl mb-1">Email</p>
                <p className="text-slate-400 text-sm">{CONTACT.email}</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          FORM + INFO — Side by side on dark glass cards
      ══════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-950 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">

            {/* ── Contact form (3 cols) ── */}
            <div className="lg:col-span-3 bg-gradient-to-br from-slate-900 to-slate-900/60 border border-slate-700/50 rounded-3xl p-8 sm:p-10">
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
                Env&iacute;anos un <span className="text-amber-400">Mensaje</span>
              </h2>
              <p className="text-slate-400 mb-8">
                &iquest;Tienes una pregunta o quieres programar un servicio? Ll&eacute;nalo y te respondemos en menos de 24 horas.
              </p>

              {enviado && (
                <div className="mb-6 p-4 bg-[#25D366]/15 border border-[#25D366]/40 rounded-xl text-[#25D366] font-bold flex items-center gap-3">
                  <svg className="w-6 h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Gracias — te responderemos pronto.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-slate-300 mb-2">Nombre *</label>
                    <input
                      type="text"
                      required
                      value={form.nombre}
                      onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                      className="w-full px-5 py-4 bg-slate-800/70 border border-slate-700/60 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 transition-all"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-300 mb-2">Tel&eacute;fono *</label>
                    <input
                      type="tel"
                      required
                      value={form.telefono}
                      onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                      className="w-full px-5 py-4 bg-slate-800/70 border border-slate-700/60 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 transition-all"
                      placeholder="(858) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-2">Correo electr&oacute;nico</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-5 py-4 bg-slate-800/70 border border-slate-700/60 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 transition-all"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-2">Mensaje *</label>
                  <textarea
                    required
                    rows={4}
                    value={form.mensaje}
                    onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                    className="w-full px-5 py-4 bg-slate-800/70 border border-slate-700/60 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 transition-all resize-none"
                    placeholder="Describe lo que necesitas..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-400 hover:bg-amber-300 text-slate-900 px-8 py-5 rounded-xl font-black text-xl transition-all shadow-lg shadow-amber-400/20 hover:shadow-amber-400/40 hover:scale-[1.01]"
                >
                  Enviar Mensaje
                </button>

                <p className="text-slate-500 text-xs text-center">
                  Para emergencias, ll&aacute;manos directamente al {CONTACT.phone} o usa WhatsApp.
                </p>
              </form>
            </div>

            {/* ── Sidebar info (2 cols) ── */}
            <div className="lg:col-span-2 space-y-6">

              {/* Hours card */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-900/60 border border-slate-700/50 rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-amber-400/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-black text-white">Horario</h3>
                </div>

                <div className="space-y-0">
                  {HORARIO.map((h, i) => (
                    <div
                      key={h.dia}
                      className={`flex items-center justify-between py-3 ${i < HORARIO.length - 1 ? "border-b border-slate-800" : ""}`}
                    >
                      <span className="text-slate-300 font-medium">{h.dia}</span>
                      <span className="text-amber-400 font-bold text-sm bg-amber-400/10 px-3 py-1 rounded-full">{h.horario}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 bg-[#25D366]/10 border border-[#25D366]/30 rounded-xl px-5 py-4 flex items-center gap-3">
                  <span className="w-3 h-3 bg-[#25D366] rounded-full animate-pulse flex-shrink-0" />
                  <p className="text-[#25D366] text-sm font-bold">Abierto ahora &mdash; incluyendo feriados</p>
                </div>
              </div>

              {/* Quick facts card */}
              <div className="bg-gradient-to-br from-[#1e2a4a] to-[#162038] border border-slate-700/50 rounded-3xl p-8">
                <h3 className="text-xl font-black text-white mb-6">Por Qu&eacute; Elegirnos</h3>
                <div className="space-y-4">
                  {[
                    { text: "Respuesta en 15-25 minutos", icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" },
                    { text: "Precios transparentes, sin sorpresas", icon: "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                    { text: "Operadores que hablan español", icon: "M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" },
                    { text: "5.0 estrellas en Google", icon: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" },
                    { text: "Licenciados y asegurados", icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-amber-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                        </svg>
                      </div>
                      <span className="text-slate-300 text-sm font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SERVICE AREAS — Hexagonal-feel grid
      ══════════════════════════════════════════════════════════════ */}
      <section className="bg-[#1e1e4a] py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              &Aacute;reas que <span className="text-amber-400">Servimos</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Cubrimos todo el condado de San Diego. Estamos cerca de ti, sin importar d&oacute;nde est&eacute;s.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {AREAS.map((area) => (
              <div
                key={area}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 hover:border-amber-400/50 rounded-2xl px-5 py-5 text-center transition-all hover:bg-white/10"
              >
                <svg className="w-5 h-5 text-amber-400 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-white font-bold text-sm">{area}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-500 mt-8 text-sm">
            ...y todas las &aacute;reas circundantes del condado de San Diego.
          </p>

          {/* Mid-page CTA row */}
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5b] text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/40 hover:scale-[1.02]"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Escr&iacute;benos por WhatsApp
            </a>
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-300 text-slate-900 px-10 py-5 rounded-2xl font-bold text-xl transition-all shadow-lg shadow-amber-400/20 hover:shadow-amber-400/40 hover:scale-[1.02]"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Llamar: {CONTACT.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          CTA FINAL
      ══════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-950 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-[#1e2a4a] to-[#162038] border border-slate-700/50 rounded-3xl p-10 sm:p-16 text-center shadow-2xl">
            <div className="inline-flex items-center gap-2 bg-[#25D366]/15 border border-[#25D366]/30 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2.5 h-2.5 bg-[#25D366] rounded-full animate-pulse" />
              <span className="text-[#25D366] text-sm font-bold">Operadores Disponibles Ahora</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
              &iquest;Necesitas <span className="text-amber-400">Ayuda</span>?
            </h2>
            <p className="text-slate-400 text-lg mb-6 max-w-xl mx-auto">
              No te quedes varado. Ll&aacute;manos o escr&iacute;benos y llegamos en 15-25 minutos.
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
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
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
              "Contacto de CloseBy Towing en San Diego. Servicio de grúa y asistencia vial 24/7. Hablamos español. Llama o escríbenos por WhatsApp.",
            url: "https://www.closebytowing.com/contacto",
            telephone: CONTACT.phone,
            email: CONTACT.email,
            address: {
              "@type": "PostalAddress",
              addressLocality: "San Diego",
              addressRegion: "CA",
              postalCode: "92101",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "32.7157",
              longitude: "-117.1611",
            },
            areaServed: {
              "@type": "City",
              name: "San Diego",
              "@id": "https://www.wikidata.org/wiki/Q16552",
            },
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
            contactPoint: {
              "@type": "ContactPoint",
              telephone: CONTACT.phone,
              contactType: "customer service",
              availableLanguage: ["English", "Spanish"],
              areaServed: "US",
            },
          }),
        }}
      />
    </main>
  );
}
