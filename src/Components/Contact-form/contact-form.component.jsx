import React from "react";
import Styles from "./contact-form.module.scss";

import close from "../../Assets/close.svg";

const ContactForm = ({toggleContact}) => {
  return (
    <div className={Styles.contactForm}>
        <img onClick={toggleContact} src={close} alt="" className={Styles.close}/>
      <h4 className={Styles.contactText}>
      Servers under maintenance... <br/>
      I'm sorry for the inconvenience in the mean
      <br/>
      time you can contact me at <br/>
      <span className={Styles.span}>andrewapinon@gmail.com</span>
      </h4>
    </div>
  );
};

export default ContactForm;
