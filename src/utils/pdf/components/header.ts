import { jsPDF } from 'jspdf';
import { PDF_CONFIG } from '../config';

export function addHeader(pdf: jsPDF): Promise<number> {
  return new Promise((resolve) => {
    const pageWidth = pdf.internal.pageSize.width;
    const margin = PDF_CONFIG.margins.left;
    let yPos = PDF_CONFIG.margins.top;

    // Left side - Email and website
    pdf.setFontSize(PDF_CONFIG.fonts.normal);
    pdf.setTextColor(100);
    pdf.text('info@ladinatravelsafaris.com', margin, yPos);
    pdf.text('ladinatravels@gmail.com', margin, yPos + 5);
    pdf.text('ladinatravelsafaris.com', margin, yPos + 5);
    
    // Center logo
    const img = new Image();
    img.onload = () => {
      const logoSize = PDF_CONFIG.logo.size;
      const logoX = (pageWidth - logoSize) / 2;
      pdf.addImage(img, 'PNG', logoX, yPos - 5, logoSize, logoSize);
      resolve(yPos + PDF_CONFIG.logo.size + 5);
    };
    img.src = '/Logo.png';

    // Right side - Location and phone
    const rightMargin = pageWidth - margin;
    pdf.text('Kefan Building, Woodavenue Road', rightMargin, yPos, { align: 'right' });
    pdf.text('(254) 728 309 380', rightMargin, yPos + 5, { align: 'right' });
  });
}