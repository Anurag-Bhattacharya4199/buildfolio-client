import { useNavigate, useParams } from "react-router-dom";
import "./UserDashboard.scss";

function UserDashboard() {
  let { id } = useParams();
  let navigate = useNavigate();

  const goToUserDashboard = () => {
    navigate(`/${id}/user`);
  };
  return (
    <div className="userDashboardContent">
      <button
        onClick={goToUserDashboard}
        className="userDashboardContent__button"
      >
        User Dashboard
      </button>
    </div>
  );
}

export default UserDashboard;
