// Sample Questions Carousel types
export interface SampleQuestion {
  id: string;
  question: string;
  answer: string;
  category: 'reporting' | 'workflow' | 'compliance' | 'analytics' | 'monitoring';
  complexity: 'simple' | 'medium' | 'advanced';
  icon?: React.ReactNode;
}

export interface QuestionCarouselProps {
  questions?: SampleQuestion[];
  autoAdvance?: boolean;
  autoAdvanceInterval?: number;
  showDots?: boolean;
  showControls?: boolean;
  animated?: boolean;
  className?: string;
}

export interface QuestionCardProps {
  question: SampleQuestion;
  isActive?: boolean;
  animated?: boolean;
  variant?: 'default' | 'compact' | 'detailed';
  onClick?: (question: SampleQuestion) => void;
}

export interface CarouselNavigationProps {
  totalItems: number;
  currentIndex: number;
  onDotClick: (index: number) => void;
  onPrevious: () => void;
  onNext: () => void;
  showDots?: boolean;
  showControls?: boolean;
  autoPlaying?: boolean;
  onToggleAutoPlay?: () => void;
}