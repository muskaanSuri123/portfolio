import { useState, useEffect } from "react";
import { Prev } from "react-bootstrap/esm/PageItem";
import headerImg from "../assets/Saly-35.svg"
import bulb from "../assets/Saly-43.svg"
export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["web developer", "Web Designer", "UX UI designer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  console.log(delta);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    console.log(loopNum);
    let fullText = toRotate[i];
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updateText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    } 

    if (!isDeleting && updateText ===fullText){ 
        setIsDeleting(true);
        setDelta(period);
        
    }
    else if(isDeleting&& updateText===''){ 
        setIsDeleting(false);
        setLoopNum(loopNum+1);
        setDelta(500);
    }
  };
  return (
    <div className="banner" id="home">
      
        <div className="align-items-centre"  id="row1">
          <div  className="col1" >
            <span >Welcome to  portfolio</span>
            <span className="tag-line">You can call me Muskaan </span>
            <h1>{` I am a Frontend `}<span>{text}</span></h1>
            <p>| am a collaborative team player who
thrives in fast-paced environments. | have experience working with
designers and back-end developers to translate wireframes and mockups into
pixel-perfect, performant web applications.</p>
            <div><button  id="bannerbtnn"><span>lets'connect</span></button></div>
          </div>
          <div className="imgsec" >
            <img className="bulb" src={bulb}></img>
            <img src={headerImg} alt="Header img" className="headerImg" />
          </div>
       
      </div>
    </div>
  );
};
