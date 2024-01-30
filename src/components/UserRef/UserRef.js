function UserRef(props) {
  const { name, comment } = props;
  return (
    <ul>
      <li>
        <h2>{name}:</h2>
        <p>{comment}</p>
      </li>
    </ul>
  );
}

export default UserRef;
