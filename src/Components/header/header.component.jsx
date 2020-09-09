import React, {useEffect, useState} from "react";
import Styles from "./header.module.scss";
import * as _ from "underscore"
import { Link } from "react-router-dom";
import ContactForm from "../Contact-form/contact-form.component";

let lastScrollTop = window.pageYOffset;
const Header = ({toggleContact}) =>{
    
    const [headerClass, setHeaderClass] = useState(true)
    
    const onScroll = () =>{
        let st = window.pageYOffset;
           
        if (st > lastScrollTop){
            setHeaderClass(false)
           console.log("downScroll")
        }else{
            setHeaderClass(true)
            console.log("upScroll")
        }
        
        if(st <= 0 ){
            lastScrollTop = 0;
            console.log("first statement ran")
        } else{
            lastScrollTop = st;
            console.log("second statement ran")
        } 
       
        console.log("st: "+st + " Last: " + lastScrollTop)
        console.log(headerClass)
    }
    
    useEffect(() => {
        const throttledScroll = _.throttle(onScroll, 300)
        
         window.onscroll = throttledScroll;
         
    }, [])
    
    
    
    return(
        <div className={headerClass ? Styles.header : `${Styles.header} ${Styles.headerHide}`}>
            <div className={Styles.row1}>
                <Link className="text-link-none" to="/">
                    <h2 className={Styles.Logo}>Andrew's Blog <span className={Styles.logoSpan}>.</span></h2>
                </Link>
            </div>
            <div className={Styles.row2}>
                <ul className={Styles.ul}>
                    <Link className="text-link-none" to="/">
                        <li className={Styles.li}>Home</li>
                    </Link>
                    
                    <Link className="text-link-none" to="/">
                        <li className={Styles.li}>Comming soon</li>
                    </Link>
                    
                    <Link className="text-link-none" to="/">
                        <li className={Styles.li}>Comming soon</li>
                    </Link>
                </ul>
            </div>
            
            <div className={Styles.row3}>
                <button onClick={toggleContact} className={Styles.button}>Get in touch</button>
            </div>
            
     
        </div>
    )
}

export default Header;