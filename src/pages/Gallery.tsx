import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Image as ImageIcon, Video, X } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<{url: string, caption: string} | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedImage]);

  const images = [
    {
      url: "https://i.pinimg.com/736x/ff/2d/55/ff2d558f90c1de2655a61f9d3a71245a.jpg",
      caption: "Spacious Camp Grounds"
    },
    {
      url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=800",
      caption: "Bishnupur Jungle Camp Area"
    },
    {
      url: "https://i.pinimg.com/736x/70/cd/24/70cd2412d9a3d1ac30ac5ba0fe4e8015.jpg",
      caption: "Surrounding Forest"
    },
    {
      url: "https://i.pinimg.com/736x/5c/bc/b1/5cbcb10dbea443258a840ea5a160dfd2.jpg",
      caption: "Rustic Mud House Living"
    },
    {
      url: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&q=80&w=800",
      caption: "Starlit Nights at Bishnupur"
    },
    {
      url: "https://i.pinimg.com/736x/ab/f1/b2/abf1b271c712f4acc9fa29d75b0974af.jpg",
      caption: "Local Village Trails"
    }
  ];

  return (
    <>
      <header className="relative pt-36 pb-24 px-6 flex items-center justify-center min-h-[40vh]">
        <motion.div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{ 
            backgroundImage: 'url("https://i.pinimg.com/736x/70/cd/24/70cd2412d9a3d1ac30ac5ba0fe4e8015.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-stone-900/60" />
        </motion.div>
        
        <div className="w-full max-w-4xl mx-auto text-center relative z-10 mt-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 uppercase font-sans drop-shadow-md"
          >
            Gallery
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, w: 0 }}
            animate={{ opacity: 1, w: "100%" }}
            className="h-1.5 w-24 bg-[#A3D131] mx-auto shadow-sm"
          />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pt-20 pb-20 min-h-[60vh]">
      <section className="mb-20 scroll-mt-32">
        <div className="flex items-center gap-3 mb-8">
          <Video className="w-7 h-7 text-emerald-600" />
          <h1 className="text-3xl font-bold text-stone-900 font-serif tracking-tight">Experience Bishnupur</h1>
        </div>
        <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-sm border border-stone-200">
          <iframe 
            className="w-full h-full"
            src="https://www.youtube.com/embed/XRQxj7xWGMg" 
            title="Bishnupur Jungle Camp Tour" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="mb-24 scroll-mt-32">
        <div className="flex items-center gap-3 mb-8">
          <ImageIcon className="w-7 h-7 text-emerald-600" />
          <h2 className="text-3xl font-bold text-stone-900 font-serif tracking-tight">Photo Gallery</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-2xl overflow-hidden shadow-sm border border-stone-200 bg-white cursor-pointer"
              onClick={() => setSelectedImage(img)}
            >
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img 
                  src={img.url} 
                  alt={img.caption}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 border-t border-stone-100">
                <p className="text-sm font-medium text-stone-700 text-center">{img.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-900/95 p-4 sm:p-6 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 sm:top-8 sm:right-8 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-5xl flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.url.replace('&w=800', '&w=1600')} // Fetch higher res line for fullscreen
                alt={selectedImage.caption}
                className="max-w-full max-h-[75vh] sm:max-h-[85vh] object-contain rounded-xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <p className="text-white/90 text-center mt-6 text-sm lg:text-base font-medium tracking-wide">
                {selectedImage.caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
    </>
  );
}
