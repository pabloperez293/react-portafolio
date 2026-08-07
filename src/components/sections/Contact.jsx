import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ExternalLink, MessageCircle } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const contactMethods = [
  {
    label: 'Email',
    value: 'pablodevperez@gmail.com',
    action: 'mailto:pablodevperez@gmail.com',
    icon: Mail,
    copyText: 'Copiar email',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/devpabloperez',
    action: 'https://linkedin.com/in/devpabloperez',
    icon: ExternalLink,
  },
  {
    label: 'GitHub',
    value: 'github.com/pabloperezdev',
    action: 'https://github.com/pabloperezdev',
    icon: ExternalLink,
  },
  {
    label: 'WhatsApp',
    value: '+54 9 11 7236-1058',
    action: 'https://wa.me/5491172361058',
    icon: MessageCircle,
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [copied, setCopied] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = `mailto:pablodevperez@gmail.com?subject=${encodeURIComponent(
      `Contacto desde portfolio de ${form.name}`
    )}&body=${encodeURIComponent(form.message + '\n\n' + form.email)}`;
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText('pablodevperez@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contact" className="bg-[#FDFDFD] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Hablemos de tu próximo proyecto o vacante"
          subtitle="Estoy disponible para colaborar en análisis funcional, desarrollos Java y soluciones fullstack." 
        />

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-start mt-10">
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-red-100 bg-white p-8 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Contactos rápidos</h3>
              <p className="mt-3 text-slate-600">Elige el canal que prefieras para avanzar con tu proyecto o vacante.</p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {contactMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <div key={method.label} className="rounded-3xl border border-red-100 bg-red-50/80 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-200">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-red-600 text-white shadow-md shadow-red-500/20">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-slate-900">{method.label}</p>
                          <a
                            href={method.action}
                            target={method.label !== 'Email' ? '_blank' : '_self'}
                            rel="noreferrer"
                            className="mt-1 block text-sm text-red-700 hover:text-red-800"
                          >
                            {method.value}
                          </a>
                        </div>
                      </div>
                      {method.label === 'Email' && (
                        <button
                          type="button"
                          onClick={handleCopy}
                          className="mt-5 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-red-500/25 transition-all duration-300 hover:from-red-700 hover:to-orange-600"
                        >
                          {copied ? 'Email copiado' : 'Copiar email'}
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-red-100 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Envíame un mensaje</h3>
            <p className="mt-3 text-slate-600">Completa el formulario y abriré el mail en tu cliente de correo.</p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-slate-700">Nombre</label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition-all duration-200 focus:border-red-400 focus:ring-4 focus:ring-red-100"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-slate-700">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition-all duration-200 focus:border-red-400 focus:ring-4 focus:ring-red-100"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium text-slate-700">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition-all duration-200 focus:border-red-400 focus:ring-4 focus:ring-red-100"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className="inline-flex items-center justify-center rounded-3xl bg-gradient-to-r from-red-600 to-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/25 transition-all duration-300 hover:from-red-700 hover:to-orange-600"
              >
                Enviar mensaje
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
