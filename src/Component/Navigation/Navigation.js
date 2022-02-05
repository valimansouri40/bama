import React  from "react";
import { NavLink } from "react-router-dom";
import classes from './Navigation.css';

const Navigation=(props)=>{

    return(
        <div className={classes.nav}>
            
        <ul className={classes.ul}>
            <li className={classes.li}><a className={classes.a} href="#">موتور سیکلت</a>
            <ul className={classes.ul2}>
            <li className={classes.li2}><a className={classes.a2} href="#">ثبت نام نمایشگاه</a></li>
            <li className={classes.li2}><a  className={classes.a2} href="#">تماس با ما</a></li>
            <li className={classes.li2}><a  className={classes.a2} href="#">تبلیغات شرکت ها</a></li>
            <li className={classes.li2}><a  className={classes.a2} href="#">قوانین سایت</a></li>
            <li className={classes.li2}><a  className={classes.a2} href="#">قوانین سایت</a></li>
            <li className={classes.li2}><a  className={classes.a2} href="#">فرصت های شغلی</a></li>
            </ul>
            </li>
        </ul>
        <ul className={classes.ul}>
            <li className={classes.li}><a className={classes.a} href="#">موتور سیکلت</a>
            <ul className={classes.ul2}>
            <li className={classes.li2}><a className={classes.a2} href="#">خرید موتور سیکلت</a></li>
            <li className={classes.li2}><a  className={classes.a2} href="#">ثبت آگهی موتور سیکلت 
            <span className={classes.span}> رایگان </span></a></li>
            <li className={classes.li2}><a  className={classes.a2} href="#">اخبار موتور سیکلت</a></li>
            <li className={classes.li2}><a  className={classes.a2} href="#">گوش به زنگ موتور سیکلت</a></li>
            </ul>
            </li>
        </ul>
        <ul className={classes.ul}>
            <li className={classes.li}><a className={classes.a} href="#">خودرو</a>
            <ul className={classes.ul2}>
            <li className={classes.li2}><a className={classes.a2} href="#">خرید خودرو</a></li>
            <li className={classes.li2}><a  className={classes.a2} href="#">ثبت آگهی خودرو <span className={classes.span}> رایگان </span></a></li>
            <li className={classes.li2}><a  className={classes.a2} href="#">قیمت روز خودرو</a></li>
            <li className={classes.li2}><a className={classes.a2} href="#">اخبار خودرو</a></li>
            <li className={classes.li2}><a  className={classes.a2} href="#">مشخصات فنی خودرو</a></li>
            <li className={classes.li2}><a  className={classes.a2} href="#">گوش به زنگ خودرو</a></li>
            <li className={classes.li2}><a  className={classes.a2} href="#">کمپانی های خودرو</a></li>
            </ul>
            </li>
        </ul>
        </div>
    )
}

export default Navigation;