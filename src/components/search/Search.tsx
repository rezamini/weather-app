import { useState } from "react";

type SearchProps = {
  latitude: number;
  longitude: number;
};

export default function Search({ latitude = 10, longitude = 10 }: SearchProps) {
  const [first, setfirst] = useState([{ id: "1" }, { id: "2" }, { id: "3" }]);
  return (
    <div className="flex justify-center m-10 gap-2">
      <div className="flex flex-col">
        <label className="text-xs text-foregroundColor font-bold mb-1">
          Search City
        </label>
        <input className="rounded-md outline-none p-2 text-sm" value={123} />
      </div>
      <div className="flex flex-col">
        <label className="text-xs text-foregroundColor font-bold mb-1">
          Latitude
        </label>
        <input
          className="rounded-md outline-none p-2 text-sm"
          value={latitude}
          disabled
        />
      </div>
      <div className="flex flex-col">
        <label className="text-xs text-foregroundColor font-bold mb-1">
          Longitude
        </label>
        <input
          className="rounded-md outline-none p-2 text-sm"
          value={longitude}
          disabled
        />
      </div>
    </div>
  );
}
