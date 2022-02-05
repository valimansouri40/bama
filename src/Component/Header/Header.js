import React from "react";
import Navigation from "../Navigation/Navigation";
import classes from './Header.css';
import logo from '../../assets/logo.svg';
import srch from '../../assets/icons8-search-50.png';
const Header=(props)=>{
    const {bolean,setbol}=props;
    return(
        <div className={classes.head}>
            <div className={classes.header}>
                <img src={logo} className={classes.logo} />
                <div className={classes.auth}> 
                        <p className={classes.agahi}> ثبت آگهی  <span style={{color:'red',fontSize:'.8rem'}}>رایگان</span></p>
                        <p className={classes.vrod}>ورود</p>
                </div>
                <div className={classes.anim}>
                <div className={classes.searchbx} onClick={()=>setbol(true)}>
                    <img src={srch} className={classes.tool} /> <p className={classes.p}>جستجو</p>
                    </div>
                    </div>
                <Navigation/>
            </div>
        </div>
    )
}

export default Header;