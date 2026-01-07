
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
  Users
} from 'lucide-react';

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-asego-blue rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xl leading-none">A</span>
        </div>
        <span className="text-2xl font-bold font-display tracking-tight text-asego-dark">ASEGO</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-asego-grey font-medium">
        <a href="#problema" className="hover:text-asego-blue transition-colors">Problema</a>
        <a href="#solucion" className="hover:text-asego-blue transition-colors">Solución</a>
        <a href="#beneficios" className="hover:text-asego-blue transition-colors">Beneficios</a>
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
              <div className={`max-w-[80%] rounded-2xl p-3 text-sm ${
                msg.type === 'user' 
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
  <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
    <h2 className="text-4xl md:text-5xl font-bold font-display text-asego-dark mb-4">{title}</h2>
    {subtitle && <p className="text-lg text-asego-grey max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = "" }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 ${className}`}
  >
    {children}
  </motion.div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-asego-blue/10 selection:text-asego-blue">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-50 text-asego-blue px-4 py-2 rounded-full font-semibold text-sm mb-6 border border-blue-100">
              <Zap size={16} fill="currentColor" />
              Gestión moderna para productores
            </div>
            <h1 className="text-6xl md:text-7xl font-bold font-display text-asego-dark leading-[1.1] mb-8">
              Gestioná tus seguros por WhatsApp <span className="text-asego-blue">sin perder tiempo.</span>
            </h1>
            <p className="text-xl text-asego-grey leading-relaxed mb-10 max-w-lg">
              El asistente digital que responde a tus clientes, envía pólizas y avisa vencimientos de forma automática.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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
            </div>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solucion" className="py-24 bg-asego-light border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold font-display text-asego-dark mb-6">
                ASEGO: Tu asistente digital 24/7
              </h2>
              <p className="text-xl text-asego-grey leading-relaxed mb-8">
                ASEGO es un asistente que responde por WhatsApp, avisa vencimientos, envía pólizas y mantiene el seguimiento de siniestros de forma automática.
              </p>
              <div className="space-y-4">
                {[
                  "No requiere que aprendas nada nuevo.",
                  "Trabaja mientras dormís.",
                  "Mantiene a tus clientes informados.",
                  "Se integra con tu forma de trabajo actual."
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-asego-green" size={20} />
                    <span className="font-medium text-asego-dark">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <ChatSimulation />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - LEGIBILITY FIX: Black Text & White Backgrounds */}
      <section id="beneficios" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Impacto real en tu negocio" />
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white text-black border-2 border-asego-blue/20 p-10 shadow-xl shadow-blue-500/5">
              <Users className="mb-6 text-asego-blue" size={40} />
              <h3 className="text-3xl font-bold font-display mb-6 text-black">Para Productores</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-7 h-7 rounded-full bg-asego-blue flex items-center justify-center shrink-0 text-white font-bold">1</div>
                  <p className="text-lg font-bold leading-snug">Reducí el 80% de los mensajes operativos por WhatsApp.</p>
                </li>
                <li className="flex gap-4">
                  <div className="w-7 h-7 rounded-full bg-asego-blue flex items-center justify-center shrink-0 text-white font-bold">2</div>
                  <p className="text-lg font-bold leading-snug">Asegurá el 100% de tus renovaciones con avisos automáticos.</p>
                </li>
                <li className="flex gap-4">
                  <div className="w-7 h-7 rounded-full bg-asego-blue flex items-center justify-center shrink-0 text-white font-bold">3</div>
                  <p className="text-lg font-bold leading-snug">Recuperá horas de tu día para enfocarte en vender y crecer.</p>
                </li>
              </ul>
            </Card>
            
            <Card className="bg-white text-black border-2 border-asego-dark/20 p-10 shadow-xl shadow-slate-900/5">
              <LayoutDashboard className="mb-6 text-asego-dark" size={40} />
              <h3 className="text-3xl font-bold font-display mb-6 text-black">Para Brokers</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-7 h-7 rounded-full bg-asego-dark flex items-center justify-center shrink-0 text-white font-bold">1</div>
                  <p className="text-lg font-bold leading-snug">Centralizá y ordená la atención de toda tu red de productores.</p>
                </li>
                <li className="flex gap-4">
                  <div className="w-7 h-7 rounded-full bg-asego-dark flex items-center justify-center shrink-0 text-white font-bold">2</div>
                  <p className="text-lg font-bold leading-snug">Bajá costos operativos eliminando tareas manuales repetitivas.</p>
                </li>
                <li className="flex gap-4">
                  <div className="w-7 h-7 rounded-full bg-asego-dark flex items-center justify-center shrink-0 text-white font-bold">3</div>
                  <p className="text-lg font-bold leading-snug">Escalá tu volumen de pólizas sin necesidad de contratar más gente.</p>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-asego-light">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Todo lo que hace por vos" subtitle="Funcionalidades concretas diseñadas para el mercado asegurador." />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Avisos de vencimiento", desc: "ASEGO contacta al cliente días antes de que venza la póliza o la cuota." },
              { title: "Envío de documentos", desc: "Tus clientes pueden pedir su póliza o certificado de cobertura en segundos." },
              { title: "Gestión de Siniestros", desc: "Informa sobre cambios de estado y peritajes automáticamente." },
              { title: "Atención 24/7", desc: "No importa si son las 3 AM o domingo, tus clientes siempre tienen respuesta." },
              { title: "Plataforma Web", desc: "Un panel simple para que veas todo lo que pasa en tiempo real." },
              { title: "Historial de Chat", desc: "Accedé a todas las conversaciones y pedidos desde un solo lugar." }
            ].map((f, i) => (
              <div key={i} className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-asego-blue flex items-center justify-center text-white mb-6">
                  <CheckCircle2 size={18} />
                </div>
                <h4 className="text-xl font-bold font-display text-asego-dark mb-3">{f.title}</h4>
                <p className="text-asego-grey leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differential Section */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <ShieldCheck className="mx-auto mb-8 text-asego-green" size={64} />
            <h2 className="text-4xl md:text-5xl font-bold font-display text-asego-dark mb-6">
              ASEGO no te reemplaza, <span className="text-asego-blue">te potencia.</span>
            </h2>
            <p className="text-2xl text-asego-grey italic mb-8">
              "ASEGO trabaja en segundo plano para que vos te preocupe por vender."
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 text-asego-dark font-semibold">
                <CheckCircle2 className="text-asego-green" size={20} />
                Sin curvas de aprendizaje
              </div>
              <div className="flex items-center gap-2 text-asego-dark font-semibold">
                <CheckCircle2 className="text-asego-green" size={20} />
                Instalación inmediata
              </div>
              <div className="flex items-center gap-2 text-asego-dark font-semibold">
                <CheckCircle2 className="text-asego-green" size={20} />
                Soporte personalizado
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA - ENSURE tel link */}
      <section className="py-24 bg-asego-blue relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white opacity-[0.03] -skew-x-12 translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center text-white">
          <h2 className="text-5xl md:text-6xl font-bold font-display mb-8">
            Dejá de perder tiempo en tareas repetitivas.
          </h2>
          <p className="text-xl opacity-80 mb-12 max-w-2xl mx-auto">
            Sumate a los productores que ya modernizaron su gestión con ASEGO.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:3815709287"
              className="bg-white text-asego-blue px-10 py-5 rounded-full font-bold text-xl hover:bg-slate-50 transition-all shadow-2xl flex items-center justify-center"
            >
              Ver ASEGO en acción
            </a>
            <a 
              href="tel:3815709287"
              className="bg-blue-600/40 text-white border border-white/20 px-10 py-5 rounded-full font-bold text-xl hover:bg-white/10 transition-all flex items-center justify-center"
            >
              Hablemos hoy
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-asego-blue rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl leading-none">A</span>
            </div>
            <span className="text-2xl font-bold font-display tracking-tight text-asego-dark">ASEGO</span>
          </div>
          <p className="text-asego-grey text-sm">
            © {new Date().getFullYear()} ASEGO. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-asego-grey text-sm font-medium">
            <a href="#" className="hover:text-asego-blue">Privacidad</a>
            <a href="#" className="hover:text-asego-blue">Términos</a>
            <a href="tel:3815709287" className="hover:text-asego-blue">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
