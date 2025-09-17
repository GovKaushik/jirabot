// Hero section types
export interface HeroProps {
  className?: string;
  children?: React.ReactNode;
}

export interface HeroContentProps {
  headline?: string;
  subheadline?: string;
  primaryCTA?: {
    text: string;
    onClick?: () => void;
    icon?: React.ReactNode;
  };
  secondaryCTA?: {
    text: string;
    onClick?: () => void;
    icon?: React.ReactNode;
  };
  animated?: boolean;
  showMetrics?: boolean;
}

export interface CTAButtonsProps {
  primaryCTA?: {
    text: string;
    onClick?: () => void;
    icon?: React.ReactNode;
  };
  secondaryCTA?: {
    text: string;
    onClick?: () => void;
    icon?: React.ReactNode;
  };
  layout?: 'horizontal' | 'vertical';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export interface MetricsCardProps {
  value: string;
  label: string;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
  icon?: React.ReactNode;
}

export interface FloatingElementProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}