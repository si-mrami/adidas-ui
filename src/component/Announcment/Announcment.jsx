import "./Announcment.scss";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const Announcment = ({menuOpen, setMenuOpen}) => {
  return (
    <div className="announc">
      <div className="top">
        GET A $100 GIFT CARD FOR $80
        <KeyboardArrowDownOutlinedIcon className="iconDown"  onClick={() => setMenuOpen(!menuOpen)}/>
      </div>
      <div className="menu">
        <div className="box active">
            <div className="left">left</div>
            <div className="right">right</div>
        </div>
      </div>
    </div>
  );
};

export default Announcment;
