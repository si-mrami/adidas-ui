import './InfoSect.scss';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';

const InfoSect = () => {
  return (
	<div className="info">
		<div className="delv">
			<LocalShippingOutlinedIcon/>
			<span>LIVRAISON GRATUITE</span>
		</div>
		<div className="delv ">
			<CurrencyExchangeOutlinedIcon/>
			<span>14 JOURS POUR DES RETOURS GRATUITS</span>
		</div>
		<div className="delv ">
			<PaymentsOutlinedIcon/>
			<span>PAIEMENT CASH DISPONIBLE</span>
		</div>
	</div>
  )
}

export default InfoSect
