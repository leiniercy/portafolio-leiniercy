import { useState, useCallback } from 'react';
import Menu from "@components/Menu";
import PortalPopup from "@components/Menu/PortalPopup";
import '@styles/Menu/iconMenu.css';


const Iconmenu = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const openMenu = useCallback(() => {
        setMenuOpen(true);
    }, []);

    const closeMenu = useCallback(() => {
        setMenuOpen(false);
    }, []);

    return (<>
        <img className="iconmenu" alt="icon-menu" src="/assets/icon/menu.svg" onClick={openMenu} />
        {isMenuOpen && (
            <PortalPopup
                overlayColor="rgba(113, 113, 113, 0.3)"
                placement="Centered"
                onOutsideClick={closeMenu}
            >
                <Menu onClose={closeMenu} />
            </PortalPopup>
        )}</>);
};

export default Iconmenu;
