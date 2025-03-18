import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // FontAwesome 사용

const Footer = () => {


  const iconSize = 25;
  const socialLinks = [
    { id: 1, icon: <FaGithub size={iconSize}/>, url: "https://github.com/ukey77" },
    // { id: 2, icon: <FaLinkedin size={iconSize}/>, url: "https://linkedin.com/in/your-profile" },
    { id: 3, icon: <FaEnvelope size={iconSize}/>, url: "mailto:yujin25683@gmail.com" }
  ];

  return (
    <footer className="footer-wrapper">
      <div className="footer-content">
        {/* 로고 및 이름 */}
        <div className="footer-brand">
          <span className="footer_logo">YUJIN.dev</span>
        </div>

        {/* 소셜 아이콘 */}
        <div className="footer-social">
          {socialLinks.map((social) => (
            <a 
              key={social.id} 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* 저작권 */}
        <div className="footer-copyright">
          © {new Date().getFullYear()} YUJIN.dev. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
