import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/Navbar.css';
import logo from "../assets/caixa-caixa-econmica-federal.png"

function Menu() {

  return (
    <Navbar 
    expand="lg" 
    bg= "dark"
    variant = "dark"
    >
      <Container>
        <Navbar.Brand>
              <img
                src={logo}
                alt="Logotipo da Caixa"
                className="d-inline-block align-top logo"
                height={ `40 px` }
              />
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="opcoes">
            <Nav.Link id="mega" onClick={ (e) => {document.getElementById("mega")!.classList.add("clicked")} } className='mega' href="/">Mega-Sena</Nav.Link>
            <Nav.Link className='loto' href="/Lotofacil">Lotofácil</Nav.Link>
            <Nav.Link className='quina' href="/Quina">Quina</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;