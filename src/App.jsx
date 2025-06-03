import { Container, Row } from "react-bootstrap";
import "./App.css";
import UserProfileCard from "./components/UserProfileCard";

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
