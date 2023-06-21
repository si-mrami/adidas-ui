import "./App.scss";
import Announcment from "./component/Announcment/Announcment";
import BestSellers from "./component/BestSellers/BestSellers";
import BestSeries from "./component/BestSeries/BestSeries";
import Header from "./component/Header/Header";
import Inscripet from "./component/Inscripet/Inscripet";
import Navbar from "./component/Navbar/Navbar";
import Series from "./component/Series/Series";

function App() {
  return (
    <div className="app">
      <div className="top">
        <Announcment />
        <Navbar />
      </div>
      <Header />
      <BestSellers />
      <Inscripet />
      <Series />
      <BestSeries/>
    </div>
  );
}

export default App;
