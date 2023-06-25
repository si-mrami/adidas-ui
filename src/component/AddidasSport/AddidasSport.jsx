import './AddidasSport.scss'
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import { useState } from 'react';
import { sportProduct } from '../../data';

const AddidasSport = () => {
	const [listIndex, setListIndex] = useState(0);

	const handleNext = () => {
		const nextIndex = listIndex + 4;
		setListIndex(nextIndex > sportProduct.length ? 0 : nextIndex);
	}

	const handelPrive = () => {
		const prevIndex = listIndex - 3;
		setListIndex(prevIndex < 0 ? sportProduct.length - 3 : prevIndex);
		if (prevIndex === sportProduct.length)
			setListIndex(0);
	}
	return (
		<div className="bestSeries">
			<h1>MORE FROM ADIDAS STORIES</h1>
			<div className="slider">
				<div className="ArrowLeft" onClick={handelPrive}>
					<NavigateBeforeOutlinedIcon/>
				</div>
				<div className="container">
					{sportProduct.map((item, index) => (
						<div className="items" key={item.id} style={{transform: `translateX(${100 * (index - listIndex)}%)`}}>
						<img src={item.Img} alt="" />
						<div className="bottom">
							<h1>{item.titel}</h1>
							<span>{item.desc}</span>
						</div>
					</div>
						))}
				</div>
				<div className="ArrowRight" onClick={handleNext}>
					<NavigateNextOutlinedIcon/>
				</div>
			</div>
		</div>
)
}

export default AddidasSport
