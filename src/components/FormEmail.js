import React from 'react';

const FormEmail = () => {
    return (
        <div>
      <form>
        <label>Name</label>
        <input type="text" name="name" required autoComplete="off" />
        <label>Email</label>
        <input type="email" name="email" required autoComplete="off" />
        <label>Message</label>
        <textarea name="message" required autoComplete="off" />
        <input type="submit" value="Envoyer" />
      </form>
      <div className="form-message"></div>
    </div>
    );
};

export default FormEmail;