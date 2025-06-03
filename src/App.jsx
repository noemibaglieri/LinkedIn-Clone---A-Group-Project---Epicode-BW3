import { Container, Row } from "react-bootstrap";
import "./App.css";
import MyFooter from "./components/MyFooter";
import NavBar from "./components/NavBar";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <UserProfile />
        <MyFooter />
      </Container>
    </>
  );
}

export default App;
