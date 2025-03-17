
import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-100">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3"
          alt="Equipamentos cirúrgicos"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40"></div>
      </div>

      {/* Hero Content */}
      <div className="container relative z-10 mx-auto px-4 text-center text-white sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl space-y-8"
        >
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span className="inline-block rounded-full bg-gradient-to-r from-surgical-accent via-[#D63B38] to-surgical-accent/90 px-5 py-2 text-sm font-bold uppercase tracking-wider text-white shadow-xl shadow-surgical-accent/30 border border-white/30">
                Confiado por Profissionais Médicos
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="font-bold leading-tight tracking-tight text-shadow-lg drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]"
            >
              Precisão & Inovação <br />
              <span className="bg-gradient-to-r from-white via-[#F1F1F1] to-surgical-accent bg-clip-text text-transparent drop-shadow-[0_4px_8px_rgba(255,255,255,0.2)]">
                em Materiais Cirúrgicos
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mx-auto mt-4 max-w-2xl text-lg text-white font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] bg-black/20 backdrop-blur-sm py-4 px-6 rounded-lg border border-white/10"
            >
              Fornecendo materiais cirúrgicos de qualidade que atendem aos mais altos padrões
              de precisão, confiabilidade e segurança para profissionais de saúde em todo o mundo.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0"
          >
            <Button 
              variant="cta" 
              size="lg" 
              className="min-w-[180px] bg-gradient-to-r from-surgical-accent via-[#D63B38] to-surgical-accent/90 shadow-xl shadow-surgical-accent/40 border border-white/30 hover:scale-105 transition-transform text-white font-bold text-lg tracking-wide"
            >
              Explorar Produtos
            </Button>
            <Button 
              variant="ghost" 
              size="lg" 
              className="min-w-[180px] backdrop-blur-md bg-white/25 text-white border-2 border-white/40 hover:bg-white/35 hover:scale-105 transition-transform shadow-lg font-bold text-lg tracking-wide"
            >
              Saiba Mais
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator - Now positioned at the bottom of the viewport, outside the content container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center">
          <p className="mb-2 text-sm font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Role para descobrir</p>
          <div className="scroll-indicator shadow-xl border-2 border-white"></div>
        </div>
      </motion.div>
    </section>
  );
}
