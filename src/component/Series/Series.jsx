import { Link } from "react-router-dom";
import "./Series.scss";

const Series = () => {
  return (
    <div className="series">
      <h1>POUR QUI FAIS-TU TES ACHATS ?</h1>
      <div className="filter">
        <Link to="/FEMMES">
          <div className="item">
            <img
              src="https://adidas.co.ma/img/womens_1_tcm196-819363-600px.webp"
              alt=""
            />
            <span>FEMMES</span>
          </div>
        </Link>
        <div className="item">
          <img
            src="https://adidas.co.ma/img/mens_1_tcm196-819364-600px.webp"
            alt=""
          />

          <span>HOMMES</span>
        </div>
        <div className="item">
          <img
            src="https://adidas.co.ma/img/kids_1_tcm196-819367-600px.webp"
            alt=""
          />
          <span>ENFANTS </span>
        </div>
      </div>
    </div>
  );
};

export default Series;
