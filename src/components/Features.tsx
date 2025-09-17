import { Container, Section } from '@/components';
import { FeaturesProps } from '@/types/features';
import { useIntersectionObserver } from '@/hooks';
import FeatureGrid from './FeatureGrid';

// SOLID Principle: Single Responsibility - Features handles features section layout and content
// DRY Principle: Reusable features section component

const Features = ({
  title = "Core Bot Capabilities",
  subtitle = "Powerful features designed specifically for child welfare JIRA workflow automation",
  features = [],
  animated = true,
  layout = 'grid',
  className = '',
}: FeaturesProps) => {
  const { ref: titleRef, isVisible: titleVisible } = useIntersectionObserver({
    threshold: 0.3,
    freezeOnceVisible: true,
  });

  const { ref: contentRef, isVisible: contentVisible } = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  // Layout configurations
  const getLayoutComponent = () => {
    switch (layout) {
      case 'grid':
        return (
          <FeatureGrid
            features={features}
            animated={animated}
            columns={features.length > 3 ? 2 : Math.min(features.length, 4) as 1 | 2 | 3 | 4}
            gap="lg"
          />
        );
      case 'list':
        return (
          <FeatureGrid
            features={features}
            animated={animated}
            columns={1}
            gap="md"
          />
        );
      case 'carousel':
        // Future implementation for carousel layout
        return (
          <FeatureGrid
            features={features}
            animated={animated}
            columns={3}
            gap="lg"
          />
        );
      default:
        return (
          <FeatureGrid
            features={features}
            animated={animated}
            columns={2}
            gap="lg"
          />
        );
    }
  };

  return (
    <Section
      id="features"
      padding="xl"
      className={className}
    >
      <Container size="xl">
        {/* Section Header */}
        <div
          ref={titleRef}
          className={`text-center mb-16 space-y-4 ${
            animated
              ? `transition-all duration-1000 ${
                  titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`
              : ''
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900">
            {title}
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Features Content */}
        <div
          ref={contentRef}
          className={animated
            ? `transition-all duration-1000 delay-300 ${
                contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`
            : ''
          }
        >
          {getLayoutComponent()}
        </div>
      </Container>
    </Section>
  );
};

export default Features;