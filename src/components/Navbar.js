import React from 'react';
import styles from "./Navbar.module.css"
import logo from "../images/logo.jfif"
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.listContainer}>
                <ul className={styles.list}>
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/products">products</Link></li>
                    <li><Link to="/">about us</Link></li>
                    <li><Link to="/">contact</Link></li>
                </ul>
            </div>

            <div className={styles.logo}>
                <img className={styles.logo} src={logo}  alt='logo' />
            </div>
        </header>
    );
};

export default Navbar;