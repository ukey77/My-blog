import React, { useState, useEffect, useRef } from "react";
import skillData from "../assets/Data/skillsData.json";

const Skills = () => {
  const [list, setList] = useState("Language");
  const [skillList, setSkillList] = useState(null);
  const topRef = useRef(null);

  const typeClickEvent = (e) => {
    setList(e.target.dataset.value);

    if (topRef.current) {
      const topOffset = topRef.current.getBoundingClientRect().top + window.scrollY;
      // 스크롤 위치를 네비바 높이(75px)만큼 조정
      window.scrollTo({ top: topOffset - 75, behavior: "smooth" });
    }
  
  };

  useEffect(() => {
    const jsxTemplate = skillData[list].map((item, i) => (
      <article className="list-item" key={i}>
        <div className="list-icon">
          <div className="list-small-circle"></div>
          <img
            className="list-icon-img"
            src={`images/logo/${item["icon"]}`}
            alt={item["name"]}
          />
        </div>
        <div className="list-info">
          <h2 className="list-name">{item["name"]}</h2>
          <p className="list-description">{item["description"]}</p>
        </div>
      </article>
    ));
    setSkillList(jsxTemplate);
  }, [list]);

  return (
    <section className="skills-wrapper" ref={topRef}>
      <section className="skills-layout-area">
        <article className="skills-header">
          <h2>Skills</h2>
          <div className="horizontal-line"></div>
        </article>
        <div className="skills-container">
          {/* 사이드바 */}
          <aside className="skills-sidebar">
            <div className="vertical-line"></div>
            <ul>
              {["Language", "FrontEnd", "BackEnd", "ETC"].map((type) => (
                <li
                  key={type}
                  className={list === type ? "active" : "unusable"}
                  onClick={typeClickEvent}
                  data-value={type}
                >
                  {type}
                </li>
              ))}
            </ul>
          </aside>
          {/* 스킬 리스트 */}
          <section className="skills-list-section">
            <div className="skills-list-header">
              Skill Stack <span>@{list}</span>
            </div>
            <article className="skills-list">{skillList}</article>
          </section>
        </div>
      </section>
    </section>
  );
};

export default Skills;
