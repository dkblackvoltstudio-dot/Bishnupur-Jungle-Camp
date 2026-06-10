import { motion } from 'motion/react';
import { Leaf, Shield, CheckCircle } from 'lucide-react';
import { ACCOMMODATIONS, HOUSE_RULES, POLICIES } from '../data';
import { AccommodationCard } from '../components/AccommodationCard';

export default function Properties() {
  return (
    <>
      <header className="relative pt-36 pb-24 px-6 flex items-center justify-center min-h-[40vh]">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("https://lh3.googleusercontent.com/sitesv/AA5AbUBJt4Sn71OgEvAYmlKEV_sB8zk4nhPJk1GCShGFilDLbE98WPPAIn1nm7x8I91zvMzG7IkZumHGtv3lUO4OLK-K9HFnv9SbCMbYISKEPoh1jUYOmFLCSjSzAd8REniMAk71gdM2uhZ_XBFXnh8-S6t3G5rTWiYRFCHuWhyE3oTELdMiA-SBQqkJkb6wbpXcSYB6uCozO30z6l06JXb0IvU_P5ancC8PzO_y6Uo=w1280")',
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
            Properties
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
        <div className="flex items-center gap-3 mb-8">
          <Leaf className="w-7 h-7 text-emerald-600" />
          <h1 className="text-3xl font-bold text-stone-900 font-serif tracking-tight">Accommodations</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {ACCOMMODATIONS.map((acc, i) => (
            <motion.div 
              key={acc.id} 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.2 + (i * 0.1) }}
              className="h-full"
            >
              <AccommodationCard {...acc} />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 scroll-mt-32">
        {/* House Rules */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="bg-[#1A1A1A] p-8 rounded-3xl text-stone-300 shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
          <h2 className="text-xl font-bold text-white mb-6 pb-4 border-b border-stone-800 relative z-10 flex items-center gap-3">
            <Shield className="w-5 h-5 text-emerald-400" />
            House Rules
          </h2>
          <ul className="space-y-4 relative z-10">
            {HOUSE_RULES.map((rule, i) => (
              <li key={i} className="flex items-start gap-3 text-[15px] leading-relaxed">
                <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2" />
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Booking Policies */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.1 }}
          className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm"
        >
          <h2 className="text-xl font-bold text-stone-900 mb-6 pb-4 border-b border-stone-100 flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-emerald-600" />
            Booking Policies
          </h2>
          <ul className="space-y-4">
            {POLICIES.map((policy, i) => (
              <li key={i} className="flex items-start gap-3 text-[15px] text-stone-600 leading-relaxed">
                <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-stone-300 mt-2" />
                <span dangerouslySetInnerHTML={{ __html: policy.replace(/Total Travellers/g, '<strong>Total Travellers</strong>') }} />
              </li>
            ))}
          </ul>
        </motion.div>
      </section>
    </main>
    </>
  );
}
