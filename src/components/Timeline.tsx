import { ProcessStepProps, TimelineProps } from '@/types/process';
import { useIntersectionObserver } from '@/hooks';
import { Card } from '@/components';

// SOLID Principle: Single Responsibility - Timeline handles timeline-specific layout
// Liskov Substitution Principle: Alternative layout while maintaining process interface

const TimelineStep = ({
  step,
  index,
  isLeft = false,
  isActive = false,
  animated = true
}: ProcessStepProps & { isLeft?: boolean }) => {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.3,
    freezeOnceVisible: true,
  });

  const animationDelay = animated ? index! * 300 : 0;
  const animationClasses = animated
    ? `transition-all duration-700 ${
        isVisible
          ? 'opacity-100 translate-x-0'
          : `opacity-0 ${isLeft ? '-translate-x-10' : 'translate-x-10'}`
      }`
    : '';

  return (
    <div
      ref={ref}
      className={`flex items-center ${isLeft ? 'flex-row-reverse' : 'flex-row'} ${animationClasses}`}
      style={animated ? { transitionDelay: `${animationDelay}ms` } : undefined}
    >
      {/* Content */}
      <div className={`flex-1 ${isLeft ? 'pr-8' : 'pl-8'}`}>
        <Card
          variant={isActive ? 'elevated' : 'default'}
          padding="lg"
          className={isActive ? 'ring-2 ring-primary-200' : ''}
        >
          <div className={`text-${isLeft ? 'right' : 'left'} space-y-4`}>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 text-primary-600">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-secondary-900">
                {step.title}
              </h3>
            </div>
            <p className="text-secondary-600 leading-relaxed">
              {step.description}
            </p>
            {step.duration && (
              <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                {step.duration}
              </span>
            )}
          </div>
        </Card>
      </div>

      {/* Timeline Node */}
      <div className="relative z-10">
        <div
          className={`
            w-12 h-12 rounded-full flex items-center justify-center font-bold text-white
            ${isActive ? 'bg-gradient-primary scale-110' : 'bg-secondary-400'}
            transition-all duration-300 shadow-lg
          `}
        >
          {step.number}
        </div>
      </div>
    </div>
  );
};

const Timeline = ({
  steps,
  animated = true,
  orientation = 'alternating',
  showProgress = true,
  activeStep = 0,
}: TimelineProps) => {
  const { ref: containerRef, isVisible: containerVisible } = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  return (
    <div ref={containerRef} className="relative">
      {/* Vertical Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-secondary-200 h-full">
        {/* Progress Line */}
        {showProgress && (
          <div
            className={`
              w-full bg-gradient-primary transition-all duration-1000 ease-out
              ${containerVisible ? `h-${Math.min((activeStep + 1) * 25, 100)}%` : 'h-0'}
            `}
          />
        )}
      </div>

      {/* Timeline Steps */}
      <div className="space-y-12">
        {steps.map((step, index) => {
          const isLeft = orientation === 'alternating' ? index % 2 === 0 : orientation === 'left';
          const isActive = index <= activeStep;

          return (
            <TimelineStep
              key={step.id}
              step={step}
              index={index}
              isLeft={isLeft}
              isActive={isActive}
              animated={animated}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;