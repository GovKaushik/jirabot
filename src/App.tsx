import { ArrowRight, Play, Star, Workflow } from 'lucide-react';
import { Card, Container, Section, Navigation, Hero, HeroContent, Features, HowItWorks, QuestionCarousel, Integrations, FinalCTA, Footer } from '@/components';
import { coreFeatures, additionalFeatures } from '@/data/features';
import { implementationSteps } from '@/data/process';

function App() {

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <Navigation />

      {/* Hero Section */}
      <Hero>
        <HeroContent
          headline="Streamline Your Child Welfare JIRA Workflows"
          subheadline="AI-powered bot that automates pipeline management for implementation teams"
          primaryCTA={{
            text: "Get Started",
            icon: <ArrowRight className="w-5 h-5" />,
            onClick: () => alert('Get Started clicked!'),
          }}
          secondaryCTA={{
            text: "Watch Demo",
            icon: <Play className="w-5 h-5" />,
            onClick: () => alert('Watch Demo clicked!'),
          }}
          animated={true}
          showMetrics={true}
        />
      </Hero>

      {/* Features Section - New Phase 5 Implementation */}
      <Features
        title="Core Bot Capabilities"
        subtitle="Powerful features designed specifically for child welfare JIRA workflow automation"
        features={coreFeatures}
        animated={true}
        layout="grid"
      />

      {/* Additional Features Section */}
      <Section background="secondary" padding="xl">
        <Container size="xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary-900 mb-4">
              Additional Features & Benefits
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Comprehensive suite of tools to enhance your workflow management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature) => (
              <Card key={feature.id} variant="default" padding="lg" hover>
                <div className="text-center space-y-4">
                  <div className={`w-16 h-16 bg-${feature.color}-100 rounded-xl flex items-center justify-center mx-auto`}>
                    <div className={`w-8 h-8 text-${feature.color}-600`}>
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-secondary-900">{feature.title}</h3>
                  <p className="text-secondary-600 text-sm">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* How It Works Section - New Phase 6 Implementation */}
      <HowItWorks
        title="How It Works"
        subtitle="Simple 4-step process to get your JIRA bot up and running"
        steps={implementationSteps}
        animated={true}
        layout="horizontal"
      />

      {/* Process Implementation Details */}
      <Section background="accent" padding="xl">
        <Container size="xl">
          <div>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary-900 mb-4">
                Implementation Approach
              </h2>
              <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
                Structured methodology ensuring smooth deployment and team adoption
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card variant="glass" padding="lg">
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                  <Workflow className="w-6 h-6 inline mr-2" />
                  Process Components
                </h3>
                <ul className="text-secondary-600 space-y-2 text-left">
                  <li>• ProcessStep with numbered workflow visualization</li>
                  <li>• ProcessFlow with connecting arrows and animations</li>
                  <li>• Timeline view for detailed implementation tracking</li>
                  <li>• Duration and complexity indicators for planning</li>
                  <li>• Interactive elements with hover and active states</li>
                </ul>
              </Card>

              <Card variant="glass" padding="lg">
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                  <Star className="w-6 h-6 inline mr-2" />
                  Key Benefits
                </h3>
                <ul className="text-secondary-600 space-y-2 text-left">
                  <li>• Visual step-by-step workflow guidance</li>
                  <li>• Scroll-triggered staggered animations</li>
                  <li>• Responsive layout adapting to all screen sizes</li>
                  <li>• Clear expectations with time and complexity indicators</li>
                  <li>• Professional design building user confidence</li>
                </ul>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Sample Questions Carousel - New Phase 7 Implementation */}
      <QuestionCarousel
        autoAdvance={true}
        autoAdvanceInterval={6000}
        showDots={true}
        showControls={true}
        animated={true}
      />

      {/* Integration Showcase - New Phase 8 Implementation */}
      <Integrations
        title="Platform Integrations"
        subtitle="Seamlessly connect with your existing child welfare technology stack"
        animated={true}
        showCategories={true}
      />

      {/* Final CTA Section - New Phase 9 Implementation */}
      <FinalCTA />

      {/* Footer - New Phase 9 Implementation */}
      <Footer />
    </div>
  );
}

export default App;