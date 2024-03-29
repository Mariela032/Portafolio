import React from "react";
import { aboutMe, projectExperience, } from '../../utils/data'
import css from './About.module.scss'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer, textVariant } from '../../utils/motion';

const About = () => {

    return (
        <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={css.wrapper}>
            <a className="anchor" id='about'></a>
            <div
                className={`paddings yPaddings flexCenter innerWidth ${css.container}`}
            >
                <div className={css.leftSide}>
                    {projectExperience.map((exp, i) => {
                        return (
                            <motion.div
                                variants={fadeIn("right", "tween", (i + 1) * 0.2, 1)}
                                className={css.exp} key={i}>
                                <div className="flexCenter" style={{ background: exp.bg }}>
                                    <exp.icon size={25} color='white' />
                                </div>

                                <div>
                                    <span> {exp.name} </span>
                                    <span className="secondaryText"> {exp.projects} Proyectos</span>
                                </div>
                            </motion.div>
                        );
                    })}

                </div>
                <motion.div variants={textVariant(0.5)} className={css.rightSide}>
                    <span className="primaryText">  Acerca de mí </span>
                    {
                        aboutMe.map((paragraph, i) => {
                            return <span className="secondaryText" key={i}>{paragraph}</span>
                        })
                    }
                    <div className={`flexCenter ${css.stats}`}>
                        <div className={`flexCenter ${css.stat}`}>
                            <span className="primaryText">4+</span>
                            <span className="secondaryText">Proyectos  Completos</span>
                        </div>
                        <div className={`flexCenter ${css.stat}`}>
                            <span className="primaryText">3+</span>
                            <span className="secondaryText">Colaboraciones </span>
                        </div>

                    </div>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default About