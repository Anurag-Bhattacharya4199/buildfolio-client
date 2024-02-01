import "./UserEducationItem.scss";

function UserEducationItem(props) {
  const { schoolName, certName, gradDate } = props;

  return (
    <>
      <p>
        {schoolName} <span className="dots" /> {certName}{" "}
        <span className="dots" /> {gradDate}
      </p>
    </>
  );
}

export default UserEducationItem;
