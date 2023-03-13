import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const FormEmail = () => {
  //! permet de récupérer toutes les données des cases du formulaire
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
    <div className="container mt-5">
      <h2 className="mb-5">CONTACT US</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            required
            autoComplete="off"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            className="form-control"
            type="email"
            name="email"
            required
            autoComplete="off"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            className="form-control"
            name="message"
            required
            autoComplete="off"
          />
        </div>

        <div className="mb-5">
          <input className="btn btn-danger" type="submit" value="Envoyer" />
        </div>
      </form>
      <div className="form-message mb-3" style={{ color: "green" }}></div>
      <div className="mb-5">
        <p>
          Ici c'est le formulaire de contact vous pouvez vous servir de celui-çi
          pour toutes vos requêtes, appreciations et observations. De plus si
          vous souhaitez supprimez, modifier ou désactiver votre compte nous
          vous demanderons également de passer par celui-ci. <br />
          Merci!
        </p>
      </div>
    </div>
  );
};

export default FormEmail;
