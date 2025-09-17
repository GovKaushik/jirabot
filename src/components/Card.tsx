import { forwardRef } from 'react';
import { CardProps } from '@/types';

// SOLID Principle: Single Responsibility - Card handles only card container styling and behavior
// Open/Closed Principle: Easy to extend with new variants without modifying existing code

const Card = forwardRef<HTMLDivElement, CardProps>(({
  variant = 'default',
  padding = 'md',
  hover = false,
  interactive = false,
  className = '',
  children,
  onClick,
  'data-testid': testId,
  ...props
}, ref) => {
  // Variant styling mappings - DRY Principle: Centralized styling logic
  const variantStyles = {
    default: 'bg-white border border-secondary-200 shadow-sm',
    elevated: 'bg-white shadow-lg border-0',
    outlined: 'bg-white border-2 border-primary-200 shadow-none',
    filled: 'bg-primary-50 border border-primary-100 shadow-none',
    glass: 'glass border border-white/30 shadow-lg'
  };

  // Padding mappings
  const paddingStyles = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  };

  // Base styles for all cards
  const baseStyles = 'rounded-xl transition-all duration-200 ease-in-out';

  // Hover effect styles
  const hoverStyles = hover ? 'hover:shadow-xl hover:-translate-y-1' : '';

  // Interactive styles (clickable cards)
  const interactiveStyles = interactive || onClick ? `
    cursor-pointer
    hover:shadow-lg
    active:scale-98
    focus:outline-none
    focus:ring-2
    focus:ring-primary-500
    focus:ring-offset-2
  ` : '';

  // Combine all styles
  const cardStyles = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${paddingStyles[padding]}
    ${hoverStyles}
    ${interactiveStyles}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  // Handle keyboard interaction for accessibility
  const handleKeyPress = (event: React.KeyboardEvent) => {
    if ((interactive || onClick) && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      onClick?.();
    }
  };

  return (
    <div
      ref={ref}
      className={cardStyles}
      onClick={onClick}
      onKeyPress={handleKeyPress}
      role={interactive || onClick ? 'button' : undefined}
      tabIndex={interactive || onClick ? 0 : undefined}
      data-testid={testId}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';

export default Card;