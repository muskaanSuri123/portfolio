import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Projimg1 from "../assets/img.png";
import img from "../assets/ss.png"
import Container from "react-bootstrap/Container";
import { Projectcard } from "./Projectcard";

export const Projects = () => {
  const WebDev = [
    {
      title: "spacePrograms",
      description: "Development fetch succesfull space program",
      technology: "ReactJs",
      link:"https://muskaansuri123.github.io/spaceprogram/",
      imgUrl:  img,
    },
    {
      title: "weather app",
      description: "fetch weather data along with map",
      link:"https://muskaansuri123.github.io/spaceprogram/",
      technology: "Swift",
      imgUrl: Projimg1,
    },
  ];
  const UXUI = [
    {
      title: "sleep Tracker app Design",
      description: "sleep tracker design",
      link:"https://xd.adobe.com/view/4dedcbe3-cb51-4961-aed6-9f916748b791-18be/",
      technology: "Adobe xd",
      imgUrl: Projimg1,
    },
    {
      title: "penpal",
      description: "social forum website",
      technology: "figma",
      link:"https://www.figma.com/proto/n6Er0CXMzWInh4bUZgNayp/Untitled?type=design&t=0NVDpyXzeqgIS1aV-1&scaling=min-zoom&page-id=0%3A1&node-id=10-14&starting-point-node-id=10%3A14&show-proto-sidebar=1&mode=design",
      imgUrl: Projimg1,
    },
  ];

  const GraphicDesign = [
    {
      title: "microscope advert",
      description: "video editing",
      technology: "Adobe premiere pro",
      link:"https://muskaansuri123.github.io/spaceprogram/",
      imgUrl: Projimg1,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container className="projectsContainer">
        <Row>
          <h2>Projects</h2>
          <Col>
            <Tab.Container id="tabs" defaultActiveKey="web">
              <Nav variant="pills">
                <Nav.Item>
                  <Nav.Link eventKey="web">Web development</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="ux/ui">UX/UI</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Graphic">Graphic Design</Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content>
                <Tab.Pane eventKey="web">
                  <Row>
                    {WebDev.map((project, index) => {
                      return <Projectcard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="ux/ui">
                  {" "}
                  {UXUI.map((project, index) => {
                    return <Projectcard key={index} {...project} />;
                  })}
                </Tab.Pane>

                <Tab.Pane eventKey="Graphic">
                  {" "}
                  {GraphicDesign.map((project, index) => {
                    return <Projectcard key={index} {...project} />;
                  })}
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
