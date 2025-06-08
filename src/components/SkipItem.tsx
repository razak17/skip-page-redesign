import { AlertTriangle, Car, Check, Watch } from "lucide-react";
import type { Skip } from "../api/skips";

interface SkipItemProps {
  skip: Skip;
  isSelected: boolean;
  onSelect: () => void;
}

export function SkipItem({ skip, isSelected, onSelect }: SkipItemProps) {
  return (
    <div
      className={`p-6 rounded-xl shadow-md transition-all duration-300 cursor-pointer border-2 hover:scale-[1.02] ${
        isSelected
          ? "border-blue-500 shadow-xl"
          : "border-gray-200 hover:shadow-xl hover:border-gray-300"
      }`}
      onClick={onSelect}
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center">
          {skip.size} Yard Skip
        </h2>
        {isSelected && <Check size={16} />}
      </div>

      <div className="space-y-3">
        <div className="flex items-center text-gray-600 gap-2">
          <Watch size={16} />
          <span className="font-medium">
            Hire Period: {skip.hire_period_days} days
          </span>
        </div>

        <div className="flex items-center gap-2">
          {skip.allowed_on_road ? (
            <>
              <Car size={16} className="text-green-600" />
              <span className="text-green-600 font-medium">
                Road placement allowed
              </span>
            </>
          ) : (
            <>
              <AlertTriangle size={16} className="text-amber-600" />
              <span className="text-amber-600 font-medium">
                Not allowed on the road
              </span>
            </>
          )}
        </div>

        <div className="bg-gray-50 rounded-lg p-4 space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Price Before VAT:</span>
            <span className="font-semibold text-gray-800">
              £{skip.price_before_vat.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700">VAT:</span>
            <span className="font-semibold text-gray-800">
              £{skip.vat.toFixed(2)}
            </span>
          </div>
          <div className="border-t border-gray-200 pt-2 flex justify-between items-center">
            <span className="text-lg font-bold text-gray-800">Total Cost:</span>
            <span className="text-xl font-bold text-green-600">
              £{(skip.price_before_vat + skip.vat).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkipItem;
