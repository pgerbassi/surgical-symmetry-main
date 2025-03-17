
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { ProductCard } from "../ui/ProductCard";

const products = [
  {
    id: "1",
    name: "Kit Cirúrgico Estéril Premium",
    category: "Kits Cirúrgicos",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "Kit completo com instrumentos cirúrgicos de alta qualidade para diversos procedimentos, embalados em ambiente estéril.",
  },
  {
    id: "2",
    name: "Máscaras Cirúrgicas Descartáveis",
    category: "Materiais Descartáveis",
    image: "https://images.unsplash.com/photo-1603366615917-1fa6dad5c4fa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "Máscaras cirúrgicas de alta filtração projetadas para conforto e máxima proteção.",
  },
  {
    id: "3",
    name: "Instrumentos Cirúrgicos de Precisão",
    category: "Instrumentos & Equipamentos",
    image: "https://images.unsplash.com/photo-1602668596335-3625cc9cc9cb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "Instrumentos cirúrgicos meticulosamente fabricados, projetados para precisão e durabilidade.",
  },
  {
    id: "4",
    name: "Bandejas para Procedimentos Personalizados",
    category: "Kits Cirúrgicos",
    image: "https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "Bandejas cirúrgicas sob medida montadas de acordo com requisitos procedimentais específicos.",
  },
  {
    id: "5",
    name: "Embalagens de Esterilização",
    category: "Materiais Descartáveis",
    image: "https://images.unsplash.com/photo-1683659635787-e1ff989a4b1d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "Soluções avançadas de embalagem que mantêm a esterilidade até o momento do uso.",
  },
  {
    id: "6",
    name: "Sistemas de Iluminação Cirúrgica",
    category: "Instrumentos & Equipamentos",
    image: "https://images.unsplash.com/photo-1668326366963-0fb5d7af60bd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "Luzes cirúrgicas de última geração proporcionando iluminação superior para procedimentos detalhados.",
  },
];

export function ProductsSection() {
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
            Nossos Produtos
          </span>
          <h2 className="mt-2 font-bold text-surgical-dark">
            Materiais Cirúrgicos da{" "}
            <span className="text-surgical-accent">Mais Alta Qualidade</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore nossa ampla gama de materiais cirúrgicos, projetados com
            precisão e fabricados com os mais altos padrões para profissionais
            médicos em todo o mundo.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 text-center"
        >
          <Button variant="cta" size="lg">
            Ver Todos os Produtos
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
