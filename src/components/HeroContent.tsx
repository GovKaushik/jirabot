import { ArrowRight, Play, Clock, Users, Zap } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks';
import { HeroContentProps } from '@/types/hero';
import CTAButtons from './CTAButtons';
import MetricsCard from './MetricsCard';
import FloatingElement from './FloatingElement';

// SOLID Principle: Single Responsibility - HeroContent handles hero content layout and animations
// DRY Principle: Reusable hero content structure

const HeroContent = ({
  headline = "Streamline Your Child Welfare JIRA Workflows",
  subheadline = "AI-powered bot that automates pipeline management for implementation teams",
  primaryCTA = {
    text: "Get Started",
    icon: <ArrowRight className="w-5 h-5" />,
  },
  secondaryCTA = {
    text: "Watch Demo",
    icon: <Play className="w-5 h-5" />,
  },
  animated = true,
  showMetrics = true,
}: HeroContentProps) => {
  const { ref: contentRef, isVisible: contentVisible } = useIntersectionObserver({
    threshold: 0.3,
    freezeOnceVisible: true,
  });

  const { ref: metricsRef, isVisible: metricsVisible } = useIntersectionObserver({
    threshold: 0.2,
    freezeOnceVisible: true,
  });

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
      {/* Content Section */}
      <div
        ref={contentRef}
        className={`space-y-8 ${
          animated
            ? `transition-all duration-1000 ${
                contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`
            : ''
        }`}
      >
        {/* Headline */}
        <div className="space-y-6">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-gradient-primary">{headline}</span>
          </h1>

          <p className="text-xl lg:text-2xl text-secondary-600 leading-relaxed max-w-2xl">
            {subheadline}
          </p>
        </div>

        {/* CTA Buttons */}
        <CTAButtons
          primaryCTA={primaryCTA}
          secondaryCTA={secondaryCTA}
          layout="horizontal"
          size="xl"
        />

        {/* Trust indicators */}
        <div className="pt-8">
          <p className="text-sm font-medium text-secondary-500 mb-4">
            Trusted by 100+ child welfare implementation teams
          </p>
          <div className="flex items-center space-x-6 opacity-60">
            <div className="text-xs font-semibold text-secondary-400 px-3 py-1 bg-secondary-100 rounded-full">
              ENTERPRISE READY
            </div>
            <div className="text-xs font-semibold text-secondary-400 px-3 py-1 bg-secondary-100 rounded-full">
              HIPAA COMPLIANT
            </div>
            <div className="text-xs font-semibold text-secondary-400 px-3 py-1 bg-secondary-100 rounded-full">
              24/7 SUPPORT
            </div>
          </div>
        </div>
      </div>

      {/* Visual/Metrics Section */}
      <div
        ref={metricsRef}
        className={`relative ${
          animated
            ? `transition-all duration-1000 delay-300 ${
                metricsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`
            : ''
        }`}
      >
        {/* Floating illustration elements */}
        <div className="relative">
          {/* Central illustration placeholder */}
          <div className="relative bg-gradient-to-br from-primary-100 to-accent-100 rounded-3xl p-8 mb-8">
            <div className="text-center space-y-6">
              <FloatingElement delay={0} duration={3000}>
                <div className="w-24 h-24 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-12 h-12 text-white" />
                </div>
              </FloatingElement>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-secondary-900">
                  JIRA Pipeline Bot
                </h3>
                <p className="text-secondary-600">
                  Intelligent workflow automation
                </p>
              </div>

              {/* Floating UI elements */}
              <div className="relative h-32">
                <FloatingElement delay={500} duration={4000} className="absolute top-0 left-4">
                  <div className="bg-white shadow-lg rounded-lg p-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-success-400 rounded-full"></div>
                      <span className="font-medium">Ticket routed</span>
                    </div>
                  </div>
                </FloatingElement>

                <FloatingElement delay={1000} duration={3500} className="absolute top-4 right-4">
                  <div className="bg-white shadow-lg rounded-lg p-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                      <span className="font-medium">Status updated</span>
                    </div>
                  </div>
                </FloatingElement>

                <FloatingElement delay={1500} duration={4500} className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white shadow-lg rounded-lg p-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                      <span className="font-medium">Report generated</span>
                    </div>
                  </div>
                </FloatingElement>
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          {showMetrics && (
            <div className="grid grid-cols-3 gap-4">
              <MetricsCard
                value="85%"
                label="Time Saved"
                change="+12%"
                trend="up"
                icon={<Clock className="w-6 h-6" />}
              />
              <MetricsCard
                value="50+"
                label="Teams"
                change="+23"
                trend="up"
                icon={<Users className="w-6 h-6" />}
              />
              <MetricsCard
                value="99.9%"
                label="Uptime"
                change="stable"
                trend="neutral"
                icon={<Zap className="w-6 h-6" />}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroContent;