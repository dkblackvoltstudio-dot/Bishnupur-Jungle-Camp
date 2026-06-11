import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Building } from 'lucide-react';
import { COMPANY_INFO } from '../data';

export default function Contact() {
  return (
    <>
      <header className="relative pt-36 pb-24 px-6 flex items-center justify-center min-h-[40vh]">
        <motion.div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{ 
            backgroundImage: 'url("https://i.pinimg.com/736x/ab/f1/b2/abf1b271c712f4acc9fa29d75b0974af.jpg")',
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
            Contact Directory
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, w: 0 }}
            animate={{ opacity: 1, w: "100%" }}
            className="h-1.5 w-24 bg-[#A3D131] mx-auto shadow-sm"
          />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pt-20 pb-20 min-h-[60vh]">
      {/* Contact Directory */}
      <section className="mb-24 scroll-mt-32">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-emerald-700 font-bold tracking-widest uppercase text-xs mb-3">Get In Touch</span>
          <h1 className="text-3xl lg:text-4xl font-bold text-stone-900 font-serif tracking-tight mb-4">Contact Directory</h1>
          <p className="text-stone-600 max-w-2xl">Reach out to us for reservations, inquiries, or any assistance required during your stay.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Main Contact */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: 0.1 }}
            className="flex flex-col space-y-6"
          >
            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm flex flex-col h-full">
              <h3 className="text-xl font-bold text-stone-900 mb-6 pb-4 border-b border-stone-100 pr-8">
                Bishnupur Jungle Camp
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600 shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-stone-900 uppercase tracking-widest mb-1">Direct Hotline</h4>
                    <p className="text-lg font-medium text-stone-700">{COMPANY_INFO.contact}</p>
                    {COMPANY_INFO.altContact && <p className="text-lg font-medium text-stone-700 mb-1">{COMPANY_INFO.altContact}</p>}
                    <span className="text-xs text-stone-500 font-medium">{COMPANY_INFO.contactNote}</span>
                  </div>
                </div>

                {COMPANY_INFO.email && (
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600 shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-stone-900 uppercase tracking-widest mb-1">Official Email</h4>
                      <p className="text-[15px] text-stone-700">{COMPANY_INFO.email}</p>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600 shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-stone-900 uppercase tracking-widest mb-1">On-Site Location</h4>
                    <p className="text-[15px] text-stone-700 leading-relaxed mb-2">{COMPANY_INFO.address || COMPANY_INFO.location}</p>
                    {COMPANY_INFO.addressNote && <p className="text-sm text-stone-500 leading-relaxed italic">{COMPANY_INFO.addressNote}</p>}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Regional Hubs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: 0.2 }}
            className="flex flex-col space-y-6"
          >
            <div className="bg-[#1A1A1A] text-stone-300 p-8 rounded-3xl shadow-xl flex flex-col h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
              
              <h3 className="text-xl font-bold text-white mb-6 pb-4 border-b border-stone-800 pr-8 relative z-10 flex items-center gap-3">
                <Building className="w-5 h-5 text-emerald-400" />
                Regional Booking Hubs
              </h3>
              
              <div className="space-y-8 relative z-10">
                <p className="text-sm text-stone-400 leading-relaxed">
                  For clients wishing to handle cash payments, physical receipts, corporate trip planning, or offline reservations, Total Travellers maintains strategic booking offices.
                </p>

                {COMPANY_INFO.bookingHubs && COMPANY_INFO.bookingHubs.map((hub, i) => (
                  <div key={i} className="flex items-start gap-4">
                     <div className="mt-1 shrink-0 w-2 h-2 rounded-full bg-emerald-400" />
                     <div>
                       <h4 className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-1">{hub.name}</h4>
                       <p className="text-[15px] text-stone-300 leading-relaxed">{hub.address}</p>
                       <p className="text-sm text-stone-400">PIN: {hub.pin}</p>
                     </div>
                  </div>
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
