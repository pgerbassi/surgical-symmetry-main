
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export interface ProductProps {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  className?: string;
}

export function ProductCard({
  name,
  category,
  image,
  description,
  className,
}: ProductProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
      className={cn(
        "group relative overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl",
        className
      )}
    >
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <span className="text-xs font-medium uppercase tracking-wider text-surgical-accent">
          {category}
        </span>
        <h3 className="mt-1 text-xl font-semibold text-surgical-dark">{name}</h3>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{description}</p>
        <div className="mt-4 flex items-center text-surgical-accent">
          <span className="text-sm font-medium">Saiba mais</span>
          <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
      <div className="absolute inset-0 rounded-lg border border-transparent transition-all duration-300 group-hover:border-surgical-accent/20"></div>
    </motion.div>
  );
}
