import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import asset1 from "../assets/Saly-21.svg";
import asset2 from "../assets/Asset 2.png";
import asset3 from "../assets/Asset 3.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return <section>
     <h1 className="skillHeading">Skills</h1>
    <Container className="skill" id="skills">
   
          <div className="skill-bx">
         
            <Carousel 
             containerClass="carousel-container"
              responsive={responsive}
              className="skill-slider"
              infinite="true"
              autoPlay="true"
            >
          
              <div className="item">
                <img src={asset1} alt=""></img>

                <div className="tit1" >
               
                <h5 className="data1">React js</h5>
               <h5 className="data2">React js</h5>
                </div>
              </div>
              <div className="item">
                <img src={asset1} alt=""></img>
                <div className="tit1" >
               
               <h5 className="data1">Html</h5>
                <h5  className="data2" >Html</h5>
                </div>
              </div>
              <div className="item">
                <img src={asset1} alt=""></img>
                <div className="tit1" >
                <h5 className="data1">Javascript</h5>
                <h5  className="data2" >Javascript</h5>
                </div>
              </div> 
              <div className="item">
                <img src={asset1} alt=""></img>
                <div className="tit1" >
                <h5 className="data1">Adobe Illustrator</h5>
                <h5  className="data2" >Adobe Illustrator</h5>
                </div>
              </div>
              <div className="item">
                <img src={asset1} alt=""></img>
                <div className="tit1" >
                <h5 className="data1">Figma</h5>
                <h5  className="data2" >Figma</h5>
                </div>
              </div>
              <div className="item">
                <img src={asset1} alt=""></img>
                <div className="tit1" >
                <h5 className="data1">Adobe photoshop</h5>
                <h5  className="data2" >Adobe photoshop</h5>
                </div>
              </div>
              <div className="item">
                <img src={asset1} alt=""></img>
                <div className="tit1" >
                <h5 className="data1">React bootstrap</h5>
                <h5  className="data2" >React bootstrap</h5>
                </div>
              </div>
            </Carousel>
          </div>
      
    </Container>
  </section>;
};
