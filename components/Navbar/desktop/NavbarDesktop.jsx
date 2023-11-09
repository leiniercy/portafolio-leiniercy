import '@styles/Navbar/desktop/Navbardesktop.css';

const Navbardesktop = () => {
    return (
        <div className="navbar-desktop-container">
            <div className="navbar-desktop">
                <div className="navbar-desktop-logo">
                    <div className="navbar-desktop-logo-name">LOGO</div>
                </div>
                <div className="navbar-desktop-menu">
                    <a href={'#hero'}>
                        <div className="navbar-desktop-menu-item">HOME</div>
                    </a>
                    <a href={'#about'}>
                        <div className="navbar-desktop-menu-item">ABOUT</div>
                    </a>
                    <a href={'#skill'}>
                        <div className="navbar-desktop-menu-item">SKILL</div>
                    </a>
                    <a href={'#service'}>
                        <div className="navbar-desktop-menu-item">SERVICE</div>
                    </a>
                    {/*<div className="navbar-desktop-menu-item">WORK</div>*/}
                </div>
            </div>
        </div>);
};

export default Navbardesktop;
