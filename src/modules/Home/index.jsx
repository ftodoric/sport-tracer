import { Link } from "react-router-dom";
import "./index.css";

import { getToday } from "../../utils/date-and-time";
import tileImageFootball from "../../images/tile-image-football.png";
import tileImageBasketball from "../../images/tile-image-basketball.png";
import tileImageRugby from "../../images/tile-image-rugby.png";

export function Home() {
  return (
    <div className="home">
      <div className="title">Sports:</div>
      <div className="sports">
        <Link
          className="sport-tile"
          to={`/categories/football/${getToday()}/7200`}
        >
          <img src={tileImageFootball} alt="tileImageFootball" />
          <div className="name">Football</div>
        </Link>
        <Link
          className="sport-tile"
          to={`/categories/basketball/${getToday()}/7200`}
        >
          <img src={tileImageBasketball} alt="tileImageBasketball" />
          <div className="name">Basketball</div>
        </Link>
        <Link
          className="sport-tile"
          to={`/categories/rugby/${getToday()}/7200`}
        >
          <img src={tileImageRugby} alt="tileImageRugby" />
          <div className="name">Rugby</div>
        </Link>
      </div>
    </div>
  );
}
