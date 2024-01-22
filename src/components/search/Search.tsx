import { useState } from "react";
import SearchResult from "./SearchResult";
type SearchProps = {
  latitude: number;
  longitude: number;
};

export default function Search({ latitude = 10, longitude = 10 }: SearchProps) {
  return (
    <div className="flex justify-center m-10 gap-2">
      <div className="flex flex-col">
        <label className="text-xs text-foregroundColor font-bold mb-1">
          Search City
        </label>
        <input className="rounded-md outline-none p-2 text-sm" value={123} />
        <div>
          <SearchResult />
        </div>
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
