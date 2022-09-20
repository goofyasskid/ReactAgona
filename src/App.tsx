import "./App.sass";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MainPage from "./pages/Main/MainPage";
import MarketPage from "./pages/Market/MarketPage";
import PointsPage from "./pages/Points/PointsPage";
import UserPage from "./pages/User/UserPage";
import { Routes, BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/points" element={<PointsPage />} />
            <Route path="/market" element={<MarketPage />} />
            <Route path="/user" element={<UserPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
