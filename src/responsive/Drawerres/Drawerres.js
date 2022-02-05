import React from "react";
import classes from './Drawerres.css';


const Drawerres=(props)=>{
        const {setdrw}=props;

    return(
        <div className={classes.drw} onClick={()=>setdrw(false)}>
                <div className={classes.drwnav}>
                    <div className={classes.drwhead}>
                    <img src="https://bama.ir/NormalUser/bama-design/images/ic-close.svg"  className={classes.cool}  />
                        <img className={classes.bama} src="https://bama.ir/NormalUser/bama-design/images/logo-mobile.svg"  />

                    </div>
                    <div className={classes.drwvrod}>
                         <div className={classes.block}>
                         <img className={classes.col} src="https://bama.ir/NormalUser/bama-design/images/ic-menu-login-register.svg" />
                         <div className={classes.dv}>
                         <p className={classes.ptext1}>ورود</p>
                         <p className={classes.ptext1}>ثبت نام</p>
                         </div>
                         </div>
                         <div className={classes.block}>
                         <img className={classes.col} src="https://bama.ir/NormalUser/bama-design/images/ic-menu-advertise-register.svg" />
                         <div className={classes.dv}>
                         <p className={classes.ptext}>ثبت آگهی <span className={classes.sp}> رایگان </span></p>
                         </div>
                         </div>
                         
                    </div>

                    <div className={classes.drwul}>
                    <div className={classes.block}>
                    <img src="https://bama.ir/NormalUser/bama-design/images/ic-menu-car.svg" className={classes.col}/>                         <div className={classes.dv}>
                         <p className={classes.ptext2}> خودرو</p>
                         
                         </div>
                         </div>
                         <div className={classes.block}>
                         <img src="https://bama.ir/NormalUser/bama-design/images/ic-menu-motercycle.svg"   className={classes.col} />    
                                       <div className={classes.dv1}>
                         <p className={classes.ptext2}> موتور سیکلت</p>
                         </div>
                         </div>
                    </div>
                    
                    <div className={classes.drwitems}>
                    <div className={classes.block}>
                    <img src="https://bama.ir/NormalUser/bama-design/images/ic-menu-exhibition-registration.svg" className={classes.col}/>                         <div className={classes.dv}>
                         <p className={classes.ptext}> ثبت نام نمایشگاه</p>
                         </div>
                         </div>
                         <div className={classes.block}>
                         <img src="https://bama.ir/NormalUser/bama-design/images/ic-menu-contact-us.svg" className={classes.col} />    
                                       <div className={classes.dv1}>
                         <p className={classes.ptext}> تماس با ما</p>
                         </div>
                         </div>
                         <div className={classes.block}>
                         <img src="https://bama.ir/NormalUser/bama-design/images/ic-menu-advertising-companies.svg"  className={classes.col}/>                         <div className={classes.dv}>
                         <p className={classes.ptext}> تبلیغات شرکت ها</p>
                         </div>
                         </div>
                         <div className={classes.block}>
                         <img src="https://bama.ir/NormalUser/bama-design/images/ic-menu-site-rules.svg"  className={classes.col} />    
                                       <div className={classes.dv1}>
                         <p className={classes.ptext}> قوانین سایت</p>
                         </div>
                         </div>
                         <div className={classes.block}>
                         <img src="https://bama.ir/NormalUser/bama-design/images/ic-menu-career-opportunities.svg" className={classes.col} />    
                                       <div className={classes.dv1}>
                         <p className={classes.ptext}> فرصت های شغلی</p>
                         </div>
                         </div>
                         <div className={classes.block}>
                         <img src="https://bama.ir/NormalUser/bama-design/images/ic-menu-about-us.svg"  className={classes.col} />    
                                       <div className={classes.dv1}>
                         <p className={classes.ptext}>درباره ما</p>
                         </div>
                         </div>
                    </div>
                    <div className={classes.block2}>
                        <div className={classes.blc}>
                        <img src="https://bama.ir/NormalUser/bama-design/images/ic-linkedin.svg"   className={classes.col2} />    
                    <img src="https://bama.ir/NormalUser/bama-design/images/ic-twitter.svg"   className={classes.col2} />    
                    <img src="https://bama.ir/NormalUser/bama-design/images/ic-instagram.svg"   className={classes.col2} />    
                        </div>
                   <p className={classes.parag}>©2021 MGNet Co. Ltd.</p>

                    </div>
                </div>
        </div>
    )
}

export default Drawerres;