import { FeatureGridProps } from '@/types/features';
import FeatureCard from './FeatureCard';

// SOLID Principle: Single Responsibility - FeatureGrid handles responsive grid layout
// Open/Closed Principle: Extensible column and gap configurations

const FeatureGrid = ({
  features,
  animated = true,
  columns = 2,
  gap = 'lg',
}: FeatureGridProps) => {
  // Column mappings for responsive design - DRY Principle
  const columnStyles = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  // Gap mappings
  const gapStyles = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-12',
  };

  // Grid layout classes
  const gridClasses = `
    grid ${columnStyles[columns]} ${gapStyles[gap]}
    items-stretch
  `;

  return (
    <div className={gridClasses}>
      {features.map((feature, index) => (
        <FeatureCard
          key={feature.id}
          feature={feature}
          index={index}
          animated={animated}
          variant={feature.highlight ? 'highlighted' : 'default'}
        />
      ))}
    </div>
  );
};

export default FeatureGrid;