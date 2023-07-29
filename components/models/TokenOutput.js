import React, { useState } from 'react';


export default function TokenOutput () {
  const [showButton, setShowButton] = useState(true)
  const [userRequest, setUserRequest] = useState("test")
  const [response, setResponse] = useState("response here")

  const getVal = (value) => {
    setUserRequest(value.target.value)
  }

  const callAPI = async () => {
    setShowButton(false)

    let prompt = userRequest

    const params = {
      token: prompt
    }; 

    const options = {
        method: 'POST',
        body: JSON.stringify( params )  
    };

    //http://172.105.52.83
    const response = await fetch(apiIp+"/api/getTokenOutput", options);
    // console.log(response)

    const responseData = await response.json()

    setShowButton(true)
    setResponse(JSON.stringify(responseData))
  }

  return (
    <div className='flex flex-col justify-around h-[50%]'>
      <div>Token Output</div>
      <div className="chatbox__chatarea">
        <textarea className="chatbox__textarea border-2 border-slate-400" onChange={getVal} placeholder="enter text here" rows="3" cols="30"></textarea>
        {showButton? <><br></br><button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={()=>callAPI()}>get response</button></> : <div>Loading...</div>}
      </div>
      <div>{response}</div>
    </div>
  )
}