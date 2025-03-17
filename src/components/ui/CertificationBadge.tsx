
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

export interface CertificationProps {
  id: string;
  name: string;
  icon?: string;
  description: string;
  className?: string;
}

export function CertificationBadge({
  name,
  icon,
  description,
  className,
}: CertificationProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true, margin: "-50px" }}
      className={cn(
        "flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-md transition-all duration-300 hover:shadow-lg",
        className
      )}
    >
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-surgical-accent/10 text-surgical-accent">
        {icon ? (
          <img src={icon} alt={name} className="h-8 w-8" />
        ) : (
          <BadgeCheck className="h-8 w-8" />
        )}
      </div>
      <h4 className="mb-2 text-xl font-semibold text-surgical-dark">{name}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </motion.div>
  );
}
