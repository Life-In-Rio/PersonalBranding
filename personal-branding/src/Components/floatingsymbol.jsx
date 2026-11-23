import { motion } from "framer-motion";

function FloatingSymbol({ className, children }) {
  return (
    <motion.div
      className={`floating-symbol ${className}`}
      animate={{ y: [0, -12, 0] }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
}

export default FloatingSymbol;