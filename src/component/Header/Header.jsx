import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="left">
        <h1>Bienvenue dans le Club Originals</h1>
        <p>
          Libres penseurs, créateurs et innovateurs : bienvenue dans le Club
          Originals
        </p>
        <div className="button">
          <button>DECOUVRIR MAINTENANT</button>
        </div>
        <div className="button">
          <button>ACHETEZ MAINTENANT</button>
        </div>
      </div>
      <div className="right">
        <img
          src="https://adidas.co.ma/133826-large_default/basic-3-stripes-tricot-tracksuit.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
