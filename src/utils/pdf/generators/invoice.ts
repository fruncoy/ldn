import { jsPDF } from 'jspdf';
import { PDF_CONFIG } from '../config';
import { addHeader } from '../components/header';
import { addDocumentBox } from '../components/documentBox';
import { addServiceTable } from '../components/serviceTable';
import { addPaymentDetails } from '../components/paymentDetails';
import { addBookingPolicy } from '../components/bookingPolicy';
import { addDocumentFooter } from '../components/footer';
import type { Document, VehicleItem } from '../../../types';

export async function generateInvoicePDF({ document, items }: {
  document: Document;
  items: VehicleItem[];
}) {
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
    compress: true
  });

  pdf.setProperties({
    title: `Invoice - ${document.client_name}`,
    subject: `Invoice for ${document.client_name}`,
    creator: 'Ladina Travel Safaris'
  });

  let yPos = await addHeader(pdf);
  yPos += PDF_CONFIG.content.spacing.section;
  
  yPos = addDocumentBox(pdf, document, yPos);
  yPos = addServiceTable(pdf, document, items, yPos);
  yPos = addPaymentDetails(pdf, yPos, document.currency);
  yPos = addBookingPolicy(pdf, yPos);

  addDocumentFooter(pdf, yPos);

  return pdf;
}