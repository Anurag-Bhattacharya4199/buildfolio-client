import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReferenceItem from "../ReferenceItem/ReferenceItem";
import "./ReferenceSection.scss";

function ReferenceSection() {
  let { id } = useParams();
  const [hasRefLoaded, setHasRefLoaded] = useState(false);
  const [refs, setRefs] = useState("");
  const [showRefs, setShowRefs] = useState(false);

  const fetchRefDetails = async () => {
    await axios
      .get(`http://localhost:8080/users/${id}/references`)
      .then((res) => {
        setRefs(res.data);
        setHasRefLoaded(true);
      });
  };

  useEffect(() => {
    fetchRefDetails();
  }, []);

  const loadRefs = () => {
    setShowRefs(true);
  };

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
