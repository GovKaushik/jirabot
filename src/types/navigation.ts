// Navigation-specific types
export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  icon?: React.ReactNode;
}

export interface NavigationProps {
  className?: string;
  sticky?: boolean;
  showLogo?: boolean;
  items?: NavigationItem[];
  onItemClick?: (item: NavigationItem) => void;
}

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavigationItem[];
  onItemClick?: (item: NavigationItem) => void;
}

export interface UseActiveSection {
  activeSection: string;
  setActiveSection: (section: string) => void;
}