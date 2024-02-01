function UserReviewItem(props) {
  const { name, comment } = props;

  return (
    <ul>
      <li>
        <p>{name}</p>
        <p>{comment}</p>
      </li>
    </ul>
  );
}

export default UserReviewItem;
