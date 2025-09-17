import { useState, useEffect, useCallback } from 'react';
import { Container, Section } from '@/components';
import { useIntersectionObserver } from '@/hooks';
import { QuestionCarouselProps } from '@/types/carousel';
import { sampleQuestions } from '@/data/questions';

// SOLID Principle: Single Responsibility - QuestionCarousel handles carousel logic and layout
// Open/Closed Principle: Extensible auto-advance and interaction patterns

const QuestionCarousel = ({
  questions = sampleQuestions,
  autoAdvance = true,
  autoAdvanceInterval = 5000,
  className = '',
}: QuestionCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoAdvance);
  const [isPaused, setIsPaused] = useState(false);

  const { ref: carouselRef, isVisible: carouselVisible } = useIntersectionObserver({
    threshold: 0.3,
    freezeOnceVisible: true,
  });

  // Auto-advance logic
  const nextQuestion = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % questions.length);
  }, [questions.length]);

  const previousQuestion = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + questions.length) % questions.length);
  }, [questions.length]);

  const goToQuestion = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const toggleAutoPlay = useCallback(() => {
    setIsAutoPlaying((prev) => !prev);
  }, []);

  // Auto-advance timer
  useEffect(() => {
    if (!isAutoPlaying || isPaused || !carouselVisible) return;

    const interval = setInterval(nextQuestion, autoAdvanceInterval);
    return () => clearInterval(interval);
  }, [isAutoPlaying, isPaused, carouselVisible, nextQuestion, autoAdvanceInterval]);

  // Pause on hover
  const handleMouseEnter = useCallback(() => {
    setIsPaused(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsPaused(false);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!carouselVisible) return;

      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          previousQuestion();
          break;
        case 'ArrowRight':
          event.preventDefault();
          nextQuestion();
          break;
        case ' ':
          event.preventDefault();
          toggleAutoPlay();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [carouselVisible, nextQuestion, previousQuestion, toggleAutoPlay]);


  return (
    <Section
      id="sample-questions"
      padding="xl"
      background="none"
      className={`bg-gradient-to-br from-blue-50 to-indigo-100 ${className}`}
    >
      <Container size="xl">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-6">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            🤖 AI-Powered Natural Language Processing
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Ask Questions, Get Instant Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how our AI understands natural language and provides actionable insights
            for child welfare case management.
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
            <span className="bg-white px-3 py-1 rounded-full shadow-sm">
              {questions.length} Sample Queries
            </span>
            <span className="bg-white px-3 py-1 rounded-full shadow-sm">
              Question {currentIndex + 1} of {questions.length}
            </span>
          </div>
        </div>

        {/* Main Carousel Display */}
        <div
          ref={carouselRef}
          className="max-w-5xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Question Display - New Design */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8 border-2 border-blue-100">
            {questions.length > 0 ? (
              <div className="space-y-8">
                {/* Question Section */}
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-lg font-bold">Q</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-blue-600 font-medium mb-2 uppercase tracking-wide">
                        {questions[currentIndex].category.replace('-', ' ')} • {questions[currentIndex].complexity}
                      </p>
                      <h3 className="text-2xl font-bold text-gray-900 leading-relaxed">
                        "{questions[currentIndex].question}"
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Answer Section */}
                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-lg font-bold">A</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-green-600 font-medium mb-2 uppercase tracking-wide">
                        AI Response
                      </p>
                      <p className="text-lg text-gray-800 leading-relaxed">
                        {questions[currentIndex].answer}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    Natural Language Processing
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    Real-time Analysis
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                    Child Welfare Optimized
                  </span>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
                <p className="text-gray-600">Loading sample questions...</p>
              </div>
            )}
          </div>

          {/* Enhanced Navigation */}
          {questions.length > 0 && (
            <div className="flex flex-col items-center space-y-6">
              {/* Navigation Controls */}
              <div className="flex items-center space-x-6 bg-white rounded-2xl px-8 py-4 shadow-lg border border-gray-200">
                <button
                  onClick={previousQuestion}
                  disabled={currentIndex === 0}
                  className="p-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all"
                >
                  ←
                </button>

                <div className="flex space-x-2">
                  {questions.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToQuestion(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentIndex
                          ? 'bg-blue-500 scale-125'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextQuestion}
                  disabled={currentIndex === questions.length - 1}
                  className="p-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all"
                >
                  →
                </button>

                <div className="w-px h-8 bg-gray-300"></div>

                <button
                  onClick={toggleAutoPlay}
                  className={`p-3 rounded-full transition-all ${
                    isAutoPlaying
                      ? 'bg-red-500 text-white hover:bg-red-600'
                      : 'bg-green-500 text-white hover:bg-green-600'
                  }`}
                >
                  {isAutoPlaying ? '⏸' : '▶'}
                </button>
              </div>

              {/* Progress Bar */}
              <div className="w-full max-w-md bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                ></div>
              </div>

              <p className="text-sm text-gray-500 text-center">
                Use arrow keys to navigate • Spacebar to play/pause • Auto-advance every 6 seconds
              </p>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-white rounded-3xl p-12 shadow-xl border border-gray-200">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Workflow?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience AI-powered JIRA management designed specifically for child welfare agencies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
              🚀 Try Interactive Demo
            </button>
            <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-200">
              📅 Schedule Live Demo
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default QuestionCarousel;