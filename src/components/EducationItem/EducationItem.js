import "./EducationItem.scss";

function EducationItem(props) {
  const { schoolName, certName, gradDate } = props;

  return (
    <section className="educationContent">
      <table>
        <tr>
          <th>School Name:</th>
          <th>Certification Name:</th>
          <th>Graduation Date:</th>
        </tr>
        <tr>
          <td>{schoolName}</td>
          <td>{certName}</td>
          <td>{gradDate}</td>
        </tr>
      </table>
    </section>
  );
}

export default EducationItem;
