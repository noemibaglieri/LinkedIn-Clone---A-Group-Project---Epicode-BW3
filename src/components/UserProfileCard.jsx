import { Button, Card, Col, Container } from "react-bootstrap";

const UserProfileCard = () => {
  return (
    <>
      <Container className="mt-4">
        <Col md={8}>
          <Card>
            <Card.Img variant="top" src="https://images.pexels.com/photos/8319808/pexels-photo-8319808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <Card.Body>
              <div className="d-flex">
                <div className="d-flex flex-column">
                  <Card.Title>Noemi Alice Baglieri</Card.Title>
                  <Card.Text>Junior Front-End Developer | Creative Computing Graduate | Currently in a Full-Stack Bootcamp</Card.Text>
                  <div className="d-flex gap-2">
                    <span className="country fw-normal">United Kingdom</span>
                    <span style={{ "user-select": "none" }}>&bull;</span>
                    <Card.Link className="fw-semibold text-decoration-none">Contact info</Card.Link>
                  </div>
                  <Card.Link className="fw-semibold text-decoration-none">100 connections</Card.Link>
                </div>
                <img src="https://www.emagister.it/assets/it/logos/centro/id/106747/size/l.jpg" alt="current company" width={100} />
              </div>
              <Button variant="primary" className="rounded-5">
                Open to
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Container>
    </>
  );
};

export default UserProfileCard;
