import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReferenceItem from "../ReferenceItem/ReferenceItem";
import "./ReferenceSection.scss";
import { API_BASE_URL } from "../../utils/utils";

function ReferenceSection() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [hasRefLoaded, setHasRefLoaded] = useState(false);
  const [refs, setRefs] = useState("");
  const [showRefs, setShowRefs] = useState(false);

  //Fetch References for Specific User
  const fetchRefDetails = async () => {
    await axios
      .get(`${API_BASE_URL}/users/${id}/references`)
      .then((res) => {
        setRefs(res.data);
        setHasRefLoaded(true);
      })
      .catch(() => {
        navigate("/error");
      });
  };

  //Use Effect to Fetch Call
  useEffect(() => {
    fetchRefDetails();
  }, []);

  //Load Reference Section
  const loadRefs = () => {
    setShowRefs(true);
  };

  //Hide Reference Section
  const hideRefs = () => {
    setShowRefs(false);
  };

  return (
    <section className="refSection">
      {hasRefLoaded && refs.length > 0 && (
        <section>
          <div className="refSection__buttons">
            <button onClick={loadRefs} className="refSection__buttons-show">
              Show References
            </button>
            <button onClick={hideRefs} className="refSection__buttons-hide">
              Hide References
            </button>
          </div>
          <div className="refSection__list">
            {showRefs &&
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
        </section>
      )}
    </section>
  );
}

export default ReferenceSection;
