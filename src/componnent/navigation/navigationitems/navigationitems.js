import React from "react";
import classes from './navigationitems.css';
import Navigationitem from '../navigationitem/navigationitem';
const Navigationitems =(props)=>{

    return(
        <div className={classes.ul}>
            <Navigationitem link="/">Home</Navigationitem>
            <Navigationitem link="/match">match</Navigationitem>
        </div>
    )
}
export default Navigationitems;