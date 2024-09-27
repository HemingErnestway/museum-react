import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "../styles/Navbar.module.css";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className={styles.navbar}>
            <div className={styles.navWrapper}>
                <Link to="/">
                    <div className={styles.logo} onClick={closeMenu}></div>
                </Link>

                <div className={`${styles.hamburger} ${isOpen && styles.cross}`}
                     onClick={toggleMenu}>
                </div>

                <ul className={`${styles.navLinks} ${isOpen && styles.open}`}>
                    <li><Link to="/" onClick={toggleMenu}>Главная</Link></li>
                    <li><Link to="/exhibits" onClick={toggleMenu}>Выставка</Link></li>
                    <li><Link to="/tour" onClick={toggleMenu}>Экскурсия</Link></li>
                    <li><Link to="/veterans" onClick={toggleMenu}>Научный полк</Link></li>
                    <li><Link to="/documents" onClick={toggleMenu}>Документы</Link></li>
                </ul>
            </div>

            <div className={`${styles.overlay} ${isOpen && styles.tint}`}
                 onClick={toggleMenu}>
            </div>
        </nav>
    );
}

export default Navbar;
