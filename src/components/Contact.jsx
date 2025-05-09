import React, { useEffect, useState } from "react";


// == json Data ==
import contactData from "../assets/Data/contactData.json";

const Contact = () => {
    const [jsxData, setJsxData] = useState([]); // jsxData
    useEffect(()=>{
      const contactInfo = contactData;

      const jsxTemplate = contactInfo.map((contact) => {
        const style = {backgroundImage: `url(images/${contact["img"]})`};
        return(
              <a 
                key={contact["id"]} 
                href={contact["action"]} 
                target={contact["method"] === "KAKAO" ? "_blank" : "_self"} 
                rel="noopener noreferrer" 
                className="contact-card">

                <div style={style} className="contact-icon"></div>
                <p className="context-txt-box">
                <h3>{contact["method"]}</h3>
                {contact["method"] === "KAKAO" ? (
                  <span className="kakao-link-txt">바로가기 →</span>
                ) : (
                  <p>{contact.action.replace(/^(mailto:|tel:)/, '')}</p>
                )}
                </p>
                
              </a>
            )
          });
        setJsxData(jsxTemplate)
    },[])
  return (
    <section className="contact-wrapper">
      {/* Contact me 헤더 추가 */}
      <h2 className="contact-header">Contact Me</h2>
      <div className="contact-card-container">
        {jsxData}
      </div>
    </section>
  );
};

export default Contact;
