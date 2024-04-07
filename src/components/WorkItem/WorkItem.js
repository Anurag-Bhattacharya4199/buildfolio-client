import "./WorkItem.scss";

function WorkItem(props) {
  const { workTitle, companyName, workDesc, startDate } = props;

  return (
    <section className="workContent">
      <table>
        <tr>
          <th>Work Title:</th>
          <th>Company:</th>
          <th>Tasks:</th>
          <th>Start Date:</th>
        </tr>
        <tr>
          <td>{workTitle}</td>
          <td>{companyName}</td>
          <td>{workDesc}</td>
          <td>{startDate}</td>
        </tr>
      </table>
    </section>
  );
}

export default WorkItem;
