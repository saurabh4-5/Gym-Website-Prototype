import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useState, useRef } from "react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { AnimatedCounter } from "./components/AnimatedCounter";
import { ParticleBackground } from "./components/ParticleBackground";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Label } from "./components/ui/label";

export default function App() {
  const [currentSection, setCurrentSection] = useState("home");
  const [authDialogOpen, setAuthDialogOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const heroY = useTransform(smoothProgress, [0, 1], ["0%", "40%"]);
  const heroScale = useTransform(smoothProgress, [0, 1], [1, 1.2]);

  const scrollToSection = (id: string) => {
    setCurrentSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative size-full bg-[#2B262C] text-[#F5F1E8] overflow-x-hidden">
      {/* Professional Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#2B262C]/95 backdrop-blur-xl border-b border-[#C5A572]/20"
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          {/* Premium Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex items-center gap-4"
          >
            <div className="relative">
              {/* Logo Design */}
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Hexagon Border */}
                <path d="M24 2L42 13V35L24 46L6 35V13L24 2Z" stroke="#C5A572" strokeWidth="2" fill="none"/>
                <path d="M24 2L42 13V35L24 46L6 35V13L24 2Z" fill="url(#logo-gradient)" fillOpacity="0.1"/>

                {/* Dumbbell Icon */}
                <circle cx="16" cy="24" r="3" fill="#C5A572"/>
                <circle cx="32" cy="24" r="3" fill="#C5A572"/>
                <rect x="18" y="23" width="12" height="2" fill="#C5A572"/>
                <rect x="14" y="21" width="2" height="6" fill="#C5A572"/>
                <rect x="32" y="21" width="2" height="6" fill="#C5A572"/>

                <defs>
                  <linearGradient id="logo-gradient" x1="6" y1="2" x2="42" y2="46" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#C5A572"/>
                    <stop offset="1" stopColor="#8B7355"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight text-[#F5F1E8]" style={{ fontFamily: 'serif' }}>
                FITXCEL
              </span>
              <span className="text-[10px] text-[#C5A572] tracking-[0.2em] uppercase">Elite Fitness</span>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex gap-10 text-sm tracking-wider">
            {['home', 'about', 'plans', 'trainers', 'schedule', 'contact'].map((section, idx) => (
              <motion.button
                key={section}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                onClick={() => scrollToSection(section)}
                className={`uppercase relative group transition-colors duration-300 ${
                  currentSection === section ? 'text-[#C5A572]' : 'text-[#F5F1E8]/70 hover:text-[#C5A572]'
                }`}
              >
                {section}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-[#C5A572] transform origin-left transition-transform duration-300 ${
                  currentSection === section ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </motion.button>
            ))}
          </div>

          {/* CTA Button */}
          <Dialog open={authDialogOpen} onOpenChange={setAuthDialogOpen}>
            <DialogTrigger asChild>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button className="bg-[#C5A572] hover:bg-[#B39560] text-[#2B262C] border-0 font-semibold tracking-wider uppercase px-8 transition-all duration-300 hover:shadow-lg hover:shadow-[#C5A572]/30 hover:scale-105">
                  Member Login
                </Button>
              </motion.div>
            </DialogTrigger>
            <DialogContent className="bg-[#2B262C] text-[#F5F1E8] border-[#C5A572]/30">
              <DialogHeader>
                <DialogTitle className="text-2xl text-[#C5A572]">Welcome to FitXcel</DialogTitle>
                <DialogDescription className="text-[#F5F1E8]/60">
                  Login to your account or create a new one
                </DialogDescription>
              </DialogHeader>
              <AuthTabs onClose={() => setAuthDialogOpen(false)} />
            </DialogContent>
          </Dialog>
        </div>
      </motion.nav>

      {/* Hero Section with Parallax & Particles */}
      <section ref={heroRef} id="home" className="relative h-screen w-full overflow-hidden">
        <motion.div
          style={{ y: heroY, scale: heroScale }}
          className="absolute inset-0"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1620188467120-5042ed1eb5da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2400"
            alt="Premium gym equipment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2B262C]/95 via-[#2B262C]/60 to-transparent" />
        </motion.div>

        {/* Particle Effect */}
        <ParticleBackground />

        <div className="relative h-full flex flex-col justify-center px-6 md:px-16 max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            {/* Animated Line Accent */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ delay: 1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="h-1 bg-gradient-to-r from-[#C5A572] to-transparent mb-8"
            />

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#C5A572] text-sm font-semibold mb-6 tracking-[0.3em] uppercase"
            >
              Premium Fitness Experience
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-7xl md:text-9xl font-bold tracking-tight leading-[0.9] mb-8"
              style={{ fontFamily: 'serif' }}
            >
              Excellence<br />
              In Every<br />
              Rep
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-2xl text-[#F5F1E8]/70 max-w-2xl mb-12 leading-relaxed"
            >
              Where dedication meets sophistication. Join an elite community committed to transforming bodies and elevating lives.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2, ease: [0.16, 1, 0.3, 1] }}
              className="flex gap-6"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => scrollToSection('plans')}
                  className="bg-[#C5A572] hover:bg-[#B39560] text-[#2B262C] px-10 py-7 text-base border-0 font-bold tracking-wider uppercase shadow-xl shadow-[#C5A572]/20 transition-all duration-300"
                >
                  Begin Your Journey
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => scrollToSection('about')}
                  variant="outline"
                  className="px-10 py-7 text-base border-2 border-[#C5A572]/50 hover:bg-[#C5A572]/10 hover:border-[#C5A572] text-[#F5F1E8] transition-all duration-300"
                >
                  Explore More
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-[#C5A572] tracking-widest uppercase">Scroll</span>
            <div className="w-6 h-10 border-2 border-[#C5A572]/50 rounded-full flex justify-center pt-2">
              <motion.div
                className="w-1 h-3 bg-[#C5A572] rounded-full"
                animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section with Animated Counters */}
      <section id="about" className="py-32 px-6 md:px-16 bg-[#1A1618]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="h-1 bg-[#C5A572] mb-6"
              />

              <h2 className="text-6xl md:text-7xl font-bold mb-8" style={{ fontFamily: 'serif' }}>
                About FitXcel
              </h2>

              <p className="text-lg text-[#F5F1E8]/70 mb-6 leading-relaxed">
                Since 2015, FitXcel has redefined the fitness experience. Our 25,000 sq ft sanctuary combines state-of-the-art equipment with expert guidance and an exclusive community atmosphere.
              </p>

              <p className="text-lg text-[#F5F1E8]/70 mb-10 leading-relaxed">
                We believe in excellence without compromise—every detail meticulously crafted to support your transformation journey.
              </p>

              {/* Animated Stats */}
              <div className="grid grid-cols-2 gap-6 mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-[#2B262C] to-[#1A1618] p-6 rounded-lg border border-[#C5A572]/20 text-center group hover:border-[#C5A572]/50 transition-all duration-300"
                >
                  <div className="text-5xl font-bold text-[#C5A572] mb-2 tabular-nums">
                    <AnimatedCounter from={0} to={5000} suffix="+" />
                  </div>
                  <div className="text-sm text-[#F5F1E8]/60 uppercase tracking-wider">Elite Members</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-[#2B262C] to-[#1A1618] p-6 rounded-lg border border-[#C5A572]/20 text-center group hover:border-[#C5A572]/50 transition-all duration-300"
                >
                  <div className="text-5xl font-bold text-[#C5A572] mb-2 tabular-nums">
                    <AnimatedCounter from={0} to={50} suffix="+" />
                  </div>
                  <div className="text-sm text-[#F5F1E8]/60 uppercase tracking-wider">Expert Trainers</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-[#2B262C] to-[#1A1618] p-6 rounded-lg border border-[#C5A572]/20 text-center group hover:border-[#C5A572]/50 transition-all duration-300"
                >
                  <div className="text-5xl font-bold text-[#C5A572] mb-2 tabular-nums">
                    <AnimatedCounter from={0} to={100} suffix="+" />
                  </div>
                  <div className="text-sm text-[#F5F1E8]/60 uppercase tracking-wider">Weekly Classes</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-[#2B262C] to-[#1A1618] p-6 rounded-lg border border-[#C5A572]/20 text-center group hover:border-[#C5A572]/50 transition-all duration-300"
                >
                  <div className="text-5xl font-bold text-[#C5A572] mb-2">24/7</div>
                  <div className="text-sm text-[#F5F1E8]/60 uppercase tracking-wider">Access Available</div>
                </motion.div>
              </div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="space-y-4 bg-gradient-to-br from-[#2B262C]/80 to-[#1A1618] p-8 rounded-lg border border-[#C5A572]/20 backdrop-blur-sm"
              >
                <h3 className="font-semibold text-sm mb-6 text-[#C5A572] tracking-wider uppercase">Contact Information</h3>
                <div className="flex items-start gap-4 text-[#F5F1E8]/70 group hover:text-[#C5A572] transition-colors">
                  <span className="text-[#C5A572] text-xl">📍</span>
                  <span>123 Fitness Boulevard, Downtown District, NY 10001</span>
                </div>
                <div className="flex items-center gap-4 text-[#F5F1E8]/70 group hover:text-[#C5A572] transition-colors">
                  <span className="text-[#C5A572] text-xl">📧</span>
                  <span>info@fitxcel.com</span>
                </div>
                <div className="flex items-center gap-4 text-[#F5F1E8]/70 group hover:text-[#C5A572] transition-colors">
                  <span className="text-[#C5A572] text-xl">📞</span>
                  <span>+1 (555) 123-4567</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden rounded-lg"
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1570155358190-b6dd65899ef4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                    alt="Gym equipment"
                    className="w-full h-80 object-cover"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden rounded-lg mt-12"
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                    alt="Boxing equipment"
                    className="w-full h-80 object-cover"
                  />
                </motion.div>
              </div>

              {/* Working Hours */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-6 bg-gradient-to-br from-[#2B262C]/80 to-[#1A1618] p-8 rounded-lg border border-[#C5A572]/20 backdrop-blur-sm"
              >
                <h3 className="font-semibold text-sm mb-6 text-[#C5A572] tracking-wider uppercase">Working Hours</h3>
                <div className="space-y-4 text-[#F5F1E8]/70">
                  <div className="flex justify-between items-center">
                    <span>Monday - Friday</span>
                    <span className="text-[#C5A572] font-semibold">5:00 AM - 11:00 PM</span>
                  </div>
                  <div className="h-px bg-[#C5A572]/10" />
                  <div className="flex justify-between items-center">
                    <span>Saturday - Sunday</span>
                    <span className="text-[#C5A572] font-semibold">6:00 AM - 10:00 PM</span>
                  </div>
                  <div className="h-px bg-[#C5A572]/10" />
                  <div className="flex justify-between items-center">
                    <span>Holidays</span>
                    <span className="text-[#C5A572] font-semibold">7:00 AM - 8:00 PM</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section id="plans" className="py-32 px-6 md:px-16 bg-[#2B262C]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 120 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-1 bg-[#C5A572] mx-auto mb-6"
            />
            <h2 className="text-6xl md:text-7xl font-bold mb-6" style={{ fontFamily: 'serif' }}>Membership Plans</h2>
            <p className="text-xl text-[#F5F1E8]/60">Invest in yourself. Choose excellence.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <PlanCard
              name="Foundation"
              price="$79"
              period="month"
              features={[
                "Full equipment access",
                "Locker room & showers",
                "5 group classes monthly",
                "Mobile app access",
                "Complimentary assessment"
              ]}
              delay={0.1}
            />
            <PlanCard
              name="Elite"
              price="$129"
              period="month"
              popular={true}
              features={[
                "All Foundation benefits",
                "Unlimited group classes",
                "Monthly personal session",
                "Nutrition consultation",
                "Sauna & steam access",
                "Guest privileges (2/month)"
              ]}
              delay={0.2}
            />
            <PlanCard
              name="Platinum"
              price="$199"
              period="month"
              features={[
                "All Elite benefits",
                "4 personal sessions monthly",
                "Custom meal planning",
                "Priority class booking",
                "Monthly massage therapy",
                "24/7 facility access",
                "Exclusive merchandise"
              ]}
              delay={0.3}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="inline-block bg-gradient-to-r from-[#1A1618] to-[#2B262C] px-10 py-8 rounded-lg border border-[#C5A572]/20">
              <p className="text-lg mb-3">
                💎 Save <span className="text-[#C5A572] font-bold text-2xl">20%</span> with annual commitment
              </p>
              <p className="text-sm text-[#F5F1E8]/50">
                All plans include: Premium WiFi • Towel Service • Hydration Stations • Valet Parking
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trainers Section */}
      <section id="trainers" className="py-32 px-6 md:px-16 bg-[#1A1618]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 120 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-1 bg-[#C5A572] mx-auto mb-6"
            />
            <h2 className="text-6xl md:text-7xl font-bold mb-6" style={{ fontFamily: 'serif' }}>Expert Trainers</h2>
            <p className="text-xl text-[#F5F1E8]/60">Guided by the best in the industry</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            <TrainerCard
              name="Arjun Sharma"
              specialization="Strength & Conditioning"
              experience="12 years"
              image="https://images.unsplash.com/photo-1567895346359-8c2333480993?w=600&q=80"
              delay={0.1}
            />
            <TrainerCard
              name="Priya Patel"
              specialization="HIIT & Performance"
              experience="8 years"
              image="https://images.unsplash.com/photo-1570155358190-b6dd65899ef4?w=600&q=80"
              delay={0.2}
            />
            <TrainerCard
              name="Isha Gupta"
              specialization="Yoga & Wellness"
              experience="10 years"
              image="https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=600&q=80"
              delay={0.3}
            />
            <TrainerCard
              name="Rajesh Kumar"
              specialization="Combat Sports"
              experience="15 years"
              image="https://images.unsplash.com/photo-1552158473-8ee303b7c9ac?w=600&q=80"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Class Schedule */}
      <section id="schedule" className="py-32 px-6 md:px-16 bg-[#2B262C]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 120 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-1 bg-[#C5A572] mx-auto mb-6"
            />
            <h2 className="text-6xl md:text-7xl font-bold mb-6" style={{ fontFamily: 'serif' }}>Class Schedule</h2>
            <p className="text-xl text-[#F5F1E8]/60">Curated programs for every discipline</p>
          </motion.div>

          <ClassSchedule />
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative py-40 px-6 md:px-16 bg-[#1A1618] overflow-hidden">
        <ParticleBackground />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="w-32 h-32 mx-auto mb-12 border-2 border-[#C5A572] rounded-full flex items-center justify-center"
            >
              <div className="text-5xl">💪</div>
            </motion.div>

            <h2 className="text-6xl md:text-8xl font-bold mb-8 leading-tight" style={{ fontFamily: 'serif' }}>
              Begin Your<br />Transformation
            </h2>

            <p className="text-xl mb-12 text-[#F5F1E8]/60 max-w-2xl mx-auto">
              Join an exclusive community of achievers. Your journey to excellence starts here.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => setAuthDialogOpen(true)}
                  size="lg"
                  className="bg-[#C5A572] text-[#2B262C] hover:bg-[#B39560] px-12 py-7 text-lg font-bold tracking-wider uppercase border-0 shadow-xl shadow-[#C5A572]/20"
                >
                  Start Free Trial
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => scrollToSection('plans')}
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#C5A572]/50 text-[#F5F1E8] hover:bg-[#C5A572]/10 hover:border-[#C5A572] px-12 py-7 text-lg tracking-wider uppercase"
                >
                  View Memberships
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-16 py-16 bg-[#2B262C] border-t border-[#C5A572]/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
                  <path d="M24 2L42 13V35L24 46L6 35V13L24 2Z" stroke="#C5A572" strokeWidth="2"/>
                  <circle cx="16" cy="24" r="3" fill="#C5A572"/>
                  <circle cx="32" cy="24" r="3" fill="#C5A572"/>
                  <rect x="18" y="23" width="12" height="2" fill="#C5A572"/>
                </svg>
                <div>
                  <div className="text-xl font-bold" style={{ fontFamily: 'serif' }}>FITXCEL</div>
                  <div className="text-[9px] text-[#C5A572] tracking-widest">ELITE FITNESS</div>
                </div>
              </div>
              <p className="text-[#F5F1E8]/50 text-sm leading-relaxed">
                Excellence in every rep. Transform your life through elite fitness.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-[#C5A572] uppercase tracking-wider text-sm">Quick Links</h4>
              <ul className="space-y-3 text-sm text-[#F5F1E8]/60">
                {['about', 'plans', 'trainers', 'schedule'].map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => scrollToSection(link)}
                      className="hover:text-[#C5A572] transition-colors capitalize"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-[#C5A572] uppercase tracking-wider text-sm">Contact</h4>
              <ul className="space-y-3 text-sm text-[#F5F1E8]/60">
                <li>123 Fitness Blvd</li>
                <li>New York, NY 10001</li>
                <li className="pt-2">info@fitxcel.com</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-[#C5A572] uppercase tracking-wider text-sm">Follow Us</h4>
              <div className="flex gap-4">
                <motion.a
                  href="https://www.tiktok.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  aria-label="TikTok"
                  className="w-12 h-12 bg-[#1A1618] border border-[#C5A572]/20 rounded-lg flex items-center justify-center hover:bg-[#C5A572]/20 hover:border-[#C5A572] transition-all duration-300"
                >
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#000" d="M9.5 3.5v13a2.5 2.5 0 1 1-2.5-2.5h1A1.5 1.5 0 1 0 9.5 17V3.5h1A3.5 3.5 0 0 0 14 7h1a2.5 2.5 0 0 1-2.5-2.5V3.5h-3Z"/></svg>
                </motion.a>
                <motion.a
                  href="https://instagram.com/fitxcel.gym"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  aria-label="Instagram"
                  className="w-12 h-12 bg-[#1A1618] border border-[#C5A572]/20 rounded-lg flex items-center justify-center hover:bg-[#C5A572]/20 hover:border-[#C5A572] transition-all duration-300"
                >
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="5" fill="#000"/><circle cx="12" cy="12" r="4" fill="#fff"/><circle cx="17" cy="7" r="1.5" fill="#fff"/></svg>
                </motion.a>
                <motion.a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  aria-label="LinkedIn"
                  className="w-12 h-12 bg-[#1A1618] border border-[#C5A572]/20 rounded-lg flex items-center justify-center hover:bg-[#C5A572]/20 hover:border-[#C5A572] transition-all duration-300"
                >
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="4" fill="#000"/><rect width="2" height="7" x="7" y="10" fill="#fff"/><circle cx="8" cy="8" r="1" fill="#fff"/><rect width="2" height="4" x="15" y="13" fill="#fff"/><rect width="2" height="7" x="15" y="10" fill="#fff"/></svg>
                </motion.a>
                <motion.a
                  href="https://facebook.com/fitxcelgym"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  aria-label="Facebook"
                  className="w-12 h-12 bg-[#1A1618] border border-[#C5A572]/20 rounded-lg flex items-center justify-center hover:bg-[#C5A572]/20 hover:border-[#C5A572] transition-all duration-300"
                >
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="4" fill="#000"/><path d="M15 8h-2a1 1 0 0 0-1 1v2h3l-.5 2H12v6h-2v-6H8v-2h2V9a3 3 0 0 1 3-3h2v2Z" fill="#fff"/></svg>
                </motion.a>
                <motion.a
                  href="https://pinterest.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  aria-label="Pinterest"
                  className="w-12 h-12 bg-[#1A1618] border border-[#C5A572]/20 rounded-lg flex items-center justify-center hover:bg-[#C5A572]/20 hover:border-[#C5A572] transition-all duration-300"
                >
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="#000"/><path d="M12 8a4 4 0 0 0-1 7.87V20h2v-4.13A4 4 0 0 0 12 8Z" fill="#fff"/></svg>
                </motion.a>
                <motion.a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  aria-label="X"
                  className="w-12 h-12 bg-[#1A1618] border border-[#C5A572]/20 rounded-lg flex items-center justify-center hover:bg-[#C5A572]/20 hover:border-[#C5A572] transition-all duration-300"
                >
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="4" fill="#000"/><path d="M8 8l8 8M16 8l-8 8" stroke="#fff" strokeWidth="2"/></svg>
                </motion.a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-[#C5A572]/20 text-center text-sm text-[#F5F1E8]/40">
            <p>© 2026 FitXcel Elite Fitness. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function PlanCard({ name, price, period, features, popular = false, delay }: {
  name: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -12, scale: 1.02 }}
      className={`relative bg-gradient-to-br from-[#1A1618] to-[#2B262C] rounded-2xl p-10 border-2 transition-all duration-500 ${
        popular ? 'border-[#C5A572] shadow-2xl shadow-[#C5A572]/20' : 'border-[#C5A572]/20 hover:border-[#C5A572]/50'
      }`}
    >
      {popular && (
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.3, type: "spring" }}
          className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#C5A572] to-[#B39560] px-6 py-2 rounded-full text-sm font-bold tracking-wider shadow-lg"
        >
          MOST POPULAR
        </motion.div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'serif' }}>{name}</h3>
        <div className="mb-2">
          <span className="text-6xl font-bold text-[#C5A572]">{price}</span>
          <span className="text-[#F5F1E8]/50 text-lg">/{period}</span>
        </div>
      </div>

      <ul className="space-y-4 mb-10">
        {features.map((feature, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.1 * idx, duration: 0.5 }}
            className="flex items-start gap-3"
          >
            <span className="text-[#C5A572] mt-1 text-lg">✓</span>
            <span className="text-[#F5F1E8]/70">{feature}</span>
          </motion.li>
        ))}
      </ul>

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button className={`w-full py-6 font-bold tracking-wider uppercase transition-all duration-300 ${
          popular
            ? 'bg-[#C5A572] hover:bg-[#B39560] text-[#2B262C] border-0 shadow-lg shadow-[#C5A572]/30'
            : 'bg-[#2B262C] hover:bg-[#C5A572]/20 border-2 border-[#C5A572]/30 hover:border-[#C5A572]'
        }`}>
          Select Plan
        </Button>
      </motion.div>
    </motion.div>
  );
}

function TrainerCard({ name, specialization, experience, image, delay }: {
  name: string;
  specialization: string;
  experience: string;
  image: string;
  delay: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
      className="group cursor-pointer"
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-xl mb-6 border-2 border-[#C5A572]/20 group-hover:border-[#C5A572] transition-all duration-500">
        <motion.div
          animate={{ scale: isHovered ? 1.15 : 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <ImageWithFallback
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#2B262C] via-transparent to-transparent" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-[#C5A572]/30 backdrop-blur-sm flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: isHovered ? 1 : 0.8,
              opacity: isHovered ? 1 : 0
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Button className="bg-[#F5F1E8] text-[#2B262C] hover:bg-[#C5A572] font-bold tracking-wider uppercase">
              Book Session
            </Button>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="text-xs text-[#C5A572] mb-2 font-semibold tracking-wider uppercase">
            {experience} Experience
          </div>
        </div>
      </div>

      <motion.div
        animate={{ x: isHovered ? 8 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'serif' }}>{name}</h3>
        <p className="text-[#F5F1E8]/60">{specialization}</p>
      </motion.div>
    </motion.div>
  );
}

function ClassSchedule() {
  const schedule = [
    { day: 'Monday', classes: [
      { time: '6:00 AM', name: 'Morning Flow', trainer: 'Elena Rodriguez', type: 'Yoga' },
      { time: '9:00 AM', name: 'HIIT Performance', trainer: 'Marcus Johnson', type: 'Cardio' },
      { time: '5:00 PM', name: 'Strength Foundations', trainer: 'Sarah Mitchell', type: 'Strength' },
      { time: '7:00 PM', name: 'Combat Fundamentals', trainer: 'David Chen', type: 'Boxing' }
    ]},
    { day: 'Tuesday', classes: [
      { time: '6:00 AM', name: 'Cardio Kickstart', trainer: 'Marcus Johnson', type: 'Cardio' },
      { time: '10:00 AM', name: 'Power Yoga', trainer: 'Elena Rodriguez', type: 'Yoga' },
      { time: '6:00 PM', name: 'CrossFit Elite', trainer: 'Sarah Mitchell', type: 'Strength' },
      { time: '8:00 PM', name: 'MMA Conditioning', trainer: 'David Chen', type: 'Boxing' }
    ]},
    { day: 'Wednesday', classes: [
      { time: '6:00 AM', name: 'Sunrise Stretch', trainer: 'Elena Rodriguez', type: 'Yoga' },
      { time: '12:00 PM', name: 'Lunch HIIT', trainer: 'Marcus Johnson', type: 'Cardio' },
      { time: '5:00 PM', name: 'Olympic Lifting', trainer: 'Sarah Mitchell', type: 'Strength' },
      { time: '7:00 PM', name: 'Combat Training', trainer: 'David Chen', type: 'Boxing' }
    ]},
    { day: 'Thursday', classes: [
      { time: '6:00 AM', name: 'Spin Elite', trainer: 'Marcus Johnson', type: 'Cardio' },
      { time: '10:00 AM', name: 'Vinyasa Flow', trainer: 'Elena Rodriguez', type: 'Yoga' },
      { time: '6:00 PM', name: 'Functional Fitness', trainer: 'Sarah Mitchell', type: 'Strength' },
      { time: '8:00 PM', name: 'Boxing Circuit', trainer: 'David Chen', type: 'Boxing' }
    ]},
    { day: 'Friday', classes: [
      { time: '6:00 AM', name: 'Cardio Blast', trainer: 'Marcus Johnson', type: 'Cardio' },
      { time: '9:00 AM', name: 'Yoga & Meditation', trainer: 'Elena Rodriguez', type: 'Yoga' },
      { time: '5:00 PM', name: 'Weekend Warrior', trainer: 'Sarah Mitchell', type: 'Strength' },
      { time: '7:00 PM', name: 'Sparring Session', trainer: 'David Chen', type: 'Boxing' }
    ]},
    { day: 'Saturday', classes: [
      { time: '8:00 AM', name: 'Group Yoga', trainer: 'Elena Rodriguez', type: 'Yoga' },
      { time: '10:00 AM', name: 'HIIT Express', trainer: 'Marcus Johnson', type: 'Cardio' },
      { time: '12:00 PM', name: 'Strength Intensive', trainer: 'Sarah Mitchell', type: 'Strength' }
    ]},
    { day: 'Sunday', classes: [
      { time: '9:00 AM', name: 'Restorative Yoga', trainer: 'Elena Rodriguez', type: 'Yoga' },
      { time: '11:00 AM', name: 'Light Cardio', trainer: 'Marcus Johnson', type: 'Cardio' },
      { time: '3:00 PM', name: 'Open Gym', trainer: 'Various', type: 'Strength' }
    ]}
  ];

  const [selectedDay, setSelectedDay] = useState('Monday');
  const selectedSchedule = schedule.find(s => s.day === selectedDay);

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      'Yoga': 'bg-purple-500/20 text-purple-300 border-purple-500/40',
      'Cardio': 'bg-blue-500/20 text-blue-300 border-blue-500/40',
      'Strength': 'bg-[#C5A572]/20 text-[#C5A572] border-[#C5A572]/40',
      'Boxing': 'bg-red-500/20 text-red-300 border-red-500/40'
    };
    return colors[type] || 'bg-[#1A1618] text-[#F5F1E8]';
  };

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-12 justify-center">
        {schedule.map(({ day }) => (
          <motion.button
            key={day}
            onClick={() => setSelectedDay(day)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-4 rounded-lg font-semibold tracking-wider uppercase text-sm transition-all duration-300 ${
              selectedDay === day
                ? 'bg-[#C5A572] text-[#2B262C] shadow-lg shadow-[#C5A572]/30'
                : 'bg-[#1A1618] text-[#F5F1E8]/60 border border-[#C5A572]/20 hover:border-[#C5A572]/50'
            }`}
          >
            {day}
          </motion.button>
        ))}
      </div>

      <motion.div
        key={selectedDay}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-6"
      >
        {selectedSchedule?.classes.map((classItem, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.03, x: 8 }}
            className="bg-gradient-to-br from-[#1A1618] to-[#2B262C] p-8 rounded-xl border border-[#C5A572]/20 hover:border-[#C5A572]/50 transition-all duration-300 cursor-pointer group"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-2xl font-bold mb-2 group-hover:text-[#C5A572] transition-colors" style={{ fontFamily: 'serif' }}>
                  {classItem.name}
                </h4>
                <p className="text-[#F5F1E8]/60 text-sm">{classItem.trainer}</p>
              </div>
              <div className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider border ${getTypeColor(classItem.type)}`}>
                {classItem.type}
              </div>
            </div>
            <div className="flex items-center gap-3 text-[#C5A572] font-semibold">
              <span className="text-xl">🕐</span>
              <span className="text-lg">{classItem.time}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-12 text-center"
      >
        <p className="text-[#F5F1E8]/50 text-sm">
          Limited capacity per class. Reserve your spot in advance via our member portal. 📅
        </p>
      </motion.div>
    </div>
  );
}

function AuthTabs({ onClose }: { onClose: () => void }) {
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [signupForm, setSignupForm] = useState({ name: '', email: '', phone: '', password: '' });
  const [forgotEmail, setForgotEmail] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Demo: Connect Supabase in Make settings to enable authentication.');
    console.log('Login attempt:', loginForm);
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Demo: Connect Supabase in Make settings to enable user registration.');
    console.log('Signup attempt:', signupForm);
  };

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Demo: Password reset for ${forgotEmail}. Connect Supabase to enable.`);
  };

  return (
    <Tabs defaultValue="login" className="w-full">
      <TabsList className="grid w-full grid-cols-2 bg-[#1A1618]">
        <TabsTrigger value="login" className="data-[state=active]:bg-[#C5A572] data-[state=active]:text-[#2B262C]">Login</TabsTrigger>
        <TabsTrigger value="signup" className="data-[state=active]:bg-[#C5A572] data-[state=active]:text-[#2B262C]">Sign Up</TabsTrigger>
      </TabsList>

      <TabsContent value="login">
        <form onSubmit={handleLogin} className="space-y-6 mt-6">
          <div>
            <Label htmlFor="login-email" className="text-[#C5A572]">Email</Label>
            <Input
              id="login-email"
              type="email"
              placeholder="your@email.com"
              value={loginForm.email}
              onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
              className="bg-[#1A1618] border-[#C5A572]/30 text-[#F5F1E8] mt-2"
              required
            />
          </div>
          <div>
            <Label htmlFor="login-password" className="text-[#C5A572]">Password</Label>
            <Input
              id="login-password"
              type="password"
              placeholder="••••••••"
              value={loginForm.password}
              onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
              className="bg-[#1A1618] border-[#C5A572]/30 text-[#F5F1E8] mt-2"
              required
            />
          </div>
          <Button type="submit" className="w-full bg-[#C5A572] hover:bg-[#B39560] text-[#2B262C] border-0 font-bold py-6">
            Login
          </Button>

          <Dialog>
            <DialogTrigger asChild>
              <button type="button" className="text-sm text-[#C5A572] hover:underline w-full text-center">
                Forgot Password?
              </button>
            </DialogTrigger>
            <DialogContent className="bg-[#2B262C] text-[#F5F1E8] border-[#C5A572]/30">
              <DialogHeader>
                <DialogTitle className="text-[#C5A572]">Reset Password</DialogTitle>
                <DialogDescription className="text-[#F5F1E8]/60">
                  Enter your email to receive a reset link
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleForgotPassword} className="space-y-4">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  className="bg-[#1A1618] border-[#C5A572]/30 text-[#F5F1E8]"
                  required
                />
                <Button type="submit" className="w-full bg-[#C5A572] hover:bg-[#B39560] text-[#2B262C] border-0 font-bold">
                  Send Reset Link
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </form>
      </TabsContent>

      <TabsContent value="signup">
        <form onSubmit={handleSignup} className="space-y-6 mt-6">
          <div>
            <Label htmlFor="signup-name" className="text-[#C5A572]">Full Name</Label>
            <Input
              id="signup-name"
              type="text"
              placeholder="John Doe"
              value={signupForm.name}
              onChange={(e) => setSignupForm({ ...signupForm, name: e.target.value })}
              className="bg-[#1A1618] border-[#C5A572]/30 text-[#F5F1E8] mt-2"
              required
            />
          </div>
          <div>
            <Label htmlFor="signup-email" className="text-[#C5A572]">Email</Label>
            <Input
              id="signup-email"
              type="email"
              placeholder="your@email.com"
              value={signupForm.email}
              onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })}
              className="bg-[#1A1618] border-[#C5A572]/30 text-[#F5F1E8] mt-2"
              required
            />
          </div>
          <div>
            <Label htmlFor="signup-phone" className="text-[#C5A572]">Phone Number</Label>
            <Input
              id="signup-phone"
              type="tel"
              placeholder="+1 (555) 123-4567"
              value={signupForm.phone}
              onChange={(e) => setSignupForm({ ...signupForm, phone: e.target.value })}
              className="bg-[#1A1618] border-[#C5A572]/30 text-[#F5F1E8] mt-2"
              required
            />
          </div>
          <div>
            <Label htmlFor="signup-password" className="text-[#C5A572]">Password</Label>
            <Input
              id="signup-password"
              type="password"
              placeholder="••••••••"
              value={signupForm.password}
              onChange={(e) => setSignupForm({ ...signupForm, password: e.target.value })}
              className="bg-[#1A1618] border-[#C5A572]/30 text-[#F5F1E8] mt-2"
              required
            />
          </div>
          <Button type="submit" className="w-full bg-[#C5A572] hover:bg-[#B39560] text-[#2B262C] border-0 font-bold py-6">
            Create Account
          </Button>
          <p className="text-xs text-[#F5F1E8]/40 text-center">
            By signing up, you agree to our Terms of Service and Privacy Policy
          </p>
        </form>
      </TabsContent>
    </Tabs>
  );
}
