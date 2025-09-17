import { SocialLinksProps } from '@/types/footer';

// SOLID Principle: Single Responsibility - SocialLinks handles social media link display
// Interface Segregation Principle: Focused props for social links

const SocialLinks = ({
  socialLinks,
  size = 'md',
  className = '',
}: SocialLinksProps) => {
  // Size-based styling
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {socialLinks.map((social) => (
        <a
          key={social.id}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            ${sizeClasses[size]}
            bg-white/10 hover:bg-white/20
            rounded-full flex items-center justify-center
            transition-all duration-200
            hover:scale-110 hover:shadow-lg
            focus:outline-none focus:ring-2 focus:ring-white/50
          `}
          aria-label={`Follow us on ${social.name}`}
        >
          <div className={`${iconSizes[size]} text-white`}>
            {social.icon}
          </div>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;