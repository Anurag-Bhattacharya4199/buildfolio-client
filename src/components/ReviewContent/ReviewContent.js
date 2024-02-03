import { useNavigate, useParams } from "react-router-dom";
import UserDashboard from "../UserDashboard/UserDashboard";
import { useEffect, useState } from "react";
import axios from "axios";
import ReferenceItem from "../ReferenceItem/ReferenceItem";
import "./ReviewContent.scss";

function ReviewContent() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [hasRefLoaded, setHasRefLoaded] = useState(false);
  const [refs, setRefs] = useState("");

  const fetchRefDetails = async () => {
    await axios
      .get(`http://localhost:8080/users/${id}/references`)
      .then((res) => {
        setRefs(res.data);
        setHasRefLoaded(true);
      })
      .catch(() => {
        navigate("/error");
      });
  };

  useEffect(() => {
    fetchRefDetails();
  }, []);

  return (
    <section className="reviewContent">
      <UserDashboard />
      <div className="reviewContent__content">
        <h2 className="reviewContent__title">References:</h2>
        <div className="reviewContent__list">
          {hasRefLoaded &&
            refs.map((ref) => {
              return (
                <ReferenceItem
                  key={ref.referenceId}
                  refName={ref.reference_name}
                  comment={ref.reference_comment}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default ReviewContent;
