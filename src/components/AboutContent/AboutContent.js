import EducationInfo from "../EducationInfo/EducationInfo";
import SkillInfo from "../SkillInfo/SkillInfo";
import UserDashboard from "../UserDashboard/UserDashboard";
import UserSummary from "../UserSummary/UserSummary";
import WorkInfo from "../WorkInfo/WorkInfo";
import "./AboutContent.scss";

function AboutContent() {
  return (
    <section className="aboutContent">
      <UserDashboard />
      <UserSummary />
      <EducationInfo />
      <WorkInfo />
      <SkillInfo />
    </section>
  );
}

export default AboutContent;
