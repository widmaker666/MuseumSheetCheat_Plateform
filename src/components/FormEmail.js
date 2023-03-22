import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import TypeWriterEffect from "react-typewriter-effect";
import jesus from "../assets/images/jesus.jpg";
import dali from "../assets/images/dali2.jpg";

const FormEmail = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formMess = document.querySelector(".form-message");

    emailjs
      .sendForm(
        "service_l3ka15o",
        "template_vkmymon",
        form.current,
        process.env.REACT_APP_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          formMess.innerHTML = '<p class="success">Message validé !</p>';

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        },
        (error) => {
          console.log(error.text);
          formMess.innerHTML = '<p class="error">Message invalide!</p>';
          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        }
      );
  };

  return (
    <body className="body-back">
      <div className="container mt-5">
        <h2 className=" mb-4 parag-fonts offset-lg-3">CONTACT US</h2>
        <div className="row">
          <div className="col-lg-6 offset-lg-1">
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-3 d-grid">
                <label className="parag-fonts text-center">Name</label>
                <input
                  className="signupForm"
                  type="text"
                  name="name"
                  required
                  autoComplete="off"
                />
              </div>

              <div className="mb-3 d-grid text-center">
                <label className="parag-fonts">Email</label>
                <input
                  className="signupForm"
                  type="email"
                  name="email"
                  required
                  autoComplete="off"
                />
              </div>

              <div className="mb-2 d-grid text-center">
                <label className="parag-fonts">Message</label>
                <textarea
                  className="signupForm"
                  name="message"
                  required
                  autoComplete="off"
                />
              </div>

              <div className="btn-lt d-grid">
                <button type="submit" className="">
                  Envoyer
                </button>
              </div>
            </form>
            <p
              className="form-message text-center mt-5"
              style={{
                fontFamily: "Inconsolate",
                fontSize: "30px",
                fontWeight: 800,
                color: "green",
              }}
            ></p>
            <div className="mb-5 d-grid text-center text-anime-contact">
              <TypeWriterEffect
                textStyle={{
                  fontFamily: "Inconsolata",
                  color: "black",
                  fontWeight: 500,
                  fontSize: "1.5em",
                  text: "center",
                }}
                startDelay={50}
                loop={true}
                cursorColor="black"
                text="Here is the contact form you can use for all your requests,
                for all your requests, appreciations and comments.
                Moreover, if you want to delete, deactivate or change the password of your account, we will also ask you to use the contact form.
Good day to all."
                typeSpeed={50}
              />
            </div>
          </div>
          <img className="col-5 img-contact" src={jesus} alt="" />
          <img className="img-contact-responsive" src={dali} alt="" />
        </div>
      </div>
    </body>
  );
};

export default FormEmail;
