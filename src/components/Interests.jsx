import { Button, Col, NavDropdown, Row } from "react-bootstrap";
import { Pencil, Plus } from "react-bootstrap-icons";
import Card from "react-bootstrap/Card";

function Interests() {
  return (
    <Card className="p-2 border mt-3">
      <Card.Body>
        <Row className="justify-content-between">
          <Col md={8}>
            <h5>Interessi</h5>
          </Col>
          <Col md={2} className="d-flex align-items-center justify-content-end gap-4">
            <Plus className="fs-1" />
            <Pencil className="fs-5" />
          </Col>
        </Row>
        <div className="d-flex gap-3 mb-2">
          <div style={{ fontSize: "14px" }} className="fw-semibold btn-interessi p-2">
            Top Voices
          </div>
          <div style={{ fontSize: "14px" }} className="fw-semibold btn-interessi p-2">
            Companies
          </div>
          <div style={{ fontSize: "14px" }} className="fw-semibold btn-interessi p-2">
            Schools
          </div>
        </div>
        <div className="d-flex px-2">
          <img
            style={{ maxWidth: "50px", maxHeight: "50px" }}
            className="rounded-circle me-3"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDm0aJovNXb9D5EebdSj3QND1MLcEWCiZA9w&s"
            alt="imagine di profilo"
          />
          <div>
            <NavDropdown.Item className="fw-semibold" href="#action3">
              Nome Cognome
            </NavDropdown.Item>
            <NavDropdown.Item className="text-wrap" href="#action4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ut expedita quo fugit, eius inventore dolore vero perspiciatis quasi cum minima hic,
              sed veritatis, minus ipsam. Ipsam voluptatum exercitationem veritatis.
            </NavDropdown.Item>
            <Button variant="outline-dark" className="rounded-pill w-100 ">
              Visualizza Profilo
            </Button>
          </div>
        </div>
        <div className="px-2"></div>
      </Card.Body>
    </Card>
  );
}

export default Interests;
