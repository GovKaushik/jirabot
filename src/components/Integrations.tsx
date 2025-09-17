import { Container, Section } from '@/components';
import { useIntersectionObserver } from '@/hooks';
import { IntegrationsProps } from '@/types/integrations';
import { allIntegrations, featuredIntegrations } from '@/data/integrations';
import IntegrationGrid from './IntegrationGrid';
import IntegrationCard from './IntegrationCard';

// SOLID Principle: Single Responsibility - Integrations handles section layout and featured display
// Open/Closed Principle: Extensible layout patterns through composition

const Integrations = ({
  title = "Platform Integrations",
  subtitle = "Seamlessly connect with your existing child welfare technology stack",
  integrations = allIntegrations,
  animated = true,
  showCategories = true,
  className = '',
}: IntegrationsProps) => {
  const { ref: titleRef, isVisible: titleVisible } = useIntersectionObserver({
    threshold: 0.3,
    freezeOnceVisible: true,
  });

  const { ref: featuredRef, isVisible: featuredVisible } = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  const { ref: gridRef, isVisible: gridVisible } = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  return (
    <Section
      id="integrations"
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

        {/* Featured Integrations */}
        {featuredIntegrations.length > 0 && (
          <div
            ref={featuredRef}
            className={`mb-16 ${
              animated
                ? `transition-all duration-1000 delay-300 ${
                    featuredVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`
                : ''
            }`}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                Core Integrations
              </h3>
              <p className="text-secondary-600">
                Essential platforms that power your child welfare workflow automation
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {featuredIntegrations.map((integration, index) => (
                <div
                  key={integration.id}
                  className={
                    animated
                      ? `transition-all duration-500 delay-${(index + 1) * 200}ms ${
                          featuredVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`
                      : ''
                  }
                >
                  <IntegrationCard
                    integration={integration}
                    animated={animated}
                    size="lg"
                    variant="detailed"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Integrations Grid */}
        <div
          ref={gridRef}
          className={
            animated
              ? `transition-all duration-1000 delay-500 ${
                  gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`
              : ''
          }
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-secondary-900 mb-2">
              Complete Integration Ecosystem
            </h3>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Explore our comprehensive suite of integrations designed specifically
              for child welfare agencies and implementation teams
            </p>
          </div>

          <IntegrationGrid
            integrations={integrations}
            animated={animated && gridVisible}
            columns={3}
            gap="md"
            showFilters={showCategories}
          />
        </div>

        {/* Trust Indicators */}
        {animated && gridVisible && (
          <div className="text-center mt-16 animate-fade-in">
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold text-secondary-900 mb-6">
                Trusted by Child Welfare Agencies Nationwide
              </h3>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-1">15+</div>
                  <div className="text-sm text-secondary-600">State Agencies</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-1">50+</div>
                  <div className="text-sm text-secondary-600">Counties</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-1">99.9%</div>
                  <div className="text-sm text-secondary-600">Uptime</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-1">24/7</div>
                  <div className="text-sm text-secondary-600">Support</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
};

export default Integrations;