
import QRCode from 'qrcode';

interface VCardInfo {
  name: string;
  title: string;
  organization: string;
  phone: string;
  email: string;
  address: string;
  url?: string;
}

export const generateVCard = (info: VCardInfo): string => {
  // Format according to vCard standard
  let vCard = 'BEGIN:VCARD\n';
  vCard += 'VERSION:3.0\n';
  vCard += `N:${info.name};;;\n`;
  vCard += `FN:${info.name}\n`;
  vCard += `TITLE:${info.title}\n`;
  vCard += `ORG:${info.organization}\n`;
  vCard += `TEL;TYPE=CELL:${info.phone}\n`;
  vCard += `EMAIL:${info.email}\n`;
  vCard += `ADR:;;${info.address};;;\n`;
  if (info.url) {
    vCard += `URL:${info.url}\n`;
  }
  vCard += 'END:VCARD';
  
  return vCard;
};

export const generateQRCodeDataURL = async (data: string): Promise<string> => {
  try {
    const qrCodeDataUrl = await QRCode.toDataURL(data, {
      errorCorrectionLevel: 'H',
      margin: 1,
      width: 200,
      color: {
        dark: '#1E3A8A', // Dark color (blue)
        light: '#FFFFFF', // Light color (white)
      },
    });
    return qrCodeDataUrl;
  } catch (error) {
    console.error('Error generating QR code:', error);
    return '';
  }
};
