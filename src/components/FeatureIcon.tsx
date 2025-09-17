import { FeatureIconProps } from '@/types/features';

// SOLID Principle: Single Responsibility - FeatureIcon handles icon display with color variants
// Open/Closed Principle: Extensible color and size system

const FeatureIcon = ({
  icon,
  color = 'primary',
  size = 'lg',
  animated = true,
}: FeatureIconProps) => {
  // Color variant mappings - DRY Principle
  const colorStyles = {
    primary: 'bg-primary-100 text-primary-600',
    secondary: 'bg-secondary-100 text-secondary-600',
    accent: 'bg-accent-100 text-accent-600',
    success: 'bg-success-100 text-success-600',
    warning: 'bg-warning-100 text-warning-600',
    error: 'bg-error-100 text-error-600',
  };

  // Size mappings
  const sizeStyles = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-20 h-20',
    xl: 'w-24 h-24',
  };

  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
    xl: 'w-12 h-12',
  };

  // Animation classes
  const animationClasses = animated
    ? 'transition-all duration-300 hover:scale-110 hover:shadow-lg'
    : '';

  return (
    <div
      className={`
        ${sizeStyles[size]}
        ${colorStyles[color]}
        ${animationClasses}
        rounded-2xl flex items-center justify-center
        shadow-sm
      `}
    >
      <div className={iconSizes[size]}>
        {icon}
      </div>
    </div>
  );
};

export default FeatureIcon;