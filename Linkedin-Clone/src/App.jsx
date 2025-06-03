// src/App.jsx
import NavBar from "./components/NavBar";
import UserProfile from "./components/UserProfile";
import MyFooter from "./components/MyFooter";
import "./App.css";
import { Container } from "react-bootstrap";
import MyAnalitics from "./components/MyAnalitics";

function App() {
  return (
    <>
      <Container>
        <NavBar />
        <UserProfile />
        <MyFooter />
      </Container>
    </>
  );
}

export default App;
