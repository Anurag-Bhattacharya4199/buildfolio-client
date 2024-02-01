import "./UserWorkExpItem.scss";

function UserWorkExpItem(props) {
  const { workTitle, company, desc, startDate } = props;

  return (
    <>
      <p>
        {workTitle} <span className="dots" /> {company}
        <span className="dots" /> {startDate}
      </p>
      <p>{desc}</p>
    </>
  );
}

export default UserWorkExpItem;
