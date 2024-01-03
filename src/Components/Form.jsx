import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const EmailContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs
      .sendForm(
        "service_60cwxjj",
        "template_4e673mp",
        "form",
        "-Wt-HCKkd91BbWW6h"
      )
      .then(
        function (response) {
          alert("SUCCESS!", response.status, response.text);
        },
        function (error) {
          alert("FAILED...", error);
        }
      );
  };

  return (
    <form ref={form} className="emailForm" onSubmit={sendEmail}>
      {/* <label>Name</label>
      <input type="text" className="emailAddress" name="user_name" placeholder="Your Email"/> */}

      <input type="email" className="emailAddress" name="user_email" />
      {/* <label>Message</label> */}
      {/* <textarea
        className="emailAddress"
        name="message"
        
      /> */}
      <input type="submit" className="emailButton" value="Subscribe" />
    </form>
  );
};

export default EmailContactForm;
