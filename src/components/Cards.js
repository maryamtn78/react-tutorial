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
            <div className={styles.containercard}>
                <Card image={firstpack} name="first package" price="20$"/>
                <Card image={secpack} name="first package" price="20$"/>
                <Card image={thirdpack} name="first package" price="20$"/>
                <Card image={fourthpack} name="first package" price="20$"/>
            </div>
        );
    }
}

export default Cards;