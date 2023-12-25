import { FaSun } from "react-icons/fa";

export default function TableRow() {
  return (
    <tr>
      <td>
        <div>
          <div>Thursday</div>
          <div>3 PM</div>
        </div>
      </td>
      <td>
        <FaSun />
      </td>
      <td>
        <div>
          <div>TEMP</div>
          <div>31&deg;</div>
        </div>
      </td>
      <td>
        <div>
          <div>FL TEMP</div>
          <div>25&deg;</div>
        </div>
      </td>
      <td>
        <div>
          <div>WIND</div>
          <div>
            31<span>mph</span>
          </div>
        </div>
      </td>
      <td>
        <div>
          <div>PRECIP</div>
          <div>
            0<span>in</span>
          </div>
        </div>
      </td>
    </tr>
  );
}
