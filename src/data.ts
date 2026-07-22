import { BusinessService, CatalogItem, FAQItem, OrderStatus } from './types';

export const BUSINESS_INFO = {
  name: "PLSM Customization",
  tagline: "Columbia's Premier Vehicle Customization & Luxury Auto Detailing Studio",
  about: "PLSM Customization is Columbia, Missouri's leading automotive customization, paint protection, and luxury auto detailing studio. Specializing in high-performance Paint Protection Film (PPF), multi-year ceramic coatings, nano-ceramic heat rejection window tinting, custom vinyl color change wraps, chrome deletes, wheel powder coating, caliper painting, and precision interior/exterior detailing. Driven by uncompromised craftsmanship, clean install bays, and certified master technicians.",
  address: "6700 Stephens Station Rd #105, Columbia, MO 65202",
  phone: "(573) 219-8800",
  email: "info@plsmcustomization.com",
  hours: "Monday – Friday: 8:00 AM – 6:00 PM CST | Saturday: By Appointment Only",
  serviceAreas: ["Columbia & Metro Area", "Boone County", "Jefferson City & Ashland", "Fulton & Central Missouri"],
  googleRating: 4.9,
  reviewsCount: 184,
};

export const SERVICES: BusinessService[] = [
  {
    id: 'ppf',
    title: 'Paint Protection Film (PPF)',
    subtitle: 'Self-healing clear bra shield protecting your vehicle from rock chips & debris',
    description: 'Defend your vehicle’s factory paint against stone chips, highway gravel, bird droppings, and scratches with optical-grade TPU Paint Protection Film. Available in ultra-gloss or satin stealth finishes with multi-year manufacturer warranty.',
    iconName: 'Shield',
    minQuantity: 1,
    avgTurnaround: '1-3 Business Days',
    method: 'ppf',
    features: [
      'Self-healing technology (scratches disappear under sun/heat)',
      'Precision laser computer-cut patterns (zero razor blades on paint)',
      'Available in High Gloss Clear or Satin Stealth finish',
      'Multi-Year Manufacturer Warranty against yellowing & bubbling',
      'Protects bumper, hood, fenders, headlights, and side mirrors'
    ],
    sampleImage: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=800',
    popularFor: 'Porsche 911, Corvette C8, Tesla Model Y, BMW M3/M4, Exotic & Luxury Sports Cars'
  },
  {
    id: 'ceramic_coating',
    title: 'Ceramic & Graphene Coating',
    subtitle: 'Multi-year hydrophobic armor with deep glass-like shine & UV protection',
    description: 'Transform your paint with multi-stage machine paint correction to remove swirl marks, followed by professional nano-ceramic coating. Creates a hydrophobic barrier that repels water, dirt, salt, and brake dust while delivering extreme gloss.',
    iconName: 'Sparkles',
    minQuantity: 1,
    avgTurnaround: '1-2 Business Days',
    method: 'ceramic_coating',
    features: [
      '1-Step, 2-Step, or Multi-Stage Machine Paint Correction',
      '3-Year, 5-Year, or 9-Year Professional Ceramic & Graphene Coating',
      'Extreme water beading and self-cleaning hydrophobic properties',
      'UV ray oxidation defense and harsh road chemical resistance',
      'Includes ceramic coating for wheels, glass, and exterior trim'
    ],
    sampleImage: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=800',
    popularFor: 'New vehicle paint protection, black vehicles, show cars, daily drivers needing easy maintenance'
  },
  {
    id: 'window_tint',
    title: 'Nano-Ceramic Window Tint',
    subtitle: 'Block up to 98% Infrared heat and protect your interior from fading UV rays',
    description: 'Drive in cool comfort and privacy. Our premium multi-layer nano-ceramic window films block up to 98% of heat-causing infrared rays without interfering with cell signals, GPS, or key fobs.',
    iconName: 'Sun',
    minQuantity: 1,
    avgTurnaround: '2-4 Hours (Same Day)',
    method: 'window_tint',
    features: [
      'Up to 98% Infrared (IR) Heat Rejection & 99% UV Ray Block',
      'Computerized precision plot cutting for flawless edge lines',
      'Color-stable film guaranteed never to turn purple or bubble',
      'Available in 5%, 15%, 20%, 35%, 50%, and 70% (Clear Heat Shield)',
      'Full vehicle tinting, windshield heat shields, and panoramic sunroofs'
    ],
    sampleImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
    popularFor: 'All sedans, SUVs, trucks, Tesla glass roofs, heat sensitive luxury interiors'
  },
  {
    id: 'vinyl_wrap',
    title: 'Custom Vinyl Wraps & Styling',
    subtitle: 'Full color change wraps, chrome delete accents, and custom stripes',
    description: 'Completely alter your vehicle’s appearance without permanent repainting. Choose from hundreds of gloss, satin, matte, metallic, color-shift, and carbon fiber films.',
    iconName: 'Palette',
    minQuantity: 1,
    avgTurnaround: '3-5 Business Days',
    method: 'vinyl_wrap',
    features: [
      'Full vehicle color change wraps with seamless panel tucking',
      'Satin Black / Gloss Black Chrome Delete window trim packages',
      'Roof wraps, racing stripes, hood accents, and mirror wraps',
      'Reversible non-damaging wrap installation preserving factory paint',
      'Custom printed business fleet livery & commercial vehicle wraps'
    ],
    sampleImage: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800',
    popularFor: 'Color transformation, satin black stealth builds, Tesla chrome deletes, luxury coupes'
  },
  {
    id: 'wheel_caliper',
    title: 'Wheel Powder Coating & Caliper Paint',
    subtitle: 'Custom durable wheel powder coat finishes & high-temp caliper paint',
    description: 'Give your wheels and brakes a custom OEM-plus or bold accent look. Includes wheel dismounting, sandblasting, industrial high-temp powder coating, curb rash repair, and ceramic coated brake calipers.',
    iconName: 'Circle',
    minQuantity: 1,
    avgTurnaround: '2-3 Business Days',
    method: 'wheel_caliper',
    features: [
      'Satin Black, Gloss Black, Bronze, Hyper Silver, and Custom Metallic Shades',
      'Professional curb rash repair and structural wheel inspection',
      'High-temperature brake caliper ceramic paint & high-gloss clear coat',
      'Custom caliper accent badges and precision finish',
      'Ceramic coating baked directly onto wheels for easy brake dust cleanup'
    ],
    sampleImage: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=800',
    popularFor: 'Sport sedans, performance SUVs, trucks, custom brake caliper accent styling'
  },
  {
    id: 'premium_detail',
    title: 'Premium Auto Detailing & Restoration',
    subtitle: 'Deep interior steam sanitization, leather coating, and exterior paint restoration',
    description: 'Comprehensive restorative detailing designed for car enthusiasts and daily drivers alike. Includes chemical iron decontamination wash, clay bar paint cleansing, hot water carpet extraction, and leather hydration.',
    iconName: 'Droplet',
    minQuantity: 1,
    avgTurnaround: '4-8 Hours (Same Day)',
    method: 'premium_detail',
    features: [
      'Full exterior hand wash, wheel barrel cleaning, and iron bath',
      'Clay bar decontamination & surface smoothness cleansing',
      'Deep interior vacuum, hot water carpet extraction, and steam cleaning',
      'Leather cleansing & ceramic leather stain guard coating',
      'Engine bay detail, exhaust tip polishing, and headlight restoration'
    ],
    sampleImage: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=800',
    popularFor: 'Pre-sale vehicle prep, seasonal deep cleaning, pre-lease return, luxury vehicle maintenance'
  }
];

export const CATALOG_ITEMS: CatalogItem[] = [
  {
    id: 'partial-front-ppf',
    name: 'Partial Front Clear Bra PPF Package',
    brand: 'Paint Protection Film',
    category: 'ppf_packages',
    material: '8 mil Self-Healing TPU Film',
    description: 'Essential rock chip defense covering the high-impact front bumper, leading 18" of hood, side mirrors, and headlights.',
    colors: [
      { name: 'Ultra Gloss Clear', hex: '#ffffff' },
      { name: 'Satin Stealth Matte', hex: '#262626' }
    ],
    image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=600',
    supportedMethods: ['ppf', 'ceramic_coating'],
    minQty: 1
  },
  {
    id: 'full-front-ppf',
    name: 'Full Front Track Pack PPF Package',
    brand: 'Paint Protection Film',
    category: 'ppf_packages',
    material: '8 mil Self-Healing TPU Film',
    description: 'Complete seamless front-end protection including Full Hood (no exposed edges), Full Front Fenders, Front Bumper, Mirrors, Headlights, and Door Cups.',
    colors: [
      { name: 'Ultra Gloss Clear', hex: '#ffffff' },
      { name: 'Satin Stealth Matte', hex: '#262626' }
    ],
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=600',
    supportedMethods: ['ppf', 'ceramic_coating'],
    minQty: 1
  },
  {
    id: 'full-stealth-wrap',
    name: 'Full Vehicle Stealth (Satin) PPF Conversion',
    brand: 'Satin Protection Film',
    category: 'ppf_packages',
    material: '8 mil Self-Healing Satin TPU Film',
    description: 'Transform any factory glossy paint into a frozen satin finish while completely shielding 100% of body panels from rock chips, key scratches, and UV wear.',
    colors: [
      { name: 'Satin Stealth Matte', hex: '#18181b' },
      { name: 'Ultra Gloss Clear', hex: '#e2e8f0' }
    ],
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=600',
    supportedMethods: ['ppf', 'ceramic_coating', 'vinyl_wrap'],
    minQty: 1
  },
  {
    id: 'ceramic-gold-package',
    name: 'Multi-Year Ceramic Coating & Paint Correction',
    brand: 'Nano-Ceramic Armor',
    category: 'ceramic_packages',
    material: '9H Hardness Multi-Layer Nano-Ceramic',
    description: 'Includes 2-step machine paint correction (removing 85-95% of swirl marks & defects), warrantied ceramic coating on paint, wheel faces, and windshield glass.',
    colors: [
      { name: 'Deep Mirror Gloss', hex: '#00E5FF' }
    ],
    image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=600',
    supportedMethods: ['ceramic_coating', 'premium_detail'],
    minQty: 1
  },
  {
    id: 'ceramic-window-tint',
    name: 'Full Vehicle Nano-Ceramic Window Tint',
    brand: 'Nano-Ceramic Film',
    category: 'tint_packages',
    material: 'Multi-layer Nano-Ceramic Heat Rejection Film',
    description: 'Includes driver & passenger windows, rear side windows, and full rear windshield. Rejects up to 98% Infrared heat and keeps interior cabin cool.',
    colors: [
      { name: '5% Limo Dark', hex: '#000000' },
      { name: '15% Dark Smoke', hex: '#1c1917' },
      { name: '20% Medium Smoke', hex: '#292524' },
      { name: '35% Light Smoke', hex: '#44403c' },
      { name: '70% Clear Heat Shield', hex: '#d6d3d1' }
    ],
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=600',
    supportedMethods: ['window_tint'],
    minQty: 1
  },
  {
    id: 'custom-vinyl-color-change',
    name: 'Full Vehicle Vinyl Color Change Wrap',
    brand: 'Premium Cast Vinyl',
    category: 'wrap_packages',
    material: 'Cast Vinyl Wrap with Air Release Technology',
    description: 'Complete color change package with tucked edges, emblem blackout option, and door handles wrapped. Hundreds of satin, matte, gloss, and metallic colors available.',
    colors: [
      { name: 'Satin Black', hex: '#18181b' },
      { name: 'Nardo Grey', hex: '#64748b' },
      { name: 'Satin Dark Grey', hex: '#334155' },
      { name: 'Gloss Midnight Blue', hex: '#1e3a8a' },
      { name: 'Military Olive Green', hex: '#365314' }
    ],
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=600',
    supportedMethods: ['vinyl_wrap', 'ppf'],
    minQty: 1
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'f1',
    category: 'Paint Protection Film (PPF)',
    question: 'How long does Paint Protection Film last and is it warranted?',
    answer: 'All Paint Protection Film installations at PLSM Customization come backed by a comprehensive Manufacturer Warranty against yellowing, cracking, peeling, or bubbling. The self-healing top coat automatically eliminates minor swirl marks when exposed to heat or sunlight.'
  },
  {
    id: 'f2',
    category: 'Ceramic Coatings',
    question: 'What is the difference between wax and a professional ceramic coating?',
    answer: 'Traditional wax lasts 2-3 months and washes off easily. Professional ceramic coating forms a permanent chemical bond with your factory clear coat, providing a hard protective layer that lasts for years, repels water and brake dust, and prevents oxidation.'
  },
  {
    id: 'f3',
    category: 'Window Tinting',
    question: 'How long does window tinting take and what shade is legal in Missouri?',
    answer: 'Full vehicle ceramic window tinting typically takes 2 to 3 hours in our clean bay. Missouri law permits 35% VLT on front side windows and any darkness on rear windows and rear windshield. We offer 5%, 15%, 20%, 35%, 50%, and clear 70% IR heat shields.'
  },
  {
    id: 'f4',
    category: 'Vinyl Wraps',
    question: 'Will a custom vinyl wrap damage my car’s original factory paint?',
    answer: 'No! As long as your vehicle has OEM factory paint in good condition, high quality cast vinyl wraps actually protect your underlying paint from UV fading and mild road debris. Wraps can be safely removed anytime.'
  }
];

export const MOCK_ORDERS: Record<string, OrderStatus> = {
  "PLSM-8492": {
    orderId: "PLSM-8492",
    clientName: "David Miller",
    projectName: "2024 Porsche 911 GT3 RS (Guards Red)",
    itemCount: 1,
    method: "Full Stealth PPF + Ceramic",
    status: "in_production",
    estimatedCompletion: "Tomorrow at 4:00 PM CST",
    proofApproved: true,
    timeline: [
      { step: "Vehicle Check-in & Inspection", completed: true, date: "Jul 18, 2026" },
      { step: "Iron Decontamination & Clay Wash", completed: true, date: "Jul 19, 2026" },
      { step: "Precision Laser Pattern Plotting", completed: true, date: "Jul 20, 2026" },
      { step: "Clean Bay PPF Application", completed: true, date: "Active Now" },
      { step: "Curing & Bake", completed: false },
      { step: "Quality QC Check & Pickup", completed: false }
    ]
  },
  "PLSM-8510": {
    orderId: "PLSM-8510",
    clientName: "Sarah Jenkins",
    projectName: "2024 Corvette Z06 (Torch Red)",
    itemCount: 1,
    method: "Nano-Ceramic 15% Window Tint",
    status: "ready_for_pickup",
    estimatedCompletion: "Ready for Pickup at Studio",
    trackingNumber: "BAY-02-COLUMBIA STUDIO",
    proofApproved: true,
    timeline: [
      { step: "Vehicle Check-in & Glass Inspection", completed: true, date: "Jul 21, 2026" },
      { step: "Plotter Cut Ceramic Film", completed: true, date: "Jul 21, 2026" },
      { step: "Dust-Free Bay Tint Application", completed: true, date: "Jul 21, 2026" },
      { step: "Heat Cure & Edge Checking", completed: true, date: "Jul 22, 2026" },
      { step: "Final Glass Polish & QC", completed: true, date: "Jul 22, 2026" },
      { step: "Ready for Client Handover", completed: true, date: "Jul 22, 2026" }
    ]
  }
};
