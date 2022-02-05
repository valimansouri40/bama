import React from 'react';
import classes from './Home.css';
import ball from '../assets/ball.png';
import Navigationitems from '../componnent/navigation/navigationitems/navigationitems'
const Home =(props)=>{

    return(
        <div className={classes.Home}>
            <h1 className={classes.h1}>Footbal Is Life</h1>
            <div className={classes.navigation}><Navigationitems/></div>
            <img src={ball} className={classes.ball}/>
        </div>
    )
}
export default Home;