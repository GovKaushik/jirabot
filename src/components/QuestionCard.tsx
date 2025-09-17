import { Card } from '@/components';
import { QuestionCardProps } from '@/types/carousel';

// SOLID Principle: Single Responsibility - QuestionCard handles individual question display
// Interface Segregation Principle: Focused props for question presentation

const QuestionCard = ({
  question,
  variant = 'default',
  onClick,
}: QuestionCardProps) => {
  // Variant-based styling
  const variantClasses = {
    default: 'p-8',
    compact: 'p-6',
    detailed: 'p-10',
  };

  // Category-based color scheme
  const categoryColors = {
    reporting: 'primary',
    workflow: 'secondary',
    compliance: 'accent',
    analytics: 'success',
    monitoring: 'warning',
  };

  const categoryColor = categoryColors[question.category];

  // Complexity indicator
  const complexityLabels = {
    simple: 'Basic',
    medium: 'Intermediate',
    advanced: 'Advanced',
  };

  const complexityColors = {
    simple: 'bg-green-100 text-green-700',
    medium: 'bg-yellow-100 text-yellow-700',
    advanced: 'bg-red-100 text-red-700',
  };

  return (
    <Card
      variant="elevated"
      padding="none"
      hover
      interactive={!!onClick}
      onClick={() => onClick?.(question)}
      className="relative h-full min-h-[400px] overflow-hidden cursor-pointer transition-all duration-500 ease-out bg-white border border-gray-200 shadow-lg"
    >
      <div className={variantClasses[variant]}>
        {/* Category & Complexity Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className={`w-12 h-12 bg-${categoryColor}-100 rounded-xl flex items-center justify-center`}>
              <div className={`w-6 h-6 text-${categoryColor}-600`}>
                {question.icon}
              </div>
            </div>
            <div>
              <div className="text-sm font-medium text-secondary-600 capitalize">
                {question.category}
              </div>
              <div className={`text-xs px-2 py-1 rounded-full ${complexityColors[question.complexity]}`}>
                {complexityLabels[question.complexity]}
              </div>
            </div>
          </div>
        </div>

        {/* Question */}
        <div className="mb-6">
          <div className="flex items-start space-x-3 mb-4">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white text-sm font-bold">Q</span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 leading-relaxed">
                "{question.question}"
              </h3>
            </div>
          </div>
        </div>

        {/* Answer */}
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white text-sm font-bold">A</span>
            </div>
            <div className="flex-1">
              <p className="text-gray-700 leading-relaxed text-base">
                {question.answer}
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Elements */}
        {variant === 'detailed' && (
          <div className="mt-8 pt-6 border-t border-secondary-200">
            <div className="flex items-center justify-between text-sm text-secondary-500">
              <span>Example Query #{question.id}</span>
              <span className="flex items-center space-x-1">
                <span>Natural Language Processing</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </span>
            </div>
          </div>
        )}

        {/* Gradient Overlay for Visual Appeal */}
        <div className={`absolute inset-0 bg-gradient-to-br from-${categoryColor}-50/20 to-transparent pointer-events-none`}></div>
      </div>
    </Card>
  );
};

export default QuestionCard;