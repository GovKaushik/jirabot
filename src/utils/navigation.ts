// SOLID Principle: Single Responsibility - Utility functions for navigation behavior
// DRY Principle: Centralized navigation logic

export const smoothScrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const offsetTop = element.offsetTop - 80; // Account for fixed navigation height

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
};

export const handleNavigationClick = (
  item: { id: string; href: string },
  onItemClick?: (item: any) => void
) => {
  // Prevent default link behavior for hash links
  if (item.href.startsWith('#')) {
    const sectionId = item.href.substring(1); // Remove # from href
    smoothScrollToSection(sectionId);
  }

  // Call custom click handler if provided
  onItemClick?.(item);
};

// Navigation items configuration - Open/Closed Principle: Easy to extend
export const defaultNavigationItems = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'features', label: 'Features', href: '#features' },
  { id: 'how-it-works', label: 'How It Works', href: '#how-it-works' },
  { id: 'integrations', label: 'Integrations', href: '#integrations' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];