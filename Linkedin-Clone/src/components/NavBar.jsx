import { ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import house from "../assets/house-door-fill.svg";
import people from "../assets/people-fill.svg";
import bag from "../assets/briefcase-fill.svg";
import mess from "../assets/chat-dots-fill.svg";
import bell from "../assets/bell-fill.svg";

function NavBar() {
  return (
    <Navbar className="bg-white">
      <Container>
        <img
          style={{ width: "50px" }}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8CiNEwktQAgM7c6fbA3/IAhtBTpdxIn9oAitIAgs/q9fsAhNAAf876/v83mNfz+f2lzuucx+hnsN+s0u05nNiWxuhgq96GveXc7fjX5/Xi8fm83PEMjdO91u6z1u52tuKLwObK4PJdptygzOrL5vXZC+RNAAAE80lEQVR4nO2d6XLiOhBGMQoNEbLZwWwDYcj7v+K1a4oZFrVssBU1ut/5mdiUT0nW0m5JnQ4AAAAAAAAAAAAAAAAAAMA7kvWms8GoG47RYDbtZb70xvNFmhpDYTFGpYvJ2IPfMCdFiQyKJ8m3bQsuyUjxKymeZtmq33qkJfmVkB6t2xM8iKmf15A6tCV4FilYKKbntgRDq7CoaRuCB7mChWILFXUtro25hlTz5mYkWbBQHDUVXOrQDhXohv3ilmQXYVGINGxkmJvQBpWYvIngWHwRloXYZBg+l9xTXFDzBoYL+UVYFOLidcEsDf30tUhfnxL33qGSFoa9lw2n8lvSEvP66HT2Joazlw0H79DQFE3N4GVD4WPSCw3Gpt03MezCEIbS8WtIZFSBDjlE92lIKlktd5tNbzlLwgXkPBoa+vcBITsnocYH/gz16mbIm60CDWO9GeqHyfUxjKIvQ7N6vKEfpKJ6MiSyzMq2SYjmxpOhmtju+ApRiH4MKbHGf7bxlCFZ3sKSENMRP4ZcqDlEgNWPoWJiI/MAXwE8GW7st+wCdIkwfNFwZ7/lEE0tNdG3NFxvEeI7gCdD+xefiHp8pkMM8r3R28jbUohRjbwT8/vxhjBBcn8z4OP99WGmhx6jGGp1kySwHQTK2/AZifo8/3Xc5p+hgm1eo4k66U8Pvd0hXwTMP/2JiLA2sUaEZQBDGMoHhjDkfpah1lXcL0oypE+G21uYi+7VjFaKks+yb32ha/UUpzkNrdzEaag/tl91NQcprKifz0/b8u/b7Wme95P0ufGRJ8MP+y2962Q/6jM//NeQNM0e16JtvvbqiZKUbKj3Uyav8HtFtadicg1J54703vWqbmaAWEOzZ6LKF077esUo1dAMKhNfs1mtCLpQQ9tH8keWdRRlGhruX3fMayRiizQ0+7q52ZNqRZGGuv4y3q/K+JZEw5E1zYGhXxktkmeYPbWQZ1g1hhNo2HlugcSkokGVaPgkFQkeERhWrGyJwLDiu2sMhu7sgBgMs72rEGMw7BxdswzhhsP197p6EaizrRFsmO1WlJYkq0NFF/meZbjrXqIxRGq/dDq6hm5iDY/p9c+Tcu7Gcna0plIN+/evFpFjLei340UUamgJUJD+Zi8fO15EmYbWuTvt2VY1c4xNRRqO7WkN5sg+y+83M+R6cM0GGB19vkTDIZcdxi9adqxzkGjIbszEb3Ix4bsLiYZ8lWO3RXJs5iTRkG822Gp64qOKEg35HEbaM7ds3qsMHVmaafyGTKz4IxpDxYzcIjJkht/xGHKbzcAQhjCEIQxhCEMYwhCGMIQhDGEIQxjCEIYwhCEMYQhDGMIQhjCEIQxhCEMYwhCGMIShR0P968PKTSovDewXfTjWE+qJ/ZZfP50jnGhl5fY5yH6Rc0uPWj/8E4aCgCEM5dPAMP5z1+I/Oy/+8w/jP8PyTc4h5ZLfaxD/WbLxnwf8PzjTOf5zueM/W70zFF+IRMNqDRfLQHvl14Y7eKo+wsemDcakF7bhTt+sAan6W9uxOJYYhyflFkY/hWtbkcCocxuC5ep5mRWV0pYEy622JCqSbqWK/mE9EudI2rljz/NMA55BYqF4msb94D3DnMS8jsWT5C30Eg+M54s0NYbbUP+HMEali3mjwbaLrDedDUbdcIwGs+njHu4AAAAAAAAAAAAAAAAAAABvwX/nvJk5tc/i5AAAAABJRU5ErkJggg=="
          alt="immagine profilo"
        />

        <Form className="d-flex">
          <Form.Control type="search" placeholder="Cerca" className="bi bi-search" aria-label="Search" />
        </Form>

        <Nav className="d-flex align-items-center w-50 gap-3">
          <Nav href="#" className="d-flex flex-column align-items-center">
            <img className="class-icon" src={house} alt="house" />
            <h6 className="text-svg">Home</h6>
          </Nav>
          <Nav href="#" className="d-flex flex-column align-items-center">
            <img className="class-icon" src={people} alt="house" />
            <h6 className="text-svg">Rete</h6>
          </Nav>
          <Nav href="#" className="d-flex flex-column align-items-center">
            <img className="class-icon" src={bag} alt="house" />
            <h6 className="text-svg">Lavoro</h6>
          </Nav>
          <Nav href="#" className="d-flex flex-column align-items-center">
            <img className="class-icon" src={mess} alt="house" />
            <h6 className="text-svg">Messagistica</h6>
          </Nav>
          <Nav href="#" className="d-flex flex-column align-items-center">
            <img className="class-icon" src={bell} alt="house" />
            <h6 className="text-svg">Notifiche</h6>
          </Nav>
          <NavDropdown title="Tu" className="border-end p-1" id="navbarScrollingDropdown">
            <div className="d-flex align-items-center px-2">
              <img
                style={{ maxWidth: "70px", maxHeight: "70px" }}
                className="rounded-circle"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDm0aJovNXb9D5EebdSj3QND1MLcEWCiZA9w&s"
                alt="imagine di profilo"
              />
              <div>
                <NavDropdown.Item className="fw-semibold" href="#action3">
                  Nome Cognome
                </NavDropdown.Item>
                <NavDropdown.Item className="text-wrap" href="#action4">
                  Lorem ipsum dolor sit.
                </NavDropdown.Item>
              </div>
            </div>
            <div className="px-2">
              <Button variant="outline-primary" className="rounded-pill w-100 btn-custom">
                Visualizza Profilo
              </Button>
            </div>
            <NavDropdown.Divider />
            <div className="px-3">
              <ListGroup className="fw-semibold">Account</ListGroup>
              <ListGroup className=" fw-semibold text-secondary">Ottieni un mese di Premium per 0 euro</ListGroup>
              <ListGroup className=" text-secondary">Impostazioni e Privacy</ListGroup>
              <ListGroup className=" text-secondary">Guida</ListGroup>
              <ListGroup className=" text-secondary">Lingua</ListGroup>
              <NavDropdown.Divider />
              <ListGroup className="fw-semibold">Gestisci</ListGroup>
              <ListGroup className="text-secondary">Post e attività</ListGroup>
              <ListGroup className="text-secondary text-truncate">Account per la publicazione di offerte di lavoro</ListGroup>
              <NavDropdown.Divider />
              <ListGroup className="text-secondary">Esci</ListGroup>
            </div>
          </NavDropdown>
          <NavDropdown title={<i className="bi bi-grid-3x3-gap-fill"></i>} id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
          </NavDropdown>
          <a className="text-custom" href="#">
            {" "}
            Prova Premium per 0 EUR
          </a>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
