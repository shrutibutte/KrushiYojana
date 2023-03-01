import "../style/videoSlider.css";
import React from "react";
import { Carousel } from "react-bootstrap";
import Vid1 from "../Assets/Vid1.mp4";
import gandul_pani from "../Assets/gandul_pani.jpeg"

import ReactPlayer from "react-player";
// import "bootstrap/dist/css/bootstrap.css";
 
const Blog = () => {
  const videoProperties = [
    {
      id: 1,
  
      src: Vid1,
    },
    {
      id: 2,
      
      src: Vid1,
     
    }
  ];
 
  return (
    <section id="client1">

   
    <div className="App">
      <Carousel>
        {videoProperties.map((videoObj) => {
          return (
            <Carousel.Item key={videoObj.id}>
              <ReactPlayer
                url={videoObj.src}
                pip={true}
                controls={true}
                playing={true}
              />
              <Carousel.Caption>
                <p>{videoObj.credit}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
    </section>
  );
};
 
export default Blog;