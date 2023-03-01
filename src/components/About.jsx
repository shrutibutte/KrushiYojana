import React, { useState} from "react";
import "../style/about.css";
import Imgs1 from "../Assets/company.jpg";




// import ReadMore from "./ReadMore";
export default function About(props) {
  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text">
        {isReadMore ? text.slice(0, 400) : text}
        <span onClick={toggleReadMore} className="read-or-hide ">
          {isReadMore ? <button className="btn btn-success btn-sm" style={{ marginLeft: "20px", marginTop: "7px" }}>Read More</button> : <button className="btn btn-success btn-sm" style={{ marginLeft: "20px", marginTop: "10px" }}>Show Less</button>}
        </span>
      </p>
    );
  };

  return (
    <>
      {/* <div>
        <Navbar />
      </div> */}
      
      <section className="abouthome " id="about1" style={{  }}>
        <div className="container-fluid my-5 ">
        <h1 className="card-title"
                  style={{
                    fontWeight: "bold",
                    textShadow: "rgba(52, 56, 62, 0.6) 2px 4px 4px",
                    color: "#514f4f",
                    textAlign: "center"
                  }}
          >About Us</h1>
          <div className="row">
            <div className="col-lg-6">
              <img
                style={{ height: "350px", width: "100%" }}

                src={Imgs1}
                className="d-block p-4 pimage"
                alt=""
                id="productimg" />
            </div>
            <div className="col-lg-6  " >
              <h2 className="py-3"
                style={{
                  fontWeight: "bold",
                  textShadow: "rgba(52, 56, 62, 0.6) 2px 4px 4px",
                  color: "#514f4f",
                  textAlign: "center"
                }}>कृषीसेवा गांडूळ खत निर्मिती</h2>
                

              <p className="card-text" style={{ textAlign: "justify" }}>
                <ReadMore>
                  कृषीसेवा गांडूळ खत निर्मिती | शेतकऱ्यांसाठी घेवून येत आहे. कमी खर्चात घरच्या घरी गांडूळखत निर्मिती प्रकल्प  आजच्या आधुनिक युगात शेती क्षेत्रात उच्च तंत्रज्ञान, आधुनिक यंत्र सामग्री, रसायनाचा प्रभाव जास्त प्रमाणात दिसून येत आहे. याचा परिणाम म्हणुन शेतीचे उत्पादन आणि उत्पन्न वाढले पण आधुनिकतेमुळे शेती आणि शेतकरी परावलंबी झाला. तसेच वाढत्या रसायनिक शेतीतून मिळणारे उत्पादन विषयुक्त झाले. आणि दुष्परिणाम थेट माणवी शरिरावर होऊन माणव विविध रोगांना बळी पडत चालला आहे.
                  शेतीच्या रासायनिकीकरणामुळे शेती निर्जीव झाली आणि शेतीची उत्पादन क्षमता कमी झाली परिणामी शेतीवर होणारा खर्च वाढला व शेतकरी कर्जबाजारी झाला. म्हणूनच आज आपणास शेती जिवंत ठेवण्या करितां
                  सेंद्रिय पध्दतीने शेती करणे गरजेचे आहे नव्हे नव्हे बंधन कारकच आहे. उपलब्ध नैसर्गिक साधन संपत्तीचा वापर करून आपण उत्तम शेती करु शकतो. सेंद्रीय शेती करतांना गांडूळ खताला अनन्य साधारण महत्व आहे. त्यामुळेलच आपणास गांडूळ खत F स्वतः तयार करून शेती करिता वापरणे आवश्य आहे.
                </ReadMore>
              </p>
            </div>
          </div>
        </div>


      </section>
    </>
  );
}
