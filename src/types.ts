export type CustomizationMethod = 'ppf' | 'ceramic_coating' | 'window_tint' | 'vinyl_wrap' | 'wheel_caliper' | 'premium_detail';

export interface BusinessService {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  minQuantity: number;
  avgTurnaround: string;
  method: CustomizationMethod;
  features: string[];
  sampleImage: string;
  popularFor: string;
}

export interface CatalogItem {
  id: string;
  name: string;
  brand: string;
  category: string;
  basePrice?: number;
  material: string;
  description: string;
  colors: { name: string; hex: string }[];
  image: string;
  supportedMethods: CustomizationMethod[];
  minQty: number;
}

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: string;
  method: CustomizationMethod;
  description: string;
  quantity: number;
  image: string;
  tags: string[];
}

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface OrderStatus {
  orderId: string;
  clientName: string;
  projectName: string;
  itemCount: number;
  method: string;
  status: 'inspection_decon' | 'in_prep' | 'in_production' | 'quality_check' | 'ready_for_pickup' | 'shipped';
  estimatedCompletion: string;
  trackingNumber?: string;
  proofApproved: boolean;
  timeline: {
    step: string;
    completed: boolean;
    date?: string;
  }[];
}

export interface QuoteFormData {
  serviceId: string;
  catalogItemId?: string;
  vehicleYearMakeModel?: string;
  vehicleType?: string;
  selectedColor: string;
  quantity: number;
  customizationMethod: CustomizationMethod;
  locations: string[];
  customText?: string;
  fontStyle?: string;
  uploadedLogoUrl?: string;
  uploadedLogoName?: string;
  needDesignHelp: boolean;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  companyName?: string;
  turnaroundSpeed: 'standard' | 'rush' | 'super_rush';
  comments?: string;
}
