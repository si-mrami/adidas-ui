import './BestSeries.scss';
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import { useState } from 'react';
import { sliderProduct } from '../../data';

const BestSeries = () => {

	const [listIndex, setListIndex] = useState(0);

	const handleNext = () => {
		const nextIndex = listIndex + 4;
		setListIndex(nextIndex > sliderProduct.length ? 0 : nextIndex);
	}

	const handelPrive = () => {
		const prevIndex = listIndex - 3;
		setListIndex(prevIndex < 0 ? sliderProduct.length - 3 : prevIndex);
		if (prevIndex === sliderProduct.length)
			setListIndex(0);
	}
	return (
		<div className="bestSeries">
			<h1>LA TENDANCE</h1>
			<div className="slider">
				<div className="arrowLeft" onClick={handelPrive}>
					<NavigateBeforeOutlinedIcon/>
				</div>
				<div className="container">
					{sliderProduct.map((item, index) => (
						<div className="item" key={item.id} style={{transform: `translateX(${100 * (index - listIndex)}%)`}}>
						<img src={item.Img} alt="" />
						{item.Pors !== undefined  ? (<div className='promo'>
							<span>{item.Pors}</span>
							</div>) : ' '}
						<div className="bottom">
							<span className='Name'>{item.Name}</span>
							<div className="price">
								<span className='prc'>{item.OrgPrice}</span>
								<span>{item.DisPrice}</span>
							</div>
						</div>
					</div>
						))}
				</div>
				<div className="arrowRight" onClick={handleNext}>
					<NavigateNextOutlinedIcon/>
				</div>
			</div>
		</div>
)
}

export default BestSeries
