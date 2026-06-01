import { motion, useScroll, useTransform } from 'motion/react';
import { COMPANY_INFO, ATTRACTIONS, TOTAL_TRAVELLERS } from '../data';
import { Landmark, Coffee, ShieldCheck, HeartHandshake, Globe2, MapPin, Car, Train, Bus } from 'lucide-react';
import { TestimonialCarousel } from '../components/TestimonialCarousel';

export default function Home() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], ['0%', '30%']);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  return (
    <>
      <header className="relative pt-36 pb-32 px-6 flex items-center justify-center min-h-[60vh] md:min-h-[70vh]">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("https://lh3.googleusercontent.com/sitesv/AA5AbUDlibzuUUg8BsiFpIQk7hNn2lWn4Webni0yT2mZO4bezzB3_JkWYAUXr7nxCeaFCho_VbN8c8sIpOx--b5gJH4rQVVs9IIM-bRQVrTmpIOrTEjXkwC4fgdbZw2gXUBbUWfhtKPwEFuafR4cCnIEFG0TW8HxEoNzscfZhcHP-OnkKUrFYyCkJbC_hK-o8jD5N6bnz0_ZYBtBLqLrHDK9So2oq4L32aE2cnKG=w1280")',
          }}
        >
          <div className="absolute inset-0 bg-stone-900/50" />
        </div>
        
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center relative z-10 mt-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center w-full"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 uppercase font-sans drop-shadow-md"
            >
              Bishnupur Jungle Camp
            </motion.h1>
            
            <motion.div 
              variants={itemVariants}
              className="h-3 w-full bg-[#A3D131] mb-8 max-w-3xl shadow-sm"
            />
            
            <motion.a 
              variants={itemVariants}
              href={`tel:${COMPANY_INFO.contact.replace(/\s/g, '')}`}
              className="border border-white text-white px-6 md:px-12 py-3 md:py-4 text-sm md:text-lg font-medium tracking-wide uppercase hover:bg-white hover:text-stone-900 transition-colors backdrop-blur-sm bg-stone-900/30 rounded-sm"
            >
              Contact {COMPANY_INFO.contact} For Booking
            </motion.a>
          </motion.div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pt-16">
        {/* Banner */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-emerald-50 border border-emerald-200/60 rounded-2xl p-5 sm:p-6 mb-16 flex flex-col sm:flex-row items-start sm:items-center gap-5 text-emerald-900 shadow-sm"
        >
          <div className="p-2.5 bg-emerald-100 rounded-xl shrink-0">
            <Coffee className="w-6 h-6 text-emerald-700" />
          </div>
          <p className="text-[15px] sm:text-base leading-relaxed">
            <strong className="font-semibold text-emerald-950">All-Inclusive Tariffs:</strong> Every booking includes your room stay plus four fresh meals daily (Lunch, Evening Snacks, Dinner, and Breakfast). <span className="opacity-80">Excludes outside services or extra à la carte food.</span>
          </p>
        </motion.div>

        {/* Why Book With Us */}
        <section className="mb-24">
          <div className="flex flex-col items-center text-center mb-12">
            <span className="text-emerald-700 font-bold tracking-widest uppercase text-xs mb-3">Why Book With Us</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 font-serif tracking-tight mb-4">The {TOTAL_TRAVELLERS.name} Promise</h2>
            <p className="text-stone-600 max-w-2xl">{TOTAL_TRAVELLERS.identity}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm text-center flex flex-col items-center"
            >
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 mx-auto">
                <HeartHandshake className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">The Tribe Mentality</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                We don't do simple transactions. Clients are members of the "Total Travellers Tribe." Every itinerary is designed and verified as if we were taking the trip ourselves.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm text-center flex flex-col items-center"
            >
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 mx-auto">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">End-to-End Care</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Our dedicated support system provides active logistics backup and problem-solving before, during, and after your stay. Your peace of mind is our priority.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.3 }}
              className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm text-center flex flex-col items-center"
            >
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 mx-auto">
                <Globe2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Cultural Respect</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                We actively mandate a deep respect for local indigenous populations, environmental sustainability, regional customs, and native culinary arts across all properties.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Location & How to Reach */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <MapPin className="w-7 h-7 text-emerald-600" />
            <h2 className="text-3xl font-bold text-stone-900 font-serif tracking-tight">Location & How to Reach</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Map */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="w-full h-80 lg:h-full min-h-[400px] rounded-3xl overflow-hidden border border-stone-200 shadow-sm"
            >
              <iframe
                src="https://maps.google.com/maps?q=Bishnupur%20Jungle%20Camp,%20Bankura&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>

            {/* Logistics Info */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col justify-center space-y-6"
            >
              <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm flex items-start gap-4">
                <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600 shrink-0">
                  <Car className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-stone-900 mb-1">By Road</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    Approximately a <strong>4-hour drive from Kolkata</strong>. The camp is well-connected from major surrounding towns including Asansol, Durgapur, Burdwan, and Panagarh. Guests can easily take a private cab from Bankura.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm flex items-start gap-4">
                <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600 shrink-0">
                  <Train className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-stone-900 mb-1">By Train</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    The nearest railway hub is <strong>Bishnupur Railway Station</strong>. It is well connected to major junctions with regular trains running from Howrah and Santragachi.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm flex items-start gap-4">
                <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600 shrink-0">
                  <Bus className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-stone-900 mb-1">By Bus</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    The nearest transit hub is the <strong>Bishnupur Bus Stop</strong>. Daily regular buses depart from Kolkata directly bringing you near the camp.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <TestimonialCarousel />

        {/* Nearby Attractions */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <Landmark className="w-7 h-7 text-emerald-600" />
            <h2 className="text-3xl font-bold text-stone-900 font-serif tracking-tight">Nearby Heritage & Attractions</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ATTRACTIONS.map((attraction, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200 flex flex-col h-full hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-3 gap-2">
                  <h3 className="font-semibold text-lg text-stone-900 leading-tight">{attraction.name}</h3>
                  {attraction.year && (
                    <span className="text-xs font-mono font-medium tracking-wide bg-stone-100 text-stone-500 px-2 py-1 rounded whitespace-nowrap">
                      {attraction.year}
                    </span>
                  )}
                </div>
                <p className="text-sm text-stone-600 leading-relaxed mt-auto">
                  {attraction.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
