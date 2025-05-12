
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import ContactButton from './ContactButton';
import CALogo from './CALogo';
import { Separator } from '@/components/ui/separator';

const DigitalContactCard = () => {
  // Contact information
  const contactInfo = {
    name: 'CA Rahul Singhi',
    title: 'Chartered Accountant',
    organization: 'SBC & ASSOCIATES',
    phone: '+91-9711485270',
    email: 'partners@casbc.in',
    address: 'S-22, 2nd Floor, Cross River Mall, Vishwas Nagar, Shahadra, Delhi-32',
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-caLightBlue/40 to-white p-4">
      <Card className="w-full max-w-md bg-white contact-card animate-fade-in shadow-lg border-caLightBlue">
        <CardContent className="p-6">
          <div className="flex flex-col items-center mb-4">
            <div className="text-center mb-2">
              <h1 className="text-2xl font-bold text-caBlue">{contactInfo.name}</h1>
              <h2 className="text-gray-600">{contactInfo.title}</h2>
            </div>
            <CALogo />
          </div>

          <Separator className="my-4" />

          <div className="space-y-3">
            <ContactButton 
              type="phone" 
              label="Phone" 
              value={contactInfo.phone}
              link={`tel:${contactInfo.phone}`} 
            />
            
            <ContactButton 
              type="whatsapp" 
              label="WhatsApp" 
              value={contactInfo.phone}
              link={`https://wa.me/${contactInfo.phone.replace(/[^0-9]/g, '')}`} 
              className="bg-green-50 hover:bg-green-100"
            />
            
            <ContactButton 
              type="email" 
              label="Email" 
              value={contactInfo.email}
              link={`mailto:${contactInfo.email}`} 
              className="bg-blue-50 hover:bg-blue-100"
            />
            
            <ContactButton 
              type="location" 
              label="Office Address" 
              value="Cross River Mall, Shahadra, Delhi"
              link="https://www.google.com/maps?q=S-22,+2nd+Floor,+Cross+River+Mall,+Vishwas+Nagar,+Shahadra,+Delhi-32" 
              className="bg-amber-50 hover:bg-amber-100"
            />
          
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DigitalContactCard;
