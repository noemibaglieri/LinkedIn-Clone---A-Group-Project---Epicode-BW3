import { Col, Row } from "react-bootstrap";
import ColumnProfileRight from "./ColumnProfileRight";
import UserProfileCard from "./UserProfileCard";
import MyAnalitics from "./MyAnalitics";

const UserProfile = () => {
  return (
    <Row>
      <Col md={8}>
        <UserProfileCard />
        <MyAnalitics />
      </Col>
      <Col md={4}>
        <ColumnProfileRight />
      </Col>
    </Row>
  );
};

export default UserProfile;
