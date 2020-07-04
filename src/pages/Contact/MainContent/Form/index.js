import React from 'react'
import './styles.scss'

const Form = () => {
    return (
        <div className="form-wrapper">

            <form
                name='painting-enquiry'
                method='post'
                data-netlify='true'
                data-netlify-honeypot='bot-field'
                className='contact-form'
            >
                <h2 className='form-header'>General Enquiries</h2>

                <input type='hidden' name='form-name' value='website-price-enquiry' />
                <label>Name</label>
                <input type='text' name='name' required />
                <label>Email</label>
                <input type='text' name='email' required />
                <label>Message</label>
                <textarea name='message' required></textarea>

                <button type='submit' className='submit-btn'>
                    <span>Send</span>
                </button>
            </form>
        </div >
    )
}

export default Form
