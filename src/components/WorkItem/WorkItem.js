import "./WorkItem.scss";

function WorkItem(props) {
  const { workTitle, companyName, workDesc, startDate } = props;

  return (
    <section className="workContent">
      <p className="workContent__content">
        {workTitle} <span className="workContent__dots" /> {companyName}
        <span className="workContent__dots" />
        {startDate}
      </p>
      <p className="workContent__desc">{workDesc}</p>
    </section>
  );
}

export default WorkItem;
