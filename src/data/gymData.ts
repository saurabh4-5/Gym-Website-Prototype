export const indianDetails = {
  address: "FitXcel Gym, Sector 5, DLF Cyber City, Gurugram, Haryana 122001, India",
  phone: "+91 9876543210",
  email: "info@fitxcel.com",
  instagram: "https://instagram.com/fitxcel.gym",
  facebook: "https://facebook.com/fitxcelgym",
  whatsapp: "https://chat.whatsapp.com/C7gH8kL9mN0pQ1rS",
};

export const memberships = [
  {
    id: 1,
    name: "Foundation",
    price: "₹1,499",
    period: "month",
    description: "Perfect for beginners starting their fitness journey with access to all basic gym facilities.",
    features: [
      "Full equipment access",
      "Locker room & showers",
      "5 group classes monthly",
      "Mobile app access",
      "Complimentary assessment",
      "Basic nutrition guide"
    ],
    specialOffers: "20% discount if paid annually - Save ₹3,596/year",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
  },
  {
    id: 2,
    name: "Elite",
    price: "₹3,199",
    period: "month",
    popular: true,
    description: "Our most popular plan for serious fitness enthusiasts with comprehensive personal training support.",
    features: [
      "All Foundation benefits",
      "Unlimited group classes",
      "4 personal sessions monthly",
      "Nutrition consultation",
      "Sauna & steam access",
      "Guest privileges (2/month)",
      "Priority class booking",
      "Progress tracking reports"
    ],
    specialOffers: "Get 1 free month when paying for 11 months - Save ₹3,199",
    image: "https://images.unsplash.com/photo-1577720643272-265f434b0e9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
  },
  {
    id: 3,
    name: "Platinum",
    price: "₹5,999",
    period: "month",
    description: "Premium membership with unlimited personal training and exclusive amenities for elite members.",
    features: [
      "All Elite benefits",
      "Unlimited personal sessions",
      "Custom meal planning",
      "Priority class booking",
      "Weekly massage therapy",
      "24/7 facility access",
      "Exclusive merchandise",
      "VIP lounge access",
      "Personalized fitness plan"
    ],
    specialOffers: "Free health checkup worth ₹5,000 + 25% discount on annual plan",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
  }
];

export const trainers = [
  {
    id: 1,
    name: "Arjun Sharma",
    specialization: "Strength & Conditioning",
    experience: "12 years",
    image: "https://as2.ftcdn.net/v2/jpg/07/01/90/87/1000_F_701908735_TJnQKe71bd3bJkOYv8qYp5oSmOpTNCjG.jpg", // Muscular male bodybuilder pose
    bio: "Certified personal trainer and strength coach with specialization in powerlifting. Arjun has trained over 500+ clients and is an expert in building lean muscle mass.",
    certifications: ["ISSA Certified PT", "ACE Fitness Professional", "Strength Coach Certification"],
    specialties: ["Powerlifting", "Muscle Building", "Weight Loss", "Athletic Performance"]
  },
  {
    id: 2,
    name: "Priya Patel",
    specialization: "HIIT & Performance",
    experience: "8 years",
    image: "https://www.shutterstock.com/image-photo/portrait-female-personal-trainer-holding-260nw-2249557387.jpg", // Professional Female Gym Trainer
    bio: "High-intensity interval training specialist with a passion for transforming fitness levels. Priya designs personalized HIIT programs for cardio improvement and fat loss.",
    certifications: ["NASM Certified", "HIIT Specialist", "Nutrition Coach"],
    specialties: ["HIIT Training", "Cardio Fitness", "Fat Loss", "Endurance Training"]
  },
  {
    id: 3,
    name: "Isha Gupta",
    specialization: "Yoga & Wellness",
    experience: "10 years",
    image: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?q=80&w=1000&auto=format&fit=crop", // Professional Gym Trainer (action shot)
    bio: "Certified yoga instructor and wellness coach promoting holistic health. Isha combines ancient yogic wisdom with modern fitness science for complete wellness.",
    certifications: ["RYT 500 Yoga", "Wellness Coach", "Meditation Guide"],
    specialties: ["Yoga", "Flexibility", "Stress Relief", "Core Stabilization"]
  },
  {
    id: 4,
    name: "Rajesh Kumar",
    specialization: "Combat Sports",
    experience: "15 years",
    image: "https://assets.thehansindia.com/h-upload/2023/09/02/1377257-train-the-trainers.webp", // Muscular male athlete pose
    bio: "Professional boxing and MMA trainer with international coaching experience. Rajesh trains elite athletes and fitness enthusiasts in combat sports techniques.",
    certifications: ["Professional Boxing Coach", "MMA Trainer", "Self-Defense Expert"],
    specialties: ["Boxing", "MMA", "Self-Defense", "Agility Training"]
  }
];

export const classes = [
  // Monday
  { 
    id: 1, 
    day: 'Monday', 
    time: '6:00 AM', 
    name: 'Morning Flow', 
    trainer: 'Isha Gupta', 
    type: 'Yoga',
    duration: '60 mins',
    capacity: 20,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  { 
    id: 2, 
    day: 'Monday', 
    time: '9:00 AM', 
    name: 'HIIT Performance', 
    trainer: 'Priya Patel', 
    type: 'Cardio',
    duration: '45 mins',
    capacity: 15,
    image: "https://images.unsplash.com/photo-1591258227697-37d63c249aae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
  { 
    id: 3, 
    day: 'Monday', 
    time: '5:00 PM', 
    name: 'Strength Foundations', 
    trainer: 'Arjun Sharma', 
    type: 'Strength',
    duration: '75 mins',
    capacity: 18,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  { 
    id: 4, 
    day: 'Monday', 
    time: '7:00 PM', 
    name: 'Combat Fundamentals', 
    trainer: 'Rajesh Kumar', 
    type: 'Boxing',
    duration: '60 mins',
    capacity: 12,
    image: "https://images.unsplash.com/photo-1552158473-8ee303b7c9ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  // Tuesday
  { 
    id: 5, 
    day: 'Tuesday', 
    time: '6:00 AM', 
    name: 'Cardio Kickstart', 
    trainer: 'Priya Patel', 
    type: 'Cardio',
    duration: '50 mins',
    capacity: 17,
    image: "https://images.unsplash.com/photo-1620188540300-c156a625c6fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  { 
    id: 6, 
    day: 'Tuesday', 
    time: '10:00 AM', 
    name: 'Power Yoga', 
    trainer: 'Isha Gupta', 
    type: 'Yoga',
    duration: '60 mins',
    capacity: 22,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  { 
    id: 7, 
    day: 'Tuesday', 
    time: '6:00 PM', 
    name: 'CrossFit Elite', 
    trainer: 'Arjun Sharma', 
    type: 'Strength',
    duration: '75 mins',
    capacity: 14,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  { 
    id: 8, 
    day: 'Tuesday', 
    time: '8:00 PM', 
    name: 'MMA Conditioning', 
    trainer: 'Rajesh Kumar', 
    type: 'Boxing',
    duration: '60 mins',
    capacity: 13,
    image: "https://images.unsplash.com/photo-1552158473-8ee303b7c9ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  // Wednesday
  { 
    id: 9, 
    day: 'Wednesday', 
    time: '6:00 AM', 
    name: 'Sunrise Stretch', 
    trainer: 'Isha Gupta', 
    type: 'Yoga',
    duration: '55 mins',
    capacity: 21,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  { 
    id: 10, 
    day: 'Wednesday', 
    time: '12:00 PM', 
    name: 'Lunch HIIT', 
    trainer: 'Priya Patel', 
    type: 'Cardio',
    duration: '40 mins',
    capacity: 16,
    image: "https://images.unsplash.com/photo-1620188540300-c156a625c6fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  { 
    id: 11, 
    day: 'Wednesday', 
    time: '5:00 PM', 
    name: 'Olympic Lifting', 
    trainer: 'Arjun Sharma', 
    type: 'Strength',
    duration: '85 mins',
    capacity: 12,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  { 
    id: 12, 
    day: 'Wednesday', 
    time: '7:00 PM', 
    name: 'Combat Training', 
    trainer: 'Rajesh Kumar', 
    type: 'Boxing',
    duration: '65 mins',
    capacity: 11,
    image: "https://images.unsplash.com/photo-1552158473-8ee303b7c9ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  // Thursday
  { 
    id: 13, 
    day: 'Thursday', 
    time: '6:00 AM', 
    name: 'Spin Elite', 
    trainer: 'Priya Patel', 
    type: 'Cardio',
    duration: '45 mins',
    capacity: 18,
    image: "https://images.unsplash.com/photo-1620188540300-c156a625c6fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  { 
    id: 14, 
    day: 'Thursday', 
    time: '10:00 AM', 
    name: 'Vinyasa Flow', 
    trainer: 'Isha Gupta', 
    type: 'Yoga',
    duration: '60 mins',
    capacity: 23,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  { 
    id: 15, 
    day: 'Thursday', 
    time: '6:00 PM', 
    name: 'Functional Fitness', 
    trainer: 'Arjun Sharma', 
    type: 'Strength',
    duration: '70 mins',
    capacity: 15,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  { 
    id: 16, 
    day: 'Thursday', 
    time: '8:00 PM', 
    name: 'Boxing Circuit', 
    trainer: 'Rajesh Kumar', 
    type: 'Boxing',
    duration: '60 mins',
    capacity: 12,
    image: "https://images.unsplash.com/photo-1552158473-8ee303b7c9ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  // Friday
  { 
    id: 17, 
    day: 'Friday', 
    time: '6:00 AM', 
    name: 'Cardio Blast', 
    trainer: 'Priya Patel', 
    type: 'Cardio',
    duration: '50 mins',
    capacity: 17,
    image: "https://images.unsplash.com/photo-1620188540300-c156a625c6fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  { 
    id: 18, 
    day: 'Friday', 
    time: '9:00 AM', 
    name: 'Yoga & Meditation', 
    trainer: 'Isha Gupta', 
    type: 'Yoga',
    duration: '65 mins',
    capacity: 20,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  { 
    id: 19, 
    day: 'Friday', 
    time: '5:00 PM', 
    name: 'Weekend Warrior', 
    trainer: 'Arjun Sharma', 
    type: 'Strength',
    duration: '75 mins',
    capacity: 16,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  { 
    id: 20, 
    day: 'Friday', 
    time: '7:00 PM', 
    name: 'Sparring Session', 
    trainer: 'Rajesh Kumar', 
    type: 'Boxing',
    duration: '70 mins',
    capacity: 10,
    image: "https://images.unsplash.com/photo-1552158473-8ee303b7c9ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  // Saturday
  { 
    id: 21, 
    day: 'Saturday', 
    time: '8:00 AM', 
    name: 'Group Yoga', 
    trainer: 'Isha Gupta', 
    type: 'Yoga',
    duration: '60 mins',
    capacity: 25,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  { 
    id: 22, 
    day: 'Saturday', 
    time: '10:00 AM', 
    name: 'HIIT Express', 
    trainer: 'Priya Patel', 
    type: 'Cardio',
    duration: '45 mins',
    capacity: 18,
    image: "https://images.unsplash.com/photo-1620188540300-c156a625c6fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  { 
    id: 23, 
    day: 'Saturday', 
    time: '12:00 PM', 
    name: 'Strength Intensive', 
    trainer: 'Arjun Sharma', 
    type: 'Strength',
    duration: '90 mins',
    capacity: 14,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  // Sunday
  { 
    id: 24, 
    day: 'Sunday', 
    time: '9:00 AM', 
    name: 'Restorative Yoga', 
    trainer: 'Isha Gupta', 
    type: 'Yoga',
    duration: '75 mins',
    capacity: 20,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  { 
    id: 25, 
    day: 'Sunday', 
    time: '11:00 AM', 
    name: 'Light Cardio', 
    trainer: 'Priya Patel', 
    type: 'Cardio',
    duration: '40 mins',
    capacity: 15,
    image: "https://images.unsplash.com/photo-1620188540300-c156a625c6fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  { 
    id: 26, 
    day: 'Sunday', 
    time: '3:00 PM', 
    name: 'Open Gym & Strength', 
    trainer: 'Arjun Sharma', 
    type: 'Strength',
    duration: '120 mins',
    capacity: 30,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  }
];
