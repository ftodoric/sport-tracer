import { Link } from "react-router-dom";
import "./index.css";

import homeIcon from "../../images/icon-home.svg";
import { getToday } from "../../utils/date-and-time";

export function Navbar() {
  return (
    <div className="navbar">
      <Link className="item" to="/">
        <img className="home-icon" src={homeIcon} alt="homeIcon" />
      </Link>
      <Link className="item" to={`/categories/football/${getToday()}/7200`}>
        Football
      </Link>
      <Link className="item" to={`/categories/basketball/${getToday()}/7200`}>
        Basketball
      </Link>
      <Link className="item" to={`/categories/rugby/${getToday()}/7200`}>
        Rugby
      </Link>
    </div>
  );
}
