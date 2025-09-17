import { MapPin, Phone, Mail } from 'lucide-react';
import { ContactInfoProps } from '@/types/footer';

// SOLID Principle: Single Responsibility - ContactInfo handles contact information display
// Interface Segregation Principle: Focused props for contact details

const ContactInfo = ({
  contactInfo,
  className = '',
}: ContactInfoProps) => {
  return (
    <div className={`space-y-4 ${className}`}>
      {/* Address */}
      <div className="flex items-start space-x-3">
        <MapPin className="w-5 h-5 text-white/70 flex-shrink-0 mt-0.5" />
        <div className="text-white/90">
          <div>{contactInfo.address}</div>
          <div>{contactInfo.city}, {contactInfo.state} {contactInfo.zip}</div>
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-center space-x-3">
        <Phone className="w-5 h-5 text-white/70 flex-shrink-0" />
        <a
          href={`tel:${contactInfo.phone}`}
          className="text-white/90 hover:text-white transition-colors"
        >
          {contactInfo.phone}
        </a>
      </div>

      {/* Email */}
      <div className="flex items-center space-x-3">
        <Mail className="w-5 h-5 text-white/70 flex-shrink-0" />
        <a
          href={`mailto:${contactInfo.email}`}
          className="text-white/90 hover:text-white transition-colors"
        >
          {contactInfo.email}
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;