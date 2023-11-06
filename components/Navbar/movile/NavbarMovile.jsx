"use client"

//Styles primereact
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { Sidebar } from 'primereact/sidebar';

import { useState, useCallback } from 'react';
import '@styles/Navbar/movile/Navbarmovile.css';
import Menu from "@components/Navbar/movile/Menu";

const Navbarmovile = () => {

    const [visibleBottom, setVisibleBottom] = useState(false);

    const openMenu = () => {
        setVisibleBottom(!visibleBottom);
    }

    const customHeader = (
        <div className={'navbar-sidebar-header'}>
            <div className="navbar-sidebar-header-name">MENU</div>
            <div className="navbar-sidebar-header-name" onClick={openMenu}>X</div>
        </div>
    );

    return (<>
        <div className="navbar-container-movile">
            <div className="navbar-movile">
                <div className="navbar-logo">LOGO</div>
                <img className="navbar-icon-menu" alt="icon-menu" src="/assets/icon/menu.svg" onClick={openMenu} />
            </div>
        </div>
        <Sidebar className={'navbar-sidebar'}
                 visible={visibleBottom}
                 header={customHeader}
                 dismissable={true}
                 showCloseIcon={false}
                 position="bottom"
                 fullScreen
                 onHide={() => setVisibleBottom(false)}>
         <Menu openMenu={openMenu}/>
        </Sidebar>
        </>);

};

export default Navbarmovile;
