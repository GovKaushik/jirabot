import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { Button } from '@/components';
import { CarouselNavigationProps } from '@/types/carousel';

// SOLID Principle: Single Responsibility - CarouselNavigation handles navigation controls
// Open/Closed Principle: Extensible navigation patterns

const CarouselNavigation = ({
  totalItems,
  currentIndex,
  onDotClick,
  onPrevious,
  onNext,
  showDots = true,
  showControls = true,
  autoPlaying = false,
  onToggleAutoPlay,
}: CarouselNavigationProps) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Dots Navigation */}
      {showDots && (
        <div className="flex items-center space-x-2">
          {Array.from({ length: totalItems }).map((_, index) => (
            <button
              key={index}
              onClick={() => onDotClick(index)}
              className={`
                w-3 h-3 rounded-full transition-all duration-300 ease-out
                ${
                  index === currentIndex
                    ? 'bg-primary-500 scale-125 shadow-primary'
                    : 'bg-secondary-300 hover:bg-secondary-400 hover:scale-110'
                }
              `}
              aria-label={`Go to question ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Control Buttons */}
      {showControls && (
        <div className="flex items-center space-x-4">
          {/* Previous Button */}
          <Button
            variant="outline"
            size="sm"
            icon={<ChevronLeft />}
            onClick={onPrevious}
            disabled={currentIndex === 0}
            className="w-10 h-10 p-0"
            aria-label="Previous question"
          />

          {/* Auto-play Toggle */}
          {onToggleAutoPlay && (
            <Button
              variant={autoPlaying ? 'primary' : 'outline'}
              size="sm"
              icon={autoPlaying ? <Pause /> : <Play />}
              onClick={onToggleAutoPlay}
              className="w-10 h-10 p-0"
              aria-label={autoPlaying ? 'Pause auto-advance' : 'Start auto-advance'}
            />
          )}

          {/* Next Button */}
          <Button
            variant="outline"
            size="sm"
            icon={<ChevronRight />}
            onClick={onNext}
            disabled={currentIndex === totalItems - 1}
            className="w-10 h-10 p-0"
            aria-label="Next question"
          />
        </div>
      )}

      {/* Progress Indicator */}
      <div className="text-sm text-secondary-500">
        {currentIndex + 1} of {totalItems}
      </div>
    </div>
  );
};

export default CarouselNavigation;