
import styles from "./Contact.module.css"
import Button from "../Button/Button"
import { MdMessage } from "react-icons/md"
import {FaPhoneAlt} from "react-icons/fa"
import { useState } from "react"
const ContactForm = ()=>{
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [text,setText]=useState("")


const onSubmit = (event)=>{
    event.preventDefault();
    setName(event.target[0].value)
    setEmail(event.target[1].value)
    setText(event.target[2].value)
    console.log(event.target[0])
}    
    
    
    
    
    
    
    return( 
    <section className={styles.container}>
     <div className={styles.contact_form}>
        <div className={styles.top_btn}>
        <Button text="VIA SUPPORT CHART"
        icon={<MdMessage fontSize="24px"/>} />
        <Button text="VIA CALL"
        icon={<FaPhoneAlt  fontSize="24px"/>} />

        </div>
        <Button text="VIA EMAIL FORM"
        icon={<FaPhoneAlt  fontSize="24px" />}
        isOutline={true} />
        <form onSubmit = {onSubmit}>
            <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
            </div>
            <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
            </div>
            <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows={8}/>
            </div>
            <div style = {{
                display:'flex',
                justifyContent:"end"
            }}>
            <Button text= "SUBMIT BUTTON" />
            </div>
            <div>
                {name + " " + email +" " + text}
            </div>
        </form>
     </div>
     <div className={styles.contact_image}>
        <img src="/images/Service 24_7-pana 1.svg" alt="" />
     </div>
    </section>
    )
}

export default ContactForm