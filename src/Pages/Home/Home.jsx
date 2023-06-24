import './Home.scss'
import BestSellers from '../../component/BestSellers/BestSellers'
import BestSeries from '../../component/BestSeries/BestSeries'
import Header from '../../component/Header/Header'
import InfoSect from '../../component/InfoSection/InfoSect'
import Inscripet from '../../component/Inscripet/Inscripet'
import Series from '../../component/Series/Series'

const Home = () => {
	return (
<>
<div className="app">
<Header />
<BestSellers />
<Inscripet />
<Series />
<BestSeries/>
<InfoSect/>
</div>
</>
)
}

export default Home
