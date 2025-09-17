import { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { Button, Container } from '@/components';
import { NavigationProps } from '@/types/navigation';
import { defaultNavigationItems, handleNavigationClick } from '@/utils/navigation';
import useActiveSection from '@/hooks/useActiveSection';
import MobileMenu from './MobileMenu';

// SOLID Principle: Single Responsibility - Navigation handles navigation UI and behavior
// Open/Closed Principle: Extensible through props without modifying core logic

const Navigation = ({
  className = '',
  sticky = true,
  showLogo = true,
  items = defaultNavigationItems,
  onItemClick,
}: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { activeSection } = useActiveSection(items.map(item => item.id));

  // Base styles
  const baseStyles = `
    w-full bg-white/95 backdrop-blur-md border-b border-secondary-200
    transition-all duration-300 ease-in-out z-50
  `;

  // Sticky positioning
  const positionStyles = sticky ? 'fixed top-0 left-0 right-0' : 'relative';

  // Shadow effect when sticky
  const shadowStyles = sticky ? 'shadow-lg' : '';

  // Combine styles
  const navigationStyles = `
    ${baseStyles}
    ${positionStyles}
    ${shadowStyles}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  const handleItemClick = (item: typeof items[0]) => {
    handleNavigationClick(item, onItemClick);
    setIsMobileMenuOpen(false); // Close mobile menu on click
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className={navigationStyles} role="navigation" aria-label="Main navigation">
        <Container size="xl" padding="none">
          <div className="flex items-center justify-between h-16 px-4 md:px-6">
            {/* Logo Section */}
            {showLogo && (
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-secondary-900">
                  JIRA Bot
                </span>
              </div>
            )}

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {items.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item)}
                    className={`
                      px-4 py-2 rounded-lg font-medium transition-all duration-200
                      hover:bg-primary-50 hover:text-primary-700
                      focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
                      ${isActive
                        ? 'bg-primary-100 text-primary-700 font-semibold'
                        : 'text-secondary-700 hover:text-primary-700'
                      }
                    `}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.icon && (
                      <span className="mr-2 inline-block">
                        {item.icon}
                      </span>
                    )}
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* CTA Button (Desktop) */}
            <div className="hidden md:block">
              <Button variant="primary" size="md">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-secondary-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-secondary-700" />
              ) : (
                <Menu className="w-6 h-6 text-secondary-700" />
              )}
            </button>
          </div>
        </Container>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        items={items}
        onItemClick={handleItemClick}
      />
    </>
  );
};

export default Navigation;