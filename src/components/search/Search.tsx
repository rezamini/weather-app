import { useEffect, useState } from "react";
import SearchResult from "./SearchResult";
type SearchProps = {
  latitude: number;
  longitude: number;
};

export default function Search({ latitude = 10, longitude = 10 }: SearchProps) {
  const [searchValue, setSearchValue] = useState<string>("");
  
  return (
    <div className="flex justify-center m-10 gap-2">
      <div className="flex flex-col">
        <label className="text-xs text-foregroundColor font-bold mb-1">
          Search City
        </label>
        <input
          className="rounded-md outline-none p-2 text-sm placeholder:text-xs"
          placeholder="Input City - Min 3 Characters"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <div>
          <SearchResult searchResult={[]}/>
        </div>
      </div>
      <div className="flex flex-col">
        <label className="text-xs text-foregroundColor font-bold mb-1">
          Latitude
        </label>
        <input
          className="rounded-md outline-none p-2 text-sm"
          defaultValue={latitude}
          disabled
        />
      </div>
      <div className="flex flex-col">
        <label className="text-xs text-foregroundColor font-bold mb-1">
          Longitude
        </label>
        <input
          className="rounded-md outline-none p-2 text-sm"
          defaultValue={longitude}
          disabled
        />
      </div>
    </div>
  );
}
