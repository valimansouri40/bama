import React, { useState } from "react";

import classes from './Typeres.css';
import {shasi,meshineName,mianbar,price} from '../../data';

export const Mianbor=(props)=>{

    return(
        <div className={classes.mion}>
            
            {meshineName.map(mp=>(
                <div className={classes.box}>
                    <p className={classes.pal}>{mp.type}</p>
                    <div className={classes.div}>
                    {mp.names.map(mi=>
                        <p className={classes.pname}>{mi.name} <span>({mi.number})</span></p>)}
                        </div>
                </div>
            ))}
        </div>
    )
}

export const Brandres=(props)=>{
        const [full,some]=useState(false);

        let slice;
        if(!full){
            slice= mianbar.slice(0,8)
        }else{
            slice=mianbar
        }
    return(
        <div className={classes.mion}>
            <div className={classes.brande}>
                {slice.map((mp)=>(
                   <div title={mp.txt} className={classes.branding}>
                   
                   <img className={classes.imgmianbar}
                   
                    src={`https://bama.ir/NormalUser/bama-design/images/ic-homepage-tab-0${mp.id}-0${mp.logo}.svg`} />
                    <p className={classes.ptxt}>{mp.txt}</p>
               </div>
                ))}
                
                    {!full?<p className={classes.padd} onClick={()=>some(true)}>نمایش همه</p>:null}
                
            </div>
        </div>
    )
}

export const Shasi=(props)=>{
       
    //<img src="https://bama.ir/NormalUser/bama-design/images/ic-homepage-tab-01-02.svg" alt="" class="svg" width="79" height="40"></img>
   // <img src="https://bama.ir/NormalUser/bama-design/images/ic-homepage-tab-03-03.svg" alt="" class="svg" width="79" height="40">
    return(
            <div className={classes.brandes}>
            {shasi.map((mp)=>(
                <div className={classes.branding}>
                    <img className={classes.imgmianbar}
                     src={`https://bama.ir/NormalUser/bama-design/images/ic-homepage-tab-03-0${mp.logo}.svg`} />
                     <p className={classes.work}>{mp.shasi}</p>
                </div>
            ))}
            </div>
        )}

        
    export const Price=(props)=>{

        return(
            <div className={classes.brandess}>
                {price.map(mp=>(
                    <a href='#' className={classes.items}>{mp.price}</a>
                ))}
            </div>
        )
    }