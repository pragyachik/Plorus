import { Button } from 'antd';
import { React, useState } from 'react';

export default function Buttons() {
  const [showForm, setShowForm] = useState(false)
  const [signupFormName, setSignupFormName] = useState('')

  const openform = () => {
    // alert("sign up done")
    setShowForm(true);
  }

  const closeform = () => {
    setShowForm(false);
  }

  const sendToDatabase = () => {
    // alert(signupFormName)
    let objectWithData = {
      name: signupFormName
    }
    
    fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(objectWithData),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(JSON.stringify(data))
      })
  }

  const inputsHandler = (e) => {
    setSignupFormName(e.target.value);
  }

  // console.log("test")
  // console.log(db)

  return (
  <>
    {showForm?
    <div className="signupFormModal">
      <label>Name</label>
      <input type="text" onChange={inputsHandler} value={signupFormName} />
      <span className="xbutton" onClick={closeform}>X</span>
      <button onClick={sendToDatabase} className="submitButton">Submit</button>
    </div>:<></>}
    <Button type="primary" onClick={openform}>Sign up</Button>
    <br />
    <Button>Default Button</Button>
  </>
  )
  
};
