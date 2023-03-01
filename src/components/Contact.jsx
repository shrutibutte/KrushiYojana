import React from "react";
import "../style/contact.css";

export default function Contact() {
  return (
    <>




      <section id="contact1">
        <div className="container-fluid mapbox">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.0119878563096!2d77.1385342!3d19.325286099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd033150d9ba08d%3A0x14e76e42cb5c8a4c!2sR%20J%20Plastic%20Tadpatri%20Karkhana%20Basmat!5e0!3m2!1sen!2sin!4v1677482413372!5m2!1sen!2sin"
            className="h-100 w-100 maptop"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>




        <div className="container my-4 ">
          <div className="row mx-auto">

            <div className="col-lg-6">
              <div className="container my-4 text-center">
                <h1 className=""
                style={{
                    fontWeight: "bold",
                    textShadow: "rgba(52, 56, 62, 0.6) 2px 4px 4px",
                    color: "#514f4f",
                    textAlign: "center"
                  }}
                >अधिक माहितीसाठी संपर्क</h1>
              </div>
              <form
                action="https://formspree.io/f/myyaejqk"
                className="p-3"
                method="post"
              >
                <div className="form-group my-2">
                  <div className="row">
                    
                    <div className="col-lg-6 ">
                      <input
                        type="text"
                        className="form-control my-2"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="पहिले नाव"
                        name="FirstName"
                        required
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control my-2"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="आडनाव"
                        name="LastName"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group my-2">
                    <div className="row">
                      <div className="col-lg-6">
                        <input
                          type="text"
                          className="form-control my-2"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="विषय"
                          name="subject"
                          required
                        />
                      </div>
                      <div className="col-lg-6">
                        <input
                          type="tel"
                          className="form-control my-2"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="मोबाईल नंबर"
                          name="number"
                          required
                          maxLength={10}
                        />
                      </div>
                    </div>

                    <div className="form-group my-2">
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="संदेश"
                        name="message"
                        required
                      ></textarea>

                      <div className="form-group form-check text-center">
                        <button
                          type="submit"
                          className="btn btn-success my-3 mx-auto"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="col-lg-6 my-4">
              <div style={{ textAlign: "center" }}>
                <h1 style={{
                    fontWeight: "bold",
                    textShadow: "rgba(52, 56, 62, 0.6) 2px 4px 4px",
                    color: "#514f4f",
                    textAlign: "center"
                  }}>उपलब्ध वेळ</h1>
                <p>
                  सोमवार ते रविवार : सकाळी ८ ते रात्री ८ पर्यंत</p>
                <h3 style={{
                    fontWeight: "bold",
                    textShadow: "rgba(52, 56, 62, 0.6) 2px 4px 4px",
                    color: "#514f4f",
                    textAlign: "center"
                  }}>गरजेसाठी यावर संपर्क करा</h3>
                <p>GmailId : krushisewa307@gmail.com</p>
                <p>मोबाईल नंबर : 8208435851,7020170419</p>
                <p>सर्वे नं. १७१/३/ अ प्लॉट क्र. ५० प्रसाद मंगल कार्यालया जवळ, वसमत- परभणी रोड, जयनगर वसमत, ता. वसमत, जि. हिंगोली -431512</p>

              </div>
            </div>
          </div>
        </div>
      </section>




      {/* <div style={{ textAlign: "center" }}>
        <h1 >Opening Hours</h1>
        <p>Monday-sunday 08:00 AM to 7:00 PM</p>
        <h2>Get in touch  with us</h2>
        <p>krishnaawarde@gmail.com</p>
        <p>Phone NO : 9923873289</p>
        <p>Bhavsar Chowk nanded</p>

      </div> */}

      {/* <div>
        <a
          href="https://api.whatsapp.com/send?phone=919022153951&text=Hello"
          class="btn-whatsapp-pulse"
          target="_blank"
        >
          <i class="fab fa-whatsapp "></i>
        </a>
      </div> */}
      {/* <Footer></Footer> */}
    </>
  );
}
