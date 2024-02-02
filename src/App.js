import "./App.scss";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import Main from "./pages/Main/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import UserForm from "./pages/UserForm/UserForm";
import UserDashboard from "./pages/UserDashboard/UserDashboard";
import UserEducationForm from "./pages/UserEducationForm/UserEducationForm";
import UserWorkExpForm from "./pages/UserWorkExpForm/UserWorkExpForm";
import UserProjectForm from "./pages/UserProjectForm/UserProjectForm";
import UserSkillForm from "./pages/UserSkillForm/UserSkillForm";
import UserReferenceForm from "./pages/UserReferenceForm/UserReferenceForm";
import Error from "./pages/Error/Error";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/buildUser" element={<UserForm />} />
          <Route path="/error" element={<Error />} />
          <Route path="/:id/user" element={<UserDashboard />} />
          <Route path="/:id/addEducation" element={<UserEducationForm />} />
          <Route path="/:id/addWork" element={<UserWorkExpForm />} />
          <Route path="/:id/addProject" element={<UserProjectForm />} />
          <Route path="/:id/addSkill" element={<UserSkillForm />} />
          <Route path="/:id/addReference" element={<UserReferenceForm />} />
          {/* <Route path="/:id/user/portfolio" element={<UserPortfolio />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
