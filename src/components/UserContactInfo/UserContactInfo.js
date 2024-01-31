function UserContactInfo(props) {
  const { email, phoneNumber } = props;

  return (
    <div>
      <h1>Contact Me:</h1>
      <p>
        <a href={`tel: ${phoneNumber}`}>{phoneNumber}</a>
      </p>
      <p>
        <a href={`mailto:${email}`}>{email}</a>
      </p>
    </div>
  );
}

export default UserContactInfo;
