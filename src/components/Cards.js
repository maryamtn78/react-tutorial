import React, { Component } from 'react';
import styles from "./Cards.module.css"
import Card from "./Card"
import firstpack from "../images/1.jpg"
import secpack from "../images/2.jpg"
import thirdpack from "../images/3.jpg"
import fourthpack from "../images/4.jpg"

class Cards extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Card image={firstpack} name="first package" price="20 $"/>
                <Card image={secpack} name="second package" price="27 $"/>
                <Card image={thirdpack} name="third package" price="22 $"/>
                <Card image={fourthpack} name="fourth package" price="28 $"/>
            </div>
        );
    }
}

export default Cards;