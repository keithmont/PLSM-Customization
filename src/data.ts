import { BusinessService, FAQItem } from './types';

export const BUSINESS_INFO = {
  name: "PLSM Customization",
  tagline: "Columbia's Premier Vehicle Customization, Ceramic Coating & Detailing Studio",
  about: "PLSM Customization is Columbia, Missouri's leading auto customization, ceramic coating, wheel and caliper painting, luxury auto detailing, and residential ceramic surface protection studio. Driven by over 10 years of industry experience and multiple award-winning craftsmanship.",
  address: "6700 Stephens Station Rd #105, Columbia, MO 65202",
  phone: "(573) 219-8800",
  email: "plsmcustomization@gmail.com",
  hours: "Monday – Friday: 8:00 AM – 6:00 PM CST | Saturday: By Appointment Only",
  serviceAreas: ["Columbia & Metro Area", "Boone County", "Jefferson City & Ashland", "Fulton & Central Missouri"],
  googleRating: "5.0",
  reviewsCount: "Over 210",
  experience: "Over 10 years in the industry & multiple award recipient"
};

export const SERVICES: BusinessService[] = [
  {
    id: 'ceramic_coating',
    title: 'Multi-Year Ceramic Coating',
    subtitle: 'Multi-layer gloss enhancement with lifespans ranging from 2, 6, or 10 years',
    description: 'Transform your paint with multi-stage machine paint correction to remove swirl marks, followed by professional nano-ceramic coating. Creates a hydrophobic armor that repels water, dirt, salt, and environmental contaminants while delivering extreme glass-like gloss.',
    iconName: 'Sparkles',
    minQuantity: 1,
    avgTurnaround: '1-2 Business Days',
    method: 'ceramic_coating',
    features: [
      'Lifespans available in 2-Year, 6-Year, or 10-Year protection packages',
      '1-Step, 2-Step, or Multi-Stage Machine Paint Correction',
      'Extreme water beading and self-cleaning hydrophobic properties',
      'UV ray oxidation defense and harsh chemical resistance',
      'Includes ceramic protection for wheels, glass, and exterior trim'
    ],
    sampleImage: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=800',
    popularFor: 'New vehicle paint protection, black vehicles, show cars, daily drivers needing easy maintenance'
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
    title: 'Wheel & Caliper Painting',
    subtitle: 'Custom durable high-temp wheel painting & precision brake caliper finishes',
    description: 'Give your wheels and brakes a custom OEM-plus or bold accent look. Includes complete wheel prep, high-temperature heat painting, curb rash repair, and ceramic coated brake calipers.',
    iconName: 'Circle',
    minQuantity: 1,
    avgTurnaround: '2-3 Business Days',
    method: 'wheel_caliper',
    features: [
      'High-temperature heat resistant caliper paint in any custom color',
      'Satin Black, Gloss Black, Bronze, Hyper Silver, and Custom Metallic Shades',
      'Professional curb rash repair and structural wheel inspection',
      'Custom caliper accent badging and clean factory-style finish',
      'Ceramic coating applied directly to wheels & calipers for easy brake dust cleanup'
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
  },
  {
    id: 'residential_coating',
    title: 'Residential & Commercial Ceramic Coatings',
    subtitle: 'System X professional ceramic protection for home & business surfaces',
    description: 'The System X Home Protection line brings professional ceramic coating technology into residential and commercial spaces. Creates an invisible protective barrier that helps surfaces resist staining, moisture, chemicals, UV exposure and everyday wear — while making routine cleaning faster and easier.',
    iconName: 'Home',
    minQuantity: 1,
    avgTurnaround: '1 Business Day',
    method: 'residential_coating',
    features: [
      'Granite, quartz, marble, and solid stone countertops',
      'Shower glass, mirrors, tile, and porcelain bathroom surfaces',
      'Stainless steel appliances, sinks, BBQ grills & outdoor kitchens',
      'Solar panels, outdoor light fixtures, and architectural glass',
      'Leather, vinyl, carpet, fabric, & commercial high-touch surfaces'
    ],
    sampleImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    popularFor: 'Luxury homes, new kitchen countertops, glass shower doors, outdoor kitchens, commercial spaces'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'f1',
    category: 'Ceramic Coatings',
    question: 'What Ceramic Coating lifespans do you offer?',
    answer: 'We offer professional Ceramic Coating packages with lifespans ranging from 2, 6, or 10 years of durable protection. All packages include multi-stage paint correction prior to application for peak clarity and reflection.'
  },
  {
    id: 'f2',
    category: 'Wheel & Caliper Painting',
    question: 'How durable is custom wheel and caliper painting against brake heat?',
    answer: 'We utilize industrial high-temperature heat-resistant coatings specifically engineered for brake components and wheels. This prevents chipping, peeling, or fading due to extreme track or highway brake heat.'
  },
  {
    id: 'f3',
    category: 'Residential Coatings',
    question: 'What home surfaces can be ceramic coated with System X Home Protection?',
    answer: 'System X Home Protection can be applied to kitchen countertops (granite, quartz, marble), shower glass, bathroom tile, stainless steel appliances, BBQ grills, solar panels, and commercial high-touch surfaces to resist staining and ease cleaning.'
  },
  {
    id: 'f4',
    category: 'Vinyl Wraps',
    question: 'Will a custom vinyl wrap damage my car’s original factory paint?',
    answer: 'No! As long as your vehicle has OEM factory paint in good condition, high quality cast vinyl wraps actually protect your underlying paint from UV fading and mild road debris. Wraps can be safely removed anytime.'
  }
];
