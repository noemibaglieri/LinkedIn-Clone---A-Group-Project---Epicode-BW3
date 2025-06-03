import { Col, Row } from "react-bootstrap";
import ColumnProfileRight from "./ColumnProfileRight";
import UserProfileCard from "./UserProfileCard";
import Experiences from "./Experiences";
import Activity from "./Activity";
import MyAnalytics from "./MyAnalytics";
import Interests from "./Interests";
import Lingue from "./Lingue";

const UserProfile = () => {
  return (
    <Row>
      <Col md={8}>
        <UserProfileCard />
        <MyAnalytics />
        <Activity />
        <Experiences title="Experience" />
        <Experiences title="Education" />
        <Experiences title="Licenses & certifications" />
        <Lingue />
        <Interests />
      </Col>
      <Col md={4}>
        <ColumnProfileRight />
      </Col>
    </Row>
  );
};

export default UserProfile;
