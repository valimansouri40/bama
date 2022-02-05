import React from "react"
import classes from './animation.css'
 const Blue=(props)=>{

    return(
        
               <div className={classes.wid}>

<div className={classes.tx}>
<p className={classes.pwhite}>بررسی خودرو </p>
    <p className={classes.pwhite2}>مطالعه مشخصات فنی انواع خودرو با امکان مقایسه</p>
</div>
 <div className={classes.template}>
     <div className={classes.hide}></div>
<div></div> 
<img src="https://bama.ir/NormalUser/bama-design/images/XTX-IMG-ResearchNormal.png" className={classes.aut} />
    
    </div>
    </div>
    )
} 

export default Blue;