// Features section types
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error';
  benefits?: string[];
  highlight?: boolean;
}

export interface FeaturesProps {
  title?: string;
  subtitle?: string;
  features?: Feature[];
  animated?: boolean;
  layout?: 'grid' | 'list' | 'carousel';
  className?: string;
}

export interface FeatureCardProps {
  feature: Feature;
  index?: number;
  animated?: boolean;
  variant?: 'default' | 'highlighted' | 'compact';
  onClick?: (feature: Feature) => void;
}

export interface FeatureGridProps {
  features: Feature[];
  animated?: boolean;
  columns?: 1 | 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg' | 'xl';
}

export interface FeatureIconProps {
  icon: React.ReactNode;
  color?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
}