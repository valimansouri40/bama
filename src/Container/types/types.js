import React, { useEffect, useState } from "react";
import classes from './types.css';
import {meshineName,mianbar,shasi,price} from '../../data'
import Yellow from '../anims/yellow';
import Blue from '../anims/blue';
import Red from "../anims/red";
import counter from '../../assets/cnt.png'

export const Mianbar=(props)=>{
        const [num,setnum]=useState(1);
        let slice;
        
        
                if(num === 1){
                    slice= meshineName.slice(0,8);
                }else if(num === 2){
                    slice= meshineName.slice(8,17);
                }else if(num=== 3){
                    slice= meshineName.slice(17,21);

                }
      

        const less=()=>{
            if(num > 1 && num <= 3){
                setnum(e=>e-1)
            }
                
        }
        const add=()=>{
            if(num >= 1 && num <= 2){
                setnum(e=>e+1)
            }
                
        }

        const moves=(e)=>{
            console.log(e)
        }
        console.log(num)


    return(
        <div className={classes.mian} >
            {slice.map(mp=>(
                <React.Fragment>
                        <p className={classes.itemstype}>{mp.type}</p>
                       { mp.names.map((mi)=><a className={classes.items}>{mi.name} <span className={classes.spn}>({mi.number})</span></a>)}
                        </React.Fragment>
            ))}
            <div className={classes.page}>
            <p className={classes.before}onClick={add}>بعدی</p>
                
                <div className={classes.thired}>
                <span className={num === 1?classes.circale:classes.cir} onClick={()=>setnum(1)} ></span>
                <span className={num === 2?classes.circale:classes.cir} onClick={()=>setnum(2)} ></span>
                <span className={num === 3?classes.circale:classes.cir} onClick={()=>setnum(3)} ></span>
                    </div>
                    <p className={classes.after} onClick={less}>قبلی</p>

            </div>
        </div>
    )
}

export const Brand=(props)=>{
    const [num,setnum]=useState(1);
        let slice;
        
        
                if(num === 1){
                    slice= mianbar.slice(0,8);
                }else if(num === 2){
                    slice= mianbar.slice(8,16);
                }else if(num=== 3){
                    slice= mianbar.slice(16,23);

                }
      

        const less=()=>{
            if(num > 1 && num <= 3){
                setnum(e=>e-1)
            }
                
        }
        const add=()=>{
            if(num >= 1 && num <= 2){
                setnum(e=>e+1)
            }
                
        }
        console.log(num)
//<img src="https://bama.ir/NormalUser/bama-design/images/ic-homepage-tab-01-02.svg" alt="" class="svg" width="79" height="40"></img>
   
return(
        <div className={classes.brand}>
        {slice.map((mp,index)=>(
            <div className={classes.branding}>
                <p className={classes.work}>{mp.txt}</p>
                <img className={classes.imgmianbar}
                 src={`https://bama.ir/NormalUser/bama-design/images/ic-homepage-tab-0${num}-0${index+1}.svg`} />
            </div>
        ))}
        <div className={classes.page}>
            <p className={classes.before}onClick={add}>بعدی</p>
                
                <div className={classes.thired}>
                <span className={num === 1?classes.circale:classes.cir} onClick={()=>setnum(1)} ></span>
                <span className={num === 2?classes.circale:classes.cir} onClick={()=>setnum(2)} ></span>
                <span className={num === 3?classes.circale:classes.cir} onClick={()=>setnum(3)} ></span>
                    </div>
                    <p className={classes.after} onClick={less}>قبلی</p>

            </div>  
        </div>
    )}


    export const Shasi=(props)=>{
       
   
    return(
            <div className={classes.brand}>
            {shasi.map((mp,index)=>(
                <div className={classes.branding}>
                    <p className={classes.work}>{mp.shasi}</p>
                    <img className={classes.imgmianbar}
                     src={`https://bama.ir/NormalUser/bama-design/images/ic-homepage-tab-03-0${mp.logo}.svg`} />
                </div>
            ))}
            </div>
        )}


    

    export const Price=(props)=>{

        return(
            <div className={classes.brands}>
                {price.map(mp=>(
                    <a href='#' className={classes.items}>{mp.price}</a>
                ))}
            </div>
            
        )
    }

    

export const Animation=(props)=>{

    return(
        <div className={classes.brandss}>
            <Yellow/>
            <Blue/>
            <Red/>
            <img src={counter} className={classes.count}/>
            </div>
    )
} 
   