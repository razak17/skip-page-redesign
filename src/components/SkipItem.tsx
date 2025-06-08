import type { Skip } from "../api/skips";

interface SkipItemProps {
  skip: Skip;
  isSelected: boolean;
  onSelect: () => void;
}

export function SkipItem({ skip, isSelected, onSelect }: SkipItemProps) {
  return (
    <div
      className={`p-4 rounded-lg shadow transition-all duration-200 cursor-pointer border-2 ${
        isSelected
          ? "bg-blue-50 border-blue-500 shadow-lg"
          : "bg-white border-white hover:shadow-lg"
      }`}
      onClick={onSelect}
    >
      <h2 className="text-xl font-semibold mb-2">{skip.size} Yard Skip</h2>
      <p className="text-gray-700">Hire Period: {skip.hire_period_days} days</p>
      <p className="text-gray-700">
        Price Before VAT: £{skip.price_before_vat.toFixed(2)}
      </p>
      <p className="text-gray-700">VAT: £{skip.vat.toFixed(2)}</p>
      <p className="text-gray-700">
        Total Cost: £{(skip.price_before_vat + skip.vat).toFixed(2)}
      </p>
    </div>
  );
}

export default SkipItem;
