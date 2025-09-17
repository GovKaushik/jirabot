import { FloatingElementProps } from '@/types/hero';

// SOLID Principle: Single Responsibility - FloatingElement handles animated floating UI elements
// Open/Closed Principle: Extensible animation component for various use cases

const FloatingElement = ({
  children,
  delay = 0,
  duration = 3000,
  direction = 'up',
  className = '',
}: FloatingElementProps) => {
  // Direction-based animation classes
  const directionAnimations = {
    up: 'animate-bounce-gentle',
    down: 'animate-bounce-gentle',
    left: 'animate-pulse',
    right: 'animate-pulse'
  };

  // Custom animation delay and duration styles
  const animationStyle = {
    animationDelay: `${delay}ms`,
    animationDuration: `${duration}ms`,
  };

  return (
    <div
      className={`
        ${directionAnimations[direction]}
        ${className}
      `}
      style={animationStyle}
    >
      {children}
    </div>
  );
};

export default FloatingElement;