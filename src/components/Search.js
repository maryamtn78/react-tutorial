import React, { Component } from 'react';
import styles from "./Search.module.css"

class Search extends Component {
    render() {
        return (
            <div className={styles.container}>
                <p>search the products</p>
                <input placeholder='search ...'/>
            </div>
        );
    }
}

export default Search;