import "./App.sass";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HistoryOutlet from "./components/outlet/HistoryOutlet";
import PromoOutlet from "./components/outlet/PromoOutlet";
import MainPage from "./pages/Main/MainPage";
import MarketPage from "./pages/Market/MarketPage";
import PointsPage from "./pages/Points/PointsPage";
import UserPage from "./pages/User/UserPage";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import MapOutlet from "./components/outlet/MapOutlet";
import PointsCard from "./components/cards/pointsCard/PointsCard";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/points" element={<PointsPage />}>
              <Route path="cards" element={<MapOutlet />} />
              <Route path=":cardId" element={<PointsCard />} />
            </Route>
            <Route path="/market" element={<MarketPage />} />
            <Route path="/user" element={<UserPage />}>
              <Route path="history" element={<HistoryOutlet />} />
              <Route path="promo" element={<PromoOutlet />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
