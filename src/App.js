import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import UserForm from "./pages/UserForm/UserForm";
import UserDashboard from "./pages/UserDashboard/UserDashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/buildUser" element={<UserForm />} />
          <Route path="/user/:id" element={<UserDashboard />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
