import React, {useRef, useEffect} from "react";
import Styles from "./Graphic-page.module.scss";
import Rellax from "rellax";


const GraphicsSection = () =>{
    
    let section1 = useRef(null);
    
    useEffect(() => {
       const section1Parallax = new Rellax(section1);
        return () => {
            
        };
    }, []);
    
    
    
    return(
        <div ref={el => section1 = el} className={Styles.section1}>
            
            <div className={Styles.test}></div>
            
        </div>
    );
}

export default GraphicsSection;