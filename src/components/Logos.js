import React from 'react';
import styles from "./Logos.module.css"
import huda from "../images/huda.png"
import fenty from "../images/fenty.png"
import tacha from "../images/tacha.png"




const Logos = () => {
    return (
        <div className={styles.container}>
            <h1>collaboration</h1>
            <div>
                <img src={huda} alt='brandlogo'/>
                <img src={fenty} alt='brandlogo'/>
                <img src={tacha} alt='brandlogo'/>

            </div>
        </div>
    );
};

export default Logos;