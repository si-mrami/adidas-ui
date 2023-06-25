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

  return (
	<div className="all">
			<h1>FEMMES</h1>
		<div className="wrraper">
			<div className="topSection">
				{list.map((item) => (
					<div className="itemButton" key={item.id}>
					<div className="listTop">
					<span>{item.list}</span>
					<KeyboardArrowDownOutlinedIcon/>
					</div>
				<div className="bottomList">
					hello
				</div>
				</div>
))}
			</div>
		</div>
	</div>
  )
}

export default AllElement
