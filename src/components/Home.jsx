import React, { useState } from "react";
// import { useContext } from "react";
import img1 from "../Assets/cardImg-1.jpg";
import img2 from "../Assets/cardImg-1.jpg";
import img3 from "../Assets/cardImg-1.jpg";
import slider_img2 from "../Assets/slider_img2.jpg";
import gandul_khat from "../Assets/gandul_khat.jpeg";
import slider_img1 from "../Assets/slider_img1.jpg"
import slider_img3 from "../Assets/gandul_khat.jpeg";
import gandul from "../Assets/gandul.jpeg"
import gandul_pani from "../Assets/f2.png"
import bed_img1 from "../Assets/slider_img1.jpg"
import jiva_amurut from "../Assets/jivamurt.jpeg"
import Logo from "../Assets/logo1.png"
import VideoSlider from "./VideoSlider";
import Slider from "./Slider"
import "../style/home.css";
import { Link } from "react-router-dom";
import About from './About'
import Contact from './Contact'
import Footer from "./Footer";
import Blog from "./Blog"
import ProductSlider from "./ProductSlider";
import ReadMore from "./ReadMore";
import Video from "./Video";

// import Navbar from "./Navbar";
export default function Home(props) {
  const [navbar, setNavbar] = useState(false);
  const [navbarcolor, setNavbarcolor] = useState("whitec");
  const [changiconcolor, setchangiconcolor] = useState("whitec");
  const [changeBackgrounds, setchangeBackground] = useState("whitec");
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
      setNavbarcolor("blackc");
      setchangiconcolor("blackc");
      setchangeBackground(false);
    } else {
      setNavbar(false);
      setNavbarcolor("whitec");
      setchangiconcolor("whitec");
      setchangeBackground(true);
    }
  };

  window.addEventListener("scroll", changeBackground);
  // read More button 
  // const ReadMore = ({ children }) => {
  //   const text = children;
  //   const [isReadMore, setIsReadMore] = useState(true);
  //   const toggleReadMore = () => {
  //     setIsReadMore(!isReadMore);
  //   };
  //   return (
  //     <p className="text">
  //       {isReadMore ? text.slice(0, 280) : text}
  //       <span onClick={toggleReadMore} className="read-or-hide ">
  //         {isReadMore ? <button className="btn btn-success btn-sm" style={{ marginLeft: "20px", marginTop: "7px" }}>Read More</button> : <button className="btn btn-success btn-sm" style={{ marginLeft: "20px", marginTop: "10px" }}>Show Less</button>}
  //       </span>
  //     </p>
  //   );
  // };

  return (
    <>
      {/* Navbar for Home page */}
      <nav
        class={
          navbar
            ? "navbar navbar-expand-lg  bg-light  fixed-top "
            : "navbar navbar-expand-lg   fixed-top "
        }>
        <div class="container my-2 bg-black ">
          <Link
            class="navbar-brand text-bold "
            to="/"
            id={navbarcolor}
          // style={{ color: "black", fontSize: "25px", fontWeight: "560" }}
          >
            <img src={Logo} alt="" style={{ height: "60px", width: "" }} />
          </Link>

          <div className=" phone_mode_iconss">
            <li class="nav-item">
              <i
                class="fas fa-phone-square-alt"
                style={{}}
                id={changiconcolor}
              >
              </i>
            </li>
            <li class="nav-item mx-2">
              <h5> 8208435851</h5>
            </li>
          </div>

          <button
            class="navbar-toggler text-black"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto text-center my-0  mb-lg-0">
              <Link
                class={
                  changeBackgrounds
                    ? "nav-link active phone_mode_color changebg"
                    : "nav-link active phone_mode_color  "
                }
                id={navbarcolor}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
              <li class="nav-item">
                <a href="#about1"
                  class={
                    changeBackgrounds
                      ? "nav-link  phone_mode_color changebg"
                      : "nav-link  phone_mode_color"
                  }
                  id={navbarcolor}
                >About</a>
              </li>

              <li class="nav-item">
                <a href="#contact1"
                  class={
                    changeBackgrounds
                      ? "nav-link  phone_mode_color changebg"
                      : "nav-link  phone_mode_color"
                  }
                  id={navbarcolor}
                >Contact</a>
              </li>




              <li class="nav-item">
                <a href="#client1"
                  class={
                    changeBackgrounds
                      ? "nav-link  phone_mode_color changebg"
                      : "nav-link  phone_mode_color"
                  }
                  id={navbarcolor}
                >Client</a>
              </li>
            </ul>


            {/* <div className=" phone_mode">
              <li class="nav-item" >
                <Link class="nav-link">
                  <i
                    class="fas fa-phone-square-alt"

                    id={changiconcolor}
                  >
                  </i>
                </Link>
              </li>
              <li class="nav-item   my-2 phone_mode_name  ">
                <h5>90221838838</h5>
              </li>
            </div> */}

          </div>
        </div>
      </nav>


      {/* image slider  */}
      <div
        class=" carousel slide"
        data-ride="carousel"
        id="carouselExampleIndicators"
      >
        <ol class="carousel-indicators">
          <li
            class="active"
            data-slide-to="0"
            data-target="#carouselExampleIndicators"
          ></li>
          <li data-slide-to="1" data-target="#carouselExampleIndicators"></li>
          <li data-slide-to="2" data-target="#carouselExampleIndicators"></li>
        </ol>
        <div
          id="carouselExampleDark"
          class="carousel carousel-light slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          <div class="carousel-inner">
            <div
              class="carousel-item active  home_page"
              data-bs-interval="3000"
            >
              <img src={slider_img1} class="d-block w-100 " alt="..." />
              <div class="carousel-caption  d-md-block">
                {/* <h1 className="home_title">#WeLoveSnack</h1> */}
              </div>
            </div>
            <div class="carousel-item home_page" data-bs-interval="2000">
              <img src={slider_img2} class="d-block w-100  " alt="..." />
              <div class="carousel-caption  d-md-block">
                {/* <h1 className="home_title demo">#MeakingFoodHelthy</h1> */}
              </div>
            </div>
            <div class="carousel-item home_page" data-bs-interval="2000">
              <img src={slider_img3} class="d-block w-100 " alt="..." />
              <div class="carousel-caption  ">
                {/* <h1 className="home_title">#FormToFork</h1> */}
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button
            class="carousel-control-next "
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon " aria-hidden="true"></span>
          </button>
        </div>
      </div>

      <h3 style={{ textAlign: "center", paddingTop: "3rem", fontWeight: "bold", color: "white", backgroundColor: "#1d7b2c", height: "200px", width: "100%" }}>
        <div className="content" style={{ padding: "0rem" }}>
          <h1 style={{ fontWeight: "700" }}>कृषीसेवा गांडूळ खत निर्मिती</h1>   | शेतकऱ्यांसाठी घेवून येत आहे. कमी खर्चात घरच्या घरी गांडूळखत निर्मिती प्रकल्प        </div>
      </h3>

      {/* slider for gandul Khat  */}
      {/* <ProductSlider/> */}


      {/* <VideoSlider></VideoSlider> */}
      {/* card section */}

      {/* <section>
        <div>
          <div className="container-fluid prodcutDetails" >
            <div className="row">
              <div className="col-lg-4">
                <img
                  style={{ height: "350px", width: "100%" }}

                  src={gandul}
                  className="d-block p-4 pimage"
                  alt=""
                  id="productimg" />

                <div className="card-body text-center">
                  <h1 className="card-title">Card title</h1>
                  <p className="card-text" >
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link to="/CardDetails" className="btn btn-success">
                    Read More
                  </Link>

                </div>
              </div>


              <div className="col-lg-4">
                <img
                  style={{ height: "350px", width: "100%" }}

                  src={gandul_khat}
                  className="d-block p-4 pimage"
                  alt=""
                  id="productimg" />

                <div className="card-body text-center">
                  <h1 className="card-title">Card title</h1>
                  <p className="card-text" >
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link to="/CardDetails" className="btn btn-success">
                    Read More
                  </Link>

                </div>
              </div>


              <div className="col-lg-4">
                <img
                  style={{ height: "350px", width: "100%" }}

                  src={gandul_pani}
                  className="d-block p-4 pimage"
                  alt=""
                  id="productimg" />

                <div className="card-body text-center">
                  <h1 className="card-title">Card title</h1>
                  <p className="card-text" >
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link to="/CardDetails" className="btn btn-success">
                    Read More
                  </Link>

                </div>
              </div>


            </div>
          </div>
        </div>
      </section> */}

      {/* slider for gandul Khat  */}

      <section>

        <h1 className="card-title "
          style={{
            fontWeight: "bold",
            textShadow: "rgba(52, 56, 62, 0.6) 2px 4px 4px",
            color: "#514f4f",
            textAlign: "center",
            paddingTop: "29px"
          }}
        >गांडूळ खताचे प्लास्टिक बेड</h1>
        <ProductSlider />

        <div>
          <div className="container-fluid prodcutDetails" >
            <div className="row">
              <div className="col-lg-12">
                <div className="card-body text-center">
                  {/* <h1 className="card-title"
                  style={{
                    fontWeight: "bold",
                    textShadow: "rgba(52, 56, 62, 0.6) 2px 4px 4px",
                    color: "#514f4f"
                  }}
                >गांडूळ खताचे प्लास्टिक बेड</h1> */}
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    <br />
                    <b style={{ fontWeight: "800" }}>HDPE Vermi Bed-</b>
                    <ReadMore>
                      ची लांबी 12 फुट रुंदी 4 फुट व उंची 2 फुट (12x42) अशी असते. त्याच्या/बेडच्या बाजूला नेहमी हवा खेळती राहण्याकरिता व ओलावा टिकून राहण्या करिता NET WINDOW ची व्यवस्था केली आहे. त्याच्या सर्व बाजू उंच व गुळगुळीत असल्यामुळे त्यावर साप, उंदीर, मुंगी येऊ शकत नाही.
                      परिणामी गांडूळांना कळल्याही धोका संभवत नाही. असा हा HDPE Vermi Bed आपण अत्यंत कमी जागेत कमी वेळात सहज उभारू शकतो. तसेच तो Mooveable असल्यामुळे दुसऱ्या ठिकाणीने आण करता येते.
                      HOPE Vermi Bed मध्ये सुरुवातीला 75 से 90 दिवसात 1 ते 1.5 मे टन गांडूळ खत, 25 से 30 ली. व्हर्मी वॉश 8 ते 10 कि. गांडूळ कल्चर आपणास मिळते. नंतर प्रत्येक 60 दिवसांत 1 मे. टन गांडूळ खत मिळवता येतोय. असे वर्षाकाठी पाच ते सहावेळा म्हणजेच 6 मे. टन गांडूळ खत एका बेड पासून मिळतो.
                    </ReadMore>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr />
      <section>
        <div>
          <div className="container-fluid prodcutDetails" >
            <div className="row">

              <div className="col-lg-4">
                <h1 className="card-title "
                  style={{
                    fontWeight: "bold",
                    textShadow: "rgba(52, 56, 62, 0.6) 2px 4px 4px",
                    color: "#514f4f",
                    textAlign: "center"
                  }}
                >गांडूळ </h1>
                <img
                  style={{ height: "350px", width: "100%" }}

                  src={gandul}
                  className="d-block p-4 pimage"
                  alt=""
                  id="productimg" />

                <div className="card-body text-center">
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    <br />
                    <b style={{ fontWeight: "800" }}>गांडूळ </b>

                    <ReadMore>
                      गांडूळ खालच्या थरातील माती वर आणतात व तिला उत्तम प्रतीची बनवितात. गांडूळ खतामध्ये ह्युमसचे प्रमाण भरपूर असल्याने नत्र, स्फुरद पालाश व इतर सूक्ष्मद्रव्ये झाडांना भरपूर व लगेच उपलब्ध होतात. जमिनीतील उपयुक्त जिवाणूंच्या संख्येत भरपूर वाढ होते
                    </ReadMore>
                  </p>

                </div>
              </div>


              <div className="col-lg-4">
                <h1 className="card-title "
                  style={{
                    fontWeight: "bold",
                    textShadow: "rgba(52, 56, 62, 0.6) 2px 4px 4px",
                    color: "#514f4f",
                    textAlign: "center"
                  }}
                >गांडूळ खत</h1>
                <img
                  style={{ height: "350px", width: "100%" }}

                  src={gandul_khat}
                  className="d-block p-4 pimage"
                  alt=""
                  id="productimg" />

                <div className="card-body text-center">
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    <br />
                    <b style={{ fontWeight: "800" }}> गांडूळ खत </b>

                    <ReadMore>
                      गांडूळ खताविषयी थोडक्यात गांडूळ खतामुळे अन्य सेंद्रिय खतापेक्षा पिकांसाठी लागणारे अन्न घटक उदा.
                      नत्र, स्फुरद, पालाश, गंधक, मॅग्नेशि- यम, मॅग्नीज, झिंक, बोरॉन, लोह, जस्त, तांबे इत्यादींचे प्रमाण
                      सर्वाधिक उपलब्ध होते. हे प्रयोगाअंती सिध्द झाले आहे. त्याच प्रमाणे सर्वात महत्वाचे जमिनीतील सेंद्रिय
                      कर्बाचे प्रमाण अन्य सेंद्रिय खतांपेक्षा गांडूळ खतातून मोठ्या प्रमाणात वाढण्यास मदत होते. अशा या
                      अनन्य साधारण महत्यामुळेच गांडूळ खताचा प्रचार व प्रसार तसेच गांडूळ खत निर्मितीसाठी शासन विविध
                      प्रशिक्षण व शिबिरे, अनुदान व सवलती असे कार्यक्रम राबवत आहेत. अशा प्रकारचा सर्वोत्कृष्ट असणारा
                      गांडूळ खत आपण आपल्या शेतात, बागेत. अंगणात, फार्म हाऊस इत्यादी ठिकाणी अत्यंत कमी जागेत,
                      कमी वेळात, कमी मेहनतीत व कमी खर्चात तयार करु शकतो. त्याकरिता कृषीसेवा व्हर्मीकंपोस्ट प्रोजेक्ट
                      या कंपनीने रेडीमेट HDPE Vermicompost Production Unit गांडूळ खत निर्मिती प्रकल्प आपल्या
                      सेवेत आणला आहे.
                    </ReadMore>
                  </p>

                </div>
              </div>


              <div className="col-lg-4">
                <h1 className="card-title "
                  style={{
                    fontWeight: "bold",
                    textShadow: "rgba(52, 56, 62, 0.6) 2px 4px 4px",
                    color: "#514f4f",
                    textAlign: "center"
                  }}
                >गांडूळ पाणी</h1>
                <img
                  style={{ height: "350px", width: "100%" }}

                  src={gandul_pani}
                  className="d-block p-4 pimage"
                  alt=""
                  id="productimg" />

                <div className="card-body text-center">
                  <p className="card-text" style={{ textAlign: "justify" }}>

                    <b style={{ fontWeight: "800" }}>व्हर्मीवॉश -</b>

                    <ReadMore>
                      म्हणजे गांडूळ पाणी होय. गांडूळ त्याच्या विशिष्ट ग्रंथीमधून चिकट पदार्थाचा स्त्राव बाहेर सोडतो
                      हा स्त्राय म्हणजेच व्हर्मीवॉश होय. HOPE Vermi Bed च्या एका बाजूला असलेल्या पाईपमधून हे द्रावण
                      मिळविता येते. ते एक चांगले बुरशीनाशक म्हणून ओळखले जाते. व्हर्मीवाश चे द्रावण पिकांवर फवारले
                      असता पिकांना चांगला जोम येऊन वाढ व उत्पन्न चांगल्या प्रतीचे मिळते. तसेच पिकांवरील बुरशीचा रोग
                      नियंत्रणात येतो.
                    </ReadMore>
                  </p>

                </div>
              </div>

              <div className="col-lg-4">
                <h1 className="card-title"
                  style={{
                    fontWeight: "bold",
                    textShadow: "rgba(52, 56, 62, 0.6) 2px 4px 4px",
                    color: "#514f4f",
                    textAlign: "center"
                  }}
                >जीवामृत</h1>
                {/* <img
                  style={{ height: "350px", width: "100%" }}

                  src={jiva_amurut}
                  className="d-block p-4 pimage"
                  alt=""
                  id="productimg" /> */}
                {/* <video width="320" height="240" controls src="../Assets/Vid1.mp4" type="video/mp4"/> */}
                {/* <video src="../Assets/Vid1.mp4" width="640" height="360" poster="../Assets/Vid1.mp4" controls /> */}
                {/* <iframe src="../Assets/Vid1.mp4" width="540" height="300"></iframe> */}
                {/* <iframe
                  title="video player"
                  width="400"
                  height="315"
                  src="../Assets/Viad1.mp4"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  controls
                ></iframe> */}
                {/* <div><VideoSlider/></div> */}
                  <div className="container">
                  {/* <Video></Video> */}
                  </div>
                <div className="card-body text-center">

                  <p className="card-text" style={{ textAlign: "justify" }}>
                    <br />
                    <b style={{ fontWeight: "800" }}>जीवामृत चे फायदे -</b>
                    <ReadMore>

                      ➡️ हे पीकपोषक/पीकवर्धक म्हणून काम करते.
                      ➡️ यामध्ये संप्रेरक, एन्झाइम्स, जीवनसत्त्वे, प्रथिने, विविध सूक्ष्म अन्नद्रव्ये यांचा समावेश असल्याने पिकाला पोषक घटक उपलब्ध होतात.
                      ➡️ यामुळे पिकाच्या मुळांची वाढ जोमदार होते.
                      ➡️ जमिनीतील सेंद्रिय कर्ब वाढून सूक्ष्म जिवाणूंची वाढ होते.
                      ➡️ जमीन सुपीक बनते.

                      जैविक शेती, जैविक शेती म्हणजे काय जिवाणूवर आधारित शेती, सजीव शेती, प्राकृतिक शेती, शेणखत गोमुत्र वर आधारित शेती, नॅचरल फार्मिंग, ऑरगेनिक फार्मिंग, विषमुक्त शेती, आधुनिक शेती व पर्यावरण संतुलित शेती. हे सगळे शब्द एकमेकाला अनुसरून आहे पण हीच शेती रासायनिक व कीटक नाशकाच्या अती वापरामुळे मातीतील पोषक तत्वे व जिवाणू संपुष्टात येवुन जमीन बंजर होवून मातीतील ऊर्वरा शक्ती कमी झाल्याने दरवर्षी उत्पन्नात घट होतांना आपल्याला बघायला मिळत आहे. काही लोकांच्या मते DAP Yuna व किटक नाशकामुळेच पिकाची वृद्धी होते. असे झाले असते तर आता पर्यंत सर्व जंगले साफ झाली असती, कारण जंगलात तर कोणी DAP Yunia टाकायला जात नाही..

                      याचे कारत मातीत सगळे पोषक तत्वे, जिवाणू आधीपासूनच उपलब्ध आहे पण आपण रासायनिक व किटक नाशकाचा अती

                      वापर करून मातीतील पोषक तत्वे असणारे सगळे जिवाणू संपुष्टात आणले हा सगळा प्रकार वेळीच न थांबल्यास आपल्या व येणाऱ्या पिढीचे भवितव्य आपण स्वत च खाईत ढकलत आहोत. शेती ही आपल्या व येणाऱ्या पिढी करिता उदर निर्वाहाचे साधन आहे. त्यामुळे मातीतील उर्वरा शक्ती वाढवून उत्पन्नात वृद्धी आणण्याकरिता जिवामृत सारख्या जैविक शेतीचा पर्याय निवडणे गरजेचे आहे. जैविक, सेंद्रिय खत व औषधी चा वापर करुन

                      जमिनीत जिवाणूची संख्या वाढवून बंजर झालेली माती पुन्हा पुनर्जीवित करून उत्पन्नात वृद्धी आनुण आपल्या व येणाऱ्या

                      पिढीचे भवितव्य आपण उज्वल करु शकतो. 4000Ltr.Capacity
                      व्हर्मिवॉशचे फायदे -

                    </ReadMore>
                  </p>

                </div>
              </div>





            </div>
          </div>
        </div>
      </section>

      <section id="About1">

        <About />
      </section>

      <section id="contact1">

        <Contact />
      </section>



      <div>
        <a
          href="https://api.whatsapp.com/send?phone=918208435821&text=Hello"
          class="btn-whatsapp-pulse"
          target="_blank"
        >
          <i class="fab fa-whatsapp "></i>
        </a>
      </div>

      <Footer />

    </>
  );
}
