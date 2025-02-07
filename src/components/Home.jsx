import '../styles/Home.scss'
import Clock from './Clock';
import React, { useEffect,useState } from "react";

// import {Routes, Route} from "react-router-dom";

// == Home ==
const Home = () => {
    return (
        <div className="home-wrapper">
            <Contents />
            <Explain/>
        </div>
    )
}

// == Contents ==
const Contents = () => {
    // 첫 번째 줄의 박스
    const firstRowBoxes = ["box1", "box2", "box3", "box4", "box5", "box6", "box7"];
    // 두 번째 줄의 박스
    const secondRowBoxes = ["box8", "box9", "box10", "box11", "box12", "box13"];

    return (
        <main className="main-contents-area">
            <div className="gradient-pattern gradient-item01"></div>
            <div className="gradient-pattern gradient-item02"></div>
            <section className="content-items">
                <div>
                    {
                        firstRowBoxes.map((box,index)=>{
                            return (<div key={index} className={`box-item ${box}`}></div>)
                        })
                    }
                </div>
                <div>
                    {
                        secondRowBoxes.map((box,index)=>{
                            return (<div key={index+(firstRowBoxes.length)} className={`box-item ${box}`}></div>)
                        })
                    }
                    <div className="box-item box14">
                        <Clock />
                    </div>
                </div>
            </section>
        </main>
    )
}

// == Explain ==
const Explain = () => {
    return (
        <>
        <section className="explain-container">
            <article className="explain-content">
                <p className="explain-txt jeneral-color">DEVELOPER <span className="explain-txt point-color">KIMYUJIN</span>'S</p>
            </article>
            <div className="explain-sub">
                <div className="horizontal-line"></div>
                <p className="sub-text jeneral-color">PORTFOLIO</p>
            </div>
        </section>
        <Scroll/>
        </>
    );
};

// == Scroll ==
const Scroll = () => {
    return(
    <section className='scroll-area'>
        <h3 className='scroll-txt'>view more scroll</h3>
        <div className='scroll-icon'>
            <div class="scroll-dot"></div>
        </div>
    </section>
    )
}

export default Home;