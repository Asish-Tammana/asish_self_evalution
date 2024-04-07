import { useState } from 'react'
import './index.css'


const ApplicationForm = () => {

    const [name, updateName] = useState("")
    const [email, updateEmail] = useState('')
    const [phoneNumber, updatePhoneNumber] = useState('')

    const submitClicked = (event) => {
        event.preventDefault()
        alert('Form Submitted')
    }

    return(
        <form className='form-container' onSubmit={submitClicked}>
            <h3>Aspiring to be an ACCA?</h3>
            <input type="text" placeholder='Name' value={name} onChange={(event) => updateName(event.target.value)} /> <br />
            <input type="email" placeholder='Email address' value={email} onChange={(event) => updateEmail(event.target.value)} /> <br />
            <input type="number" placeholder='Phone Number*' value={phoneNumber} onChange={(event) => updatePhoneNumber(event.target.value)} /> <br />
            <button className='submit-button'>Submit</button>
        </form>

    )
}

export default ApplicationForm