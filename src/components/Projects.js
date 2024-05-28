import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Projimg1 from "../assets/img.png";
import img from "../assets/ss.png"
import img2 from "../assets/penpal123.png"
import img4 from "../assets/ss4.png"
import img3 from "../assets/atm.png"
import img5 from "../assets/yyy.png"
import Container from "react-bootstrap/Container";
import { Projectcard } from "./Projectcard";

export const Projects = () => {
  const WebDev = [
    {
      title: "movie mania ",
      description: "movie app allows you to search your movie and add to fav list and save it in localhost ",
      technology: "ReactJs",
      link:"https://muskaansuri123.github.io/movieMania/",
      imgUrl:  img5,
    },
    {
      title: "space programs",
      description: "website showcasing succesfull rocket launch",
      link:"https://muskaansuri123.github.io/spaceprogram/",
      technology: "ReactJs",
      imgUrl:  img,
    },
  ];
  const UXUI = [
    {
      title: "sleep Tracker app Design",
      description: "an apps that tracks the sleep patterns along with statistical data",
      link:"https://xd.adobe.com/view/4dedcbe3-cb51-4961-aed6-9f916748b791-18be/",
      technology: "Adobe xd",
      imgUrl: Projimg1,
    },
    {
      title: "penpal",
      description: " a social forum website lets you connect with people",
      technology: "figma",
      link:"https://www.figma.com/proto/n6Er0CXMzWInh4bUZgNayp/Untitled?type=design&t=0NVDpyXzeqgIS1aV-1&scaling=min-zoom&page-id=0%3A1&node-id=10-14&starting-point-node-id=10%3A14&show-proto-sidebar=1&mode=design",
      imgUrl: img2,
    },
  ];

  const GraphicDesign = [
    {
      title: "microscope advert",
      description: "advert showing functionalities of a miscroscope",
      technology: "Adobe premiere pro",
      link:"https://drive.google.com/file/d/1Fpt-ZKr_ErViDTBMGSHlHKDAikeKPBT0/view?usp=sharing",
      imgUrl: img4,
    },
    {
      title: "atomic model advert",
      description: "advert showing atomic model set",
      technology: "Adobe premiere pro",
      link:"https://drive.google.com/file/d/1RD6wrPrW_i3wdSUiMdU-QjJqv9dwX8s7/view?usp=sharing",
      imgUrl: img3,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container className="projectsContainer">
      <h2>Projects</h2>
          <p className="data">Step into the realm of my projects, where creativity meets practicality and innovation takes shape. This curated collection showcases the culmination of my passion and expertise</p>
        <Row>
         
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
                  <Row>
                  {" "}
                  {UXUI.map((project, index) => {
                    return <Projectcard key={index} {...project} />;
                  })} 
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="Graphic">
                  {" "}
                  <Row>
                  {GraphicDesign.map((project, index) => {
                    return <Projectcard key={index} {...project} />;
                  })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
