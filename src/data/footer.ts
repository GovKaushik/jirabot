import React from 'react';
import {
  Linkedin,
  Twitter,
  Github
} from 'lucide-react';
import { FooterSection, ContactInfo, SocialLink } from '@/types/footer';

// SOLID Principle: Single Responsibility - Footer data configuration
// DRY Principle: Centralized footer data for reusability

export const footerSections: FooterSection[] = [
  {
    id: 'product',
    title: 'Product',
    links: [
      { id: 'features', text: 'Features', href: '#features' },
      { id: 'integrations', text: 'Integrations', href: '#integrations' },
      { id: 'sample-questions', text: 'AI Capabilities', href: '#sample-questions' },
      { id: 'how-it-works', text: 'How It Works', href: '#how-it-works' },
      { id: 'pricing', text: 'Pricing', href: '/pricing', external: true },
      { id: 'api-docs', text: 'API Documentation', href: '/docs', external: true },
    ]
  },
  {
    id: 'company',
    title: 'Company',
    links: [
      { id: 'about', text: 'About Us', href: '/about', external: true },
      { id: 'careers', text: 'Careers', href: '/careers', external: true },
      { id: 'blog', text: 'Blog', href: '/blog', external: true },
      { id: 'news', text: 'News & Press', href: '/news', external: true },
      { id: 'contact', text: 'Contact', href: '#contact' },
      { id: 'partners', text: 'Partners', href: '/partners', external: true },
    ]
  },
  {
    id: 'support',
    title: 'Support',
    links: [
      { id: 'help-center', text: 'Help Center', href: '/help', external: true },
      { id: 'documentation', text: 'Documentation', href: '/docs', external: true },
      { id: 'training', text: 'Training Resources', href: '/training', external: true },
      { id: 'webinars', text: 'Webinars', href: '/webinars', external: true },
      { id: 'status', text: 'System Status', href: 'https://status.example.com', external: true },
      { id: 'community', text: 'Community Forum', href: '/community', external: true },
    ]
  },
  {
    id: 'legal',
    title: 'Legal',
    links: [
      { id: 'privacy', text: 'Privacy Policy', href: '/privacy', external: true },
      { id: 'terms', text: 'Terms of Service', href: '/terms', external: true },
      { id: 'security', text: 'Security', href: '/security', external: true },
      { id: 'compliance', text: 'Compliance', href: '/compliance', external: true },
      { id: 'cookies', text: 'Cookie Policy', href: '/cookies', external: true },
      { id: 'gdpr', text: 'GDPR Compliance', href: '/gdpr', external: true },
    ]
  }
];

export const contactInfo: ContactInfo = {
  address: '123 Innovation Drive, Suite 400',
  city: 'Austin',
  state: 'TX',
  zip: '78701',
  phone: '+1 (555) 123-4567',
  email: 'contact@jirabot.com'
};

export const socialLinks: SocialLink[] = [
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://linkedin.com/company/jirabot',
    icon: React.createElement(Linkedin, { className: "w-full h-full" }),
    color: 'blue'
  },
  {
    id: 'twitter',
    name: 'Twitter',
    url: 'https://twitter.com/jirabot',
    icon: React.createElement(Twitter, { className: "w-full h-full" }),
    color: 'blue'
  },
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/jirabot',
    icon: React.createElement(Github, { className: "w-full h-full" }),
    color: 'gray'
  }
];

export const companyInfo = {
  name: 'JIRA Bot Solutions',
  tagline: 'Empowering child welfare agencies with intelligent automation',
  description: 'Trusted by 50+ counties and 15+ state agencies nationwide for streamlined JIRA workflow management.',
  founded: '2021',
  employees: '50-100',
  headquarters: 'Austin, TX'
};