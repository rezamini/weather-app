import { useState } from "react";

export default function SearchResult() {
    const [first, setfirst] = useState([{ id: "1" }, { id: "2" }, { id: "3" }]);
  return (
    <div className="relative">
      <div className="bg-gray-300 rounded-md my-2 p-2 bg-opacity-80 absolute w-full">
        {first.map((item, index) => {
          return (
            <div key={item.id} className="p-1 text-sm text-foregroundColor">
              test
            </div>
          );
        })}
      </div>
    </div>
  );
}
