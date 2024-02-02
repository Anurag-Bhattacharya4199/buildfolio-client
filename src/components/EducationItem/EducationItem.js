import "./EducationItem.scss";

function EducationItem(props) {
  const { schoolName, certName, gradDate } = props;

  return (
    <section className="educationContent">
      <p className="educationContent__content">
        {schoolName} <span className="educationContent__dots" /> {certName}
        <span className="educationContent__dots" />
        {gradDate}
      </p>
    </section>
  );
}

export default EducationItem;
