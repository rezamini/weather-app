import Image from "next/image";
import { FaSun } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex items-center my-4">
      <div className="flex w-1/2 justify-center items-center m-0.5 p-0.5 border-r-2 border-foregroundColor">
        <FaSun className ="w-20 h-20 object-contain" />
        <div className="text-3xl ml-4">
          <span data-current-temp>31</span>&deg;
        </div>
      </div>
      <div className="grid w-1/2 gap-4 justify-around grid-cols-3 grid-rows-2">
        <div className="flex flex-col items-center">
          <div className="uppercase font-bold text-xs text-foregroundSecondaryColor">High</div>
          <div>
            <span data-current-high>32</span>&deg;
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="uppercase font-bold text-xs text-foregroundSecondaryColor">FL High</div>
          <div>
            <span data-current-fl-high>27</span>&deg;
          </div>
        </div>
        <div className="flex flex-col items-center ">
          <div className="uppercase font-bold text-xs text-foregroundSecondaryColor">Wind</div>
          <div>
            <span data-current-wind>9</span>
            <span className="font-normal text-sm">mph</span> 
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="uppercase font-bold text-xs text-foregroundSecondaryColor">Low</div>
          <div>
            <span data-current-low>19</span>&deg;
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="uppercase font-bold text-xs text-foregroundSecondaryColor">FL Low</div>
          <div>
            <span data-current-fl-low>12</span>&deg;
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="uppercase font-bold text-xs text-foregroundSecondaryColor">Precip</div>
          <div>
            <span data-current-precip>0.1</span>
            <span className="font-normal text-sm">in</span>
          </div>
        </div>
      </div>
    </header>
  );
}
