import React from 'react'
import './styles.scss'

const Form = () => {
    return (
        <div className='form-wrapper'>

            <form
                name='painting-enquiry'
                method='post'
                data-netlify='true'
                data-netlify-honeypot='bot-field'
                className='contact-form'
            >

                <input type='hidden' name='contact-form' value='painting-enquiry' />

                <h2 className='form-header' data-aos='fade-up' data-aos-delay='600'>General Enquiries</h2>

                <input type='hidden' name='form-name' value='website-price-enquiry' />
                <label data-aos='fade-up' data-aos-delay='700'>Name</label>
                <input type='text' name='name' required data-aos='fade-up' data-aos-delay='900' />
                <label data-aos='fade-up' data-aos-delay='1000'>Email</label>
                <input type='text' name='email' required data-aos='fade-up' data-aos-delay='1200' />
                <label data-aos='fade-up' data-aos-delay='1400'>Message</label>
                <textarea name='message' required data-aos='fade-up' data-aos-delay='1600'></textarea>

                <button type='submit' className='submit-btn' data-aos='fade-up' data-aos-delay='1800'>
                    <span>Send</span>
                </button>
            </form>
        </div>
    )
}

export default Form
