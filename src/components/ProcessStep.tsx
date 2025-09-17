import { Card } from '@/components';
import { ProcessStepProps } from '@/types/process';
import { useIntersectionObserver } from '@/hooks';

// SOLID Principle: Single Responsibility - ProcessStep handles individual step display
// Open/Closed Principle: Extensible variants and states

const ProcessStep = ({
  step,
  index = 0,
  animated = true,
  variant = 'default',
  isActive = false,
  onClick,
}: ProcessStepProps) => {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.3,
    freezeOnceVisible: true,
  });

  // Color mappings for step numbers - DRY Principle
  const colorStyles = {
    primary: 'bg-gradient-primary text-white',
    secondary: 'bg-secondary-500 text-white',
    accent: 'bg-gradient-to-r from-accent-500 to-accent-400 text-white',
    success: 'bg-success-500 text-white',
    warning: 'bg-warning-500 text-white',
    error: 'bg-error-500 text-white',
  };

  // Variant configurations
  const variantConfig = {
    default: {
      cardPadding: 'lg' as const,
      numberSize: 'w-16 h-16',
      numberText: 'text-xl font-bold',
      titleSize: 'text-xl',
    },
    compact: {
      cardPadding: 'md' as const,
      numberSize: 'w-12 h-12',
      numberText: 'text-lg font-bold',
      titleSize: 'text-lg',
    },
    detailed: {
      cardPadding: 'xl' as const,
      numberSize: 'w-20 h-20',
      numberText: 'text-2xl font-bold',
      titleSize: 'text-2xl',
    },
  };

  const config = variantConfig[variant];
  const stepColor = step.color || 'primary';

  // Animation delay based on index
  const animationDelay = animated ? index * 200 : 0;

  // Animation classes
  const animationClasses = animated
    ? `transition-all duration-700 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      }`
    : '';

  // Active state styles
  const activeStyles = isActive
    ? 'ring-2 ring-primary-300 shadow-primary'
    : '';

  const handleClick = () => {
    if (onClick) {
      onClick(step);
    }
  };

  return (
    <div
      ref={ref}
      className={animationClasses}
      style={animated ? { transitionDelay: `${animationDelay}ms` } : undefined}
    >
      <Card
        variant={isActive ? 'elevated' : 'default'}
        padding={config.cardPadding}
        hover
        interactive={!!onClick}
        onClick={handleClick}
        className={`h-full text-center ${activeStyles}`}
      >
        <div className="space-y-6">
          {/* Step Number and Icon */}
          <div className="flex flex-col items-center space-y-4">
            {/* Step Number */}
            <div
              className={`
                ${config.numberSize}
                ${colorStyles[stepColor]}
                ${config.numberText}
                rounded-full flex items-center justify-center
                shadow-lg transform transition-transform duration-300
                ${isActive ? 'scale-110' : 'hover:scale-105'}
              `}
            >
              {step.number}
            </div>

            {/* Icon */}
            {step.icon && (
              <div className="w-12 h-12 text-secondary-600">
                {step.icon}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="space-y-4">
            <h3 className={`${config.titleSize} font-semibold text-secondary-900`}>
              {step.title}
            </h3>

            <p className="text-secondary-600 leading-relaxed">
              {step.description}
            </p>

            {/* Duration and Complexity */}
            <div className="flex justify-center space-x-4 text-sm">
              {step.duration && (
                <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full">
                  {step.duration}
                </span>
              )}
              {step.complexity && (
                <span className={`px-3 py-1 rounded-full ${
                  step.complexity === 'simple' ? 'bg-success-100 text-success-700' :
                  step.complexity === 'medium' ? 'bg-warning-100 text-warning-700' :
                  'bg-error-100 text-error-700'
                }`}>
                  {step.complexity}
                </span>
              )}
            </div>

            {/* Details */}
            {step.details && step.details.length > 0 && variant === 'detailed' && (
              <ul className="text-sm text-secondary-500 space-y-2 text-left">
                {step.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProcessStep;