
import React from 'react';
import { cn } from '@/lib/utils';
import { Facebook, Mail, MapPin, Phone, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

type ContactType = 'phone' | 'whatsapp' | 'email' | 'location' | 'facebook';

interface ContactButtonProps {
  type: ContactType;
  value: string;
  label: string;
  link: string;
  className?: string;
}

const ContactButton = ({ type, value, label, link, className }: ContactButtonProps) => {
  const getIcon = () => {
    switch (type) {
      case 'phone':
        return <Phone className="h-5 w-5 text-caBlue" />;
      case 'whatsapp':
        return <Smartphone className="h-5 w-5 text-green-600" />;
      case 'email':
        return <Mail className="h-5 w-5 text-blue-600" />;
      case 'location':
        return <MapPin className="h-5 w-5 text-amber-600" />;
      default:
        return null;
    }
  };

  const getBgColor = () => {
    switch (type) {
      case 'phone':
        return 'bg-caLightBlue/80';
      case 'whatsapp':
        return 'bg-green-100/80';
      case 'email':
        return 'bg-blue-100/80';
      case 'location':
        return 'bg-amber-100/80';
      default:
        return 'bg-caLightBlue/80';
    }
  };

  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="no-underline w-full group block"
    >
      <Button
        variant="outline"
        className={cn(
          "w-full flex items-center gap-3 p-3 rounded-md border border-gray-200 hover:border-caBlue transition-all duration-200 bg-white text-gray-700 shadow-sm hover:shadow-md",
          className
        )}
      >
        <div className={cn("p-2 rounded-full transition-all duration-200", getBgColor())}>
          {getIcon()}
        </div>
        <div className="flex flex-col items-start flex-1">
          <span className="font-medium text-sm text-gray-800">{label}</span>
          <span className="text-sm text-gray-600 truncate max-w-[200px] group-hover:text-caBlue transition-colors">{value}</span>
        </div>
      </Button>
    </a>
  );
};

export default ContactButton;
