import { useState } from "react";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import cam from "../assets/Saly-12 (5).svg";
export const ContactForm = () => {
  const formInitialDeta = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  //const location = useLocation()
  const [formDetails, setFormDetails] = useState(formInitialDeta);
  const [buttonText, setButtonText] = useState("send");
  const [status, setStatus] = useState({});

  const onFormUpd = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   const response = await fetch("http://localhost:3000/");
    //   if (!response.ok) {
    //     throw new Error("Network response was not ok");
    //   }
    //   const result = await response.json();
    //   console.log(result);
    // } catch (error) {
    //   console.error("Error:", error);
    // }
    setButtonText("sending...");
    setFormDetails ({  firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",})
    // let headers = new Headers();

    // headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    // headers.append('Access-Control-Allow-Credentials', 'true');

    // let response = await fetch("http://localhost:3000", {
    //   method: "POST",
    // });

    // setButtonText("Send");

    // let result = response.json();
    // console.log(result);
    // {let response = await fetch("http://localhost:3000/contact", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json;charset=utf-8",
    //   },
    //   body: JSON.stringify(formDetails),
    // });

    setButtonText("Send");

  //   let result = response.json();
  //   console.log(result);
  //   setFormDetails(formInitialDeta);
  //   if (result.code === 200) {
  //     setStatus({ success: true, message: "Message sent seccessfully" });
  //   } else {
  //     setStatus({ success: false, message: "something went wrong" });
  //   }
  // }

  };
  return (
    <div className="contactForm" id="contactF">
      <h2>let's connect</h2>
      <p>say hello, I'm only a message away</p>
      <Container className="contactContainer">
        <div className="cImg">
          {" "}
          <img src={cam}></img>
        </div>
        <div className="cFormm">
          <form onSubmit={handleSubmit}>
            <Row>
              <Col sm={5} className="px-1 py-2">
                <input
                  type="text"
                  value={formDetails.firstName}
                  placeholder="firstName"
                  onChange={(e) => onFormUpd("firstName", e.target.value)}
                ></input>
              </Col>
              <Col sm={5} className="px-1 py-2">
                <input
                  type="text"
                  value={formDetails.lastNameName}
                  placeholder="lastName"
                  onChange={(e) => onFormUpd("lastName", e.target.value)}
                ></input>
              </Col>
              <Col sm={5} className="px-1 py-2">
                <input
                  type="email"
                  value={formDetails.email}
                  placeholder="email"
                  onChange={(e) => onFormUpd("email", e.target.value)}
                ></input>
              </Col>
              <Col sm={5} className="px-1 py-2">
                <input
                  type="tel"
                  value={formDetails.phone}
                  placeholder="phone"
                  onChange={(e) => onFormUpd("phone", e.target.value)}
                ></input>
              </Col>

              <Col sm={5} className="px-1 py-2" id="formBtn">
                <textarea
                  rows="7"
                  value={formDetails.message}
                  placeholder="message"
                  onChange={(e) => onFormUpd("message", e.target.value)}
                ></textarea>
                <button className="frm" type="submit">
                  <span>{buttonText}</span>
                </button>
              </Col>

              {status.message && (
                <Col>
                  <p
                    className={status.success === false ? "danger" : "success"}
                  >
                    {status.message}
                  </p>
                </Col>
              )}
            </Row>
          </form>
        </div>
      </Container>
    </div>
  );
};
