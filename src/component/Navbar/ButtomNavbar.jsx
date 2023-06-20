import './Navbar.scss';

const ButtomNavbar = ({open, onMouseOver, onMouseOut}) => {

  return (
    <div className={`list_menu ${open ? 'active' : ''}`} onMouseOut={onMouseOut} onMouseOver={onMouseOver}>
    <div className="list" >
      <div className="item">
        <h1>A L'AFFICHE</h1>
        <div className="mini-list">
          <span>Nouvoutes</span>
          <span>Nouvoutes</span>
          <span>Nouvoutes</span>
        </div>
      </div>
      <div className="item">
        <h1>CHAUSSURES</h1>
        <div className="mini-list">
          <span>Nouvoutes</span>
          <span>Nouvoutes</span>
          <span>Nouvoutes</span>
        </div>
      </div>
      <div className="item">
        <h1>VETEMENTS</h1>
        <div className="mini-list">
          <span>Nouvoutes</span>
          <span>Nouvoutes</span>
          <span>Nouvoutes</span>
        </div>
      </div>
      <div className="item">
        <h1>ACCESSOIRES</h1>
        <div className="mini-list">
          <span>Nouvoutes</span>
          <span>Nouvoutes</span>
          <span>Nouvoutes</span>
        </div>
      </div>
      <div className="item">
        <h1>SPORTS</h1>
        <div className="mini-list">
          <span>Nouvoutes</span>
          <span>Nouvoutes</span>
          <span>Nouvoutes</span>
        </div>
      </div>
    </div>
    <hr />
    <div className="bottom-list">
      <span>TOUS LES PRODUITS</span>
      <span>TOUS LES PRODUITS</span>
      <span>TOUS LES PRODUITS</span>
      <span>TOUS LES PRODUITS</span>
      <span>TOUS LES PRODUITS</span>
    </div>
    <hr />
  </div>
  )
}

export default ButtomNavbar