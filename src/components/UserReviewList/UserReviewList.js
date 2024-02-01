import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserReviewItem from "../UserReviewItem/UserReviewItem";

function UserReviewList() {
  let { id } = useParams();

  const [hasRefLoaded, setHasRefLoaded] = useState(false);
  const [ref, setRef] = useState([]);

  const fetchRefDetails = async () => {
    await axios
      .get(`http://localhost:8080/users/${id}/references`)
      .then((response) => {
        setRef(response.data);
        setHasRefLoaded(true);
      });
  };

  useEffect(() => {
    fetchRefDetails();
  }, []);

  if (!hasRefLoaded) {
    return null;
  } else {
    return (
      <>
        <h1>Reviews:</h1>
        {ref.map((item) => {
          return (
            <UserReviewItem
              key={item.referenceId}
              name={item.reference_name}
              comment={item.reference_comment}
            />
          );
        })}
      </>
    );
  }
}

export default UserReviewList;
