import { Card } from '@/components';
import { FeatureCardProps } from '@/types/features';
import { useIntersectionObserver } from '@/hooks';
import FeatureIcon from './FeatureIcon';

// SOLID Principle: Single Responsibility - FeatureCard handles feature display with animations
// Liskov Substitution Principle: Different variants while maintaining the same interface

const FeatureCard = ({
  feature,
  index = 0,
  animated = true,
  variant = 'default',
  onClick,
}: FeatureCardProps) => {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.2,
    freezeOnceVisible: true,
  });

  // Variant styles
  const variantStyles = {
    default: 'hover:shadow-xl',
    highlighted: 'ring-2 ring-primary-200 hover:ring-primary-300',
    compact: 'p-4',
  };

  // Animation delay based on index
  const animationDelay = animated ? index * 150 : 0;

  // Animation classes
  const animationClasses = animated
    ? `transition-all duration-700 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      }`
    : '';

  const handleClick = () => {
    if (onClick) {
      onClick(feature);
    }
  };

  return (
    <div
      ref={ref}
      className={animationClasses}
      style={animated ? { transitionDelay: `${animationDelay}ms` } : undefined}
    >
      <Card
        variant={feature.highlight ? 'elevated' : 'default'}
        padding={variant === 'compact' ? 'md' : 'lg'}
        hover
        interactive={!!onClick}
        onClick={handleClick}
        className={`h-full ${variantStyles[variant]} ${feature.highlight ? 'ring-2 ring-primary-200' : ''}`}
      >
        <div className="space-y-6">
          {/* Icon */}
          <div className="flex justify-center">
            <FeatureIcon
              icon={feature.icon}
              color={feature.color || 'primary'}
              size="lg"
              animated={animated}
            />
          </div>

          {/* Content */}
          <div className="text-center space-y-4">
            <h3 className="text-xl font-semibold text-secondary-900">
              {feature.title}
            </h3>
            <p className="text-secondary-600 leading-relaxed">
              {feature.description}
            </p>

            {/* Benefits list */}
            {feature.benefits && feature.benefits.length > 0 && (
              <ul className="text-sm text-secondary-500 space-y-2 text-left">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Highlight badge */}
          {feature.highlight && (
            <div className="absolute top-4 right-4">
              <div className="bg-gradient-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                Popular
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default FeatureCard;