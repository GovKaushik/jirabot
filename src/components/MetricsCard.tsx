import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { Card } from '@/components';
import { MetricsCardProps } from '@/types/hero';

// SOLID Principle: Single Responsibility - MetricsCard displays performance metrics with trend indicators
// Open/Closed Principle: Extensible for different metric types and styling

const MetricsCard = ({
  value,
  label,
  change,
  trend = 'neutral',
  icon,
}: MetricsCardProps) => {
  // Trend styling and icons
  const trendConfig = {
    up: {
      icon: <TrendingUp className="w-4 h-4" />,
      textColor: 'text-success-600',
      bgColor: 'bg-success-50',
    },
    down: {
      icon: <TrendingDown className="w-4 h-4" />,
      textColor: 'text-error-600',
      bgColor: 'bg-error-50',
    },
    neutral: {
      icon: <Minus className="w-4 h-4" />,
      textColor: 'text-secondary-600',
      bgColor: 'bg-secondary-50',
    },
  };

  const currentTrend = trendConfig[trend];

  return (
    <Card variant="glass" padding="md" hover className="text-center">
      <div className="space-y-3">
        {/* Icon */}
        {icon && (
          <div className="flex justify-center">
            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
              <div className="w-6 h-6 text-primary-600">
                {icon}
              </div>
            </div>
          </div>
        )}

        {/* Value */}
        <div className="text-3xl font-bold text-secondary-900">
          {value}
        </div>

        {/* Label */}
        <div className="text-sm font-medium text-secondary-600">
          {label}
        </div>

        {/* Change indicator */}
        {change && (
          <div className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${currentTrend.textColor} ${currentTrend.bgColor}`}>
            {currentTrend.icon}
            <span>{change}</span>
          </div>
        )}
      </div>
    </Card>
  );
};

export default MetricsCard;