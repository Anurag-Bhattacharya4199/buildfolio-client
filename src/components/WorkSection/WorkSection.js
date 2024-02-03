import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import WorkItem from "../WorkItem/WorkItem";
import "./WorkSection.scss";

function WorkSection() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [hasWorkLoaded, setHasWorkLoaded] = useState(false);
  const [works, setWorks] = useState("");
  const [showWorks, setShowWorks] = useState(false);

  const fetchWorkDetails = async () => {
    await axios
      .get(`http://localhost:8080/users/${id}/workExperiences`)
      .then((res) => {
        setWorks(res.data);
        setHasWorkLoaded(true);
      })
      .catch(() => {
        navigate("/error");
      });
  };

  useEffect(() => {
    fetchWorkDetails();
  }, []);

  const loadWorks = () => {
    setShowWorks(true);
  };

  const hideWorks = () => {
    setShowWorks(false);
  };

  return (
    <section className="workSection">
      {hasWorkLoaded && works.length > 0 && (
        <section>
          <div className="workSection__buttons">
            <button onClick={loadWorks} className="workSection__buttons-show">
              Show Works
            </button>
            <button onClick={hideWorks} className="workSection__buttons-hide">
              Hide Works
            </button>
          </div>
          <div className="workSection__list">
            {showWorks &&
              works.map((work) => {
                return (
                  <WorkItem
                    key={work.workExpId}
                    workTitle={work.work_title}
                    companyName={work.company_name}
                    workDesc={work.work_desc}
                    startDate={work.start_date}
                  />
                );
              })}
          </div>
        </section>
      )}
    </section>
  );
}

export default WorkSection;
