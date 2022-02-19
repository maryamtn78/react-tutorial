import React, { Component } from 'react';
import styles from "./Card.module.css"
import up from "../images/uparr.svg"
import down from "../images/downarr.svg"

class Card extends Component {
    constructor(){
        super();
        this.state ={
         counterNum : 0 
        }
    }
    upHandler =()=>{
        this.setState((prevState)=>({
           counterNum: prevState.counterNum + 1 
        }))
    }
    downHandler =()=>{
        if (this.state.counterNum>0){
            this.setState((prevState)=>({
                counterNum: prevState.counterNum - 1 
             }))
        }
    }


    render() {
        const {image , name , price} = this.props;
        const {counterNum} = this.state;
        return (
            <div className={styles.eachCard}>
                <img src={image} alt='cardimg'/>
                <h2>{name}</h2>
                <p>{price}{ counterNum ? ` * ${counterNum} = ${ counterNum * Number( price.split(" ")[0])} $`: " "}</p>
                <div className={styles.counter}>
                    <img className={!this.state.counterNum && styles.deactive} src={down} alt="downArrow" onClick={this.downHandler} />
                    <span>{counterNum}</span>
                    <img src={up} alt="upArrow" onClick={this.upHandler}/>
                </div>
            </div>
        );
    }
}

export default Card;