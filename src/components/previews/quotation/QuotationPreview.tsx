import { formatDate } from '../../../utils/date';
import { formatCurrency } from '../../../utils/currency';
import type { Document, VehicleItem } from '../../../types';

interface QuotationPreviewProps {
  document: Document;
  items: VehicleItem[];
}

export function QuotationPreview({ document, items }: QuotationPreviewProps) {
  const totalAmount = items.reduce((sum, item) => sum + (item.quantity * item.price), 0);

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white">
      {/* Header with Logo */}
      <div className="grid grid-cols-3 gap-8 items-center mb-8">
        <div className="flex flex-col gap-2">
          <span className="text-gray-600">info@ladinatravelsafaris.com</span>
          <span className="text-gray-600">ladinatravelsafaris.com</span>
        </div>

        <div className="flex justify-center">
          <img
            src="/Logo.png"
            alt="Company Logo"
            className="w-24 h-24 rounded-full object-cover border-2 border-gray-200"
          />
        </div>

        <div className="flex flex-col gap-2 text-right">
          <span className="text-gray-600">Kefan Building, Woodavenue Road</span>
          <span className="text-gray-600">(254) 728 309 380</span>
        </div>
      </div>

      {/* Rest of the component remains the same */}
      {/* ... */}
    </div>
  );
}