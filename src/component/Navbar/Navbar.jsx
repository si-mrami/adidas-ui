import "./Navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import ButtomNavbar from "./ButtomNavbar";
import { useState} from "react";

const Navbar = () => {

  const[opeen, setOpeen] = useState(false);

  const handleMouseOver = () => {
    setOpeen(true);
  };

  const handleMouseOut = () => {
    setOpeen(false);
  };

  return (
    <div className="navbar">
      <div className="top">
        <div className="left">
          <img src="/public/add.svg" alt="" />
        </div>
        <div className="center">
          <div className="menu">
            <span className="menu_item" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>HOMMES</span>
            <span onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>FEMMES</span>
            <span onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>ENFANTS</span>
            <span onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={{ fontFamily: "'Cairo', sans-serif" }}>SPORTS</span>
            <span onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={{ fontFamily: "'Cairo', sans-serif" }}>
              COLLECTIONS
            </span>
            <button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={{ fontFamily: "'Cairo', sans-serif" }}>
              PROMOTIONS
            </button>
          </div>
        </div>
        <div className="right">
          <div className="searsh">
            <input type="text" placeholder="Recherche" />
            <SearchOutlinedIcon className="iconSearsh" />
          </div>
          <div className="person">
            <Person2OutlinedIcon />
          </div>
          <div className="cart">
            <AddShoppingCartOutlinedIcon />
            <span>12</span>
          </div>
        </div>
      </div>
    <ButtomNavbar open={opeen} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}/>
    </div>
  );
};

export default Navbar;
