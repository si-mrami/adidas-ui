import { useState } from 'react';
import './AllElement.scss';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const AllElement = () => {


	const list = [
		{
			id: 1,
			list: "GENER",
		},
		{
			id: 2,
			list: "AGE",
		},
		{
			id: 3,
			list: "PRODUCT TYPE",
		},
		{
			id: 4,
			list: "COLORIS",
		},
		{
			id: 5,
			list: "PRACE",
		},
		{
			id: 6,
			list: "TAILLE",
		},
	]
	const [lists, setLists] = useState([false, false, false, false, false, false]);
	const handleClick = (i) => {
		lists[i] = !lists[i];
		setLists([...lists])
	}

  return (
	<div className="all">
			<h1>FEMMES</h1>
		<div className="wrraper">
			<div className="topSection">
				{list.map((item) => (
					<div className="itemButton" key={item.id}>
					<div className="listTop" onClick={() => handleClick(item.id - 1)}>
					<span>{item.list}</span>
					<KeyboardArrowDownOutlinedIcon/>
					</div>
				<div className={`bottomList ${!lists[item.id - 1] ? 'active' : ''}`}>
					test1
				</div>
				</div>
))}
			</div>
			<h1>hello</h1>
			<h1>hello</h1>
			<h1>hello</h1>
			<h1>hello</h1>
			<h1>hello</h1>
			<h1>hello</h1>

		</div>
	</div>
  )
}

export default AllElement
