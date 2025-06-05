import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { EyeFill, PersonFill, BarChartLineFill, Search, ArrowRight } from "react-bootstrap-icons";

const MyAnalitics = () => {
  return (
    <Container className="p-0">
      {/*Analisi*/}
      <div className="bg-white rounded-3 p-3 border mt-3 position-relative" style={{ minHeight: "250px" }}>
        <Row>
          <h5 className="m-0">Analisi</h5>
          <Col className="d-flex align-items-center">
            <EyeFill size={15} />
            <p className="m-0 ms-1">Solo per te</p>
          </Col>
        </Row>

        <div className="d-flex">
          <Row className="mt-2 me-2">
            <Col xs={1}>
              <PersonFill size={20} />
            </Col>
            <Col>
              <h6 className="m-0 ms-1">4 visualizzazioni del profilo</h6>
              <p>Scopri chi ha visitato il tuo profilo</p>
            </Col>
          </Row>

          <Row className="mt-2 me-2">
            <Col xs={1}>
              <BarChartLineFill size={20} />
            </Col>
            <Col>
              <h6 className="m-0 ms-1">4 impressioni del post</h6>
              <p>crea un post per Aumentare l'interesse</p>
            </Col>
          </Row>

          <Row className="mt-2 me-2">
            <Col xs={1}>
              <Search size={20} />
            </Col>
            <Col>
              <h6 className="m-0 ms-1">2 comparse nei motori di ricerca</h6>
              <p>Vedi quante volte compari nei risultati di ricerca.</p>
            </Col>
          </Row>
        </div>
        <div className="position-absolute bottom-0 start-0 w-100 border-top p-3 bg-white">
          <Button className=" bg-transparent border-0 w-100 text-secondary">
            <strong>
              Mostra le tue attività
              <ArrowRight className="ms-2" />
            </strong>
          </Button>
        </div>
      </div>
    </Container>
  );
};
export default MyAnalitics;
