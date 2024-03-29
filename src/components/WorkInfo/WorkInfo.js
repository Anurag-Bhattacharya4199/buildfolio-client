import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import WorkItem from "../WorkItem/WorkItem";
import "./WorkInfo.scss";
import { API_BASE_URL } from "../../utils/utils";

function WorkInfo() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [hasWorkLoaded, setHasWorkLoaded] = useState(false);
  const [works, setWorks] = useState("");

  //Fetch Work Details for Specific User
  const fetchWorkDetails = async () => {
    await axios
      .get(`${API_BASE_URL}/users/${id}/workExperiences`)
      .then((res) => {
        setWorks(res.data);
        setHasWorkLoaded(true);
      })
      .catch(() => {
        navigate("/error");
      });
  };

  //Use Effect to Fetch Call
  useEffect(() => {
    fetchWorkDetails();
  }, []);

  //If Work Data is loaded, Work Info is displayed
  if (!hasWorkLoaded) {
    return null;
  } else {
    return (
      <section className="workInfo">
        <h2 className="workInfo__title">Work Info:</h2>
        <div>
          {works.map((work) => {
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
    );
  }
}

export default WorkInfo;
