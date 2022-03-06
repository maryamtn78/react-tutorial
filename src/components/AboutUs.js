import React from 'react';
import styles from './AboutUs.module.css'
import {useNavigate} from 'react-router-dom'
import { Link , Outlet} from 'react-router-dom';

const AboutUs = () => {
    const navigate = useNavigate();


    const clickHandler =()=>{
        navigate(-1)
    }

    return (
        <div className={styles.container}>
            <h1>about us</h1><br/>
            <ul>
                <li><Link to="Shirazcenter">Shiraz center</Link></li>
                <li><Link to="TehranCenter">Tehran Center</Link></li>
            </ul>
            <br/>
            <button onClick={clickHandler}>redirect</button>
            <br/>
            <br/>
            <Outlet/>



        </div>
    );
};

export default AboutUs;