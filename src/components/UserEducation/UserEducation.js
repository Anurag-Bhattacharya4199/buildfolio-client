function UserEducation(props) {
  const { school_name, cert_name, grad_date } = props;

  return (
    <ul>
      <li>
        {cert_name} with {school_name}, {grad_date}
      </li>
    </ul>
  );
}

export default UserEducation;
