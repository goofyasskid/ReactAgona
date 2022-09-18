import "./App.sass";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MainPage from "./pages/Main/MainPage";
import MarketPage from "./pages/Market/MarketPage";
import PointsPage from "./pages/Points/PointsPage";
import { Routes, BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <main className="App__pages">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/points" element={<PointsPage />} />
            <Route path="/market" element={<MarketPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
