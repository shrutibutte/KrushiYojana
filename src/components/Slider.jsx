import React, { useContext } from "react";
import img1 from "../Assets/cardImg-1.jpg";
import img2 from "../Assets/cardImg-1.jpg";
import img3 from "../Assets/cardImg-1.jpg";
import "../style/slider.css";
import { Link } from "react-router-dom";
function Slider() {

    return (
        <>
            <div className="container text-center my-4">
                <h1>Our Product </h1>
            </div>
            <div className="container">
                <div
                    id="carouselExampleControls"
                    class="carousel slide"
                    data-bs-ride="carousel"
                >
                    <div class="carousel-inner">
                        <div class="carousel-item img_hight active">
                            <div className="row align_item">
                                <div className="col-lg-4 img_product">
                                    <Link to={"/CardDetails"} >
                                        <img
                                            src={img1}
                                            class="d-block  w-100"
                                            alt="..."
                                            style={{ height: "300px" }}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div class="carousel-item  img_hight">
                            <div className="row align_item">
                                <div className="col-lg-4 img_product">
                                    <Link to={"/CardDetails"}>
                                        <img
                                            src={img2}
                                            class="d-block  w-100"
                                            alt="..."
                                            style={{ height: "300px" }}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item  img_hight">
                            <div className="row align_item">
                                <div className="col-lg-4 img_product">
                                    <Link to={"/CardDetails"} >
                                        <img
                                            src={img3}
                                            class="d-block  w-100"
                                            alt="..."
                                            style={{ height: "300px" }}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        class="carousel-control-prev prev carousel-dark"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev"
                        style={{
                            color: "black !important",
                            width: "30px",
                            height: "60px",
                            top: "35%",
                            left: "30px",
                        }}
                    >
                        <span
                            class="carousel-control-prev-icon "
                            aria-hidden="true"
                            style={{ color: "black !important" }}
                        ></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                        class="carousel-control-next next carousel-dark"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="next"
                        style={{
                            // backgroundColor: "black",
                            width: "30px",
                            height: "77px",
                            top: "35%",
                            right: "30px",
                        }}
                    >
                        <span class="carousel-control-next-icon " aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Slider;
