import { useEffect, useState } from "react";
import SearchResult from "./SearchResult";
import { getCities, CitySearchType } from "@/api/APICalls";
type SearchProps = {
  latitude: number;
  longitude: number;
};

export default function Search({ latitude = 10, longitude = 10 }: SearchProps) {
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CitySearchType[]>([]);
  const [selectedResult, setSelectedResult] = useState<CitySearchType>({} as CitySearchType)
  useEffect(() => {
    if (searchValue.length >= 3) {
      const getSearchData = async () => {
        const result = await getCities(searchValue);
        setSearchResult(result);
      };
      getSearchData();
    }
  }, [searchValue]);

  function onClickResultHandler(item: CitySearchType): void {
    setSelectedResult(item);
  }

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
          <SearchResult
            searchResult={searchResult}
            onClickResultHandler={onClickResultHandler}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label className="text-xs text-foregroundColor font-bold mb-1">
          Latitude
        </label>
        <input
          className="rounded-md outline-none p-2 text-sm"
          defaultValue={`${Object.keys(selectedResult).length > 0 ? selectedResult.latitude : latitude }`}
          disabled
        />
      </div>
      <div className="flex flex-col">
        <label className="text-xs text-foregroundColor font-bold mb-1">
          Longitude
        </label>
        <input
          className="rounded-md outline-none p-2 text-sm"
          defaultValue={`${Object.keys(selectedResult).length > 0 ? selectedResult.longitude : longitude}`}
          disabled
        />
      </div>
    </div>
  );
}
