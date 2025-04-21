// src/components/sections/Contact.tsx
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact = () => (
  <section
    id="contact"
    className="relative py-28 px-6 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white overflow-hidden"
  >
    {/* Fondos animados */}
    <div className="absolute inset-0 z-0">
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-[80%] h-[80%] bg-cyan-500/10 blur-[160px] animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[60%] h-[60%] bg-purple-400/10 blur-[100px] animate-pulse delay-500" />
    </div>

    <div className="relative z-10 container mx-auto max-w-4xl">
      <h2
        className="text-5xl font-bold text-center mb-16 animate-gradient-text"
        data-aos="fade-up"
      >
        Contáctame
      </h2>

      <form
        className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 shadow-xl space-y-8"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input label="Nombre" type="text" placeholder="Tu nombre" />
          <Input label="Correo" type="email" placeholder="tu@email.com" />
        </div>
        <Input label="Asunto" type="text" placeholder="¿De qué se trata?" />
        <Textarea label="Mensaje" placeholder="Tu mensaje..." />
        <button
          className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-cyan-500/40 transition flex items-center justify-center gap-2 text-lg"
        >
          <Send size={18} />
          Enviar Mensaje
        </button>
      </form>

      <div
        className="mt-16 flex flex-col md:flex-row justify-around items-center gap-6 text-gray-300 text-center"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <ContactItem icon={<Mail />} text="v.guerra.dev@gmail.com" />
        <ContactItem icon={<Phone />} text="+56 9 7452 3617" />
        <ContactItem icon={<MapPin />} text="Santiago de Chile" />
      </div>
    </div>
  </section>
);

const Input = ({
  label,
  type,
  placeholder,
}: {
  label: string;
  type: string;
  placeholder: string;
}) => (
  <div>
    <label className="block text-sm text-cyan-300 mb-2">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-xl bg-dark-300/40 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
    />
  </div>
);

const Textarea = ({ label, placeholder }: { label: string; placeholder: string }) => (
  <div>
    <label className="block text-sm text-cyan-300 mb-2">{label}</label>
    <textarea
      placeholder={placeholder}
      rows={4}
      className="w-full px-4 py-3 rounded-xl bg-dark-300/40 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition resize-none"
    ></textarea>
  </div>
);

const ContactItem = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-3 text-sm hover:text-white transition">
    {icon}
    {text}
  </div>
);
