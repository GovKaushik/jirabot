// Integration Showcase types
export interface Integration {
  id: string;
  name: string;
  description: string;
  category: 'core' | 'child-welfare' | 'analytics' | 'communication' | 'security' | 'workflow';
  logo?: React.ReactNode;
  logoUrl?: string; // For external logos
  status: 'available' | 'coming-soon' | 'beta';
  featured?: boolean;
  url?: string;
  capabilities?: string[];
}

export interface IntegrationsProps {
  title?: string;
  subtitle?: string;
  integrations?: Integration[];
  animated?: boolean;
  showCategories?: boolean;
  className?: string;
}

export interface IntegrationGridProps {
  integrations: Integration[];
  animated?: boolean;
  columns?: 2 | 3 | 4 | 5 | 6;
  gap?: 'sm' | 'md' | 'lg';
  showFilters?: boolean;
}

export interface IntegrationCardProps {
  integration: Integration;
  animated?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'minimal' | 'detailed';
  onClick?: (integration: Integration) => void;
}

export interface IntegrationCategoryProps {
  category: string;
  integrations: Integration[];
  animated?: boolean;
  expanded?: boolean;
  onToggle?: () => void;
}