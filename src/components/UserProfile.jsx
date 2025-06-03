import { Col, Row } from "react-bootstrap";
import ColumnProfileRight from "./ColumnProfileRight";
import UserProfileCard from "./UserProfileCard";
import Experiences from "./Experiences";
import Activity from "./Activity";

const UserProfile = () => {
  return (
    <Row>
      <Col md={8}>
        <UserProfileCard />
        <Activity />
        <Experiences />
      </Col>

      <Col md={4}>
        <ColumnProfileRight />
      </Col>
    </Row>
  );
};

export default UserProfile;
