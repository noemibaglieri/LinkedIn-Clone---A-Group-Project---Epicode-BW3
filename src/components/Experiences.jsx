import { Col, Container, Row } from "react-bootstrap";
import { Pencil, Plus } from "react-bootstrap-icons";
import SingleExperience from "./SingleExperience";

const Experiences = () => {
  return (
    <>
      <Container className="bg-white p-4 rounded-2 border">
        <Row className="justify-content-between mb-3">
          <Col md={8}>
            <h4>Experience</h4>
          </Col>
          <Col md={2} className="d-flex align-items-center justify-content-end gap-4">
            <Plus className="fs-1" />
            <Pencil className="fs-4" />
          </Col>
        </Row>
        <Row md={1} className="gy-2">
          <Col>
            <SingleExperience />
          </Col>
          <Col>
            <SingleExperience />
          </Col>
          <Col>
            <SingleExperience />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Experiences;
