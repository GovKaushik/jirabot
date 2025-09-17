// Component exports - DRY Principle: Single point of import for all components
export { default as Button } from './Button';
export { default as Card } from './Card';
export { default as Container } from './Container';
export { default as Section } from './Section';
export { default as Navigation } from './Navigation';
export { default as MobileMenu } from './MobileMenu';
export { default as Hero } from './Hero';
export { default as HeroContent } from './HeroContent';
export { default as CTAButtons } from './CTAButtons';
export { default as MetricsCard } from './MetricsCard';
export { default as FloatingElement } from './FloatingElement';
export { default as Features } from './Features';
export { default as FeatureCard } from './FeatureCard';
export { default as FeatureGrid } from './FeatureGrid';
export { default as FeatureIcon } from './FeatureIcon';
export { default as HowItWorks } from './HowItWorks';
export { default as ProcessStep } from './ProcessStep';
export { default as ProcessFlow } from './ProcessFlow';
export { default as Timeline } from './Timeline';
export { default as QuestionCarousel } from './QuestionCarousel';
export { default as QuestionCard } from './QuestionCard';
export { default as CarouselNavigation } from './CarouselNavigation';
export { default as Integrations } from './Integrations';
export { default as IntegrationGrid } from './IntegrationGrid';
export { default as IntegrationCard } from './IntegrationCard';
export { default as Footer } from './Footer';
export { default as ContactInfo } from './ContactInfo';
export { default as SocialLinks } from './SocialLinks';
export { default as FinalCTA } from './FinalCTA';

// Re-export types for convenience
export type {
  ButtonProps,
  ButtonVariant,
  ButtonSize,
  IconPosition,
  CardProps,
  CardVariant,
  ContainerProps,
  ContainerSize,
  SectionProps,
  SectionPadding,
  SectionBackground,
  SectionElement,
  PaddingSize,
} from '@/types';