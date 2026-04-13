import { motion } from "motion/react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "../app/components/ui/button";
import { ImageWithFallback } from "../app/components/figma/ImageWithFallback";
import { memberships, trainers } from "../data/gymData";

export default function MembershipDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const plan = memberships.find((p) => p.id === Number(id));

  if (!plan) {
    return <div className="text-center text-[#F5F1E8] py-32">Plan not found</div>;
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
            {plan.name} Plan
          </h1>
          <div className="w-20" />
        </div>
      </motion.nav>

      <div className="pt-32 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 rounded-2xl overflow-hidden h-96"
          >
            <ImageWithFallback src={plan.image} alt={plan.name} className="w-full h-full object-cover" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Plan Details */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              className="md:col-span-2"
            >
              <h2 className="text-6xl font-bold mb-6 text-[#F5F1E8]" style={{ fontFamily: 'serif' }}>
                {plan.name}
              </h2>

              <p className="text-xl text-[#F5F1E8]/80 mb-8 leading-relaxed">
                {plan.description}
              </p>

              <div className="mb-12">
                <h3 className="text-3xl font-bold text-[#C5A572] mb-6">📋 What's Included</h3>
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-4 text-lg text-[#F5F1E8]/80"
                    >
                      <span className="text-2xl text-[#C5A572]">✓</span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-r from-[#C5A572]/10 to-transparent p-8 rounded-xl border border-[#C5A572]/30 mb-12">
                <h3 className="text-2xl font-bold text-[#C5A572] mb-3"> Special Offer</h3>
                <p className="text-lg text-[#F5F1E8]/80">{plan.specialOffers}</p>
              </div>

              <div className="mb-12">
                <h3 className="text-3xl font-bold text-[#C5A572] mb-6"> Expert Trainers for This Plan</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {trainers.slice(0, 2).map((trainer) => (
                    <motion.div
                      key={trainer.id}
                      whileHover={{ y: -5 }}
                      className="bg-[#1A1618] p-6 rounded-xl border border-[#C5A572]/20 hover:border-[#C5A572] transition-all"
                    >
                      <p className="text-lg font-bold text-[#F5F1E8]">{trainer.name}</p>
                      <p className="text-[#C5A572] font-semibold">{trainer.specialization}</p>
                      <p className="text-[#F5F1E8]/60 text-sm mt-2">{trainer.bio}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Sidebar - Pricing & CTA */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              className="md:sticky md:top-32 h-fit"
            >
              <div className={`bg-gradient-to-br from-[#1A1618] to-[#2B262C] rounded-2xl p-10 border-2 ${
                plan.popular ? 'border-[#C5A572] shadow-2xl shadow-[#C5A572]/30' : 'border-[#C5A572]/30'
              }`}>
                {plan.popular && (
                  <div className="bg-[#C5A572] text-[#2B262C] px-4 py-2 rounded-full text-sm font-bold text-center mb-6">
                    ⭐ MOST POPULAR
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className="text-5xl font-bold text-[#C5A572] mb-2">{plan.price}</div>
                  <p className="text-[#F5F1E8]/60">/{plan.period}</p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 rounded-lg font-bold text-lg tracking-wider uppercase transition-all mb-6 ${
                    plan.popular
                      ? 'bg-[#C5A572] text-[#2B262C] hover:bg-[#B39560] shadow-lg'
                      : 'bg-[#C5A572] text-[#2B262C] hover:bg-[#B39560]'
                  }`}
                >
                  Start Your Journey
                </motion.button>

                <div className="space-y-4 text-sm text-[#F5F1E8]/70">
                  <p>✓ No hidden charges</p>
                  <p>✓ Cancel anytime</p>
                  <p>✓ 7-day free trial</p>
                </div>

                <button
                  onClick={() => navigate('/')}
                  className="w-full mt-6 py-3 border-2 border-[#C5A572]/50 hover:border-[#C5A572] text-[#F5F1E8] rounded-lg transition-all"
                >
                  ← Back to Home
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
