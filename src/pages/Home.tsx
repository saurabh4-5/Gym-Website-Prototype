import { motion } from "motion/react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ImageWithFallback } from "../app/components/figma/ImageWithFallback";
import { AnimatedCounter } from "../app/components/AnimatedCounter";
import { ParticleBackground } from "../app/components/ParticleBackground";
import { Button } from "../app/components/ui/button";
import { Input } from "../app/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../app/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../app/components/ui/tabs";
import { Label } from "../app/components/ui/label";
import { memberships, trainers, indianDetails, classes } from "../data/gymData";

const AnimatedLogo = () => (
  <motion.div
    whileHover={{ rotate: 360 }}
    whileTap={{ scale: 0.9 }}
    transition={{ duration: 0.8 }}
    className="relative"
  >
    <motion.svg 
      width="48" 
      height="48" 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      animate={{ 
        rotateZ: [0, 5, -5, 0],
        scale: [1, 1.05, 1]
      }}
      transition={{ 
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {/* Hexagon Border */}
      <motion.path 
        d="M24 2L42 13V35L24 46L6 35V13L24 2Z" 
        stroke="#C5A572" 
        strokeWidth="2" 
        fill="none"
        animate={{
          strokeDasharray: [0, 200],
          strokeDashoffset: [200, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.path 
        d="M24 2L42 13V35L24 46L6 35V13L24 2Z" 
        fill="url(#logo-gradient)" 
        fillOpacity="0.1"
      />

      {/* Dumbbell Icon with Animation */}
      <motion.circle 
        cx="16" 
        cy="24" 
        r="3" 
        fill="#C5A572"
        animate={{ r: [3, 4, 3] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
      <motion.circle 
        cx="32" 
        cy="24" 
        r="3" 
        fill="#C5A572"
        animate={{ r: [3, 4, 3] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
      />
      <motion.rect 
        x="18" 
        y="23" 
        width="12" 
        height="2" 
        fill="#C5A572"
        animate={{ scaleX: [1, 1.2, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <motion.rect 
        x="14" 
        y="20" 
        width="2" 
        height="8" 
        fill="#C5A572"
        animate={{ y: [20, 19, 20] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
      <motion.rect 
        x="32" 
        y="20" 
        width="2" 
        height="8" 
        fill="#C5A572"
        animate={{ y: [20, 19, 20] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
      />

      <defs>
        <linearGradient id="logo-gradient" x1="6" y1="2" x2="42" y2="46" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C5A572"/>
          <stop offset="1" stopColor="#8B7355"/>
        </linearGradient>
      </defs>
    </motion.svg>
  </motion.div>
);

export default function Home() {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState("home");
  const [authDialogOpen, setAuthDialogOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [dayIndex, setDayIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const scrollToSection = (id: string) => {
    setCurrentSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNextDay = () => {
    setDayIndex((prev) => (prev + 1) % days.length);
    setSelectedDay(days[(dayIndex + 1) % days.length]);
  };

  const handlePrevDay = () => {
    setDayIndex((prev) => (prev - 1 + days.length) % days.length);
    setSelectedDay(days[(dayIndex - 1 + days.length) % days.length]);
  };

  const selectedSchedule = classes.filter(c => c.day === selectedDay);

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
            className="flex items-center gap-4 cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <div className="relative">
              <AnimatedLogo />
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
                <DialogDescription className="text-[#F5F1E8]/80">
                  Login to your account or create a new one
                </DialogDescription>
              </DialogHeader>
              <AuthTabs onClose={() => setAuthDialogOpen(false)} />
            </DialogContent>
          </Dialog>
        </div>
      </motion.nav>

      {/* Hero Section with Parallax & Particles */}
      <section ref={heroRef} id="home" className="relative h-screen w-full overflow-visible pt-20">
        <motion.div
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

        <div className="relative w-full h-2/3 flex flex-col justify-start px-6 md:px-16 pt-8 pb-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="max-w-2xl md:w-1/2"
            >
              {/* Animated Line Accent */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 120 }}
                transition={{ delay: 1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="h-1 bg-gradient-to-r from-[#C5A572] to-transparent mb-6"
              />

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-[#C5A572] text-xs font-semibold mb-4 tracking-[0.3em] uppercase"
              >
                Premium Fitness Experience
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-8xl font-bold tracking-tight leading-[1.15] mb-4 text-[#F5F1E8]"
                style={{ fontFamily: 'serif' }}
              >
                Excellence<br />
                In Every<br />
                Rep
              </motion.h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
              className="md:w-1/2 flex items-center"
            >
              <p className="text-lg md:text-2xl text-[#F5F1E8]/85 leading-relaxed">
                Where dedication meets sophistication. Join an elite community committed to transforming bodies and elevating lives.
              </p>
            </motion.div>
          </div>
        </div>

        {/* CTA Buttons - Professional Positioning at 3/4 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-1/2 -translate-x-1/2 flex flex-col sm:flex-row gap-6 items-center justify-center w-full px-6"
          style={{ top: '73%' }}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#C5A572] to-[#B39560] rounded-lg blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-300" />
            <Button
              onClick={() => scrollToSection('plans')}
              className="relative bg-gradient-to-r from-[#C5A572] to-[#B39560] hover:shadow-2xl hover:shadow-[#C5A572]/50 text-[#2B262C] px-14 py-5 text-sm border-0 font-bold tracking-wider uppercase transition-all duration-300 rounded-lg backdrop-blur-sm whitespace-nowrap"
            >
              Begin Your Journey
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#C5A572]/20 to-[#B39560]/20 rounded-lg blur-lg opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
            <Button
              onClick={() => scrollToSection('about')}
              className="relative px-14 py-5 text-sm border-2 border-[#C5A572] hover:bg-[#C5A572]/10 hover:shadow-lg hover:shadow-[#C5A572]/30 text-[#C5A572] transition-all duration-300 font-bold tracking-wider uppercase bg-transparent rounded-lg backdrop-blur-sm whitespace-nowrap"
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator - Removed */}
      </section>

      {/* Begin Transformation - Interactive Section */}
      <section className="relative py-24 px-6 md:px-16 bg-[#1A1618] overflow-hidden border-t-4 border-b-4 border-[#C5A572]">
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
              className="w-28 h-28 mx-auto mb-8 border-4 border-[#C5A572] rounded-full flex items-center justify-center bg-gradient-to-br from-[#C5A572]/25 to-[#1A1618] shadow-lg shadow-[#C5A572]/20"
            >
              <motion.div
                animate={{ scale: [1, 1.12, 1], rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-5xl"
              >
                💪
              </motion.div>
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-[#F5F1E8]" style={{ fontFamily: 'serif' }}>
              Begin Your<br /><span className="bg-gradient-to-r from-[#C5A572] to-[#B39560] bg-clip-text text-transparent">Transformation</span>
            </h2>

            <p className="text-lg mb-10 text-[#F5F1E8]/85 max-w-2xl mx-auto leading-relaxed">
              Join an exclusive community of achievers. Your journey to excellence starts here with personalized training and world-class facilities.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => setAuthDialogOpen(true)}
                  size="lg"
                  className="bg-gradient-to-r from-[#C5A572] to-[#B39560] text-[#2B262C] hover:shadow-2xl hover:shadow-[#C5A572]/40 px-10 py-5 text-base font-bold tracking-wider uppercase border-0 transition-all duration-300 min-w-56"
                >
                  Start Free Trial
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => navigate('/memberships')}
                  size="lg"
                  className="border-3 border-[#C5A572] text-[#C5A572] hover:bg-[#C5A572] hover:text-[#2B262C] px-10 py-5 text-base tracking-wider uppercase bg-transparent transition-all duration-300 font-bold min-w-56"
                >
                  View Memberships
                </Button>
              </motion.div>
            </div>
          </motion.div>
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
            <h2 className="text-6xl md:text-7xl font-bold mb-6 text-[#F5F1E8]" style={{ fontFamily: 'serif' }}>Membership Plans</h2>
            <p className="text-xl text-[#F5F1E8]/80">Invest in yourself. Choose excellence.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {memberships.map((plan) => (
              <PlanCard key={plan.id} plan={plan} navigate={navigate} />
            ))}
          </div>
        </div>
      </section>

      {/* Expert Trainers */}
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
            <h2 className="text-6xl md:text-7xl font-bold mb-6 text-[#F5F1E8]" style={{ fontFamily: 'serif' }}>Expert Trainers</h2>
            <p className="text-xl text-[#F5F1E8]/80">Meet our team of certified professionals</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {trainers.map((trainer) => (
              <TrainerCard key={trainer.id} trainer={trainer} navigate={navigate} />
            ))}
          </div>
        </div>
      </section>

      {/* Class Schedule */}
      <section id="schedule" className="py-20 px-6 md:px-16 bg-[#2B262C]">
        <div className="max-w-5xl mx-auto">
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
            <h2 className="text-6xl md:text-7xl font-bold mb-6 text-[#F5F1E8]" style={{ fontFamily: 'serif' }}>Class Schedule</h2>
            <p className="text-xl text-[#F5F1E8]/80">Book your favorite classes</p>
          </motion.div>

          {/* Day Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-between items-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrevDay}
              className="bg-[#C5A572] hover:bg-[#B39560] text-[#2B262C] w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl transition-all duration-300"
            >
              ←
            </motion.button>

            <div className="flex-1 text-center">
              <motion.h3
                key={selectedDay}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-4xl font-bold text-[#C5A572] uppercase tracking-wider"
              >
                {selectedDay}
              </motion.h3>
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNextDay}
              className="bg-[#C5A572] hover:bg-[#B39560] text-[#2B262C] w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl transition-all duration-300"
            >
              →
            </motion.button>
          </motion.div>

          {/* Classes Grid */}
          <motion.div
            key={selectedDay}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {selectedSchedule.map((classItem, idx) => (
              <motion.div
                key={classItem.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.03, y: -5 }}
                onClick={() => navigate(`/class/${classItem.id}`)}
                className="bg-gradient-to-br from-[#1A1618] to-[#2B262C] p-6 rounded-xl border-2 border-[#C5A572]/20 hover:border-[#C5A572] transition-all duration-300 cursor-pointer group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-[#F5F1E8] group-hover:text-[#C5A572] transition-colors" style={{ fontFamily: 'serif' }}>
                      {classItem.name}
                    </h4>
                    <p className="text-[#F5F1E8]/60 text-sm"> {classItem.trainer}</p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${getTypeColor(classItem.type)}`}>
                    {classItem.type}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[#C5A572] font-semibold text-sm">
                  <span> {classItem.time}</span>
                  <span> {classItem.duration}</span>
                  <span> {classItem.capacity}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Us Section - MOVED TO BOTTOM */}
      <section id="about" className="py-20 px-6 md:px-16 bg-[#1A1618]">
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

              <h2 className="text-6xl md:text-7xl font-bold mb-8 text-[#F5F1E8]" style={{ fontFamily: 'serif' }}>
                About FitXcel
              </h2>

              <p className="text-lg text-[#F5F1E8]/80 mb-6 leading-relaxed">
                Since 2015, FitXcel has redefined the fitness experience. Our 25,000 sq ft sanctuary combines state-of-the-art equipment with expert guidance and an exclusive community atmosphere.
              </p>

              <p className="text-lg text-[#F5F1E8]/80 mb-10 leading-relaxed">
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
                  className="bg-gradient-to-br from-[#2B262C] to-[#1A1618] p-6 rounded-lg border border-[#C5A572]/20 text-center group hover:border-[#C5A572] transition-all duration-300 cursor-pointer"
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
                  className="bg-gradient-to-br from-[#2B262C] to-[#1A1618] p-6 rounded-lg border border-[#C5A572]/20 text-center group hover:border-[#C5A572] transition-all duration-300 cursor-pointer"
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
                  className="bg-gradient-to-br from-[#2B262C] to-[#1A1618] p-6 rounded-lg border border-[#C5A572]/20 text-center group hover:border-[#C5A572] transition-all duration-300 cursor-pointer"
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
                  className="bg-gradient-to-br from-[#2B262C] to-[#1A1618] p-6 rounded-lg border border-[#C5A572]/20 text-center group hover:border-[#C5A572] transition-all duration-300 cursor-pointer"
                >
                  <div className="text-5xl font-bold text-[#C5A572] mb-2">24/7</div>
                  <div className="text-sm text-[#F5F1E8]/60 uppercase tracking-wider">Access Available</div>
                </motion.div>
              </div>

              {/* Contact Info with Professional Emojis */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="space-y-3 bg-gradient-to-br from-[#2B262C]/85 to-[#1A1618] p-6 rounded-lg border border-[#C5A572]/20 backdrop-blur-sm hover:border-[#C5A572] transition-all duration-300 cursor-pointer group"
              >
                <h3 className="font-semibold text-base mb-4 text-[#C5A572] tracking-wider uppercase">Contact Information</h3>
                <div className="flex items-start gap-3 text-[#F5F1E8]/80 group-hover:text-[#C5A572] transition-colors text-sm">
                  <span className="text-lg">📍</span>
                  <span className="line-clamp-2">{indianDetails.address}</span>
                </div>
                <div className="flex items-center gap-3 text-[#F5F1E8]/80 group-hover:text-[#C5A572] transition-colors text-sm">
                  <span className="text-lg">📧</span>
                  <span>{indianDetails.email}</span>
                </div>
                <div className="flex items-center gap-3 text-[#F5F1E8]/80 group-hover:text-[#C5A572] transition-colors text-sm">
                  <span className="text-lg">📱</span>
                  <span>{indianDetails.phone}</span>
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
                    src="https://www.bestpicks.com.sg/wp-content/uploads/2025/05/A-stock-photo-related-to-gym.-Feel-free-to-exercise-your-artistry.jpg"
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
                    src="https://i.pinimg.com/736x/c9/b4/3a/c9b43aa52971544fce6985f811ac7211.jpg"
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
                className="mt-4 bg-gradient-to-br from-[#2B262C]/85 to-[#1A1618] p-6 rounded-lg border border-[#C5A572]/20 backdrop-blur-sm hover:border-[#C5A572] transition-all duration-300 cursor-pointer"
              >
                <h3 className="font-semibold text-base mb-4 text-[#C5A572] tracking-wider uppercase">Working Hours</h3>
                <div className="space-y-3 text-[#F5F1E8]/80 text-sm">
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

      {/* Contact Us Footer */}
      <footer id="contact" className="px-6 md:px-16 py-12 bg-[#2B262C] border-t border-[#C5A572]/20]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <AnimatedLogo />
                <div>
                  <div className="text-xl font-bold text-[#F5F1E8]" style={{ fontFamily: 'serif' }}>FITXCEL</div>
                  <div className="text-[9px] text-[#C5A572] tracking-widest">ELITE FITNESS</div>
                </div>
              </div>
              <p className="text-[#F5F1E8]/50 text-sm leading-relaxed">
                Excellence in every rep. Transform your life through elite fitness.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-[#C5A572] uppercase tracking-wider text-sm">🔗 Quick Links</h4>
              <ul className="space-y-3 text-sm text-[#F5F1E8]/60">
                {['home', 'about', 'plans', 'trainers'].map((link) => (
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
              <h4 className="font-semibold mb-6 text-[#C5A572] uppercase tracking-wider text-sm">📞 Contact</h4>
              <ul className="space-y-3 text-sm text-[#F5F1E8]/60">
                <li className="flex items-center gap-2">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" fill="#C5A572"/></svg>
                  {indianDetails.address}
                </li>
                <li className="pt-2 flex items-center gap-2">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M4 4h16v16H4V4Zm8 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4Z" fill="#C5A572"/></svg>
                  {indianDetails.email}
                </li>
                <li className="flex items-center gap-2">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.35.27 2.67.76 3.88a1 1 0 0 1-.21 1.11l-2.2 2.2Z" fill="#C5A572"/></svg>
                  {indianDetails.phone}
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-[#C5A572] uppercase tracking-wider text-sm">Follow Us</h4>
              <div className="space-y-3">
                <motion.a
                  href={indianDetails.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="flex items-center gap-3 text-[#F5F1E8]/80 hover:text-[#C5A572] transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-600 via-purple-500 to-orange-400 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-pink-500/50 transition-all duration-300">
                    <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="5" fill="#fff"/><circle cx="12" cy="12" r="4" fill="#C13584"/><circle cx="17" cy="7" r="1.5" fill="#C13584"/></svg>
                  </div>
                  <span className="text-sm font-semibold">Instagram</span>
                </motion.a>
                <motion.a
                  href={indianDetails.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="flex items-center gap-3 text-[#F5F1E8]/80 hover:text-[#C5A572] transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
                    <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="4" fill="#fff"/><path d="M15 8h-2a1 1 0 0 0-1 1v2h3l-.5 2H12v6h-2v-6H8v-2h2V9a3 3 0 0 1 3-3h2v2Z" fill="#1877F3"/></svg>
                  </div>
                  <span className="text-sm font-semibold">Facebook</span>
                </motion.a>
                <motion.a
                  href={indianDetails.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="flex items-center gap-3 text-[#F5F1E8]/80 hover:text-[#C5A572] transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-green-500/50 transition-all duration-300">
                    <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="4" fill="#fff"/><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.967-.94 1.166-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.205 5.077 4.372.71.306 1.263.489 1.695.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.007-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347z" fill="#25D366"/></svg>
                  </div>
                  <span className="text-sm font-semibold">WhatsApp Group</span>
                </motion.a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-[#C5A572]/20 text-center text-sm text-[#F5F1E8]/40">
            <p>© 2026 FitXcel Elite Fitness. All rights reserved. </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function PlanCard({ plan, navigate }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: (plan.id - 1) * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -12, scale: 1.02 }}
      className={`relative bg-gradient-to-br from-[#1A1618] to-[#2B262C] rounded-2xl p-10 border-2 transition-all duration-500 cursor-pointer group ${
        plan.popular ? 'border-[#C5A572] shadow-2xl shadow-[#C5A572]/30' : 'border-[#C5A572]/30 hover:border-[#C5A572] hover:shadow-xl hover:shadow-[#C5A572]/20'
      }`}
      onClick={() => navigate(`/membership/${plan.id}`)}
    >
      {plan.popular && (
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: "spring" }}
          className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#C5A572] to-[#B39560] px-6 py-2 rounded-full text-sm font-bold tracking-wider shadow-lg"
        >
          ⭐ MOST POPULAR
        </motion.div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold mb-4 text-[#F5F1E8]" style={{ fontFamily: 'serif' }}>{plan.name}</h3>
        <div className="mb-2">
          <span className="text-6xl font-bold text-[#C5A572]">{plan.price}</span>
          <span className="text-[#F5F1E8]/60 text-lg">/{plan.period}</span>
        </div>
        <p className="text-[#F5F1E8]/70 text-sm mt-3">{plan.description}</p>
      </div>

      <ul className="space-y-3 mb-8">
        {plan.features.slice(0, 5).map((feature: string, idx: number) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
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
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-6 p-3 bg-[#C5A572]/10 border border-[#C5A572]/30 rounded-lg text-center"
      >
        <p className="text-xs text-[#C5A572] font-semibold"> {plan.specialOffers}</p>
      </motion.div>

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button className={`w-full py-6 font-bold tracking-wider uppercase transition-all duration-300 ${
          plan.popular
            ? 'bg-[#C5A572] hover:bg-[#B39560] text-[#2B262C] border-0 shadow-lg shadow-[#C5A572]/30'
            : 'bg-[#2B262C] hover:bg-[#C5A572] text-[#F5F1E8] hover:text-[#2B262C] border-2 border-[#C5A572]/50 hover:border-[#C5A572]'
        }`}>
          View Details
        </Button>
      </motion.div>
    </motion.div>
  );
}

function TrainerCard({ trainer, navigate }: any) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: (trainer.id - 1) * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
      onClick={() => navigate(`/trainer/${trainer.id}`)}
      className="group cursor-pointer"
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-xl mb-6 border-2 border-[#C5A572]/50 group-hover:border-[#C5A572] transition-all duration-500 bg-gradient-to-br from-[#2B262C] to-[#1A1618]">
        <motion.div
          animate={{ scale: isHovered ? 1.15 : 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <ImageWithFallback
            src={trainer.image}
            alt={trainer.name}
            className="w-full h-full object-cover bg-[#1A1618]"
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
              View Profile
            </Button>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-center">
          <div className="text-xs text-[#C5A572] mb-2 font-semibold tracking-wider uppercase">
            🏆 {trainer.experience}
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {trainer.specialties && trainer.specialties.slice(0, 2).map((spec: string, idx: number) => (
              <span key={idx} className="bg-[#C5A572]/20 text-[#C5A572] text-[11px] px-2 py-1 rounded font-semibold uppercase tracking-wide">{spec}</span>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        animate={{ x: isHovered ? 8 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-2xl font-bold mb-2 text-[#F5F1E8]" style={{ fontFamily: 'serif' }}>{trainer.name}</h3>
        <p className="text-[#F5F1E8]/60">{trainer.specialization}</p>
      </motion.div>
    </motion.div>
  );
}

function AuthTabs({ onClose }: { onClose: () => void }) {
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [signupForm, setSignupForm] = useState({ firstName: '', lastName: '', email: '', phone: '', password: '', agreeTerms: false });
  const [forgotEmail, setForgotEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('fitxcel_user', JSON.stringify({ 
      email: loginForm.email, 
      isLoggedIn: true 
    }));
    alert(`Welcome back! You've been logged in as ${loginForm.email}`);
    onClose();
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!signupForm.agreeTerms) {
      alert('Please agree to terms and conditions to continue');
      return;
    }
    localStorage.setItem('fitxcel_user', JSON.stringify({ 
      name: `${signupForm.firstName} ${signupForm.lastName}`,
      email: signupForm.email, 
      phone: signupForm.phone,
      isLoggedIn: true 
    }));
    alert(`Welcome ${signupForm.firstName}! Your account has been created successfully`);
    onClose();
  };

  const handleGoogleLogin = () => {
    localStorage.setItem('fitxcel_user', JSON.stringify({ 
      name: 'Google User',
      email: 'user@gmail.com',
      isLoggedIn: true 
    }));
    alert('Successfully logged in with Google!');
    onClose();
  };

  return (
    <Tabs defaultValue="login" className="w-full max-w-md mx-auto px-2 sm:px-0">
      <TabsList className="grid w-full grid-cols-2 bg-[#1A1618] mb-6 rounded-lg overflow-hidden">
        <TabsTrigger value="login" className="data-[state=active]:bg-[#C5A572] data-[state=active]:text-[#2B262C] text-[#F5F1E8] py-3 text-base">Login</TabsTrigger>
        <TabsTrigger value="signup" className="data-[state=active]:bg-[#C5A572] data-[state=active]:text-[#2B262C] text-[#F5F1E8] py-3 text-base">Sign Up</TabsTrigger>
      </TabsList>

      <TabsContent value="login">
        <form onSubmit={handleLogin} className="space-y-5 mt-6 flex flex-col">
          <motion.button
            type="button"
            onClick={handleGoogleLogin}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 bg-white border-2 border-white hover:bg-gray-50 rounded-lg text-[#2B262C] font-semibold transition-all duration-300 flex items-center justify-center gap-3"
          >
            <span className="text-xl">G</span>
            Continue with Google
          </motion.button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#C5A572]/20" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-[#2B262C] text-[#F5F1E8]/60">Or login with email</span>
            </div>
          </div>

          <div>
            <Label htmlFor="login-email" className="text-[#C5A572] font-semibold">Email Address</Label>
            <Input
              id="login-email"
              type="email"
              placeholder="your@email.com"
              value={loginForm.email}
              onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
              className="bg-[#1A1618] border-[#C5A572]/50 text-[#F5F1E8] placeholder:text-[#F5F1E8]/40 mt-2 focus:border-[#C5A572]"
              required
            />
          </div>

          <div>
            <Label htmlFor="login-password" className="text-[#C5A572] font-semibold">Password</Label>
            <Input
              id="login-password"
              type="password"
              placeholder="••••••••"
              value={loginForm.password}
              onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
              className="bg-[#1A1618] border-[#C5A572]/50 text-[#F5F1E8] placeholder:text-[#F5F1E8]/40 mt-2 focus:border-[#C5A572]"
              required
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 bg-[#C5A572] hover:bg-[#B39560] text-[#2B262C] border-0 font-bold rounded-lg transition-all duration-300"
          >
            Login to FitXcel
          </motion.button>

          <Dialog>
            <DialogTrigger asChild>
              <button type="button" className="text-sm text-[#C5A572] hover:text-[#B39560] w-full text-center font-semibold">
                Forgot your password?
              </button>
            </DialogTrigger>
            <DialogContent className="bg-[#2B262C] text-[#F5F1E8] border-[#C5A572]/30">
              <DialogHeader>
                <DialogTitle className="text-[#C5A572]">Reset Your Password</DialogTitle>
                <DialogDescription className="text-[#F5F1E8]/80">
                  Enter your email address and we'll send you a reset link
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={(e) => { e.preventDefault(); alert('Reset link sent to ' + forgotEmail); }} className="space-y-4">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  className="bg-[#1A1618] border-[#C5A572]/50 text-[#F5F1E8] placeholder:text-[#F5F1E8]/40"
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
        <form onSubmit={handleSignup} className="space-y-5 mt-6">
          <motion.button
            type="button"
            onClick={handleGoogleLogin}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 bg-white border-2 border-white hover:bg-gray-50 rounded-lg text-[#2B262C] font-semibold transition-all duration-300 flex items-center justify-center gap-3"
          >
            <span className="text-xl">G</span>
            Sign up with Google
          </motion.button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#C5A572]/20" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-[#2B262C] text-[#F5F1E8]/60">Or sign up with email</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="signup-fname" className="text-[#C5A572] font-semibold text-sm">First Name</Label>
              <Input
                id="signup-fname"
                type="text"
                placeholder="John"
                value={signupForm.firstName}
                onChange={(e) => setSignupForm({ ...signupForm, firstName: e.target.value })}
                className="bg-[#1A1618] border-[#C5A572]/50 text-[#F5F1E8] placeholder:text-[#F5F1E8]/40 mt-2 focus:border-[#C5A572]"
                required
              />
            </div>
            <div>
              <Label htmlFor="signup-lname" className="text-[#C5A572] font-semibold text-sm">Last Name</Label>
              <Input
                id="signup-lname"
                type="text"
                placeholder="Doe"
                value={signupForm.lastName}
                onChange={(e) => setSignupForm({ ...signupForm, lastName: e.target.value })}
                className="bg-[#1A1618] border-[#C5A572]/50 text-[#F5F1E8] placeholder:text-[#F5F1E8]/40 mt-2 focus:border-[#C5A572]"
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="signup-email" className="text-[#C5A572] font-semibold">Email Address</Label>
            <Input
              id="signup-email"
              type="email"
              placeholder="your@email.com"
              value={signupForm.email}
              onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })}
              className="bg-[#1A1618] border-[#C5A572]/50 text-[#F5F1E8] placeholder:text-[#F5F1E8]/40 mt-2 focus:border-[#C5A572]"
              required
            />
          </div>

          <div>
            <Label htmlFor="signup-phone" className="text-[#C5A572] font-semibold">Mobile Number</Label>
            <Input
              id="signup-phone"
              type="tel"
              placeholder="+91 98765 43210"
              value={signupForm.phone}
              onChange={(e) => setSignupForm({ ...signupForm, phone: e.target.value })}
              className="bg-[#1A1618] border-[#C5A572]/50 text-[#F5F1E8] placeholder:text-[#F5F1E8]/40 mt-2 focus:border-[#C5A572]"
              required
            />
          </div>

          <div>
            <Label htmlFor="signup-password" className="text-[#C5A572] font-semibold">Password</Label>
            <Input
              id="signup-password"
              type="password"
              placeholder="••••••••••••"
              value={signupForm.password}
              onChange={(e) => setSignupForm({ ...signupForm, password: e.target.value })}
              className="bg-[#1A1618] border-[#C5A572]/50 text-[#F5F1E8] placeholder:text-[#F5F1E8]/40 mt-2 focus:border-[#C5A572]"
              required
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-start gap-2 p-4 bg-[#C5A572]/10 border border-[#C5A572]/30 rounded-lg"
          >
            <input
              type="checkbox"
              id="terms"
              checked={signupForm.agreeTerms}
              onChange={(e) => setSignupForm({ ...signupForm, agreeTerms: e.target.checked })}
              className="w-5 h-5 mt-0.5 cursor-pointer accent-[#C5A572]"
            />
            <label htmlFor="terms" className="text-xs text-[#F5F1E8]/80 cursor-pointer leading-relaxed">
              I agree to FitXcel's <span className="text-[#C5A572] font-semibold">Terms and Conditions</span> and <span className="text-[#C5A572] font-semibold">Privacy Policy</span>
            </label>
          </motion.div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 bg-[#C5A572] hover:bg-[#B39560] text-[#2B262C] border-0 font-bold rounded-lg transition-all duration-300"
          >
            Create My Account
          </motion.button>

          <p className="text-xs text-[#F5F1E8]/60 text-center">
            Already have an account? Switch to <button type="button" onClick={() => window.location.reload()} className="text-[#C5A572] font-semibold hover:underline">Login</button>
          </p>
        </form>
      </TabsContent>
    </Tabs>
  );
}
