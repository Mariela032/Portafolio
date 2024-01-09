import { useRef } from 'react'
import css from './ContactMe.module.scss'
import { motion } from 'framer-motion'
import {  staggerChildren, textVariant } from '../../utils/motion'
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'
import { BiLocationPlus } from 'react-icons/bi'
import emailjs from '@emailjs/browser';

export default function ContacMe() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        // service_lho7c0d
        emailjs.sendForm('service_mwwjqbh', 'template_uqlwxqf', form.current, '_9r1EihJYsdwWr3jJ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (

        <motion.section
            variants={staggerChildren}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.25 }}
            className={`paddings ${css.wrapper} `}>
                    <a  className="anchor" id='contactme'></a>
            <div className={`flexCenter ${css.container}`}>

                <h1 className='flexCenter primaryText'>Contactame</h1>
                <p className='secondary flexCenter'>Ponte en Contacto</p>
                <div className={css.informationdiv}>


                    <form
                        ref={form}
                        onSubmit={sendEmail} >
                        <input type="text" placeholder="Nombre y Apellido" name='user_name' required />
                        <input type="email" name='user_email' placeholder="Correo Electrónico" required />
                        <textarea placeholder="Información" name='message' rows="10" required />
                        <button type="submit" className='btn-primary'  > Enviar Mensaje</button>
                    </form>

                    <motion.div 
                    variants={textVariant(0.5)}
                    className={css.rigthSideElement}>
                        <div className={css.info}>
                            <div> <AiOutlineMail /> </div>
                            <p>marielaamanta@gmail.com</p>
                        </div>
                        <div className={css.info}>
                            <div> <AiOutlineWhatsApp /> </div>
                            <p>0958716902</p>
                        </div>
                        <div className={css.info}>
                            <div> <BiLocationPlus /> </div>
                            <p>Ambato - Ecuador</p>
                        </div>
                    </motion.div>
                </div>

            </div>

        </motion.section>
    )
}
