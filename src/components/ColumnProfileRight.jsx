import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { EyeFill, Pencil, PersonPlusFill, Plus } from "react-bootstrap-icons";

const ColumnProfileRight = () => {
  return (
    <Container>
      {/*Lingua e Profilo*/}
      <div className="bg-light rounded-3 p-3 border mt-3">
        <Row className="border-bottom">
          <Col>
            <h5>Lingua del profilo</h5>
            <p>Italiano</p>
          </Col>
          <Col>
            <Pencil size={20} />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <h5>Profilo pubblico e URL</h5>
            <p>www.linkedin.com/in/gennaro-guida00</p>
          </Col>
          <Col>
            <Pencil size={20} />
          </Col>
        </Row>
      </div>
      {/* Altri profili consultati */}
      <div className="bg-light rounded-3 p-3 border mt-3">
        <h5 className="m-0">Altri profili consultati</h5>
        <div className="d-flex align-items-center">
          <EyeFill size={15} />
          <p className="m-0 ms-1">Solo per te</p>
        </div>

        <Row className="mt-3">
          <Col xs={1}>
            <img
              className="rounded-circle"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              style={{ height: 80 }}
              alt=""
            />
          </Col>
          <Col>
            <h6 className="m-0">Name</h6>
            <p className="m-0">description</p>
            <Button className="rounded-5 mt-1 px-2" variant="outline-primary">
              <strong>Messaggio</strong>
            </Button>
          </Col>
        </Row>
      </div>

      {/* Persone che potresti conoscere */}
      <div className="bg-light rounded-3 p-3 border mt-3">
        <h5 className="m-0">Persone che potresti conoscere</h5>

        <Row className="mt-3">
          <Col xs={1}>
            <img
              className="rounded-circle"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              style={{ height: 80 }}
              alt=""
            />
          </Col>
          <Col>
            <h6 className="m-0">Name</h6>
            <p className="m-0">description</p>
            <Button className="rounded-5 mt-1 px-2" variant="outline-dark">
              <strong>
                <PersonPlusFill className="me-2" />
                Collegati
              </strong>
            </Button>
          </Col>
        </Row>
      </div>

      {/* Potrebbe interessarti */}
      <div className="bg-light rounded-3 p-3 border mt-3">
        <h5 className="m-0">Potrebbe interessarti</h5>
        <p>Pagine per te</p>

        <Row className="mt-3">
          <Col xs={1}>
            <img
              className="rounded-circle"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              style={{ height: 80 }}
              alt=""
            />
          </Col>
          <Col>
            <h6 className="m-0">Name</h6>
            <p className="m-0">description</p>
            <Button className="rounded-5 mt-1 px-2" variant="outline-secondary">
              <strong>
                <Plus size={20} className="me-1" />
                Segui
              </strong>
            </Button>
          </Col>
        </Row>
      </div>
    </Container>
  );
};
export default ColumnProfileRight;
