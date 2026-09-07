import { useState } from 'react';
import { Mail, CheckCircle, XCircle } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const [sending, setSending] = useState(false);

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('');
    if (!form.name || !form.email || !form.message) {
      setStatus('Por favor completa todos los campos');
      return;
    }
    if (!validateEmail(form.email)) {
      setStatus('Ingresa un correo válido');
      return;
    }

    setSending(true);
    const subject = encodeURIComponent(`Contacto desde portafolio: ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nDe: ${form.name} <${form.email}>`);
    // mailto por defecto
    window.location.href = `mailto:pablo@example.com?subject=${subject}&body=${body}`;
    setStatus('Abriendo cliente de correo...');
    // mostrar mensaje de éxito breve
    setTimeout(() => {
      setSending(false);
      setStatus('Mensaje preparado. Gracias!');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 4000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-20">
      <h2 data-aos="fade-up" className="text-center text-4xl mb-8">Contacto</h2>

      <div className="max-w-3xl mx-auto bg-linear-to-br from-neutral-900/60 to-neutral-800/60 p-8 rounded-2xl shadow-lg border border-neutral-800" data-aos="fade-up" data-aos-delay="100">
          <div className="flex items-center gap-4 mb-6">
            <Mail className="text-brand-300" />
            <p className="text-sm text-neutral-400">¿Tienes un proyecto? Escríbeme.</p>
          </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input aria-label="Nombre" name="name" value={form.name} onChange={handleChange} placeholder="Nombre" className="w-full bg-neutral-800/60 backdrop-blur-sm p-3 rounded-md border border-neutral-700" />
          <input aria-label="Correo" name="email" value={form.email} onChange={handleChange} placeholder="Correo" type="email" className="w-full bg-neutral-800/60 p-3 rounded-md border border-neutral-700" />
          <textarea aria-label="Mensaje" name="message" value={form.message} onChange={handleChange} placeholder="Mensaje" rows="6" className="w-full bg-neutral-800/60 p-3 rounded-md border border-neutral-700" />

          <div className="flex items-center justify-between">
            <button disabled={sending} type="submit" className={`px-6 py-2 rounded-md font-semibold transition-all ${sending ? 'bg-brand-200/40 text-neutral-700' : 'bg-brand-500 text-neutral-900 hover:scale-105'}`}>
              {sending ? 'Enviando...' : 'Enviar'}
            </button>
            <div className="min-w-55">
              {status && (
                <div className="flex items-center gap-2 text-sm">
                  {status.includes('Gracias') || status.includes('Abriendo') ? <CheckCircle className="text-emerald-400" /> : <XCircle className="text-rose-400" />}
                  <span className="text-neutral-300">{status}</span>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
