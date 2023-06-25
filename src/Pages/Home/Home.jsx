import './Home.scss'
import BestSellers from '../../component/BestSellers/BestSellers'
import BestSeries from '../../component/BestSeries/BestSeries'
import Header from '../../component/Header/Header'
import Inscripet from '../../component/Inscripet/Inscripet'
import Series from '../../component/Series/Series'
import AddidasSport from '../../component/AddidasSport/AddidasSport'
import AboutAddidas from '../../component/AboutAddidas/AboutAddidas'
import Inscree from '../../component/Inscree/Inscree'

const Home = () => {
	return (
<>
<div>
<Header />
<BestSellers />
<Inscripet />
<Series />
<BestSeries/>
<AddidasSport/>
<AboutAddidas/>
<Inscree/>
</div>
</>
)
}

export default Home
