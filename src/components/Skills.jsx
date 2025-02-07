import React , {useState, useEffect} from "react";
import "../styles/Skills.scss"
import skillData from "../Data/skillsData.json";

const Skills = () => {
    const [list, setList] = useState("Language");
    const [skillList, setSkillList] = useState(null);
    const typeClickEvent = (e) => {
      setList(e.target.dataset.value)
    }
    useEffect(()=>{
      const jsxTemplate = skillData[list].map((item,i)=>{
        return(
          <article className="list-item">
            <div className="list-icon">
              <div className="list-small-circle"></div>
              <img className="list-icon-img" src={`images/logo/${item["icon"]}`} alt={item["name"]} />
            </div>
            <div className="list-info">
              <h2 className="list-name">{item["name"]}</h2>
              <p className="list-description">{item["description"]}</p>
            </div>
          </article>
        )
      });
      setSkillList(jsxTemplate);
    },[list]);
      return (
        <section className="skills-wrapper">
          <section className="skills-layout-area">
          <article className="skills-header">
            <h2>Skills</h2>
            <div className="horizontal-line"></div>
          </article>
          <div className="skills-container">
            <aside className="skills-sidebar">
            <div className="vertical-line"></div>
                <ul>
                  <li className={(list === "Language" ? "active" : "unusable")} onClick={(e)=>{typeClickEvent(e)}} data-value="Language">Language</li>
                  <li className={(list === "FrontEnd" ? "active" : "unusable")} onClick={(e)=>{typeClickEvent(e)}} data-value="FrontEnd">FrontEnd</li>
                  <li className={(list === "BackEnd" ? "active" : "unusable")} onClick={(e)=>{typeClickEvent(e)}} data-value="BackEnd">BackEnd</li>
                  <li className={(list === "ETC" ? "active" : "unusable")} onClick={(e)=>{typeClickEvent(e)}} data-value="ETC">ETC</li>
                </ul>
              </aside>
              <section className="skills-list-section">
                <div className="skills-list-header">Skill Stack
                  <span>@{list}</span>
                </div>
                <article className="skills-list">
                  {skillList}
                </article>
              </section>
          </div>
          </section>
        </section>
      );
}

export default Skills;