import { Card } from '@/components';
import { IntegrationCardProps } from '@/types/integrations';

// SOLID Principle: Single Responsibility - IntegrationCard handles individual integration display
// Interface Segregation Principle: Focused props for integration presentation

const IntegrationCard = ({
  integration,
  animated = true,
  size = 'md',
  variant = 'default',
  onClick,
}: IntegrationCardProps) => {
  // Size-based styling
  const sizeClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  // Status-based styling
  const statusStyles = {
    available: 'border-green-200 bg-green-50/50',
    'coming-soon': 'border-yellow-200 bg-yellow-50/50',
    beta: 'border-blue-200 bg-blue-50/50',
  };

  const statusColors = {
    available: 'bg-green-100 text-green-700',
    'coming-soon': 'bg-yellow-100 text-yellow-700',
    beta: 'bg-blue-100 text-blue-700',
  };

  const statusLabels = {
    available: 'Available',
    'coming-soon': 'Coming Soon',
    beta: 'Beta',
  };

  // Category-based colors
  const categoryColors = {
    core: 'primary',
    'child-welfare': 'accent',
    analytics: 'success',
    communication: 'secondary',
    workflow: 'warning',
    security: 'error',
  };

  const categoryColor = categoryColors[integration.category];

  return (
    <Card
      variant="elevated"
      padding="none"
      hover
      interactive={!!onClick}
      onClick={() => onClick?.(integration)}
      className={`
        relative h-full min-h-[200px] overflow-hidden group cursor-pointer
        transition-all duration-300 ease-out
        ${statusStyles[integration.status]}
        ${animated ? 'hover:scale-105 hover:shadow-xl' : ''}
        ${integration.featured ? 'ring-2 ring-primary-200' : ''}
      `}
    >
      <div className={sizeClasses[size]}>
        {/* Status Badge */}
        <div className="absolute top-3 right-3">
          <span className={`text-xs px-2 py-1 rounded-full font-medium ${statusColors[integration.status]}`}>
            {statusLabels[integration.status]}
          </span>
        </div>

        {/* Featured Badge */}
        {integration.featured && (
          <div className="absolute top-3 left-3">
            <span className="text-xs px-2 py-1 rounded-full font-medium bg-primary-100 text-primary-700">
              Featured
            </span>
          </div>
        )}

        {/* Logo & Basic Info */}
        <div className="flex items-start space-x-4 mb-4">
          <div className={`w-12 h-12 bg-${categoryColor}-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-${categoryColor}-200 transition-colors`}>
            <div className={`w-7 h-7 text-${categoryColor}-600`}>
              {integration.logo}
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-secondary-900 truncate">
              {integration.name}
            </h3>
            <p className="text-sm text-secondary-600 capitalize">
              {integration.category.replace('-', ' ')}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-secondary-700 text-sm leading-relaxed mb-4 line-clamp-2">
          {integration.description}
        </p>

        {/* Capabilities - Detailed Variant */}
        {variant === 'detailed' && integration.capabilities && (
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-secondary-900">Key Capabilities:</h4>
            <div className="grid grid-cols-1 gap-1">
              {integration.capabilities.slice(0, 3).map((capability, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className={`w-1.5 h-1.5 bg-${categoryColor}-500 rounded-full flex-shrink-0`}></div>
                  <span className="text-xs text-secondary-600">{capability}</span>
                </div>
              ))}
              {integration.capabilities.length > 3 && (
                <div className="flex items-center space-x-2">
                  <div className={`w-1.5 h-1.5 bg-${categoryColor}-500 rounded-full flex-shrink-0`}></div>
                  <span className="text-xs text-secondary-500">
                    +{integration.capabilities.length - 3} more
                  </span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Hover Effect Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br from-${categoryColor}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>

        {/* Coming Soon Overlay */}
        {integration.status === 'coming-soon' && (
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="text-center">
              <div className="text-2xl mb-2">🚀</div>
              <p className="text-sm font-medium text-secondary-700">Coming Soon</p>
              <p className="text-xs text-secondary-500">Stay tuned for updates</p>
            </div>
          </div>
        )}

        {/* Beta Overlay */}
        {integration.status === 'beta' && (
          <div className="absolute inset-0 bg-blue-500/5 pointer-events-none"></div>
        )}
      </div>
    </Card>
  );
};

export default IntegrationCard;