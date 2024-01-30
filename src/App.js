import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import UserForm from "./pages/UserForm/UserForm";
import UserDashboard from "./pages/UserDashboard/UserDashboard";
import UserEducationForm from "./pages/UserEducationForm/UserEducationForm";
import UserWorkExpForm from "./pages/UserWorkExpForm/UserWorkExpForm";
import UserProject from "./pages/UserProjectForm/UserProject";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/buildUser" element={<UserForm />} />
          <Route path="/:id/user" element={<UserDashboard />} />
          <Route path="/:id/addEducation" element={<UserEducationForm />} />
          <Route path="/:id/addWorkExperience" element={<UserWorkExpForm />} />
          <Route path="/:id/addProject" element={<UserProject />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
