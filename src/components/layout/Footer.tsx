
import { cn } from "@/lib/utils";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = [
  {
    title: "Empresa",
    links: [
      { name: "Sobre Nós", path: "/about" },
      { name: "Nossa Equipe", path: "/about#team" },
      { name: "Carreiras", path: "/careers" },
      { name: "Notícias", path: "/news" },
    ],
  },
  {
    title: "Produtos",
    links: [
      { name: "Kits Cirúrgicos Estéreis", path: "/products/kits" },
      { name: "Materiais Descartáveis", path: "/products/disposables" },
      { name: "Instrumentos & Equipamentos", path: "/products/instruments" },
      { name: "Lançamentos", path: "/products/new" },
    ],
  },
  {
    title: "Serviços",
    links: [
      { name: "Kits Cirúrgicos Personalizados", path: "/services/custom-kits" },
      { name: "Serviços de Esterilização", path: "/services/sterilization" },
      { name: "Controle de Qualidade", path: "/services/quality-control" },
      { name: "Distribuição", path: "/services/distribution" },
    ],
  },
  {
    title: "Suporte",
    links: [
      { name: "Fale Conosco", path: "/contact" },
      { name: "Perguntas Frequentes", path: "/faqs" },
      { name: "Termos & Condições", path: "/terms" },
      { name: "Política de Privacidade", path: "/privacy" },
    ],
  },
];

export function Footer({ className }: { className?: string }) {
  return (
    <footer className={cn("bg-surgical-dark text-white", className)}>
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-bold">MedVix</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-gray-300">
              Fornecendo materiais cirúrgicos de alta qualidade e soluções inovadoras para profissionais de saúde em todo o mundo.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="#"
                className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold">{section.title}</h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-300 transition-colors hover:text-white"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div className="flex flex-col space-y-2 md:flex-row md:space-x-6 md:space-y-0">
              <div className="flex items-center">
                <MapPin className="mr-2 h-4 w-4 text-surgical-accent" />
                <span className="text-sm">Av. Paulista, 1234, Conjunto 567, São Paulo, SP 01310-000</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 h-4 w-4 text-surgical-accent" />
                <span className="text-sm">+55 (11) 5555-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 h-4 w-4 text-surgical-accent" />
                <span className="text-sm">contato@medvix.com.br</span>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} MedVix. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
