
import { motion } from "framer-motion";
import { CertificationBadge } from "../ui/CertificationBadge";

const certifications = [
  {
    id: "1",
    name: "ISO 13485",
    description: "Certificação de sistemas de gestão de qualidade para dispositivos médicos",
  },
  {
    id: "2",
    name: "Aprovado pela ANVISA",
    description: "Atende a todos os requisitos da Agência Nacional de Vigilância Sanitária",
  },
  {
    id: "3",
    name: "Marcação CE",
    description: "Conformidade com padrões de saúde, segurança e proteção ambiental",
  },
  {
    id: "4",
    name: "Certificado BPF",
    description: "Boas Práticas de Fabricação garantindo controle de qualidade consistente",
  },
];

export function CertificationsSection() {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-surgical-accent">
            Garantia de Qualidade
          </span>
          <h2 className="mt-2 font-bold text-surgical-dark">
            Certificações &{" "}
            <span className="text-surgical-accent">Padrões</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Seguimos os mais altos padrões internacionais e possuímos certificações
            que garantem que nossos materiais cirúrgicos atendam a rigorosos requisitos de qualidade.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((certification) => (
            <CertificationBadge key={certification.id} {...certification} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 mx-auto max-w-4xl rounded-xl bg-gray-50 p-8 shadow-sm"
        >
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold text-surgical-dark">Nosso Compromisso com a Qualidade</h3>
              <p className="mt-2 text-gray-600">
                Cada produto passa por testes rigorosos e controle de qualidade para garantir que atenda aos nossos altos padrões
                antes de chegar aos profissionais médicos.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/CE_Logo.svg"
                alt="Marca CE"
                className="h-16 w-auto object-contain"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_Logo_%28Red_square_with_white_ISO%29.svg"
                alt="ISO"
                className="h-16 w-auto object-contain"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/FDA_logo.svg/2000px-FDA_logo.svg.png"
                alt="ANVISA"
                className="h-16 w-auto object-contain"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
