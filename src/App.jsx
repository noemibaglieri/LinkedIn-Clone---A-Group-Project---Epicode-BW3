import { Container, Row } from "react-bootstrap";
import "./App.css";
import UserProfileCard from "./components/UserProfileCard";
import ColumnProfileRight from "./components/ColumnProfileRight";

function App() {
  return (
    <>
      <Container>
        <Row>
          <UserProfileCard />
          <ColumnProfileRight />
        </Row>
      </Container>
    </>
  );
}

export default App;
