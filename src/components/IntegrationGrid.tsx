import { useState } from 'react';
import { IntegrationGridProps } from '@/types/integrations';
import { categoryNames } from '@/data/integrations';
import IntegrationCard from './IntegrationCard';

// SOLID Principle: Single Responsibility - IntegrationGrid handles grid layout and filtering
// Open/Closed Principle: Extensible filtering and layout patterns

const IntegrationGrid = ({
  integrations,
  animated = true,
  columns = 3,
  gap = 'md',
  showFilters = true,
}: IntegrationGridProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Gap styling
  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
  };

  // Column responsive classes
  const columnClasses = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
    5: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5',
    6: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6',
  };

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(integrations.map(integration => integration.category)))];

  // Filter integrations
  const filteredIntegrations = selectedCategory === 'all'
    ? integrations
    : integrations.filter(integration => integration.category === selectedCategory);

  // Category filter buttons
  const CategoryFilter = () => (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`
            px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
            ${selectedCategory === category
              ? 'bg-primary-500 text-white shadow-primary'
              : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
            }
          `}
        >
          {category === 'all' ? 'All Integrations' : categoryNames[category as keyof typeof categoryNames]}
        </button>
      ))}
    </div>
  );

  // Statistics display
  const getStats = () => {
    const available = filteredIntegrations.filter(i => i.status === 'available').length;
    const comingSoon = filteredIntegrations.filter(i => i.status === 'coming-soon').length;
    const beta = filteredIntegrations.filter(i => i.status === 'beta').length;

    return { available, comingSoon, beta, total: filteredIntegrations.length };
  };

  const stats = getStats();

  return (
    <div className="space-y-8">
      {/* Category Filters */}
      {showFilters && <CategoryFilter />}

      {/* Statistics */}
      <div className="flex justify-center">
        <div className="flex items-center space-x-6 text-sm text-secondary-600">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-100 rounded border border-green-200"></div>
            <span>{stats.available} Available</span>
          </div>
          {stats.beta > 0 && (
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-100 rounded border border-blue-200"></div>
              <span>{stats.beta} Beta</span>
            </div>
          )}
          {stats.comingSoon > 0 && (
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-yellow-100 rounded border border-yellow-200"></div>
              <span>{stats.comingSoon} Coming Soon</span>
            </div>
          )}
          <div className="text-secondary-400">•</div>
          <span className="font-medium">{stats.total} Total</span>
        </div>
      </div>

      {/* Integration Grid */}
      <div className={`grid ${columnClasses[columns]} ${gapClasses[gap]}`}>
        {filteredIntegrations.map((integration, index) => (
          <div
            key={integration.id}
            className={
              animated
                ? `transition-all duration-500 delay-${index * 100}ms`
                : ''
            }
          >
            <IntegrationCard
              integration={integration}
              animated={animated}
              size="md"
              variant="detailed"
              onClick={(integration) => {
                // Optional: Handle integration click for more details
                console.log('Integration clicked:', integration.name);
              }}
            />
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredIntegrations.length === 0 && (
        <div className="text-center py-12">
          <div className="text-4xl mb-4">🔍</div>
          <h3 className="text-lg font-semibold text-secondary-900 mb-2">
            No integrations found
          </h3>
          <p className="text-secondary-600">
            Try selecting a different category or check back later for new integrations.
          </p>
        </div>
      )}

      {/* Call to Action */}
      <div className="text-center mt-12 p-8 bg-secondary-50 rounded-2xl">
        <h3 className="text-xl font-semibold text-secondary-900 mb-2">
          Need a Custom Integration?
        </h3>
        <p className="text-secondary-600 mb-6 max-w-2xl mx-auto">
          We can build custom integrations for your specific child welfare systems and workflows.
          Contact our team to discuss your integration requirements.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors">
            Request Custom Integration
          </button>
          <button className="px-6 py-3 border border-secondary-300 text-secondary-700 rounded-lg font-semibold hover:bg-secondary-50 transition-colors">
            View API Documentation
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntegrationGrid;