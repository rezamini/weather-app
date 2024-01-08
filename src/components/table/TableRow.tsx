import { FaSun } from "react-icons/fa";

type TableRowProps = {
  timestamp: number | undefined;
  iconCode?: number | undefined;
  maxTemp: number | undefined;
  feelsLike: number | undefined;
  windSpeed: number | undefined;
  precip: number | undefined;
};

export default function TableRow({
  timestamp = 999,
  iconCode = 999,
  maxTemp = 31,
  feelsLike = 30,
  windSpeed = 19,
  precip = 0.1,
}: TableRowProps) {
  return (
    <tr className="[&>td]:p-2 even:bg-sky-300/60 odd:bg-sky-300/30 ">
      {/* [&>*:nth-child(even)]:bg-borwn-50 */}
      <td>
        <div className="flex flex-col items-center">
          {/* <div>Thursday</div>
          <div>3 PM</div> */}
          {timestamp}
        </div>
      </td>
      <td>
        <FaSun className="w-12 h-12 object-contain" />
      </td>
      <td>
        <div className="flex flex-col items-center">
          <div>TEMP</div>
          <div>{maxTemp}&deg;</div>
        </div>
      </td>
      <td>
        <div className="flex flex-col items-center">
          <div>FL TEMP</div>
          <div>{feelsLike}&deg;</div>
        </div>
      </td>
      <td>
        <div className="flex flex-col items-center">
          <div>WIND</div>
          <div>
            {windSpeed}<span className="font-normal text-sm">mph</span>
          </div>
        </div>
      </td>
      <td>
        <div className="flex flex-col items-center">
          <div>PRECIP</div>
          <div>
            {precip}<span className="font-normal text-sm">in</span>
          </div>
        </div>
      </td>
    </tr>
  );
}
