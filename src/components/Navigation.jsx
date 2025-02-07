import "../styles/Navigation.scss";

const Navigation = () => {
    const navTitle = ["HOME", "ABOUT ME", "PORTFOLIO", "SKILLS", "CONTACT"];
    return (
        <header className="navigation-area">
            <h1 className="logo">VISIONARY YUJIN</h1>
            <nav className="nav">
                <ul className="li-group">
                    {
                        navTitle.map((item,index) => {
                            return (<li key={index} className="li-item"><a href="#">{item}</a></li>)
                        })
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;