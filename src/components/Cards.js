import React, { Component } from 'react';
import styles from "./Cards.module.css"
import Card from "./Card"
import firstpack from "../images/1.jpg"
import secpack from "../images/2.jpg"
import thirdpack from "../images/3.jpg"
import fourthpack from "../images/4.jpg"

class Cards extends Component {
    constructor(){
        super();
        this.state ={
            packdata : [
                {image:firstpack, name:"first package" ,price:"20 $" , id:1 },
                {image:secpack, name:"second package", price:"27 $" , id:2 },
                {image:thirdpack, name:"third package", price:"22 $" , id:3 },
                {image:fourthpack, name:"fourth package" ,price:"28 $" , id:4 }
            ]
        }
    }
    render() {
        return (
            <div className={styles.container}>
                {this.state.packdata.map(pack => <Card key={pack.id} name={pack.name} image={pack.image} price={pack.price}/>)}
            </div>
        );
    }
}

export default Cards;