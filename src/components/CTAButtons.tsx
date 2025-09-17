import { Button } from '@/components';
import { CTAButtonsProps } from '@/types/hero';

// SOLID Principle: Single Responsibility - CTAButtons handles call-to-action button layout and behavior
// DRY Principle: Reusable CTA component for different sections

const CTAButtons = ({
  primaryCTA,
  secondaryCTA,
  layout = 'horizontal',
  size = 'lg',
}: CTAButtonsProps) => {
  // Layout classes based on orientation
  const layoutClasses = {
    horizontal: 'flex flex-col sm:flex-row gap-4 justify-center',
    vertical: 'flex flex-col gap-4 items-center'
  };

  return (
    <div className={layoutClasses[layout]}>
      {primaryCTA && (
        <Button
          variant="primary"
          size={size}
          icon={primaryCTA.icon}
          iconPosition="right"
          onClick={primaryCTA.onClick}
          className="transform hover:scale-105 transition-transform duration-200"
        >
          {primaryCTA.text}
        </Button>
      )}

      {secondaryCTA && (
        <Button
          variant="outline"
          size={size}
          icon={secondaryCTA.icon}
          iconPosition="left"
          onClick={secondaryCTA.onClick}
          className="transform hover:scale-105 transition-transform duration-200"
        >
          {secondaryCTA.text}
        </Button>
      )}
    </div>
  );
};

export default CTAButtons;