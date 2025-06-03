import { Button, Card, Col, Row } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";

const UserProfileCard = () => {
  return (
    <>
      <Col className="mt-3">
        <Card className="border">
          <div className="position-relative">
            <Card.Img
              className="banner-image"
              variant="top"
              src="https://images.pexels.com/photos/8319808/pexels-photo-8319808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
          <div className="profile-image-div">
            <img
              className="profile-image"
              src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="personal image"
              width={200}
            />
          </div>
          <Card.Body className="pt-5">
            <Col className="d-flex justify-content-end fs-5">
              <Pencil />
            </Col>
            <Row>
              <Col md={9} className="d-flex flex-column mb-2">
                <Card.Title>Noemi Alice Baglieri</Card.Title>
                <Card.Text className="mb-1">Junior Front-End Developer | Creative Computing Graduate | Currently in a Full-Stack Bootcamp</Card.Text>
                <div className="d-flex gap-2">
                  <span className="country fw-normal mb-1">United Kingdom</span>
                  <span style={{ "user-select": "none" }}>&bull;</span>
                  <Card.Link className="fw-semibold text-decoration-none">Contact info</Card.Link>
                </div>
                <Card.Link className="fw-semibold text-decoration-none">100 connections</Card.Link>
              </Col>
              <Col md={3}>
                <img src="https://www.emagister.it/assets/it/logos/centro/id/106747/size/l.jpg" alt="current company" width={100} />
              </Col>
            </Row>
            <Col className="d-flex gap-2">
              <Button variant="primary" className="rounded-5">
                Open to
              </Button>
              <Button variant="outline-primary" className="rounded-5">
                Add profile section
              </Button>
              <Button variant="outline-primary" className="rounded-5">
                Enhance profile
              </Button>
              <Button variant="outline-secondary" className="rounded-5">
                Resources
              </Button>
            </Col>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default UserProfileCard;
