import React, { Component } from 'react';
import styles from "./Search.module.css"

class Search extends Component {

    constructor(){
        super();
        this.state ={
            value : ""
        }
    }
    changeHandler =(event)=>{
        this.setState({
            value : event.target.value,
        })
    }

    render() {
        return (
            <div className={styles.container}>
                <p>search the products</p>
                <div>
                <input type="text" value={this.state.value } onChange={this.changeHandler} placeholder='search ...'/>
                <br/>
                <br/>
                <span>{this.state.value}</span>
                </div>
            </div>
        );
    }
}

export default Search;