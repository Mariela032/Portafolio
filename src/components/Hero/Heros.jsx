import React from "react";
import css from './Heros.module.scss'
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from '../../utils/motion'
// import { Typical} from 'react-typical'
import { ReactTypical } from '@deadcoder0904/react-typical'

import { AiFillGithub, AiFillLinkedin, } from 'react-icons/ai'
import { SiCodewars } from 'react-icons/si'
const Heros = () => {
    return (
        <section className={`paddings ${css.wrapper}`} >
            <div

                className={`innerWidth flexCenter ${css.container}`}>
                <div className={css.leftElement}>
                    <div className={css.profile_details_nameleftElement}>


                       
                        <div className={css.profile_details_name}>
                            <span className={`primaryText`}>
                                {" "}
                                Hola, yo soy <span className={css.highted_text}> Mariela Amanta </span>
                            </span>
                        </div>
                        <div className={css.profile_detail_role}>
                            <span className="primaryText">
                                {" "}
                                <h1>

                                    <ReactTypical
                                        steps={[
                                            
                                            'Desarrolladora', 1500,
                                            
                                        ]}
                                        loop={1}
                                        wrapper="p"
                                    />

                                </h1>
                                <span className={css.profile_role_tagline}>
                                    Soy Ingeniera de Software
                                    <br />
                                    y me encanta el desarrollo web
                                </span>
                            </span>
                        </div>
                       
                        <div className={css.profile_options}>
                            
                            <a href="HV_Mary.pdf" download="Hoja_Vida_Mariela HV_Mary.pdf">
                                <button  className={css.btn}>Hoja de vida</button>
                            </a>

                        </div>
                        <div className={`${css.icon}`}>
                            <a href="https://github.com/Mariela02"><AiFillGithub size={30} /> </a>
                            <a href="https://www.linkedin.com/in/mariela-amanta/"><AiFillLinkedin size={30} /> </a>
                            

                        </div>
                    </div>
                </div>

                <div className={css.rigthElement}>
               <div className={css.profile_picture}>
               <div className={css.profile_picture_background}>
               </div>
               </div>
                </div>

            </div>

        </section>
    )
}
export default Heros