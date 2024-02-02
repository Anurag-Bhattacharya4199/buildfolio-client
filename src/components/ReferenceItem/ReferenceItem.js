import "./ReferenceItem.scss";

function ReferenceItem(props) {
  const { refName, comment } = props;

  return (
    <div className="refContent">
      <h2>{refName}</h2>
      <p>{comment}</p>
    </div>
  );
}

export default ReferenceItem;
