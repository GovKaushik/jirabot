import { forwardRef } from 'react';
import { Loader2 } from 'lucide-react';
import { ButtonProps } from '@/types';

// SOLID Principle: Single Responsibility - Button handles only button rendering and styling
// DRY Principle: Centralized variant and size mappings to avoid repetition

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  rightIcon,
  fullWidth = false,
  className = '',
  children,
  onClick,
  type = 'button',
  'data-testid': testId,
  ...props
}, ref) => {
  // Variant styling mappings - Open/Closed Principle: Easy to extend with new variants
  const variantStyles = {
    primary: 'bg-gradient-primary text-white hover:shadow-primary focus:ring-primary-500 disabled:bg-primary-300',
    secondary: 'bg-secondary-100 text-secondary-900 hover:bg-secondary-200 focus:ring-secondary-500 disabled:bg-secondary-50',
    outline: 'border-2 border-primary-500 text-primary-600 hover:bg-primary-50 focus:ring-primary-500 disabled:border-primary-200 disabled:text-primary-300',
    ghost: 'text-primary-600 hover:bg-primary-50 focus:ring-primary-500 disabled:text-primary-300'
  };

  // Size styling mappings
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm font-medium',
    md: 'px-4 py-2 text-base font-medium',
    lg: 'px-6 py-3 text-lg font-semibold',
    xl: 'px-8 py-4 text-xl font-semibold'
  };

  // Icon size mappings
  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-7 h-7'
  };

  // Base styles applying to all buttons
  const baseStyles = `
    inline-flex items-center justify-center rounded-lg font-medium
    transition-all duration-200 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:cursor-not-allowed disabled:opacity-50
    active:scale-95 transform
  `;

  // Conditional styles
  const widthStyle = fullWidth ? 'w-full' : '';
  const cursorStyle = loading ? 'cursor-wait' : '';

  // Combine all styles
  const buttonStyles = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${widthStyle}
    ${cursorStyle}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  // Determine which icon to show on the left
  const leftIcon = loading ? (
    <Loader2 className={`${iconSizes[size]} animate-spin`} />
  ) : (
    iconPosition === 'left' && icon && (
      <span className={iconSizes[size]}>{icon}</span>
    )
  );

  // Determine which icon to show on the right
  const showRightIcon = iconPosition === 'right' && icon && !loading;
  const showBothIcons = iconPosition === 'both' && icon && rightIcon && !loading;

  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={buttonStyles}
      data-testid={testId}
      {...props}
    >
      {/* Left icon or loading spinner */}
      {leftIcon && (
        <span className={children ? 'mr-2' : ''}>
          {leftIcon}
        </span>
      )}

      {/* Button content */}
      {children}

      {/* Right icon */}
      {showRightIcon && (
        <span className={`${iconSizes[size]} ${children ? 'ml-2' : ''}`}>
          {icon}
        </span>
      )}

      {/* Both icons case - right icon */}
      {showBothIcons && (
        <span className={`${iconSizes[size]} ${children ? 'ml-2' : ''}`}>
          {rightIcon}
        </span>
      )}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;