import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
      <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand as={Link} to="/">BucketHeads</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/team">Team</Nav.Link>
            <Nav.Link as={Link} to="/roadmap">Roadmap</Nav.Link>
            <Nav.Link as={Link} to="/collections">Collections</Nav.Link>
            <NavDropdown title="The Game" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/lore">Lore</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/characters">
                Characters
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/planets">Planets</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/gameplay">Gameplay</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/progress">
                Progress Tracker
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
          <Nav.Link href="https://docs.bucketheads.io/" target={"_blank"}>Whitepaper</Nav.Link>
            <Nav.Link as={Link} to="/staking">Staking</Nav.Link>
            <Nav.Link eventKey={2} as={Link} to="/token">
              $Token
            </Nav.Link>
          </Nav>
          <Nav className="social-links">
              <Nav.Link href="https://discord.gg/bucketheadstudios">
                <img
                  src="https://uploads-ssl.webflow.com/61f2155bfe47bd05cae702bb/6215c3cb182e45b42d96f4b1_discord.png"
                  loading="lazy"
                  width="30"
                  height="30"
                  srcset="https://uploads-ssl.webflow.com/61f2155bfe47bd05cae702bb/6215c3cb182e45b42d96f4b1_discord-p-500.png 500w, https://uploads-ssl.webflow.com/61f2155bfe47bd05cae702bb/6215c3cb182e45b42d96f4b1_discord.png 512w"
                  sizes="(max-width: 991px) 100vw, 30px"
                  alt=""
                  class="image-6"
                />
              </Nav.Link>
              <Nav.Link href="https://twitter.com/bucketheadsnft">
                <img
                  src="https://uploads-ssl.webflow.com/61f2155bfe47bd05cae702bb/6215c3cb3fdf7cb3aa69dee2_twitter%20(1).png"
                  loading="lazy"
                  width="30"
                  height="30"
                  srcset="https://uploads-ssl.webflow.com/61f2155bfe47bd05cae702bb/6215c3cb3fdf7cb3aa69dee2_twitter%20(1)-p-500.png 500w, https://uploads-ssl.webflow.com/61f2155bfe47bd05cae702bb/6215c3cb3fdf7cb3aa69dee2_twitter%20(1).png 512w"
                  sizes="(max-width: 991px) 100vw, 30px"
                  alt=""
                />
              </Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default NavBar;
