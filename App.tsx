
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageCircle,
  Clock,
  FileText,
  ShieldCheck,
  ArrowRight,
  LayoutDashboard,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Zap,
  Users,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail
} from 'lucide-react';

// --- Animation Variants ---

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  },
  viewport: { once: true, margin: "-100px" }
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
  viewport: { once: true }
};

const textFade = {
  initial: { opacity: 0, x: -20 },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
  viewport: { once: true }
};

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center">
        <img src="/assets/logo.png" alt="ASEGO Logo" className="h-10 w-auto" />
      </div>
      <div className="hidden md:flex items-center gap-8 text-asego-grey font-medium">
        <a href="#problema" className="hover:text-asego-blue transition-colors">Problema</a>
        <a href="#solucion" className="hover:text-asego-blue transition-colors">Solución</a>
        <a href="#beneficios" className="hover:text-asego-blue transition-colors">Beneficios</a>
        <a href="#pricing" className="hover:text-asego-blue transition-colors">Precios</a>
        <a
          href="tel:3815709287"
          className="bg-asego-blue text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20"
        >
          Quiero ASEGO
        </a>
      </div>
    </div>
  </nav>
);

const ChatSimulation = () => {
  const messages = [
    { type: 'user', text: 'Hola, ¿me pasas la póliza de mi auto?' },
    { type: 'asego', text: '¡Hola Juan! Claro, acá tenés la póliza vigente para tu patente AF-123-JK.' },
    { type: 'file', text: 'Poliza_Vigente_AF123JK.pdf', size: '1.2 MB' },
    { type: 'user', text: '¿En qué estado está mi denuncia del lunes?' },
    { type: 'asego', text: 'Tu siniestro #9821 está en estado: "En gestión". Ya fue enviado al perito.' },
  ];

  const [visibleMessages, setVisibleMessages] = useState<number>(0);

  useEffect(() => {
    if (visibleMessages < messages.length) {
      const timer = setTimeout(() => {
        setVisibleMessages(prev => prev + 1);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [visibleMessages]);

  return (
    <div className="w-full max-w-md bg-white rounded-[2.5rem] p-4 shadow-2xl border-[10px] border-asego-dark relative overflow-hidden h-[500px] flex flex-col">
      <div className="bg-asego-dark -mx-4 -mt-4 p-4 mb-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-asego-blue flex items-center justify-center text-white font-bold">A</div>
        <div>
          <p className="text-white font-bold text-sm">ASEGO Asistente</p>
          <p className="text-asego-green text-xs font-medium">En línea</p>
        </div>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto px-2 py-4 no-scrollbar">
        <AnimatePresence>
          {messages.slice(0, visibleMessages).map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[80%] rounded-2xl p-3 text-sm ${msg.type === 'user'
                ? 'bg-asego-blue text-white rounded-tr-none'
                : msg.type === 'file'
                  ? 'bg-slate-100 text-asego-dark border border-slate-200 flex items-center gap-3'
                  : 'bg-slate-100 text-asego-dark rounded-tl-none'
                }`}>
                {msg.type === 'file' && <FileText className="text-asego-blue shrink-0" size={18} />}
                <div>
                  <p>{msg.text}</p>
                  {msg.size && <p className="text-[10px] opacity-60 mt-0.5">{msg.size}</p>}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="bg-slate-50 border-t border-slate-100 -mx-4 -mb-4 p-4 flex gap-2">
        <div className="flex-1 h-10 bg-white border border-slate-200 rounded-full"></div>
        <div className="w-10 h-10 bg-asego-blue rounded-full flex items-center justify-center">
          <MessageCircle className="text-white" size={18} />
        </div>
      </div>
    </div>
  );
};

const SectionHeading = ({ title, subtitle, centered = true }: { title: string; subtitle?: string; centered?: boolean }) => (
  <motion.div
    variants={staggerContainer}
    initial="initial"
    whileInView="whileInView"
    viewport={{ once: true, margin: "-100px" }}
    className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}
  >
    <motion.h2
      variants={itemVariants}
      className="text-4xl md:text-5xl font-bold font-display text-asego-dark mb-4"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p
        variants={itemVariants}
        className="text-lg text-asego-grey max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
  </motion.div>
);

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = "" }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ y: -10, transition: { duration: 0.3 } }}
    className={`bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-300 ${className}`}
  >
    {children}
  </motion.div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-asego-blue/10 selection:text-asego-blue relative">
      {/* Background Decor */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-white">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]">
        </div>
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-blue-50 text-asego-blue px-4 py-2 rounded-full font-semibold text-sm mb-6 border border-blue-100 self-start"
            >
              <Zap size={16} fill="currentColor" />
              Gestión moderna para productores
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-6xl md:text-7xl font-bold font-display text-asego-dark leading-[1.1] mb-8"
            >
              Gestioná tus seguros por WhatsApp <span className="text-asego-blue">sin perder tiempo.</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-asego-grey leading-relaxed mb-10 max-w-lg"
            >
              El asistente digital que responde a tus clientes, envía pólizas y avisa vencimientos de forma automática.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="tel:3815709287"
                className="bg-asego-blue text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-500/20"
              >
                Ver cómo funciona <ArrowRight size={20} />
              </a>
              <a
                href="tel:3815709287"
                className="bg-white text-asego-dark border border-slate-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all text-center"
              >
                Quiero ASEGO
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-asego-green/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-asego-blue/10 rounded-full blur-3xl -z-10"></div>

            <div className="relative z-10">
              <div className="bg-asego-light border border-slate-200 rounded-[2rem] p-6 shadow-2xl space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-asego-green"></div>
                  </div>
                  <div className="px-3 py-1 bg-white rounded-lg border border-slate-200 text-xs font-semibold text-asego-grey">
                    Panel de Gestión
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                    <p className="text-xs text-asego-grey mb-1">Vencimientos Hoy</p>
                    <p className="text-2xl font-bold font-display text-asego-blue">14</p>
                  </div>
                  <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                    <p className="text-xs text-asego-grey mb-1">Siniestros Activos</p>
                    <p className="text-2xl font-bold font-display text-asego-green">08</p>
                  </div>
                </div>

                <div className="bg-asego-dark rounded-2xl p-4 text-white">
                  <div className="flex justify-between items-center mb-4">
                    <p className="font-semibold text-sm">Actividad Reciente</p>
                    <TrendingUp size={16} className="text-asego-green" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-xs opacity-80">
                      <div className="w-1.5 h-1.5 rounded-full bg-asego-green"></div>
                      <p>Póliza enviada a Juan Pérez</p>
                    </div>
                    <div className="flex items-center gap-3 text-xs opacity-80">
                      <div className="w-1.5 h-1.5 rounded-full bg-asego-green"></div>
                      <p>Recordatorio de cuota enviado</p>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 md:-right-12 bg-white p-5 rounded-2xl border border-slate-100 shadow-2xl flex items-center gap-4 z-20"
              >
                <div className="w-12 h-12 bg-asego-blue/10 rounded-xl flex items-center justify-center text-asego-blue">
                  <MessageCircle fill="currentColor" className="opacity-20" />
                </div>
                <div>
                  <p className="text-xs text-asego-grey">Respuesta automática</p>
                  <p className="font-bold text-asego-dark">99.2% Efectividad</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problema" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            title="El caos diario de un productor"
            subtitle="Sabemos lo que es estar tapado de tareas operativas que no te dejan vender."
          />
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: <MessageCircle className="text-red-500" />, title: "WhatsApp explotado", desc: "Cientos de mensajes pidiendo cosas básicas todo el día." },
              { icon: <Clock className="text-red-500" />, title: "Vencimientos olvidados", desc: "Pólizas que se caen por falta de un aviso a tiempo." },
              { icon: <FileText className="text-red-500" />, title: "PDFs perdidos", desc: "Horas buscando archivos en el mail o en carpetas." },
              { icon: <AlertCircle className="text-red-500" />, title: "Seguimiento manual", desc: "Llamadas eternas para saber el estado de un siniestro." }
            ].map((p, i) => (
              <Card key={i} className="group hover:border-red-100">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-50 transition-colors">
                  {p.icon}
                </div>
                <h3 className="text-xl font-bold font-display mb-3 text-asego-dark">{p.title}</h3>
                <p className="text-asego-grey leading-relaxed">{p.desc}</p>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solucion" className="py-24 bg-asego-light border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl font-bold font-display text-asego-dark mb-6"
              >
                ASEGO: Tu asistente digital 24/7
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-xl text-asego-grey leading-relaxed mb-8"
              >
                ASEGO es un asistente que responde por WhatsApp, avisa vencimientos, envía pólizas y mantiene el seguimiento de siniestros de forma automática.
              </motion.p>
              <div className="space-y-4">
                {[
                  "No requiere que aprendas nada nuevo.",
                  "Trabaja mientras dormís.",
                  "Mantiene a tus clientes informados.",
                  "Se integra con tu forma de trabajo actual."
                ].map((text, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="text-asego-green" size={20} />
                    <span className="font-medium text-asego-dark">{text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex justify-center"
            >
              <img
                src="/assets/mockup.webp"
                alt="ASEGO Mockup"
                className="w-full max-w-[450px] drop-shadow-2xl animate-float"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section - LEGIBILITY FIX: Black Text & White Backgrounds */}
      <section id="beneficios" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Impacto real en tu negocio" />
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            <Card className="bg-white text-black border-2 border-asego-blue/20 p-10 shadow-xl shadow-blue-500/5">
              <Users className="mb-6 text-asego-blue" size={40} />
              <h3 className="text-3xl font-bold font-display mb-6 text-black">Para Productores</h3>
              <ul className="space-y-6">
                {[
                  "Reducí el 80% de los mensajes operativos por WhatsApp.",
                  "Asegurá el 100% de tus renovaciones con avisos automáticos.",
                  "Recuperá horas de tu día para enfocarte en vender y crecer."
                ].map((text, i) => (
                  <motion.li key={i} variants={itemVariants} className="flex gap-4">
                    <div className="w-7 h-7 rounded-full bg-asego-blue flex items-center justify-center shrink-0 text-white font-bold">{i + 1}</div>
                    <p className="text-lg font-bold leading-snug">{text}</p>
                  </motion.li>
                ))}
              </ul>
            </Card>

            <Card className="bg-white text-black border-2 border-asego-dark/20 p-10 shadow-xl shadow-slate-900/5">
              <LayoutDashboard className="mb-6 text-asego-dark" size={40} />
              <h3 className="text-3xl font-bold font-display mb-6 text-black">Para Brokers</h3>
              <ul className="space-y-6">
                {[
                  "Centralizá y ordená la atención de toda tu red de productores.",
                  "Bajá costos operativos eliminando tareas manuales repetitivas.",
                  "Escalá tu volumen de pólizas sin necesidad de contratar más gente."
                ].map((text, i) => (
                  <motion.li key={i} variants={itemVariants} className="flex gap-4">
                    <div className="w-7 h-7 rounded-full bg-asego-dark flex items-center justify-center shrink-0 text-white font-bold">{i + 1}</div>
                    <p className="text-lg font-bold leading-snug">{text}</p>
                  </motion.li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-asego-light">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Todo lo que hace por vos" subtitle="Funcionalidades concretas diseñadas para el mercado asegurador." />
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { title: "Avisos de vencimiento", desc: "ASEGO contacta al cliente días antes de que venza la póliza o la cuota." },
              { title: "Envío de documentos", desc: "Tus clientes pueden pedir su póliza o certificado de cobertura en segundos." },
              { title: "Gestión de Siniestros", desc: "Informa sobre cambios de estado y peritajes automáticamente." },
              { title: "Atención 24/7", desc: "No importa si son las 3 AM o domingo, tus clientes siempre tienen respuesta." },
              { title: "Plataforma Web", desc: "Un panel simple para que veas todo lo que pasa en tiempo real." },
              { title: "Historial de Chat", desc: "Accedé a todas las conversaciones y pedidos desde un solo lugar." }
            ].map((f, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm"
              >
                <div className="w-8 h-8 rounded-full bg-asego-blue flex items-center justify-center text-white mb-6">
                  <CheckCircle2 size={18} />
                </div>
                <h4 className="text-xl font-bold font-display text-asego-dark mb-3">{f.title}</h4>
                <p className="text-asego-grey leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-white relative overflow-hidden">
        {/* Decorative elements similar to reference */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-50">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-asego-blue/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold font-display text-asego-dark mb-6">
              Inversión mínima,<br />
              <span className="text-asego-blue">Gran impulso a tu productividad</span>
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-asego-grey font-medium mb-12">
              <span className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-asego-blue" /> Sin cuota de ingreso
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-asego-blue" /> Todas las funciones incluidas
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-2">
                <Zap size={16} className="text-asego-blue" /> Soporte prioritario
              </span>
            </div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid lg:grid-cols-3 gap-8 items-stretch"
          >
            {/* Plan Base */}
            <Card className="flex flex-col h-full bg-white border border-slate-100 hover:shadow-2xl transition-all duration-500">
              <div className="mb-8">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6">
                  <ShieldCheck className="text-asego-dark" size={24} />
                </div>
                <h3 className="text-2xl font-bold font-display text-asego-dark">Plan Base</h3>
                <p className="text-asego-grey text-sm mt-1">Para carteras iniciales</p>
              </div>
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-asego-dark">$59.999</span>
                  <span className="text-asego-grey text-sm font-medium">/mes</span>
                </div>
              </div>
              <a
                href="tel:3815709287"
                className="w-full py-4 px-6 rounded-xl border border-slate-200 font-bold text-asego-dark hover:bg-slate-50 transition-all text-center mb-10"
              >
                Comenzar ahora
              </a>
              <div className="space-y-4 flex-1">
                {[
                  "3 pólizas por cliente",
                  "3000 mensajes mensuales",
                  "Landing Básica"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-asego-blue shrink-0" size={18} />
                    <span className="text-asego-dark font-medium underline decoration-slate-200 underline-offset-4">{item}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Plan Intermedio */}
            <Card className="flex flex-col h-full bg-asego-dark text-white border-none shadow-2xl lg:scale-110 z-10 relative overflow-hidden p-1">
              <div className="bg-[#1e293b] p-8 rounded-[2.2rem] h-full flex flex-col relative overflow-hidden">
                {/* Mesh background effect for the dark card */}
                <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
                  <div className="absolute top-[-20%] right-[-20%] w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,#0055D4_0%,transparent_50%)]"></div>
                </div>

                {/* Subtle Grid for dark card */}
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                <div className="absolute top-0 right-0 bg-asego-green px-4 py-1.5 rounded-bl-xl text-[10px] font-bold uppercase tracking-wider text-asego-dark z-20">
                  MÁS POPULAR
                </div>

                <div className="mb-8 relative z-10">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                    <Zap className="text-asego-green" size={24} fill="currentColor" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-white">Plan Intermedio</h3>
                  <p className="text-white/60 text-sm mt-1">Ideal para productores en crecimiento</p>
                </div>

                <div className="mb-8 relative z-10">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-white">$109.000</span>
                    <span className="text-white/60 text-sm font-medium">/mes</span>
                  </div>
                </div>

                <a
                  href="tel:3815709287"
                  className="w-full py-4 px-6 rounded-xl bg-asego-blue text-white font-bold hover:bg-blue-600 transition-all text-center mb-10 shadow-xl shadow-blue-500/20 relative z-10"
                >
                  Obtener Plan Intermedio
                </a>

                <div className="space-y-4 flex-1 relative z-10">
                  {[
                    "10 pólizas por cliente",
                    "7500 mensajes mensuales",
                    "Landing Premium"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="text-asego-green shrink-0" size={18} />
                      <span className="text-white/90 font-medium underline decoration-white/10 underline-offset-4">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Plan Pro */}
            <Card className="flex flex-col h-full bg-white border border-slate-100 hover:shadow-2xl transition-all duration-500">
              <div className="mb-8">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="text-asego-dark" size={24} />
                </div>
                <h3 className="text-2xl font-bold font-display text-asego-dark">Plan Pro</h3>
                <p className="text-asego-grey text-sm mt-1">Potencial ilimitado para brokers</p>
              </div>
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-asego-dark">$190.000</span>
                  <span className="text-asego-grey text-sm font-medium">/mes</span>
                </div>
              </div>
              <a
                href="tel:3815709287"
                className="w-full py-4 px-6 rounded-xl border border-slate-200 font-bold text-asego-dark hover:bg-slate-50 transition-all text-center mb-10"
              >
                Contactar para Pro
              </a>
              <div className="space-y-4 flex-1">
                {[
                  "Infinitas pólizas por cliente",
                  "20000 mensajes mensuales",
                  "Landing Premium + Bot",
                  "Recordatorios (350 mensajes/mes acumulables)"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-asego-blue shrink-0 mt-1" size={18} />
                    <span className="text-asego-dark font-medium underline decoration-slate-200 underline-offset-4 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          <div className="mt-20 text-center">
            <p className="text-sm text-asego-grey mb-4">Precios finales en Pesos Argentinos. Pueden aplicar impuestos locales.</p>
            <div className="flex items-center justify-center gap-2 text-asego-grey">
              <ShieldCheck size={14} />
              <span className="text-xs">Pago seguro y gestión inmediata. Sin contratos de permanencia.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Differential Section */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <ShieldCheck className="mx-auto mb-8 text-asego-green" size={64} />
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold font-display text-asego-dark mb-6"
            >
              ASEGO no te reemplaza, <span className="text-asego-blue">te potencia.</span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-2xl text-asego-grey italic mb-8"
            >
              "ASEGO trabaja en segundo plano para que vos te preocupe por vender."
            </motion.p>
            <motion.div
              variants={staggerContainer}
              className="flex flex-wrap justify-center gap-6"
            >
              {[
                "Sin curvas de aprendizaje",
                "Instalación inmediata",
                "Soporte personalizado"
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-center gap-2 text-asego-dark font-semibold"
                >
                  <CheckCircle2 className="text-asego-green" size={20} />
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA - Redesigned like reference */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-asego-blue via-blue-600 to-asego-green p-12 md:p-20 text-center"
          >
            {/* Animated background blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute -top-1/2 -left-1/4 w-[100%] h-[150%] bg-white/10 blur-[120px] rounded-full animate-pulse"></div>
              <div className="absolute -bottom-1/2 -right-1/4 w-[100%] h-[150%] bg-asego-dark/10 blur-[120px] rounded-full"></div>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="relative z-10 max-w-4xl mx-auto"
            >
              <motion.h2 variants={itemVariants} className="text-5xl md:text-6xl font-bold font-display text-white mb-8 leading-[1.1]">
                Dejá que la IA se encargue del trabajo pesado de tu oficina
              </motion.h2>
              <motion.p variants={itemVariants} className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
                Desde avisos de vencimientos hasta envío de pólizas y atención al cliente. Automatizá las tareas que tu equipo ya no debería hacer manualmente.
              </motion.p>
              <motion.div variants={itemVariants}>
                <a
                  href="tel:3815709287"
                  className="inline-flex items-center gap-2 bg-white text-asego-dark px-10 py-5 rounded-full font-bold text-xl hover:bg-slate-50 transition-all shadow-2xl group"
                >
                  Ver ASEGO en acción <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer - Simplified */}
      <footer className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-asego-grey text-sm font-medium">
            Desarrollado por <span className="text-asego-dark font-bold">Koi Studio</span> gracias a la tecnología de <span className="text-asego-blue font-bold">Notgen</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
