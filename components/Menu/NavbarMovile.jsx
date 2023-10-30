"use client"
import { useState, useCallback } from 'react';
import Menu from "@components/Menu";
import PortalPopup from "@components/Menu/PortalPopup";
import '@styles/Menu/NavbarMovile.css';


const NavbarMovile = () => {

    const [isMenuOpen, setMenuOpen] = useState(false);
    const openMenu = useCallback(() => {
        setMenuOpen(true);
    }, []);

    const closeMenu = useCallback(() => {
        setMenuOpen(false);
    }, []);

    return (<>
        <div className="navbar-movile">
            <div className="logo">LOGO</div>
            <img className="iconmenu" alt="icon-menu" src="/assets/icon/menu.svg" onClick={openMenu} />
        </div>
        {isMenuOpen && (
            <PortalPopup
                overlayColor="rgba(113, 113, 113, 0.3)"
                placement="Centered"
                onOutsideClick={closeMenu}
            >
                <Menu onClose={closeMenu} />
            </PortalPopup>
        )}
    </>);
};

export default NavbarMovile;
