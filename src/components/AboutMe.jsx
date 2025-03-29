import React from "react";

const Contact = () => {

    return (
        <section className="about-wrapper">
            {/* == about == */}
            <h2 className="about-main-title">ABOUT YUJIN</h2>
            <section className="about-layout">
                <article className="about-image-box">
                    <div className="about-circle-shape"></div>
                    <div className="about-image"></div>
                </article>
                <article className="about-content-box">
                    <h2 className="about-title">INTRODUCE</h2>
                    <div className="about-text-box">
                    <p>
                        안녕하십니까! 매일 새로운 에러에도 <strong>문제해결력과 집요함</strong>을 바탕으로 성장하는 신입 백엔드 개발자 <strong>김유진</strong>입니다.<br/>
                        <strong>기획 및 PM 직무를 경험</strong>하며 실무 프로세스를 설계하고, <strong>개발자와의 긴밀한 협업</strong>을 통해 시스템이 실제로 구현되는 과정을 직접 경험했습니다.<br/>
                        이 과정을 통해 <strong>백엔드의 구조와 역할에 대한 이해</strong>를 넓히고, 실무에 필요한 기획력과 협업 역량을 함께 키워왔습니다.<br/>
                        <strong>5년 후엔 실력과 책임감을 갖춘 개발자</strong>, <strong>10년 후엔 문제 해결 중심의 리더 개발자</strong>를 목표로 꾸준히 나아가고 있습니다.<br/>
                        제 페이스를 지키며 <strong>지속적으로 성장할 수 있는 끈기와 실행력</strong>이 저의 가장 큰 강점입니다.
                    </p>
                    </div>
                    <h2 className="about-certification-title">CERTIFICATION</h2>
                    <div className="about-certification-box">
                        <ul className="certification-list">
                            <li>정보처리기사 (필기합격)</li>
                            <li>웹디자인개발기능사</li>
                            <li>컴퓨터활용능력 1급</li>
                        </ul>
                    </div>
                </article>
            </section>
        </section>
    );
};

export default Contact;
