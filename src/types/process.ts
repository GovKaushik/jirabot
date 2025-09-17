// How It Works section types
export interface ProcessStep {
  id: string;
  number: number;
  title: string;
  description: string;
  details?: string[];
  icon: React.ReactNode;
  color?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error';
  duration?: string;
  complexity?: 'simple' | 'medium' | 'complex';
}

export interface HowItWorksProps {
  title?: string;
  subtitle?: string;
  steps?: ProcessStep[];
  animated?: boolean;
  layout?: 'horizontal' | 'vertical' | 'timeline';
  className?: string;
}

export interface ProcessStepProps {
  step: ProcessStep;
  index?: number;
  animated?: boolean;
  variant?: 'default' | 'compact' | 'detailed';
  isActive?: boolean;
  onClick?: (step: ProcessStep) => void;
}

export interface ProcessFlowProps {
  steps: ProcessStep[];
  animated?: boolean;
  direction?: 'horizontal' | 'vertical';
  interactive?: boolean;
}

export interface TimelineProps {
  steps: ProcessStep[];
  animated?: boolean;
  orientation?: 'left' | 'right' | 'alternating';
  showProgress?: boolean;
  activeStep?: number;
}