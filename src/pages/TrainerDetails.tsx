import { motion } from "motion/react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "../app/components/ui/button";
import { ImageWithFallback } from "../app/components/figma/ImageWithFallback";
import { trainers } from "../data/gymData";

export default function TrainerDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const trainer = trainers.find((t) => t.id === Number(id));

  if (!trainer) {
    return <div className="text-center text-[#F5F1E8] py-32">Trainer not found</div>;
  }

  return (
    <div className="min-h-screen bg-[#2B262C] text-[#F5F1E8] overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#2B262C]/95 backdrop-blur-xl border-b border-[#C5A572]/20"
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <button
            onClick={() => navigate('/')}
            className="text-[#C5A572] font-bold text-xl hover:text-[#B39560] transition-colors"
          >
            ← Back to Home
          </button>
          <h1 className="text-2xl font-bold" style={{ fontFamily: 'serif' }}>
            {trainer.name}
          </h1>
          <div className="w-20" />
        </div>
      </motion.nav>

      <div className="pt-32 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Trainer Image */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              className="md:col-span-1"
            >
              <div className="rounded-2xl overflow-hidden h-96 mb-8">
                <ImageWithFallback src={trainer.image} alt={trainer.name} className="w-full h-full object-cover" />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-[#C5A572] text-[#2B262C] hover:bg-[#B39560] py-4 rounded-lg font-bold text-lg tracking-wider uppercase transition-all mb-4"
              >
                Book Session
              </motion.button>

              <button
                onClick={() => navigate('/')}
                className="w-full border-2 border-[#C5A572]/50 hover:border-[#C5A572] text-[#F5F1E8] py-3 rounded-lg transition-all"
              >
                ← Back to Home
              </button>
            </motion.div>

            {/* Trainer Info */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              className="md:col-span-2"
            >
              <h2 className="text-6xl font-bold mb-2 text-[#F5F1E8]" style={{ fontFamily: 'serif' }}>
                {trainer.name}
              </h2>
              <p className="text-3xl text-[#C5A572] font-semibold mb-2">{trainer.specialization}</p>
              <p className="text-xl text-[#F5F1E8]/60 mb-8"> {trainer.experience}</p>

              <div className="mb-12 bg-gradient-to-r from-[#C5A572]/10 to-transparent p-8 rounded-xl border border-[#C5A572]/30">
                <h3 className="text-2xl font-bold text-[#C5A572] mb-4"> About</h3>
                <p className="text-lg text-[#F5F1E8]/80 leading-relaxed">{trainer.bio}</p>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-bold text-[#C5A572] mb-6"> Certifications</h3>
                <div className="space-y-3">
                  {trainer.certifications.map((cert: string, idx: number) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-3 text-lg text-[#F5F1E8]/80 bg-[#1A1618] p-4 rounded-lg border border-[#C5A572]/20"
                    >
                      <span className="text-[#C5A572] font-bold">✓</span>
                      {cert}
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#C5A572] mb-6"> Specialties</h3>
                <div className="grid grid-cols-2 gap-4">
                  {trainer.specialties.map((specialty: string, idx: number) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-[#C5A572]/10 border border-[#C5A572]/30 hover:border-[#C5A572] p-4 rounded-lg text-center font-semibold text-[#F5F1E8] transition-all cursor-pointer"
                    >
                      {specialty}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
