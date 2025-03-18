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
                        안녕하십니까! 매일 새로운 에러와 씨름하며 성장하는 신입 개발자 <strong>김유진</strong>입니다.<br/>
                        코로나 시기에 <strong>적극적으로 기회</strong>를 잡아 PM 직무를 경험하게 되었고, <strong>진정으로 원했던</strong> 개발의 길로 뛰어들게 됐습니다.<br/>
                        아직 배울 게 산더미지만, <strong>5년, 10년 후</strong>에는 어떤 개발자가 될지 그림을 그리며 한 걸음씩 나아가고 있습니다.<br/>
                        제알 자신 있는 건 남들의 속도에 휘둘리지 않고, <strong>제 페이스</strong>를 지키면서 <strong>꾸준히 성장</strong>할 수 있다는 점입니다!<br/>
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
