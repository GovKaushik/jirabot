import { forwardRef } from 'react';
import { Container, Section } from '@/components';
import { HeroProps } from '@/types/hero';

// SOLID Principle: Single Responsibility - Hero handles hero section layout and background
// Open/Closed Principle: Extensible through children composition

const Hero = forwardRef<HTMLElement, HeroProps>(({
  className = '',
  children,
  ...props
}, ref) => {
  return (
    <Section
      ref={ref}
      as="main"
      id="hero"
      background="none"
      padding="none"
      className={`
        relative overflow-hidden min-h-screen
        bg-gradient-to-br from-primary-50 via-white to-accent-50
        ${className}
      `}
      {...props}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient orb - top right */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-200/40 to-accent-200/40 rounded-full blur-3xl" />

        {/* Medium gradient orb - bottom left */}
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-tr from-accent-200/30 to-primary-200/30 rounded-full blur-2xl" />

        {/* Small accent orb - middle */}
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-br from-primary-300/20 to-accent-300/20 rounded-full blur-xl" />

        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-primary-400/30 rounded transform rotate-45 animate-bounce-gentle" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-20 w-6 h-6 bg-accent-400/30 rounded-full animate-bounce-gentle" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-primary-500/40 rounded transform rotate-12 animate-bounce-gentle" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-40 w-5 h-5 bg-accent-500/30 rounded transform -rotate-45 animate-bounce-gentle" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen pt-16">
        <Container size="xl" padding="lg">
          {children}
        </Container>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';

export default Hero;