import React from 'react'

const Contact = () => {
  return (
    <div id='contact'>
        <h1>CONTACT US</h1>
        <form >
            <input type="text" placeholder='Full Name' required />
            <input type="text" placeholder='Type your E-mail' required />
            <textarea name="message" placeholder='Write Here....'></textarea>
            <input type="submit" value= 'Send' />
        </form>
    </div>
  )
}

export default Contact;