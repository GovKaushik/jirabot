// Base component props that all components can extend
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
  'data-testid'?: string;
}

// Button component interfaces
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';
export type IconPosition = 'left' | 'right' | 'both';

export interface ButtonProps extends BaseComponentProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: IconPosition;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

// Card component interfaces
export type CardVariant = 'default' | 'elevated' | 'outlined' | 'filled' | 'glass';
export type PaddingSize = 'none' | 'sm' | 'md' | 'lg' | 'xl';

export interface CardProps extends BaseComponentProps {
  variant?: CardVariant;
  padding?: PaddingSize;
  hover?: boolean;
  interactive?: boolean;
  onClick?: () => void;
}

// Container component interfaces
export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | 'full';

export interface ContainerProps extends BaseComponentProps {
  size?: ContainerSize;
  padding?: PaddingSize;
  center?: boolean;
}

// Section component interfaces
export type SectionPadding = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type SectionBackground = 'none' | 'primary' | 'secondary' | 'accent' | 'gray';
export type SectionElement = 'section' | 'div' | 'main' | 'aside' | 'header' | 'footer';

export interface SectionProps extends BaseComponentProps {
  padding?: SectionPadding;
  background?: SectionBackground;
  as?: SectionElement;
  id?: string;
}

// Hook interfaces
export interface UseIntersectionObserverOptions {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
}

export interface UseIntersectionObserverReturn {
  ref: React.RefObject<HTMLDivElement>;
  entry: IntersectionObserverEntry | undefined;
  isVisible: boolean;
}

// Re-export navigation types
export type {
  NavigationItem,
  NavigationProps,
  MobileMenuProps,
  UseActiveSection,
} from './navigation';

// Re-export hero types
export type {
  HeroProps,
  HeroContentProps,
  CTAButtonsProps,
  MetricsCardProps,
  FloatingElementProps,
} from './hero';

// Re-export features types
export type {
  Feature,
  FeaturesProps,
  FeatureCardProps,
  FeatureGridProps,
  FeatureIconProps,
} from './features';

// Re-export process types
export type {
  ProcessStep,
  HowItWorksProps,
  ProcessStepProps,
  ProcessFlowProps,
  TimelineProps,
} from './process';

// Re-export carousel types
export type {
  SampleQuestion,
  QuestionCarouselProps,
  QuestionCardProps,
  CarouselNavigationProps,
} from './carousel';

// Re-export integration types
export type {
  Integration,
  IntegrationsProps,
  IntegrationGridProps,
  IntegrationCardProps,
  IntegrationCategoryProps,
} from './integrations';

// Re-export footer types
export type {
  FooterLink,
  FooterSection,
  ContactInfo,
  SocialLink,
  FooterProps,
  ContactInfoProps,
  SocialLinksProps,
  FinalCTAProps,
} from './footer';