import { IconType } from "react-icons";
import {
  FaSun,
  FaCloudSun,
  FaCloud,
  FaSmog,
  FaCloudRain,
  FaCloudMoonRain,
  FaCloudSunRain,
  FaSnowflake,
  FaSnowman,
  FaBolt,
  FaCloudShowersHeavy,
} from "react-icons/fa";

export function getIcon(code: number): IconType {
  let IconComponent: IconType;

  switch (code) {
    case 0:
    case 1:
      IconComponent = FaSun;
      break;
    case 2:
      IconComponent = FaCloudSun;
      break;
    case 3:
      IconComponent = FaCloud;
      break;
    case 45:
    case 48:
      IconComponent = FaSmog;
      break;
    case 51:
    case 53:
    case 55:
      IconComponent = FaCloudRain;
      break;
    case 56:
    case 57:
      IconComponent = FaCloudMoonRain;
      break;
    case 61:
    case 63:
    case 65:
      IconComponent = FaCloudSunRain;
      break;
    case 66:
    case 67:
      IconComponent = FaCloudShowersHeavy;
      break;
    case 71:
    case 73:
    case 75:
      IconComponent = FaSnowflake;
      break;
    case 77:
      IconComponent = FaSnowman;
      break;
    case 80:
    case 81:
    case 82:
      IconComponent = FaCloudShowersHeavy;
      break;
    case 85:
    case 86:
      IconComponent = FaSnowflake;
      break;
    case 95:
      IconComponent = FaBolt;
      break;
    case 96:
    case 99:
      IconComponent = FaCloud;
      break;

    default:
      IconComponent = FaSun; // Provide a default icon or handle unknown codes
      break;
  }

  return IconComponent;
}

// export function GetIcon2({ code }: any) {
//   let IconComponent: IconType;

//   switch (code) {
//     case 0:
//     case 1:
//       IconComponent = FaSun;
//       break;
//     case 2:
//       IconComponent = FaCloudSun;
//       break;

//     default:
//       IconComponent = FaSun; // Provide a default icon or handle unknown codes
//       break;
//   }

//   return <IconComponent />;

//   // <GetIcon />
// }

// export function getIcon(code:number): IconType{
//   let IconComponent;

//   switch (code) {
//     case 0:
//     case 1:
//       IconComponent = FaSun;
//       break;
//     case 2:
//       IconComponent = FaCloudSun;
//       break;
//     default:
//       IconComponent = FaSun; // Provide a default icon or handle unknown codes
//       break;
//   }

//   return IconComponent;
// }
// function customIcon(icon:React.ReactNode): JSX.Element {
//   return (
//     <svg
//       className={`w-20 h-20 object-contain `} // Apply passed class names
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 20 20"
//       fill="currentColor"
//     >
//       {/*  icon content */}
//       {/* ... */}
//     </svg>
//   );
// };

// const weatherIconMap = {
//     51: FaCloudRain,
//     53: FaCloudRain,
// };
// const WeatherIcon = ({ code }) => {
//     const IconComponent = weatherIconMap[code] || DefaultIcon;

//     return <IconComponent />;
//   };
