import { Col, Row } from "react-bootstrap";
import ColumnProfileRight from "./ColumnProfileRight";
import UserProfileCard from "./UserProfileCard";
import Experiences from "./Experiences";

const UserProfile = () => {
  return (
    <Row>
      <Col md={8}>
        <UserProfileCard />
      </Col>
      <Col md={4}>
        <ColumnProfileRight />
      </Col>
      <Col md={8}>
        <Experiences />
      </Col>
    </Row>
  );
};

export default UserProfile;
