
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/Button";

const contactInfo = [
  {
    icon: <MapPin className="h-6 w-6 text-surgical-accent" />,
    title: "Visite-nos",
    details: "Av. Paulista, 1234, Conjunto 567, São Paulo, SP 01310-000",
  },
  {
    icon: <Phone className="h-6 w-6 text-surgical-accent" />,
    title: "Ligue para nós",
    details: "+55 (11) 5555-4567",
  },
  {
    icon: <Mail className="h-6 w-6 text-surgical-accent" />,
    title: "Envie-nos um email",
    details: "contato@medvix.com.br",
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send the form data to your backend
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    // Show success message (in a real app, use a toast notification)
    alert("Sua mensagem foi enviada. Entraremos em contato em breve!");
  };

  return (
    <section className="bg-gray-50 py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-surgical-accent">
            Entre em Contato
          </span>
          <h2 className="mt-2 font-bold text-surgical-dark">
            Fale <span className="text-surgical-accent">Conosco</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Tem dúvidas sobre nossos produtos ou serviços? Nossa equipe está pronta para ajudar
            você com quaisquer perguntas ou solicitações.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Contact Info Cards */}
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col items-center rounded-lg bg-white p-8 text-center shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-surgical-accent/10">
                {info.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-surgical-dark">
                {info.title}
              </h3>
              <p className="mt-2 text-gray-600">{info.details}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 overflow-hidden rounded-xl bg-white shadow-md"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Form Side */}
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-semibold text-surgical-dark">
                Envie-nos uma mensagem
              </h3>
              <p className="mt-2 text-gray-600">
                Preencha o formulário abaixo e entraremos em contato o mais breve possível.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-surgical-accent focus:outline-none focus:ring-surgical-accent/50 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-surgical-accent focus:outline-none focus:ring-surgical-accent/50 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-surgical-accent focus:outline-none focus:ring-surgical-accent/50 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Assunto
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-surgical-accent focus:outline-none focus:ring-surgical-accent/50 sm:text-sm"
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="Product Inquiry">Consulta de Produto</option>
                      <option value="Custom Order">Pedido Personalizado</option>
                      <option value="Technical Support">Suporte Técnico</option>
                      <option value="Partnership">Parceria</option>
                      <option value="Other">Outro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-surgical-accent focus:outline-none focus:ring-surgical-accent/50 sm:text-sm"
                  ></textarea>
                </div>

                <div>
                  <Button variant="cta" type="submit" className="w-full">
                    Enviar Mensagem
                  </Button>
                </div>
              </form>
            </div>

            {/* Map Side */}
            <div className="relative h-96 lg:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976951422584!2d-46.654413385022174!3d-23.564611184681708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%20Brasil!5e0!3m2!1spt-BR!2sbr!4v1655991582919!5m2!1spt-BR!2sbr"
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização MedVix"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
