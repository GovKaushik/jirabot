import { Container, Section, Button } from '@/components';
import { FinalCTAProps } from '@/types/footer';
import { Star, CheckCircle, ArrowRight, Play } from 'lucide-react';

// SOLID Principle: Single Responsibility - FinalCTA handles final conversion section
// Open/Closed Principle: Extensible CTA patterns through composition

const FinalCTA = ({
  title = "Ready to Transform Your Child Welfare Operations?",
  subtitle = "Join 50+ counties and 15+ state agencies already using our AI-powered JIRA automation",
  primaryCTA = {
    text: "Start Free Trial",
    onClick: () => alert('Start Free Trial clicked!'),
    icon: <ArrowRight className="w-5 h-5" />
  },
  secondaryCTA = {
    text: "Schedule Demo",
    onClick: () => alert('Schedule Demo clicked!'),
    icon: <Play className="w-5 h-5" />
  },
  features = [
    "30-day free trial with full access",
    "Setup assistance from our experts",
    "Integration with existing systems",
    "24/7 support during implementation"
  ],
  testimonial = {
    quote: "This JIRA bot has revolutionized our case management workflow. We've reduced processing time by 40% and improved compliance tracking significantly.",
    author: "Sarah Johnson",
    role: "Director of Child Services",
    company: "Travis County, TX"
  },
  className = '',
}: FinalCTAProps) => {
  return (
    <Section
      padding="xl"
      background="primary"
      className={className}
    >
      <Container size="xl">
        <div className="text-center space-y-12">
          {/* Header */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-white max-w-4xl mx-auto leading-tight">
              {title}
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Testimonial */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-300 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl text-white/95 italic leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="text-white/80">
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm">{testimonial.role}</div>
                <div className="text-sm">{testimonial.company}</div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 text-white/90"
              >
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-left">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              variant="outline"
              size="xl"
              icon={primaryCTA.icon}
              iconPosition="right"
              onClick={primaryCTA.onClick}
              className="border-white text-white hover:bg-white hover:text-primary-600 text-lg px-8 py-4"
            >
              {primaryCTA.text}
            </Button>
            <Button
              variant="secondary"
              size="xl"
              icon={secondaryCTA.icon}
              iconPosition="left"
              onClick={secondaryCTA.onClick}
              className="text-lg px-8 py-4"
            >
              {secondaryCTA.text}
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="text-center space-y-4">
            <p className="text-white/70 text-sm">
              Trusted by child welfare professionals nationwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/60 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>SOC 2 Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>99.9% Uptime SLA</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default FinalCTA;