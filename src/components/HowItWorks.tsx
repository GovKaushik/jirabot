import { Container, Section } from '@/components';
import { HowItWorksProps } from '@/types/process';
import { useIntersectionObserver } from '@/hooks';
import ProcessFlow from './ProcessFlow';
import Timeline from './Timeline';

// SOLID Principle: Single Responsibility - HowItWorks handles process section layout
// Open/Closed Principle: Extensible layout patterns through composition

const HowItWorks = ({
  title = "How It Works",
  subtitle = "Simple 4-step process to get your JIRA bot up and running",
  steps = [],
  animated = true,
  layout = 'horizontal',
  className = '',
}: HowItWorksProps) => {
  const { ref: titleRef, isVisible: titleVisible } = useIntersectionObserver({
    threshold: 0.3,
    freezeOnceVisible: true,
  });

  const { ref: contentRef, isVisible: contentVisible } = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  // Layout component selector
  const getLayoutComponent = () => {
    switch (layout) {
      case 'horizontal':
        return (
          <ProcessFlow
            steps={steps}
            animated={animated}
            direction="horizontal"
            interactive={false}
          />
        );
      case 'vertical':
        return (
          <ProcessFlow
            steps={steps}
            animated={animated}
            direction="vertical"
            interactive={false}
          />
        );
      case 'timeline':
        return (
          <Timeline
            steps={steps}
            animated={animated}
            orientation="alternating"
            showProgress={true}
            activeStep={steps.length - 1}
          />
        );
      default:
        return (
          <ProcessFlow
            steps={steps}
            animated={animated}
            direction="horizontal"
            interactive={false}
          />
        );
    }
  };

  return (
    <Section
      id="how-it-works"
      padding="xl"
      background="secondary"
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

        {/* Process Content */}
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

        {/* Call to Action */}
        {animated && contentVisible && (
          <div className="text-center mt-16 animate-fade-in">
            <p className="text-lg text-secondary-600 mb-6">
              Ready to streamline your child welfare JIRA workflows?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-primary text-white rounded-lg font-semibold hover:shadow-primary transform hover:scale-105 transition-all duration-200">
                Start Your Implementation
              </button>
              <button className="px-8 py-3 border-2 border-primary-500 text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-200">
                Schedule Demo
              </button>
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
};

export default HowItWorks;