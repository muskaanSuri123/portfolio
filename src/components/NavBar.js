import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import img1 from "../assets/Saly-43.svg";
import img2 from "../assets/intagram.svg";
import img3 from "../assets/linkedin.svg";
import img4 from "../assets/github.svg";
export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActivelink = (value) => {
    setActiveLink(value);
  };
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img  src={img1} alt="logo"></img>
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active-navbarLink" : "navbarLink"
              }
              onClick={() => onUpdateActivelink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active-navbarLink" : "navbarLink"
              }
              onClick={() => onUpdateActivelink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active-navbarLink" : "navbarLink"
              }
              onClick={() => onUpdateActivelink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.instagram.com/muskaansuri1">
                <img src={img2} />
              </a>
              <a href="https://www.linkedin.com/in/muskaansuri">
                <img src={img3} />
              </a>
              <a href="https://github.com/muskaanSuri123">
                <img src={img4} />
              </a>
            </div>
            <a href="#contactF">
            <button
              className="btn"
              onClick={() => console.log("let's connect")}

            >
              
              <span>let's connect</span>
            
            </button>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
