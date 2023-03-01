import React from "react";
import "../style/prodictSlider.css";
import Img1 from "../Assets/bed_img1.jpg";
import Img2 from "../Assets/bed_img2.jpg";
import Img3 from "../Assets/bed_img3.jpg";
function ProductSlider() {

  return (
    <>

    
      <div className="container-fluid py-2">
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner s-hight">
            <div class="carousel-item  active" style={{ height: "200px" }}>
              <img src={Img1} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item ">
              <img src={Img2} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item ">
              <img src={Img3} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>



    </>
  );
}

export default ProductSlider;
