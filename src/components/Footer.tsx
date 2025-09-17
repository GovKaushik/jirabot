import { Container, Section } from '@/components';
import { FooterProps } from '@/types/footer';
import { footerSections, contactInfo, socialLinks, companyInfo } from '@/data/footer';
import { ExternalLink, Mail } from 'lucide-react';
import ContactInfo from './ContactInfo';
import SocialLinks from './SocialLinks';

// SOLID Principle: Single Responsibility - Footer handles site footer layout and links
// Open/Closed Principle: Extensible footer patterns through composition

const Footer = ({
  sections = footerSections,
  contactInfo: contactData = contactInfo,
  socialLinks: socialData = socialLinks,
  companyName = companyInfo.name,
  tagline = companyInfo.tagline,
  showNewsletter = true,
  className = '',
}: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <Section
      as="footer"
      padding="xl"
      background="primary"
      className={className}
    >
      <Container size="xl">
        <div className="space-y-12">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {companyName}
                </h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  {tagline}
                </p>
              </div>

              <ContactInfo contactInfo={contactData} />

              <div>
                <h4 className="text-white font-semibold mb-3">Follow Us</h4>
                <SocialLinks socialLinks={socialData} size="md" />
              </div>

              {/* Newsletter Signup */}
              {showNewsletter && (
                <div className="space-y-3">
                  <h4 className="text-white font-semibold">Stay Updated</h4>
                  <p className="text-white/80 text-sm">
                    Get the latest updates on features and best practices.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                    <button className="px-6 py-2 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2">
                      <Mail className="w-4 h-4" />
                      <span>Subscribe</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Footer Links */}
            <div className="lg:col-span-3 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {sections.map((section) => (
                <div key={section.id} className="space-y-4">
                  <h4 className="text-white font-semibold text-lg">
                    {section.title}
                  </h4>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.id}>
                        <a
                          href={link.href}
                          target={link.external ? '_blank' : '_self'}
                          rel={link.external ? 'noopener noreferrer' : undefined}
                          className="text-white/80 hover:text-white transition-colors flex items-center space-x-1 group"
                        >
                          <span>{link.text}</span>
                          {link.external && (
                            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              {/* Copyright */}
              <div className="text-white/70 text-sm">
                © {currentYear} {companyName}. All rights reserved.
              </div>

              {/* Additional Links */}
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <a
                  href="/privacy"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="/cookies"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Cookie Settings
                </a>
              </div>

              {/* Built With */}
              <div className="text-white/60 text-xs">
                Built with ❤️ for child welfare professionals
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Footer;