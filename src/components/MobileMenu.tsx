import { useEffect } from 'react';
import { Button } from '@/components';
import { MobileMenuProps } from '@/types/navigation';

// SOLID Principle: Single Responsibility - MobileMenu handles only mobile navigation UI
// Interface Segregation Principle: Clean props interface for mobile-specific needs

const MobileMenu = ({
  isOpen,
  onClose,
  items,
  onItemClick,
}: MobileMenuProps) => {
  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Don't render if not open
  if (!isOpen) {
    return null;
  }

  const handleItemClick = (item: typeof items[0]) => {
    onItemClick?.(item);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Mobile Menu Panel */}
      <div
        className="fixed top-16 left-0 right-0 bottom-0 bg-white z-50 md:hidden transform transition-transform duration-300 ease-in-out"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div className="flex flex-col h-full">
          {/* Navigation Items */}
          <nav className="flex-1 px-4 py-6 space-y-2" role="navigation">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item)}
                className="
                  w-full text-left px-4 py-3 rounded-lg font-medium text-secondary-700
                  hover:bg-primary-50 hover:text-primary-700
                  focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
                  transition-colors duration-200
                "
              >
                <div className="flex items-center space-x-3">
                  {item.icon && (
                    <span className="w-5 h-5 flex-shrink-0">
                      {item.icon}
                    </span>
                  )}
                  <span className="text-lg">{item.label}</span>
                </div>
              </button>
            ))}
          </nav>

          {/* CTA Button at bottom */}
          <div className="px-4 py-6 border-t border-secondary-200">
            <Button
              variant="primary"
              size="lg"
              fullWidth
              onClick={onClose}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;