import { getIcon } from "@/util/IconCode";

type HeaderProps = {
  currentTemp: number | undefined;
  highTemp: number | undefined;
  lowTemp: number | undefined;
  highFeelsLike: number | undefined;
  lowFeelsLike: number | undefined;
  windSpeed: number | undefined;
  precip: number | undefined;
  // Icon?: React.ReactNode; // IconType |  React.ReactNode
  iconCode: number | undefined;
};
  
export default function Header({
  currentTemp = 31,
  highTemp = 32,
  lowTemp = 9,
  highFeelsLike = 30,
  lowFeelsLike = 20,
  windSpeed = 9,
  precip = 0.1,
  iconCode = 999,
}: HeaderProps) {
  // let Icon:JSX.Element = IconCode(iconCode);
  const Icon = getIcon(iconCode);
  return (
    <header className="flex items-center my-4 mx-10">
      <div className="flex w-1/2 justify-center items-center m-0.5 p-0.5 border-r-2 border-foregroundColor">
        {/* {Icon} */}
        {Icon && <Icon className="w-20 h-20 object-contain" />}
        <div className="text-3xl ml-4">
          <span data-current-temp>{currentTemp}</span>&deg;
        </div>
      </div>
      <div className="grid w-1/2 gap-4 justify-around grid-cols-3 grid-rows-2">
        <div className="flex flex-col items-center">
          <div className="uppercase font-bold text-xs text-foregroundSecondaryColor">
            High
          </div>
          <div>
            <span data-current-high>{highTemp}</span>&deg;
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="uppercase font-bold text-xs text-foregroundSecondaryColor">
            FL High
          </div>
          <div>
            <span data-current-fl-high>{highFeelsLike}</span>&deg;
          </div>
        </div>
        <div className="flex flex-col items-center ">
          <div className="uppercase font-bold text-xs text-foregroundSecondaryColor">
            Wind
          </div>
          <div>
            <span data-current-wind>{windSpeed}</span>
            <span className="font-normal text-sm">mph</span>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="uppercase font-bold text-xs text-foregroundSecondaryColor">
            Low
          </div>
          <div>
            <span data-current-low>{lowTemp}</span>&deg;
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="uppercase font-bold text-xs text-foregroundSecondaryColor">
            FL Low
          </div>
          <div>
            <span data-current-fl-low>{lowFeelsLike}</span>&deg;
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="uppercase font-bold text-xs text-foregroundSecondaryColor">
            Precip
          </div>
          <div>
            <span data-current-precip>{precip}</span>
            <span className="font-normal text-sm">in</span>
          </div>
        </div>
      </div>
    </header>
  );
}
