import { FaSun } from "react-icons/fa";

export default function TableRow() {
  return (
    <tr className="[&>td]:p-2 "> 
    {/* [&>*:nth-child(even)]:bg-borwn-50 odd:bg-foregroundColor*/}
      <td >
        <div className="flex flex-col items-center">
          <div>Thursday</div>
          <div>3 PM</div>
        </div>
      </td>
      <td>
        <FaSun className ="w-12 h-12 object-contain" />
      </td>
      <td>
        <div className="flex flex-col items-center">
          <div>TEMP</div>
          <div>31&deg;</div>
        </div>
      </td>
      <td>
        <div className="flex flex-col items-center">
          <div>FL TEMP</div>
          <div>25&deg;</div>
        </div>
      </td>
      <td>
        <div className="flex flex-col items-center">
          <div>WIND</div>
          <div>
            31<span className="font-normal text-sm">mph</span>
          </div>
        </div>
      </td>
      <td>
        <div className="flex flex-col items-center">
          <div>PRECIP</div>
          <div>
            0<span className="font-normal text-sm">in</span>
          </div>
        </div>
      </td>
    </tr>
  );
}
