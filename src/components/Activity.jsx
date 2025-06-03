import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { ArrowRepeat, Chat, HandThumbsUp, Pencil, PersonCircle, Share } from "react-bootstrap-icons";

const Activity = () => {
  return (
    <Container className="my-3 bg-white rounded p-4 border">
      <Row className="justify-content-between">
        <Col md={6}>
          <h5 className="mb-0">Activity</h5>
          <Card.Link className="text-decoration-none fw-semibold">100 followers</Card.Link>
        </Col>
        <Col md={4} className="d-flex align-items-center justify-content-end gap-4">
          <Button variant="outline-primary" className="rounded-5 fw-semibold ps-4 pe-4">
            Create a post
          </Button>
          <Pencil className="fs-5" />
        </Col>
      </Row>

      <Row className="mt-1 mb-4">
        <Col className="d-flex gap-2 mb-2">
          <Button variant="success" size="sm" className="rounded-5 ps-4 pe-4 fw-semibold">
            Posts
          </Button>
          <Button variant="outline-secondary" size="sm" className="rounded-5 ps-4 pe-4 fw-semibold">
            Comments
          </Button>
          <Button variant="outline-secondary" size="sm" className="rounded-5 ps-4 pe-4 fw-semibold">
            Images
          </Button>
        </Col>
      </Row>
      <Row>
        {/* CARD 1 */}
        <Col md={6} className="mb-4 d-flex">
          <Card className="shadow-sm w-100 d-flex flex-column h-100">
            <Card.Body>
              <div className="d-flex align-items-start gap-2 mb-2">
                <PersonCircle className="fs-5 mt-1 text-secondary" />
                <div>
                  <Card.Title className="fw-bold m-0">Noemi Baglieri</Card.Title>
                  <small className="text-secondary">Junior Full Stack Developer</small>
                </div>
              </div>
              <Card.Text>Ho condiviso un articolo interessante sul futuro del lavoro.</Card.Text>
            </Card.Body>
            <Card.Img
              variant="bottom"
              src="https://images.unsplash.com/photo-1505327191481-d31e1fb4ff79?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Attività 1"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="px-3 py-2 bg-white border-top d-flex justify-content-between text-secondary">
              <HandThumbsUp />
              <Chat />
              <ArrowRepeat />
              <Share />
            </div>
          </Card>
        </Col>

        {/* CARD 2 */}
        <Col md={6} className="mb-4 d-flex">
          <Card className="shadow-sm w-100 d-flex flex-column h-100">
            <Card.Body>
              <div className="d-flex align-items-start gap-2 mb-2">
                <PersonCircle className="fs-5 mt-1 text-secondary" />
                <div>
                  <Card.Title className="fw-bold m-0">Noemi Baglieri</Card.Title>
                  <small className="text-secondary">Junior Full Stack Developer</small>
                </div>
              </div>
              <Card.Text>Ho condiviso un articolo interessante sul futuro del lavoro.</Card.Text>
            </Card.Body>
            <Card.Img
              variant="bottom"
              src="https://images.unsplash.com/photo-1603969409447-ba86143a03f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Attività 2"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="px-3 py-2 bg-white border-top d-flex justify-content-between text-secondary">
              <HandThumbsUp />
              <Chat />
              <ArrowRepeat />
              <Share />
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Activity;
