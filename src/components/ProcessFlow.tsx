import { ArrowRight, ArrowDown } from 'lucide-react';
import { ProcessFlowProps } from '@/types/process';
import ProcessStep from './ProcessStep';

// SOLID Principle: Single Responsibility - ProcessFlow handles step layout with connectors
// Open/Closed Principle: Extensible direction and interaction patterns

const ProcessFlow = ({
  steps,
  animated = true,
  direction = 'horizontal',
  interactive = false,
}: ProcessFlowProps) => {
  // Direction-based layout classes
  const containerClasses = {
    horizontal: 'flex flex-col lg:flex-row items-center justify-center',
    vertical: 'flex flex-col items-center',
  };

  // Connector component based on direction
  const Connector = ({ stepIndex }: { stepIndex: number }) => {
    if (stepIndex === steps.length - 1) return null;

    const connectorClasses = `
      flex items-center justify-center
      ${direction === 'horizontal' ? 'lg:mx-6 my-4 lg:my-0' : 'my-6'}
      transition-all duration-500 delay-${stepIndex * 200}ms
      ${animated ? 'animate-pulse' : ''}
    `;

    return (
      <div className={connectorClasses}>
        {direction === 'horizontal' ? (
          <div className="flex flex-col lg:flex-row items-center">
            <ArrowDown className="w-6 h-6 text-primary-400 lg:hidden" />
            <ArrowRight className="w-6 h-6 text-primary-400 hidden lg:block" />
          </div>
        ) : (
          <ArrowDown className="w-6 h-6 text-primary-400" />
        )}
      </div>
    );
  };

  return (
    <div className={containerClasses[direction]}>
      {steps.map((step, index) => (
        <div
          key={step.id}
          className={`
            ${direction === 'horizontal' ? 'flex-1 max-w-sm' : 'w-full max-w-md'}
            flex flex-col items-center
          `}
        >
          <ProcessStep
            step={step}
            index={index}
            animated={animated}
            variant="default"
            onClick={interactive ? undefined : undefined}
          />
          <Connector stepIndex={index} />
        </div>
      ))}
    </div>
  );
};

export default ProcessFlow;