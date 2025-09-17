// Footer and Final CTA types
export interface FooterLink {
  id: string;
  text: string;
  href: string;
  external?: boolean;
}

export interface FooterSection {
  id: string;
  title: string;
  links: FooterLink[];
}

export interface ContactInfo {
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: React.ReactNode;
  color?: string;
}

export interface FooterProps {
  sections?: FooterSection[];
  contactInfo?: ContactInfo;
  socialLinks?: SocialLink[];
  companyName?: string;
  tagline?: string;
  showNewsletter?: boolean;
  className?: string;
}

export interface ContactInfoProps {
  contactInfo: ContactInfo;
  className?: string;
}

export interface SocialLinksProps {
  socialLinks: SocialLink[];
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export interface FinalCTAProps {
  title?: string;
  subtitle?: string;
  primaryCTA?: {
    text: string;
    onClick: () => void;
    icon?: React.ReactNode;
  };
  secondaryCTA?: {
    text: string;
    onClick: () => void;
    icon?: React.ReactNode;
  };
  features?: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  className?: string;
}