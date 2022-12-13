import { Button } from 'antd';
import React from 'react';

export default function Buttons() {
  const [showForm, setShowForm] = React.useState(false)

  const openform = () => {
    // alert("sign up done")
    setShowForm(true);
  }

  const closeform = () => {
    setShowForm(false);
  }

  return (
  <>
    {showForm?
    <div className="signupFormModal">
      <label>Name</label>
      <textarea>Enter your name</textarea>
      <span className="xbutton" onClick={closeform}>X</span>
    </div>:<></>}
    <Button type="primary" onClick={openform}>Sign up</Button>
    <br />
    <Button>Default Button</Button>
  </>
  )
  
};
