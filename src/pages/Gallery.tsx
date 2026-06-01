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
      url: "https://lh3.googleusercontent.com/sitesv/AA5AbUBJt4Sn71OgEvAYmlKEV_sB8zk4nhPJk1GCShGFilDLbE98WPPAIn1nm7x8I91zvMzG7IkZumHGtv3lUO4OLK-K9HFnv9SbCMbYISKEPoh1jUYOmFLCSjSzAd8REniMAk71gdM2uhZ_XBFXnh8-S6t3G5rTWiYRFCHuWhyE3oTELdMiA-SBQqkJkb6wbpXcSYB6uCozO30z6l06JXb0IvU_P5ancC8PzO_y6Uo=w1280",
      caption: "Spacious Camp Grounds"
    },
    {
      url: "https://lh3.googleusercontent.com/sitesv/AA5AbUDlibzuUUg8BsiFpIQk7hNn2lWn4Webni0yT2mZO4bezzB3_JkWYAUXr7nxCeaFCho_VbN8c8sIpOx--b5gJH4rQVVs9IIM-bRQVrTmpIOrTEjXkwC4fgdbZw2gXUBbUWfhtKPwEFuafR4cCnIEFG0TW8HxEoNzscfZhcHP-OnkKUrFYyCkJbC_hK-o8jD5N6bnz0_ZYBtBLqLrHDK9So2oq4L32aE2cnKG=w1280",
      caption: "Bishnupur Jungle Camp Building"
    },
    {
      url: "https://lh3.googleusercontent.com/sitesv/AA5AbUA5AjQASfF_5YDJbFmtgSdk12cASi9ghiSSxkTO9s_74t2pGdAC9_LOMOWXK930owibtCfII5ES_g0jmChTZ_ZIeNAdHKFMA143A3MKiiNGtiI6nKoV7u83e888iA1PJjD6KU0ZgVPGC7l024Q0iDtiYbyoTo-vnJZohrBchYGwycekA2BZk3YsGnzTIcr7TKUvEozppDTjp3coliyBI33ZcBDPuMkUBRqimmo=w1280",
      caption: "Bishnupur Jungle Camp Area"
    },
    {
      url: "https://images.unsplash.com/photo-1506598585641-fc82bed35027?auto=format&fit=crop&q=80&w=800",
      caption: "Rustic Mud House Living"
    },
    {
      url: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&q=80&w=800",
      caption: "Starlit Nights at Bishnupur"
    },
    {
      url: "https://images.unsplash.com/photo-1542129297-c454bebbcc68?auto=format&fit=crop&q=80&w=800",
      caption: "Local Village Trails"
    }
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 pt-36 pb-20 min-h-[80vh]">
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
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={img.url} 
                  alt={img.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
  );
}
