import React from "react";
import css from "./Portfolio.module.scss";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren } from "../../utils/motion";
import{ AiFillGithub} from 'react-icons/ai'

import { TiWorld } from 'react-icons/ti'
export default function Portfolio() {
  const handleImageClick = (url) => {
    window.open(url, "_blank");

  };
  
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="portfolio"></a>
      <div className={`innerWidth flexCenter ${css.container}`}>
        <div className={`flexCenter ${css.headding}`}>
          <div>
            <span className="primaryText">Mis Proyectos Anteriores</span>
            <p style={{ marginTop: "10px" }}>Soluciones Informaticas</p>
          </div>
          <a href="https://github.com/Mariela02?tab=repositories" target="_blank">
            <span className="secondaryText">Más Información... </span>
          </a>
        </div>
        {/* Image */}
        <div className={`flexCenter ${css.showCase}`}>
          <div className={`${css.cardProject}`}>
            <div className={`${css.proj_imgbx}`}>
              <motion.img
                variants={fadeIn("up", "tween", 0.4, 0.6)}
                src="./uñas.png"
                alt="project"
              />
              <div className={`${css.proj_txtx}`}>
                <h4>APP SALÓN DE BELLEZA</h4>
                <span>Propio</span>
                 
              </div>
            </div>
          </div>
          <div className={`${css.cardProject}`}>
            <div className={`${css.proj_imgbx}`}>
            <motion.img
            variants={fadeIn("up", "tween", 0.5, 0.6)}
            onClick={() =>
              handleImageClick("https://dev-003-burger-queen-api-client-o7uo5f1jy-ysisc.vercel.app/login/")
            }
            src="./Cursos.png"
            alt="project"
          />
              <div className={`${css.proj_txtx}`}>
                <h4>APP CURSOS UTA</h4>
                <span>Colaboración</span>
                 
              </div>
            </div>
          </div>

          <div className={`${css.cardProject}`}>
            <div className={`${css.proj_imgbx}`}>
            <motion.img
            variants={fadeIn("up", "tween", 0.7, 0.6)}
            onClick={() =>
              handleImageClick("https://foodgram-social-network.netlify.app/")
            }
            src="./Facturacion.png"
            alt="foodgram project"
          />
        <div className={`${css.proj_txtx}`}>
                <h4>FACTURACIÓN</h4>
                <span>Colaboración</span>
                 
              </div>
            </div>
          </div>
         

          <div className={`${css.cardProject}`}>
            <div className={`${css.proj_imgbx}`}>
            <motion.img
            variants={fadeIn("up", "tween", 0.9, 0.6)}
            onClick={() =>
              handleImageClick("https://www.npmjs.com/package/ysisc-md-links")
            }
            src="./Gestin.png"
            alt="md links project"
          />
              <div className={`${css.proj_txtx}`}>
                <h4>GESTIN</h4>
                <span>Colaboración</span>
                 
              </div>
            </div>
          </div>
    
          <div className={`${css.cardProject}`}>
            <div className={`${css.proj_imgbx}`}>
            <motion.img
            variants={fadeIn("up", "tween", 0.9, 0.6)}
            onClick={() =>
              handleImageClick("https://dev-003-notes.vercel.app/")
            }
            src="./Reposicion.png"
            alt="Lab note project"
          />
              <div className={`${css.proj_txtx}`}>
                <h4>REPOSICIÓN DE CREDENCIALES</h4>
                <span>Propio</span>
                
              </div>
            </div>
          </div>
     

          <div className={`${css.cardProject}`}>
            <div className={`${css.proj_imgbx}`}>
            <motion.img
            variants={fadeIn("up", "tween", 0.9, 0.6)}
            onClick={() =>
              handleImageClick("https://calculadora-redux-ysisc.vercel.app/")
            }
            src="./Taxi.png"
            alt="calculator project"
          />
              <div className={`${css.proj_txtx}`}>
                <h4>TAXI AMIGO</h4>
                <span>Colaboración</span>
                 
              </div>
            </div>
          </div>
        </div>

        
      
      </div>
    </motion.section>
  );
}
