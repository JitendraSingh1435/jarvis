import React from "react";
import "./header.css";
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className="jarvis_header section_padding" id="home">
      <div className="jarvis_header-content">
        <h1 className="gradient_text">
          Let's Build Something amazing with <span className="jarvis_font"> JARVIS </span> OpenAI
        </h1>

        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>

        <div className="jarvis_header-content_input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button"> Get Statred </button>
        </div>

        <div className="jarvis_header-content_people">
          <img src={people} alt="people"/>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
        <div className="jarvis_header-image">
          <img src={ai} alt="AIimage"/>
        </div>
    </div>
  );
};

export default Header;
