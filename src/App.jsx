import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./Pages/Home/Home";
import Announcment from "./component/Announcment/Announcment";
import Navbar from "./component/Navbar/Navbar";
import AllElement from "./component/AllElements/AllElement"
import Footer from "./component/Footer/Footer"

function App() {
  return (
	<>
	<BrowserRouter>
    <div className="app">
        <Announcment />
        <Navbar />
      <div className="top">
		<Routes>
			<Route path="/" element={<Home/>}/>
			<Route path="/FEMMES" element={<AllElement/>}/>
		</Routes>
      </div>
    </div>
	</BrowserRouter>
	<Footer/>
	</>
  );
}

export default App;
