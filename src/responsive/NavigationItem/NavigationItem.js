import React, { useState } from "react";
import classes from './NavigationItem.css';
import {Mianbor,Brandres, Shasi, Price} from '../Typeres/Typeres'

const NavigationItem=(props)=>{
    const [type,settype]=useState();

    let ty;
    switch(type){
        case 'mian':
            ty=<Mianbor/>;
            break;
        case 'brand':
            ty=<Brandres/>
            break;
        case 'shasi':
            ty= <Shasi/>;
            break;
        case 'price':
            ty=<Price/>
            break;
        default: ty=<Mianbor/>;
    }

    return(
        <div className={classes.full}>
        <div className={classes.navi}>
            <p className={type==='mian'?classes.paractive:classes.par} onClick={()=>settype('mian')}>میانبر</p>
            <p className={type==='brand'?classes.paractive:classes.par} onClick={()=>settype('brand')}>برند</p>
            <p className={type==='shasi'?classes.paractive:classes.par} onClick={()=>settype('shasi')}>شاسی</p>
            <p className={type==='price'?classes.paractive:classes.par} onClick={()=>settype('price')}>قیمت</p>
        </div>
        <div className={classes.items}>
            {ty}
        </div>
        <div className={classes.borders}>
        ©2021 MGNet Co. Ltd.
        </div>
        </div>
    )
}

export default NavigationItem;