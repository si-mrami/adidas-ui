import './Footer.scss'

const Footer = () => {

	const today = new Date();
	const year = today.getFullYear();

  return (
	<div className="footer">
			<div className="left">
				<span>Copyright © With ❣️<small>Mrami</small>  {year}</span>
			</div>
			<div className="right">
				<span>We accept the foollowing payment methods</span>
				<div className="methods">
					<img src="https://cdn-icons-png.flaticon.com/128/196/196578.png" alt="" />
					<img src="https://cdn-icons-png.flaticon.com/128/174/174861.png" alt="" />
					<img src="https://cdn-icons-png.flaticon.com/128/11041/11041055.png" alt="" />
				</div>
			</div>
	</div>
  )
}

export default Footer
