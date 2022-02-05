import React from "react";
import { useState } from "react";
import classes from './SearchBar.css';
import bama from '../../assets/header-search-box-logo.webp'
import close from '../../assets/icons8-close-50.png';
import srch from '../../assets/icons8-search-50.png';
import dt from '../../assets/gh.svg';

const SearchBar=(props)=>{
    const {setbol}=props;
    
    return(
        <div className={classes.searchbar}>
           <img className={classes.close} onClick={()=>setbol(false)} src={close} />
            <div className={classes.searchbox}>
                <img src={bama} className={classes.bamaimg} />
                <div className={classes.div}>
                    <div className={classes.bx}>
                <img className={classes.srch} src={srch} />
                <input type='text' placeholder='جستجو' className={classes.search} />
                
                </div></div>
            </div>
              
            <div className={classes.ag}>
            <p className={classes.txt}>آگهی ها</p>
             <img src={dt} className={classes.im} />
                 
               </div>
            <div className={classes.box}>
            <div className={classes.col}></div>
            <div className={classes.col}></div>
            <div className={classes.col2}></div>
            </div>
        </div>
    )
}

export default SearchBar;