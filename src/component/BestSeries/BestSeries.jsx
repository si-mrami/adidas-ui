import './BestSeries.scss';
import Slider from "react-slick";

const BestSeries = () => {

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };

  return (
    <div className="best">
        <h1>LES MEILLEURS DEALS</h1>
         <Slider className='Slider' {...settings}>
        <h1>LES MEILLEURS DEALS</h1>
        <h1>LES MEILLEURS DEALS</h1>
        <h1>LES MEILLEURS DEALS</h1>
        <h1>LES MEILLEURS DEALS</h1>
         </Slider>
    </div>
  )
}

export default BestSeries