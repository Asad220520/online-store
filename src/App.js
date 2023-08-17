import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./components/Product";
import DetailsWomen from "./pages/DetailsWomen";
import Portfolio from "./components/Portfolio";
import DetailsPortfolio from "./pages/DetailsPortfolio";
import { Basket } from "./components/Basket";
import Favorite from "./components/Favorite";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/product" element={<Product />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/detailsWoomen/:id" element={<DetailsWomen />} />
          <Route path="/detailsPortfolio/:idd" element={<DetailsPortfolio />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
