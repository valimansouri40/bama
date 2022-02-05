import React from "react";
import classes from './Headerres.css';
import srch from '../../assets/icons8-search-50.png'

const Headerres=(props)=>{
        
        const {setdrw,setbol}=props;
    return(
        <div className={classes.headres}>
            <div className={classes.head1}>
                <div className={classes.box1}>
                <button className={classes.button1} onClick={()=>setdrw(true)}>
                <span className={classes.s3}></span>
                <span className={classes.s3}></span>
                 <span className={classes.s3}></span>
                </button>
                <button className={classes.button2}>ثبت آگهی 
                <span className={classes.spanag}> رایگان </span></button>
                </div>
                <img className={classes.bama} src="https://bama.ir/NormalUser/bama-design/images/logo-mobile.svg"  />
                
            </div>
            <div className={classes.searchbx} onClick={()=>setbol(true)}>
                    <img src={srch} className={classes.tool} /> <p className={classes.p}>جستجو</p>
                    </div>
                <div className={classes.number}>
                <p className={classes.p1}>آگهی خودرو </p>
                    <p className={classes.p2}>32,448</p>
                </div>
        </div>
    )
}

export default Headerres;