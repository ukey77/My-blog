import React from 'react';

const Contact = () => {
  const contactInfo = [
    {
      id: 1,
      method: "TEL",
      action: "tel:010-5620-8919",
      img: "/images/contact/phone-icon.png"
    },
    {
      id: 2,
      method: "KAKAO",
      action: "https://open.kakao.com/o/sXZSHZZg",
      img: "/images/contact/kakao-icon.png"
    },
    {
      id: 3,
      method: "E-MAIL",
      action: "mailto:yujin25683@gmail.com",
      img: "/images/contact/email-icon.png"
    }

  ];

  return (
    <section className="contact-wrapper">
      {/* Contact me 헤더 추가 */}
      <h2 className="contact-header">Contact Me</h2>
      
      <div className="contact-card-container">
        {contactInfo.map((contact) => (
          <a 
            key={contact["id"]} 
            href={contact["action"]} 
            target={contact["method"] === "KAKAO" ? "_blank" : "_self"} 
            rel="noopener noreferrer" 
            className="contact-card">

            <img src={contact["img"]} alt={contact["method"]} className="contact-icon" />
            <p className="context-txt-box">
            <h3>{contact["method"]}</h3>
            {contact["method"] === "KAKAO" ? (
              <span className="kakao-link-txt">바로가기 →</span>
            ) : (
              <p>{contact.action.replace(/^(mailto:|tel:)/, '')}</p>
            )}
            </p>
            
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
