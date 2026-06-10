import { motion } from 'motion/react';
import { Leaf, Users, Map, Heart } from 'lucide-react';
import { ABOUT_US, TOTAL_TRAVELLERS } from '../data';

export default function AboutUs() {
  return (
    <>
      <header className="relative pt-36 pb-24 px-6 flex items-center justify-center min-h-[40vh]">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("https://lh3.googleusercontent.com/sitesv/AA5AbUA5AjQASfF_5YDJbFmtgSdk12cASi9ghiSSxkTO9s_74t2pGdAC9_LOMOWXK930owibtCfII5ES_g0jmChTZ_ZIeNAdHKFMA143A3MKiiNGtiI6nKoV7u83e888iA1PJjD6KU0ZgVPGC7l024Q0iDtiYbyoTo-vnJZohrBchYGwycekA2BZk3YsGnzTIcr7TKUvEozppDTjp3coliyBI33ZcBDPuMkUBRqimmo=w1280")',
          }}
        >
          <div className="absolute inset-0 bg-stone-900/60" />
        </div>
        
        <div className="w-full max-w-4xl mx-auto text-center relative z-10 mt-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 uppercase font-sans drop-shadow-md"
          >
            About Us
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, w: 0 }}
            animate={{ opacity: 1, w: "100%" }}
            className="h-1.5 w-24 bg-[#A3D131] mx-auto shadow-sm"
          />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pt-20 pb-20 min-h-[60vh]">
      <section className="mb-24 scroll-mt-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center flex-col-reverse md:flex-row"
        >
          <div className="md:col-span-5 flex justify-center">
             <div className="relative p-6 bg-white border border-stone-200 shadow-sm rounded-3xl w-full max-w-sm">
               <div className="absolute top-0 right-0 p-4 -mt-4 -mr-4 bg-emerald-50 rounded-full border border-emerald-100 shadow-sm">
                 <Leaf className="w-8 h-8 text-emerald-600" />
               </div>
               <h2 className="text-3xl lg:text-4xl font-bold font-serif text-stone-900 mb-2 leading-tight">
                 {ABOUT_US.heading}
               </h2>
               <p className="text-emerald-700 font-medium uppercase tracking-widest text-xs mb-6">
                 {ABOUT_US.subheading}
               </p>
             </div>
          </div>
          <div className="md:col-span-7 space-y-6 text-stone-600 text-[15px] sm:text-base leading-relaxed">
            {ABOUT_US.content.map((paragraph, idx) => (
              <p key={idx} className={idx === 0 ? "text-stone-800 font-medium text-lg leading-relaxed mix-blend-multiply" : ""}>
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mb-20 scroll-mt-32 pt-16 border-t border-stone-200">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-emerald-700 font-bold tracking-widest uppercase text-xs mb-3">Management & Operations</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 font-serif tracking-tight mb-4">We are Total Travellers</h2>
          <div className="w-20 h-1.5 bg-[#A3D131] rounded-full mx-auto shadow-sm" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 space-y-6 text-stone-600 text-[15px] sm:text-base leading-relaxed"
          >
            {TOTAL_TRAVELLERS.sections.weAre.map((paragraph, idx) => (
              <p key={idx} className={idx === 0 ? "text-stone-800 font-medium text-lg leading-relaxed mix-blend-multiply" : ""}>
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 flex flex-col space-y-8"
          >
            {/* Stats */}
            <div className="bg-[#1A1A1A] p-8 rounded-3xl text-stone-100 shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
               <h3 className="text-xl font-bold text-white mb-6 pb-4 border-b border-stone-800 relative z-10">Our Journey Since {TOTAL_TRAVELLERS.established}</h3>
               <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
                 {TOTAL_TRAVELLERS.stats.map((stat, i) => (
                   <div key={i} className="flex flex-col">
                     <span className="text-2xl lg:text-3xl font-bold tracking-tight text-emerald-400 mb-1">{stat.value}</span>
                     <span className="text-xs uppercase tracking-widest text-stone-400 font-medium">{stat.label}</span>
                   </div>
                 ))}
               </div>
            </div>

            {/* Our Story */}
            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm flex items-start gap-5">
               <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600 shrink-0">
                 <Map className="w-6 h-6" />
               </div>
               <div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">Our Story</h3>
                  {TOTAL_TRAVELLERS.sections.ourStory.map((p, i) => (
                    <p key={i} className="text-sm text-stone-600 leading-relaxed">{p}</p>
                  ))}
               </div>
            </div>

            {/* Our Commitments */}
            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm flex items-start gap-5">
               <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600 shrink-0">
                 <Heart className="w-6 h-6" />
               </div>
               <div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">Our Commitments</h3>
                  {TOTAL_TRAVELLERS.sections.ourCommitments.map((p, i) => (
                    <p key={i} className="text-sm text-stone-600 leading-relaxed">{p}</p>
                  ))}
               </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
    </>
  );
}
