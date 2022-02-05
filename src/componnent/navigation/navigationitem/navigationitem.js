import React from 'react';
import classes from './navigationitem.css';
import {NavLink} from 'react-router-dom';
const navigationitem =(props)=>{

    return(
        <div className={classes.li}><NavLink activeClassName={classes.active} to={props.link}>{props.children}</NavLink></div>
    )
}
export default navigationitem;