import { useState } from "react";

import { useQuery } from "@tanstack/react-query";
import { getSkipsByLocation } from "./api/skips";
import { SkipItem } from "./components/SkipItem";

const App = () => {
  const [selectedSkipId, setSelectedSkipId] = useState<number | null>(null);
  
  const { isPending, error, data } = useQuery({
    queryKey: ["skips"],
    queryFn: () => getSkipsByLocation(),
  });

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500">Error fetching skips: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl mb-4">Choose Your Skip Size</h1>
      <p className="mb-4 text-gray-600">
        Select the skip size that best suits your needs
      </p>
      {isPending ? (
        <div className="flex items-center justify-center">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data?.map((skip) => (
            <SkipItem
              key={skip.id}
              skip={skip}
              isSelected={selectedSkipId === skip.id}
              onSelect={() => setSelectedSkipId(skip.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
