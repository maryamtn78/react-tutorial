import React from 'react';
import styles from "./Banner.module.css"
import banner from "../images/banner.jpg"

const Banner = () => {
    return (
        <div className={ styles.bannerContainer}>
            <img src={banner} alt='banner'/>
            <div className={styles.text}>
                <h1>makeup</h1>
                <p>I'm learning <span>React.js</span></p>
            </div>
        </div>
    );
};

export default Banner;