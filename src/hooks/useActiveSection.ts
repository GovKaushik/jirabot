import { useState, useEffect } from 'react';
import { UseActiveSection } from '@/types/navigation';

// SOLID Principle: Single Responsibility - Hook handles only active section detection
// Custom hook for detecting which section is currently in view

const useActiveSection = (sectionIds: string[]): UseActiveSection => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for navigation height

      // Find the section that's currently in view
      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    // Set initial active section
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds]);

  return {
    activeSection,
    setActiveSection,
  };
};

export default useActiveSection;