import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserWorkExpItem from "../UserWorkExpItem/UserWorkExpItem";

function UserWorkExpList() {
  let { id } = useParams();
  const [hasWorkExpLoaded, setHasWorkExpLoaded] = useState(false);
  const [workExp, setWorkExp] = useState([]);

  const fetchWorkExpDetails = async () => {
    await axios
      .get(`http://localhost:8080/users/${id}/workExperiences`)
      .then((response) => {
        setWorkExp(response.data);
        setHasWorkExpLoaded(true);
      });
  };

  useEffect(() => {
    fetchWorkExpDetails();
  }, []);

  if (!hasWorkExpLoaded) {
    return null;
  } else {
    return (
      <section>
        <h1>Professional History:</h1>
        {workExp.map((item) => {
          return (
            <UserWorkExpItem
              key={item.workExpId}
              workTitle={item.work_title}
              company={item.company_name}
              desc={item.work_desc}
              startDate={item.start_date}
            />
          );
        })}
      </section>
    );
  }
}

export default UserWorkExpList;
