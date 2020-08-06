import React, {useState} from 'react';
import useSignUpForm from '../../CustomHooks';
import './Contact.modules.css';

const Contact = () => {


    const signup = () => {
        alert(`Thanks ${inputs.name} for your Message! We will contact you via ${inputs.email} asap!
        Your message: ${inputs.message}`)
    };
    const {inputs, handleInputChange, handleSubmit} = useSignUpForm(signup);

    return(
        <div className='Container'>
            <h1>Contact us!</h1>
            <p >We are always happy to hear from you! If there are any questions (or just some kind fan mails) we would love to hear them (and hopefully response asap).
            </p>
            <form  onSubmit={handleSubmit} action='contactform.php' method='post'>
                <input className="Inputfield" type='name' placeholder="Name..." name='name' onChange={handleInputChange} value={inputs.name}/>
                <input className="Inputfield" type='email' placeholder='E-Mail...' name='email' onChange={handleInputChange} value={inputs.email}/>
                <textarea rows="10" cols="10" placeholder="Your Message..." name="message" onChange={handleInputChange} value={inputs.message}/>
                <div className="Newsletter">
                    <input type='checkbox' name="newsletter" />
                    <label >  Want to subscribe to our Newsletter? (Don't worry, no spam. We will eventually even ghost you)</label>
                </div>
                <input type="submit" value="Go!" className="Submit"/>

            </form>
        </div>


    )
};

export default Contact;