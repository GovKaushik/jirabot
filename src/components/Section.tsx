import { forwardRef } from 'react';
import { SectionProps } from '@/types';

// SOLID Principle: Single Responsibility - Section handles semantic layout with configurable padding and backgrounds
// Liskov Substitution Principle: Can render as different HTML elements while maintaining the same interface

const Section = forwardRef<HTMLElement, SectionProps>(({
  padding = 'lg',
  background = 'none',
  as: Element = 'section',
  className = '',
  children,
  id,
  'data-testid': testId,
  ...props
}, ref) => {
  // Padding scale mappings - DRY Principle: Centralized spacing system
  const paddingStyles = {
    none: 'py-0',
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-20',
    xl: 'py-20 md:py-24',
    '2xl': 'py-24 md:py-32'
  };

  // Background variant mappings - Open/Closed Principle: Easy to extend
  const backgroundStyles = {
    none: '',
    primary: 'bg-gradient-to-br from-primary-50 to-primary-100',
    secondary: 'bg-secondary-50',
    accent: 'bg-gradient-to-br from-accent-50 to-accent-100',
    gray: 'bg-secondary-100'
  };

  // Base styles
  const baseStyles = 'w-full';

  // Combine all styles
  const sectionStyles = `
    ${baseStyles}
    ${paddingStyles[padding]}
    ${backgroundStyles[background]}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <Element
      ref={ref as any}
      id={id}
      className={sectionStyles}
      data-testid={testId}
      {...props}
    >
      {children}
    </Element>
  );
});

Section.displayName = 'Section';

export default Section;