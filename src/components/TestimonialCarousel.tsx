import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="mb-24">
      <div className="flex flex-col items-center text-center mb-10">
        <span className="text-emerald-700 font-bold tracking-widest uppercase text-xs mb-3">Total Travellers Tribe</span>
        <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 font-serif tracking-tight mb-4">What Our Guests Say</h2>
        <p className="text-stone-600 max-w-2xl">Join over 50,000+ satisfied travelers who have experienced our signature hospitality.</p>
      </div>

      <div className="relative bg-[#1A1A1A] rounded-3xl p-8 md:p-14 overflow-hidden shadow-xl max-w-4xl mx-auto">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />
        
        <Quote className="w-16 h-16 text-emerald-500/20 absolute top-8 left-8" />

        <div className="relative z-10 min-h-[220px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center text-center"
            >
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-emerald-400 fill-emerald-400" />
                ))}
              </div>
              <p className="text-lg md:text-xl text-stone-200 leading-relaxed font-medium mb-8 max-w-2xl mx-auto">
                "{TESTIMONIALS[currentIndex].text}"
              </p>
              <div>
                <p className="text-white font-bold tracking-wide">{TESTIMONIALS[currentIndex].author}</p>
                <p className="text-sm text-emerald-400 mt-1">{TESTIMONIALS[currentIndex].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="absolute inset-y-0 left-0 flex items-center justify-start pl-2 sm:pl-4">
          <button 
            onClick={prev}
            className="p-2 rounded-full bg-stone-800/80 text-white hover:bg-emerald-600 transition-colors backdrop-blur-sm shadow-md"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center justify-end pr-2 sm:pr-4">
          <button 
            onClick={next}
            className="p-2 rounded-full bg-stone-800/80 text-white hover:bg-emerald-600 transition-colors backdrop-blur-sm shadow-md"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentIndex ? 'bg-emerald-400 w-6' : 'bg-stone-600 hover:bg-stone-500'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
