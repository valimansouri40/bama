import React, { useState } from "react";
import classes from './Layout.css';
import close from '../../assets/ic-close.svg';
import { Mianbar,Brand,Shasi, Price,Animation } from "../types/types";

const Lauoyt=(props)=>{
        const [type,settype]=useState();
        let tag;
        switch(type){
            case 'mian':
                tag=<Mianbar/>;
                break;
            case 'brand':
                tag= <Brand/>
                break;
            case 'shasi':
                tag=<Shasi/>
                break;
            case 'price':
                tag=<Price/>;
                break;
            default : tag=<Animation/>
        }
        
    return(
        <div className={classes.layout}>
            <div className={classes.lay}>
                    <div className={classes.type}>
                        {tag}
                    </div>
                    <div className={classes.types}>
                        <div className={classes.item} > 
                        <div>{type === 'mian'?<img onClick={()=>settype('')} src={close}  className={classes.imgitem}/>:null}</div>
                        <p onClick={()=>settype('mian')} className={type === 'mian'?classes.ip:classes.it}>میانبر</p>
                        </div>
                        <div className={classes.item} >
                        <div>{type === 'brand'?<img onClick={()=>settype('')} src={close}  className={classes.imgitem}/>:null}</div>
                            <p onClick={()=>settype('brand')} className={type === 'brand'?classes.ip:classes.it}>برند</p></div>
                        <div className={classes.item} >
                        <div>{type === 'shasi'?<img onClick={()=>settype('')} src={close}  className={classes.imgitem}/>:null}</div>
                            <p onClick={()=>settype('shasi')} className={type === 'shasi'?classes.ip:classes.it}>شاسی</p></div>
                        <div className={classes.item} >
                        <div>{type === 'price'?<img onClick={()=>settype('')} src={close}  className={classes.imgitem}/>:null}</div>
                            <p onClick={()=>settype('price')} className={type === 'price'?classes.ip:classes.it}>قیمت</p></div>
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
    )
}

export default Lauoyt;