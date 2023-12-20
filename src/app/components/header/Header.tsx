import Image from "next/image";
import { FaSun } from "react-icons/fa";

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <FaSun />
        <div className="header-current-temp">
          <span data-current-temp>31</span>
        </div>
      </div>
      <div className="header-right">
        <div className="info-group">
          <div className="label">High</div>
          <div>
            <span data-current-high>32</span>&deg;
          </div>
        </div>
        <div className="info-group">
          <div className="label">FL High</div>
          <div>
            <span data-current-fl-high>27</span>&deg;
          </div>
        </div>
        <div className="info-group">
          <div className="label">Wind</div>
          <div>
            <span data-current-wind>9</span>
            <span className="value-sub-info">mph</span>
          </div>
        </div>
        <div className="info-group">
          <div className="label">Low</div>
          <div>
            <span data-current-low>19</span>&deg;
          </div>
        </div>
        <div className="info-group">
          <div className="label">FL Low</div>
          <div>
            <span data-current-fl-low>12</span>&deg;
          </div>
        </div>
        <div className="info-group">
          <div className="label">Precip</div>
          <div>
            <span data-current-precip>0.1</span>
            <span className="value-sub-info">in</span>
          </div>
        </div>
      </div>
    </header>
  );
}
