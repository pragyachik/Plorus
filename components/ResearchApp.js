import React, { useState } from 'react';

//http://127.0.0.1:5000
const apiIp = "http://172.105.52.83"

const ComponentSelector = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleComponentChange = (event) => {
    setSelectedComponent(event.target.value);
  };

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'Red Pajama':
        return <RedPajama />;
      case 'Stable Diffusion':
        return <StableDiffusion />;
      case 'Wav2':
        return <Wav2 />;
      case 'Bert':
        return <Bert />;
      default:
        return <TokenOutput />;
    }
  };

  return (
    <div className="h-[92vh] w-full bg-white p-auto flex flex-col font-mono font-semibold text-black">
      <div className='h-[7vh] p-2'>
        <select value={selectedComponent} onChange={handleComponentChange}>
          <option value=" ">Select a Model</option>
          <option value="Bert">Bert</option>
          <option value="Red Pajama">Red Pajama</option>
          <option value="Stable Diffusion">Stable Diffusion</option>
          <option value="Wav2">Wav2</option>
        </select>
      </div>
      <div className='h-[85vh] text-center pt-12'>
        {renderComponent()}
      </div>
    </div>
  );
};

// Example components
const RedPajama = () => {
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
      text: prompt
    }; 

    const options = {
        method: 'POST',
        body: JSON.stringify( params )  
    };

    //http://172.105.52.83
    const response = await fetch(apiIp+"/api/getRedPajamaToken", options);
    // console.log(response)

    const responseData = await response.json()

    setShowButton(true)
    setResponse(JSON.stringify(responseData))
  }
  
  return (
    <div className='flex flex-col justify-around h-[50%]'>
      <div>Red Pajama</div>
      <div className="chatbox__chatarea">
        <textarea className="chatbox__textarea border-2 border-slate-400" onChange={getVal} placeholder="enter text here" rows="3" cols="30"></textarea>
        {showButton? <><br></br><button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={()=>callAPI()}>get response</button></> : <div>Loading...</div>}
      </div>
      <div>{response}</div>
    </div>
  );
};

const StableDiffusion = () => {
  return <div>Stable Diffusion</div>;
};

const Wav2 = () => {
  return <div>Wav2</div>;
};


const Bert = () => {
  return <div>Bert</div>;
};

const TokenOutput = () => {
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
        {showButton? <><br></br><button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={()=>callAPI()}>get response</button></> : <div>Loading...</div>}
      </div>
      <div>{response}</div>
    </div>
  )
}

export default ComponentSelector;
