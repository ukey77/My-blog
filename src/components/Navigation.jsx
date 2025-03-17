import { useState, useEffect } from 'react';

const Navigation = ({ scrollToSection, refs }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { title: "ABOUT ME", ref: refs.aboutRef },
        { title: "PORTFOLIO", ref: refs.portfolioRef },
        { title: "SKILLS", ref: refs.skillsRef },
        { title: "CONTACT", ref: refs.contactRef },
    ];

    // 🌟 화면 크기에 따라 상태 자동 업데이트
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && menuOpen) {
                setMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [menuOpen]);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <header className="navigation-area">
            <h1 
                className="logo" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                YUJIN'S BLOG
            </h1>

            {/* 햄버거 버튼 */}
            <button 
                className={`hamburger ${menuOpen ? 'open' : ''}`} 
                onClick={toggleMenu}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav className={`nav ${menuOpen ? 'active' : ''}`}>
                <ul className="li-group">
                    {navItems.map((item, index) => (
                        <li key={index} className="li-item">
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(item.ref);
                                    setMenuOpen(false);
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
