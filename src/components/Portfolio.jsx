import React, { useEffect, useState, useRef } from "react";

// == json Data ==
import projectData from "../assets/Data/projectData.json";

// == recoil ==  :: State(값변경) , Value(값 읽기)
import { useRecoilState, useRecoilValue } from "recoil";
import { sortOrderState } from "../recoil/atoms.js";

const Portfolio = () => {
    const [jsxData, setJsxData] = useState([]); // jsxData
    const portfolioLength = useRef(0); // 포트폴리오 개수
    const sortOrderValue = useRecoilValue(sortOrderState);
    const sortType = sortOrderValue === "oldest" ? 0 : Number(portfolioLength.current) - 1;
    const portfolioContents = useRef(null);

    const scrollToSection = () => {
        if (portfolioContents.current) {
            portfolioContents.current.scrollTo({
                top: "0",
                behavior: "smooth"
            });
        }
    }

    useEffect(() => {
        const data = projectData["data"]; // json data
        portfolioLength.current = data.length; // 포트폴리오 개수 명시
        // ==jsxTemplate==
        const jsxTemplate = data.map((item, i) => {
            const idValue = Number(item["id"]) - 1; //Id값
            const sortIdx = Math.abs(-sortType + idValue); //sort에 따른 변화
            const areaStyle = {backgroundColor: `${data[sortIdx]["colorCode"]}`};
            const style = {backgroundImage: `url(images/${data[sortIdx]["imgPath"]})`};
            const githubStyle = {backgroundImage: `url(images/logo/github_logo.png)`};
            const notionStyle = {backgroundImage: `url(images/logo/notion_logo.png)`};
            const linkStyle = {backgroundImage: `url(images/icon/link_icon.png)`};
            return (
                <article key={`jsx${i}`} className="portfolio-item">
                    <section className="portfolio-description">
                        <div className="title-info">
                            <h1 className="title">{data[sortIdx]["title"]}</h1>
                        </div>
                        <article className="description-info">
                            {
                                data[sortIdx]["type"].map((item, index) => {
                                    return (item === "Team Project" ? (<div key={`team-division${index}`} className="project-division team-division">{item}</div>) :
                                        (<div key={`division${index}`} className="project-division">{item}</div>));
                                })
                            }
                            <p className="description-period">기간: {data[sortIdx]["period"]}</p>
                            <p className="description-txt">{data[sortIdx]["description"]}</p>
                            <ul className="tech-stack">
                                {
                                    data[sortIdx]["techStack"].map((item, index) => {
                                        return (<li key={`tech${index}`} className="tech-item">{item}</li>)
                                    })
                                }
                            </ul>
                        </article>
                        <article className="detail-info">
                            <a href="#site" className="info-button go-site">GO SITE</a>
                            <a href="#pdf" className="info-button pdf">PDF</a>
                        </article>
                    </section>
                    <div style={areaStyle} className={`portfolio-img-area`}>
                        <div style={style} className={`portfolio-img`}></div>

                        <div className='portfolio-img-hover' onClick={()=>{window.open(data[sortIdx]["siteLink"], "_blank");}}>
                            {/* ==logo== */}
                            <div className="notion-logo sub-logo" onClick={(e)=>{
                                e.stopPropagation();
                                window.open(data[sortIdx]["notionLink"], "_blank");}} style={notionStyle}></div>
                            <div className="gitHub-logo sub-logo" onClick={(e)=>{
                                e.stopPropagation();
                                window.open(data[sortIdx]["githubLink"], "_blank");}} style={githubStyle}></div>
                            <div style={linkStyle} className="link_icon"></div>
                        </div>
                    </div>
                </article>
            )
        });
        setJsxData(jsxTemplate);
        scrollToSection();
    }, [sortType]);

    return (
        <div className="portfolio-wrapper">
            <section className="portfolio-layout">
                <section className="portfolio-header">
                    <h2 className="section-title">PORTFOLIO <span className="portfolio-length">{portfolioLength.current}</span></h2>
                    <article>
                        <SortOrder />
                    </article>
                </section>
                <section ref={portfolioContents} className="portfolio-contents">
                    {jsxData}
                </section>
            </section>
        </div>
    );
};

const SortOrder = (props) => {
    const [sortOrder, setSortOrder] = useRecoilState(sortOrderState);
    const handleChange = (e) => {
        // console.log(e.target.value);
        setSortOrder(e.target.value);
    }

    return (
        <form className="sort-form">
            <input type="radio" id="oldest" name="sortOrder" value="oldest" onChange={handleChange} checked={sortOrder === "oldest"} />
            <label htmlFor="oldest">오래된순</label>
            <input type="radio" id="newest" name="sortOrder" value="newest" onChange={handleChange} checked={sortOrder === "newest"} />
            <label htmlFor="newest">최신순</label>
        </form>
    )
}

export default Portfolio;

