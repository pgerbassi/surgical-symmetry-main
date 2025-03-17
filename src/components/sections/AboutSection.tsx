
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const values = [
  {
    title: "Qualidade",
    description:
      "Mantemos os mais altos padrões em todos os nossos produtos e serviços.",
  },
  {
    title: "Inovação",
    description:
      "Buscamos continuamente novas soluções para melhorar os resultados cirúrgicos.",
  },
  {
    title: "Precisão",
    description: "Entregamos precisão em cada detalhe dos nossos materiais.",
  },
  {
    title: "Confiabilidade",
    description:
      "Garantimos desempenho consistente em todos os nossos materiais cirúrgicos.",
  },
];

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.5,
    },
  }),
};

export function AboutSection() {
  return (
    <section className="overflow-hidden bg-white py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Left column with text */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-4"
            >
              <span className="inline-block text-sm font-semibold uppercase tracking-wider text-surgical-accent">
                Sobre Nós
              </span>
              <h2 className="font-bold text-surgical-dark">
                Avançando a Saúde Através de{" "}
                <span className="text-surgical-accent">Materiais Superiores</span>
              </h2>
              <p className="text-lg text-gray-600">
                Por mais de 10 anos, a MedVix tem estado na vanguarda da
                inovação em materiais cirúrgicos, atendendo profissionais de saúde
                com produtos que atendem aos mais altos padrões de qualidade e
                precisão.
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-gray-600"
            >
              Nossa missão é melhorar os resultados cirúrgicos fornecendo
              aos profissionais médicos materiais nos quais podem confiar. Através
              de rigoroso controle de qualidade e inovação contínua, entregamos
              produtos que estabelecem o padrão em confiabilidade cirúrgica.
            </motion.p>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeInUpVariants}
                  className="flex items-start"
                >
                  <CheckCircle className="mr-3 h-6 w-6 flex-shrink-0 text-surgical-accent" />
                  <div>
                    <h4 className="font-semibold text-surgical-dark">
                      {value.title}
                    </h4>
                    <p className="mt-1 text-sm text-gray-600">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right column with image */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative z-10 overflow-hidden rounded-xl shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Profissionais médicos"
                className="h-full w-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="absolute -bottom-10 -right-10 z-0 h-64 w-64 rounded-full bg-surgical-accent/10"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="absolute -left-10 -top-10 z-0 h-48 w-48 rounded-full bg-surgical-light/30"
            ></motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
