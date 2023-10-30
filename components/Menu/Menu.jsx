

import styles from '@styles/Menu/menu.css';

const Menu = () => {
    return (
        <div className={styles.menu}>
            <div className={styles.menu1}>
                <b className={styles.menu2}>HOME</b>
            </div>
            <div className={styles.menu1}>
                <b className={styles.menu2}>ABOUT</b>
            </div>
            <div className={styles.menu1}>
                <b className={styles.menu2}>SERVICE</b>
            </div>
            <div className={styles.menu1}>
                <b className={styles.menu2}>SKILLS</b>
            </div>
        </div>);
};

export default Menu;
