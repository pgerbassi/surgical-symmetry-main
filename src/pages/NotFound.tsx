
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: Usuário tentou acessar rota inexistente:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-grow items-center justify-center bg-gray-50 py-20">
        <div className="container px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl"
          >
            <div className="mb-8 text-surgical-accent">
              <span className="text-9xl font-bold">404</span>
            </div>
            <h1 className="mb-4 text-4xl font-bold text-surgical-dark">
              Página Não Encontrada
            </h1>
            <p className="mb-8 text-xl text-gray-600">
              A página que você está procurando não existe ou foi movida.
            </p>
            <Link to="/">
              <Button variant="cta" size="lg">
                Voltar para a Página Inicial
              </Button>
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
