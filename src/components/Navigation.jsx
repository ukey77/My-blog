const Navigation = ({ scrollToSection, refs }) => {
    // ✅ ref 연결된 메뉴 추가
    const navItems = [
        { title: "ABOUT ME", ref: refs.aboutRef },
        { title: "PORTFOLIO", ref: refs.portfolioRef },
        { title: "SKILLS", ref: refs.skillsRef },
        { title: "CONTACT", ref: refs.contactRef },
    ];

    return (
        <header className="navigation-area">
            <h1 className="logo">VISIONARY YUJIN</h1>
            <nav className="nav">
                <ul className="li-group">
                    {navItems.map((item, index) => (
                        <li key={index} className="li-item">
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault(); // 기본 이벤트 방지
                                    scrollToSection(item.ref);
                                }}
                            >
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Navigation;
