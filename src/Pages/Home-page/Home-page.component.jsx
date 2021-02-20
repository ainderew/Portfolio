import React, {useRef, useEffect, useState} from "react";
import Styles from "./Home-page.module.scss";
import Rellax from "rellax";
import { Link } from "react-router-dom";

import ContactForm from "../../Components/Contact-form/contact-form.component";

//IMAGES
import BackgroundOverlay from "../../Assets/background-overlaly.svg";
import BackgroundOverlay2 from "../../Assets/background-overlaly2.svg";
import made4Learing from "../../Assets/Top Blogs/made4Learing.png";
import helpingHand from "../../Assets/Top Blogs/helpinghand.png";
import Coffee from "../../Assets/Top Blogs/coffee.png";
import Desk from "../../Assets/Top Blogs/desk.png";

import human from "../../Assets/e.png";

import aksel from "../../Assets/1.jpg";

import healthyFoodies from "../../Assets/2.png";
import Yflights from "../../Assets/3.png";
import vuse from "../../Assets/4.png";
import codeage from "../../Assets/5.png";
import myGoals from "../../Assets/6.svg";
const Homepage = ({contactState, toggleContact}) =>{
    
    let section2 = useRef(null)
    
    
    useEffect(() => {
        const section2Parallax = new Rellax(section2)
    }, []);
    
    
   
    return(
        <div className="page">
            {contactState? <ContactForm toggleContact={toggleContact} />: null}
            
            <section className={Styles.section1} ref={el=> section2 = el}  data-rellax-speed="-9">
                <img src={human} alt="" className={Styles.human} />
                <img src={BackgroundOverlay} alt="" className={Styles.overlay} />
                
                <div className={Styles.textContainer}>
                    <p className={Styles.subHeader}>A PEEK INSIDE A DEVELOPER'S</p>
                    <h2 className={Styles.mainHeader}>PORTFOLIO</h2>
                    <p className={Styles.nameHeader}>Andrew Piñon</p>
                </div>
            </section>
            
            <section className={`center ${Styles.section2}`}  >
                <img src={BackgroundOverlay2} alt="" className={Styles.overlay2} />
                <div className={Styles.Section2HeaderContainer}>
                    <h3 className={Styles.section2Header}>Top Picks</h3>
                    <p className={Styles.section2SubHeader}>The latest and best websites that I personally chose</p>
                </div>
                
                <div className={`inner ${Styles.section2Inner}`}>
                    {/* BLOG */}
                    <div className={`${Styles.container} ${Styles.gridLong} ${Styles.article1}`}>
                        <span className={Styles.blogLabel}>Website</span>
                        <h2 className={Styles.blogTitle}>Vuse Vape </h2>
                        {/* <img src={made4Learing} alt="made 4 learning" className={Styles.blog1Img}/> */}
                        <img src={vuse} alt="arne aksel" className={Styles.blog1Img}/>
                        <a target="_blank" href="https://vuse.co.nz/">
                            <button className={Styles.readBlogBtn}>View Project</button>
                        </a>
                    </div>
                    
                    {/* BLOG */}
                    <div className={`${Styles.container} ${Styles.gridTall} ${Styles.article2}`}>
                        <span className={Styles.blogLabel}>Website</span>
                        <img src={healthyFoodies} alt="healthy Foodies" className={Styles.blog2Img}/>
                        <h2 className={Styles.blogTitleContainer2}>Healthy Foodies!</h2>
                        <a target="_blank" href="https://healthyfoodies.de/">
                            <button className={Styles.readBlogBtn}>View Project</button>
                        </a>
                    </div>
                    
                    {/* BLOG */}
                    <div className={`${Styles.container} ${Styles.gridTall} ${Styles.article3}`}>
                        <span className={Styles.blogLabel}>Website</span>
                        <img src={Yflights} alt="desk" className={Styles.blog3Img}/>
                        <h2 className={Styles.blogTitleContainer3}>Y-Flights</h2>
                        
                    </div>
                    
                    {/* BLOG */}
                    <div className={`${Styles.container} ${Styles.gridTall} ${Styles.article4}`}>
                        <span className={Styles.blogLabel}>Website</span>
                        <img src={codeage} alt="code age" className={Styles.blog4Img}/>
                        <h2 className={Styles.blogTitleContainer3}>Code Age</h2>
                        <a target="_blank" href="https://www.codeage.com/">
                            <button className={Styles.readBlogBtn}>View Project</button>
                        </a>
                    </div>
                    
                    {/* BLOG */}
                    <div className={`${Styles.container} ${Styles.gridTall} ${Styles.article5}`}>
                        <span className={Styles.blogLabel}>Website</span>
                        <img src={myGoals} alt="code age" className={Styles.blog5Img}/>
                        <h2 className={Styles.blogTitleContainer3}>My Goals Co</h2>
                        <a target="_blank" href="https://mygoals.co/">
                            <button className={Styles.readBlogBtn}>View Project</button>
                        </a>
                    </div>
                    
                    {/* BLOG */}
                    <div className={`${Styles.container} ${Styles.gridLong} ${Styles.article6}`}>
                        <span className={Styles.blogLabel}>Personal</span>
                        <img src={aksel} alt="Giving my highschool a helping hand" className={Styles.blog6Img}/>
                        <h2 className={Styles.blogTitle}>ARNE AKSEL</h2>
                        <a target="_blank" href="https://arneaksel.com/">
                            <button className={Styles.readBlogBtn}>View Project</button>
                        </a>
                    </div>
                </div>
            </section>
            
            {/* <section className={Styles.section1}></section> */}
        </div>
    )
}

export default Homepage;