import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { Button } from "../app/components/ui/button";
import { memberships } from "../data/gymData";

export default function MembershipsPage() {
  const navigate = useNavigate();

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
            All Memberships
          </h1>
          <div className="w-20" />
        </div>
      </motion.nav>

      <div className="pt-32 px-6 md:px-16 pb-32">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-7xl font-bold mb-6 text-[#F5F1E8]" style={{ fontFamily: 'serif' }}>
              Choose Your Plan
            </h2>
            <p className="text-xl text-[#F5F1E8]/80 max-w-2xl mx-auto">
              Select the perfect membership that fits your fitness goals and lifestyle
            </p>
          </motion.div>

          {/* Plans Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {memberships.map((plan) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (plan.id - 1) * 0.15, duration: 0.8 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className={`relative bg-gradient-to-br from-[#1A1618] to-[#2B262C] rounded-2xl p-10 border-2 transition-all duration-500 cursor-pointer group ${
                  plan.popular ? 'border-[#C5A572] shadow-2xl shadow-[#C5A572]/30' : 'border-[#C5A572]/30 hover:border-[#C5A572] hover:shadow-xl hover:shadow-[#C5A572]/20'
                }`}
              >
                {plan.popular && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring" }}
                    className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#C5A572] to-[#B39560] px-6 py-2 rounded-full text-sm font-bold tracking-wider shadow-lg"
                  >
                    ⭐ MOST POPULAR
                  </motion.div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold mb-4 text-[#F5F1E8]" style={{ fontFamily: 'serif' }}>
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-6xl font-bold text-[#C5A572]">{plan.price}</span>
                    <span className="text-[#F5F1E8]/60 text-lg">/{plan.period}</span>
                  </div>
                  <p className="text-[#F5F1E8]/70 text-sm">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * idx, duration: 0.5 }}
                      className="flex items-start gap-3"
                    >
                      <span className="text-[#C5A572] mt-1 text-lg">✓</span>
                      <span className="text-[#F5F1E8]/70 text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Special Offer */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mb-6 p-3 bg-[#C5A572]/10 border border-[#C5A572]/30 rounded-lg text-center"
                >
                  <p className="text-xs text-[#C5A572] font-semibold">🎉 {plan.specialOffers}</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate(`/membership/${plan.id}`)}
                >
                  <Button className={`w-full py-6 font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                    plan.popular
                      ? 'bg-[#C5A572] hover:bg-[#B39560] text-[#2B262C] border-0 shadow-lg shadow-[#C5A572]/30'
                      : 'bg-[#2B262C] hover:bg-[#C5A572] text-[#F5F1E8] hover:text-[#2B262C] border-2 border-[#C5A572]/50 hover:border-[#C5A572]'
                  }`}>
                    View Full Details
                  </Button>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Comparison Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#C5A572]/10 to-transparent p-8 rounded-xl border border-[#C5A572]/30 mb-16"
          >
            <h3 className="text-2xl font-bold text-[#C5A572] mb-4">💡 Why Choose FitXcel?</h3>
            <ul className="grid md:grid-cols-2 gap-6 text-[#F5F1E8]/80">
              {[
                '✓ State-of-the-art equipment and facilities',
                '✓ Expert certified trainers with personalized plans',
                '✓ Flexible membership options for everyone',
                '✓ 24/7 facility access on premium plans',
                '✓ Community support and group classes',
                '✓ Progress tracking and nutrition guidance'
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-lg"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-3xl font-bold text-[#F5F1E8] mb-6">Not sure which plan is right for you?</h3>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-[#C5A572] text-[#2B262C] hover:bg-[#B39560] px-12 py-4 rounded-lg font-bold text-lg tracking-wider uppercase transition-all"
            >
              Chat with Our Team
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
