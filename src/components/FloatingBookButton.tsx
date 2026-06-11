import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export function FloatingBookButton() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8"
    >
      <Link 
        to="/contact"
        className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-3.5 rounded-full shadow-xl shadow-emerald-900/20 transition-all hover:scale-105 active:scale-95 group font-medium"
      >
        <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
        <span className="tracking-wide">Book Now</span>
      </Link>
    </motion.div>
  );
}
