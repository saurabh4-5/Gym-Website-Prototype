import { motion } from "motion/react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "../app/components/ui/button";
import { ImageWithFallback } from "../app/components/figma/ImageWithFallback";
import { classes } from "../data/gymData";

export default function ClassDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const classItem = classes.find((c) => c.id === Number(id));

  if (!classItem) {
    return <div className="text-center text-[#F5F1E8] py-32">Class not found</div>;
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
            {classItem.name}
          </h1>
          <div className="w-20" />
        </div>
      </motion.nav>

      <div className="pt-32 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Class Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 rounded-2xl overflow-hidden h-96"
          >
            <ImageWithFallback src={classItem.image} alt={classItem.name} className="w-full h-full object-cover" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Class Details */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              className="md:col-span-2"
            >
              <h2 className="text-6xl font-bold mb-4 text-[#F5F1E8]" style={{ fontFamily: 'serif' }}>
                {classItem.name}
              </h2>

              <div className="grid grid-cols-2 gap-4 mb-12">
                <div className="bg-[#1A1618] p-6 rounded-xl border border-[#C5A572]/20">
                  <p className="text-[#F5F1E8]/60 text-sm mb-2">📅 Day</p>
                  <p className="text-2xl font-bold text-[#C5A572]">{classItem.day}</p>
                </div>
                <div className="bg-[#1A1618] p-6 rounded-xl border border-[#C5A572]/20">
                  <p className="text-[#F5F1E8]/60 text-sm mb-2">🕐 Time</p>
                  <p className="text-2xl font-bold text-[#C5A572]">{classItem.time}</p>
                </div>
                <div className="bg-[#1A1618] p-6 rounded-xl border border-[#C5A572]/20">
                  <p className="text-[#F5F1E8]/60 text-sm mb-2">⏱️ Duration</p>
                  <p className="text-2xl font-bold text-[#C5A572]">{classItem.duration}</p>
                </div>
                <div className="bg-[#1A1618] p-6 rounded-xl border border-[#C5A572]/20">
                  <p className="text-[#F5F1E8]/60 text-sm mb-2">👥 Capacity</p>
                  <p className="text-2xl font-bold text-[#C5A572]">{classItem.capacity} Members</p>
                </div>
              </div>

              <div className="mb-12 bg-gradient-to-r from-[#C5A572]/10 to-transparent p-8 rounded-xl border border-[#C5A572]/30">
                <h3 className="text-2xl font-bold text-[#C5A572] mb-4">🏋️ About This Class</h3>
                <p className="text-lg text-[#F5F1E8]/80 leading-relaxed">
                  Join {classItem.name} led by our expert trainer {classItem.trainer}. This {classItem.duration} class focuses on {classItem.type.toLowerCase()} training with personalized modifications for all fitness levels. Limited spots available for optimal experience.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#C5A572] mb-6">🎯 What to Expect</h3>
                <ul className="space-y-4">
                  {[
                    'Expert guidance from certified trainer',
                    'Personalized workout modifications',
                    'Small group setting for individual attention',
                    'Progress tracking and feedback',
                    'Community support from fellow members'
                  ].map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-4 text-lg text-[#F5F1E8]/80 bg-[#1A1618] p-4 rounded-lg border border-[#C5A572]/20"
                    >
                      <span className="text-[#C5A572] font-bold">✓</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Sidebar - Trainer & CTA */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              className="md:sticky md:top-32 h-fit"
            >
              <div className="bg-gradient-to-br from-[#1A1618] to-[#2B262C] rounded-2xl p-10 border-2 border-[#C5A572]/30 mb-6">
                <h3 className="text-2xl font-bold text-[#C5A572] mb-6">🏆 Trainer</h3>
                <div className="text-center mb-8">
                  <p className="text-3xl font-bold text-[#F5F1E8] mb-2">{classItem.trainer}</p>
                  <p className="text-[#C5A572] font-semibold">{classItem.type} Specialist</p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-[#C5A572] text-[#2B262C] hover:bg-[#B39560] py-4 rounded-lg font-bold text-lg tracking-wider uppercase transition-all mb-4"
                >
                  Reserve Spot
                </motion.button>

                <button
                  onClick={() => navigate('/')}
                  className="w-full border-2 border-[#C5A572]/50 hover:border-[#C5A572] text-[#F5F1E8] py-3 rounded-lg transition-all"
                >
                  ← Back to Home
                </button>
              </div>

              <div className="bg-[#C5A572]/10 p-6 rounded-xl border border-[#C5A572]/30">
                <p className="text-sm text-[#F5F1E8]/60">
                  ⚡ Tip: Popular classes fill up quickly. Reserve your spot early to guarantee your place!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
