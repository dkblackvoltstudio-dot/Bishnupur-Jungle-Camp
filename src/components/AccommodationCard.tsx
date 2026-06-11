import { motion } from 'motion/react';
import { Users, Bed } from 'lucide-react';
import type { ElementType } from 'react';

interface Pricing {
  occupancy: string;
  price: string;
  note?: string;
}

interface Props {
  title: string;
  available: number;
  icon: ElementType;
  features: string[];
  pricing: Pricing[];
}

export function AccommodationCard({ title, available, icon: Icon, features, pricing }: Props) {
  return (
    <motion.div 
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden flex flex-col h-full"
    >
      <div className="p-6 bg-stone-50 border-b border-stone-200 flex items-start justify-between">
         <div className="flex items-center gap-4">
           <div className="p-3 bg-white shadow-sm border border-stone-100 rounded-xl text-emerald-700">
             <Icon className="w-5 h-5" />
           </div>
           <div>
             <h3 className="font-semibold text-lg text-stone-900">{title}</h3>
             <span className="inline-block mt-1 text-[11px] font-bold tracking-wide uppercase px-2.5 py-1 bg-emerald-100/80 text-emerald-800 rounded-full">
               {available} {available === 1 ? 'Unit' : 'Units'} Available
             </span>
           </div>
         </div>
      </div>
      <div className="p-6 flex-1 flex flex-col gap-6">
        <div>
           <h4 className="text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-3 hover:text-stone-700 transition-colors">Amenities & Details</h4>
           <ul className="space-y-2">
             {features.map((f, i) => (
               <li key={i} className="flex items-start gap-2 text-[14px] text-stone-600">
                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                 <span className="leading-snug">{f}</span>
               </li>
             ))}
           </ul>
        </div>
        
        <div className="mt-auto pt-4 border-t border-stone-100">
          <h4 className="text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-3">Pricing (Per Night)</h4>
          <div className="space-y-2.5">
            {pricing.map((p, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-stone-50 last:border-0 last:pb-0">
                <div className="flex flex-col">
                  <span className="text-[14px] font-medium text-stone-800 flex items-center gap-1.5 select-none">
                    <Users className="w-4 h-4 text-stone-400" />
                    {p.occupancy}
                  </span>
                  {p.note && (
                    <span className="text-[12px] text-stone-500 mt-0.5 ml-5.5 flex items-center gap-1">
                      <Bed className="w-3 h-3 text-stone-400" /> {p.note}
                    </span>
                  )}
                </div>
                <span className="font-mono font-medium text-stone-900 bg-stone-100/50 px-2 py-0.5 rounded-md">{p.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
