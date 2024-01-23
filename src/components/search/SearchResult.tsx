import { Fragment, useState } from "react";

export default function SearchResult() {
  const [first, setfirst] = useState([{ id: "1", city:"london", latitude:38.4499712, longitude:27.230208 }, { id: "2", city:"london2", latitude:38.4499712, longitude:27.230208 }, { id: "3", city:"london3", latitude:38.4499712, longitude:27.230208 }]);
  return (
    <div className="relative">
      <div className="bg-gray-300 rounded-md my-2 p-2 bg-opacity-95 absolute left-0 top-0 w-full">
        <div className="grid grid-cols-3 gap-y-2">
          <div className="text-xs font-bold">City</div>
          <div className="ml-auto mr-2 text-xs font-bold">Latitude</div>
          <div className="ml-auto text-xs font-bold">Longitude</div>
          {first.map((item, index) => {
            return (
              <Fragment key={item.id} >
                <div className="text-xs text-foregroundColor">
                  {item.city}
                </div>
                <div className="ml-auto mr-2 text-xs text-foregroundColor">
                {Math.round(item.latitude * 100) / 100}
                </div>
                <div className="mx-auto text-xs text-foregroundColor">
                  {Math.round(item.longitude * 100) / 100}
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}
