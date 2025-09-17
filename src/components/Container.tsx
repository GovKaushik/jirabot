import { forwardRef } from 'react';
import { ContainerProps } from '@/types';

// SOLID Principle: Single Responsibility - Container handles responsive width constraints and content centering
// Open/Closed Principle: Extensible size system without modifying existing functionality

const Container = forwardRef<HTMLDivElement, ContainerProps>(({
  size = 'lg',
  padding = 'md',
  center = true,
  className = '',
  children,
  'data-testid': testId,
  ...props
}, ref) => {
  // Size mappings using Tailwind's max-width classes - DRY Principle
  const sizeStyles = {
    sm: 'max-w-screen-sm',     // 640px
    md: 'max-w-screen-md',     // 768px
    lg: 'max-w-screen-lg',     // 1024px
    xl: 'max-w-screen-xl',     // 1280px
    '2xl': 'max-w-screen-2xl', // 1536px
    '3xl': 'max-w-8xl',        // 1408px (custom)
    '4xl': 'max-w-9xl',        // 1536px (custom)
    full: 'max-w-full'         // 100%
  };

  // Padding mappings
  const paddingStyles = {
    none: 'px-0',
    sm: 'px-4 md:px-6',
    md: 'px-6 md:px-8',
    lg: 'px-8 md:px-12',
    xl: 'px-12 md:px-16'
  };

  // Base styles - always applied
  const baseStyles = 'w-full';

  // Centering logic
  const centerStyles = center ? 'mx-auto' : '';

  // Combine all styles
  const containerStyles = `
    ${baseStyles}
    ${sizeStyles[size]}
    ${paddingStyles[padding]}
    ${centerStyles}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div
      ref={ref}
      className={containerStyles}
      data-testid={testId}
      {...props}
    >
      {children}
    </div>
  );
});

Container.displayName = 'Container';

export default Container;