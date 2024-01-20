import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import Header from "./components/Header/Header";
import AboutProject from "./pages/AboutProject/AboutProject";
import Footer from "./components/Footer/Footer";
import PorfolioForm from "./pages/PortfolioForm/PortfolioForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/aboutProject" element={<AboutProject />} />
          <Route path="/buildPortfolio" element={<PorfolioForm />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
