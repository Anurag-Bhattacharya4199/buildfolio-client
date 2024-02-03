import "./ContactInfo.scss";

function ContactInfo(props) {
  const { email, phoneNum } = props;

  return (
    <section className="contactInfo">
      <h2 className="contactInfo__title">Contact Me:</h2>
      <div className="contactInfo__content">
        <p>
          <a href={`tel: ${phoneNum}`}>{phoneNum}</a>
        </p>
        <p>
          <a href={`mailto:${email}`}>{email}</a>
        </p>
      </div>
    </section>
  );
}

export default ContactInfo;
