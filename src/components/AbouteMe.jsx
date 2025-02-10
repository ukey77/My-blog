import React, {useState, useEffect} from "react";
import "../styles/AbouteMe.scss"

const AboutMe = () => {
    return (
      <section className="aboutMe-wrapper">
    <article className="aboutMe-layout">
        <div className="aboutMe-main-info">
            <h1>안녕하세요!</h1>
        </div>
        <div className="aboutMe-sub-info">
            <article className="aboutMe-personal-info sub-item">
                <h2>About Me</h2>
                <ul>
                    <li>이름: 김유진</li>
                    <li>생년월일: 00.01.11</li>
                    <li>위치: 경기도 안양시 동안구</li>
                    <li>연락처: 010-5620-8919</li>
                </ul>
            </article>
            <article className="aboutMe-certification sub-item">
                <h2>Certification</h2>
                <ul>
                    <li>정보처리기사</li>
                    <li>컴퓨터활용능력 1급</li>
                    <li>웹디자인기능사</li>
                </ul>
            </article>
            <article className="aboutMe-education sub-item">
                <h2>Education</h2>
                <ul>
                    <li>Node.JS 기반 Open API 를 활용한 응용 소프트웨어 개발자 양성 과정 <p>(24.05.20 ~ 24.11.26)</p></li>
                    <li>AI기반 챗봇(GPT) 활용한 웹개발(Python)전문가 과정<p>(24.12.00 ~ 25.00.00)</p></li>
                </ul>
            </article>
        </div>
    </article>
</section>


    );
  };
  

export default AboutMe;