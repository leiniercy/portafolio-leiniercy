import '@styles/Navbar/movile/Menu.css';

const Menu = (props) => {
    return (
        <div className="menu">
            <div className="menu-item">
                <a href={'#hero'}> <b className="menu-item-name" onClick={props.openMenu}>HOME</b></a>
            </div>
            <div className="menu-item">
                <a href={'#about'}> <b className="menu-item-name" onClick={props.openMenu}>ABOUT</b></a>
            </div>
            <div className="menu-item">
                <a href={'#skill'}><b className="menu-item-name" onClick={props.openMenu}>SKILLS</b></a>
            </div>
            <div className="menu-item">
                <a href={'#service'}> <b className="menu-item-name" onClick={props.openMenu}>SERVICE</b></a>
            </div>
        </div>);
};

export default Menu;
