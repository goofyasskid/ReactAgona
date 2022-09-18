import "./App.sass";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MainPage from "./pages/Main/MainPage";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import PointsPage from "./pages/Points/PointsPage";
import MarketPage from "./pages/Market/MarketPage";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/points" element={<PointsPage />} />
          <Route path="/market" element={<MarketPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
