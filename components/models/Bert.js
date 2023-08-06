import React, { useState, useEffect, useRef } from 'react';
import TextBoxWithLimit from '../elements/Textbox';
import DemoButton from '../elements/DemoButton';
import DemoDropdown from '../elements/DemoDropdown';

const apiIp = "http://172.105.52.83" //"http://127.0.0.1:5000" //

export default function Bert () {
  const [showButton, setShowButton] = useState(true)
  const [inputText, setInputText] = useState('')
  const [outputText, setOutputText] = useState('')
  const [selectedModel, setSelectedModel] = useState('redpajama')
  const [limits, setLimits] = useState({ichars:2000, itokens:500, ochars:2000, otokens:500})
  const [imageSourceUrl, setImageSourceUrl] = useState("");
  const [message, setMessage] = useState("")
  const outputBox = useRef(0)

  const [allTokens, setAllTokens] = useState(['9876','7787'])

  useEffect(()=>{
    loadAllTokens()
  }, [])

  const loadAllTokens = async ()=>{
    const response = await fetch(apiIp+"/api/get_all_tokens").catch(e=>setMessage("error: "+e));
    const responseData = await response.json()
    const tokensList = []
    const responseDataModified = JSON.parse(responseData.replaceAll('\'','\"'))
    if(responseDataModified.length){
      for(let item of responseDataModified){
        tokensList.push(item["token"])
      }
    }
    setAllTokens(tokensList.reverse())
  }

  useEffect(()=>{
    if(selectedModel == "Bert"){
      setLimits({ichars:2000, itokens:500, ochars:2000, otokens:500})
    }
    else if(selectedModel == "Red Pajama"){
      setLimits({ichars:2000, itokens:500, ochars:2000, otokens:500})
    }
    else if(selectedModel == "Stable Diffusion"){
      setLimits({ichars:350, itokens:75, ochars:0, otokens:0})
    }
    else {
      setLimits({ichars:2000, itokens:500, ochars:2000, otokens:500})
    }
  }, [selectedModel])

  const alertValue = () => {
    alert(inputText + " " + outputText)
  }

  // const callAPI = () => {
  //   alert("disabled")
  // }

  const callAPI = async () => {
    setShowButton(false)

    let prompt = inputText

    const params = {
      text: prompt,
      model: selectedModel
    }; 

    const options = {
        method: 'POST',
        body: JSON.stringify( params )  
    };

    const response = await fetch(apiIp+"/api/getRedPajamaToken", options);

    const responseData = await response.json()
    console.log("Response data: ")
    const newTokensList = [responseData['token'].toString(), ...allTokens]
    console.log(newTokensList)
    setAllTokens(newTokensList)

    setShowButton(true)
  }

  const getTokenOutput = async (token) => {
    setMessage("")
    setShowButton(false)

    const params = {
      token: token
    }; 

    const options = {
        method: 'POST',
        body: JSON.stringify( params )  
    };

    // const response = await fetch(apiIp+"/api/getTokenOutput", options);
    const response = await fetch(apiIp+"/api/getTokenOutput", options)
    const contentType = response.headers.get("content-type");
    console.log("contentType")
    console.log(contentType)
    if (contentType && contentType.indexOf("application/json") !== -1) {
        const responseData = await response.json()
        if(responseData["message"] && responseData["message"]=="token not processed"){
            setMessage("token not processed")
        }
        else{
            setOutputText(JSON.stringify(responseData))
        }
        
    }
    else{
      const image = await response.blob();
      const imageObjectUrl = URL.createObjectURL(image);
      console.log(imageObjectUrl)
      setImageSourceUrl(imageObjectUrl)
    }
    setShowButton(true)
  }

  return (
    <>
      <div className='flex flex-row p-2 w-full h-full'> {/*bg-red-500*/}
        <div className='flex flex-col w-[80%] h-full  p-2 align-center justify-around'>{/*bg-blue-500*/}
          <div className='h-[55%] w-full'>{/*bg-yellow-500*/}
            <div className='flex flex-row h-[2rem] w-full p-1 justify-center items-center border border-gray-300'>
              {message}
            </div>
            <div className='flex flex-row h-[4rem] w-full p-1'>{/*bg-slate-500*/}
            <DemoDropdown selectedComponent={selectedModel} setSelectedComponent={setSelectedModel}></DemoDropdown>  
            <DemoButton label="Templates"></DemoButton>
            <DemoButton label="Examples"></DemoButton>
            <DemoButton label="Clear"></DemoButton>
            <DemoButton label="Test" onClickFn={alertValue}></DemoButton>
            <DemoButton label={showButton?"Submit":'Loading...'} onClickFn={callAPI}></DemoButton>
            </div>
            <div className='h-[calc(100%-6rem)] w-full  p-1'>{/*bg-stone-500*/}
              <TextBoxWithLimit characterLimit={limits.ichars} tokenLimit={limits.itokens} text={inputText} setText={(value)=>{setInputText(value)}} />
            </div>
          </div>
          <div ref={outputBox} className='h-[45%] w-full  p-1'>{/*bg-green-500*/}
              {limits.ochars>0?<TextBoxWithLimit characterLimit={limits.ochars} tokenLimit={limits.otokens}  text={outputText} setText={(value)=>{setOutputText(value)}} />:
              <>
                <img src={imageSourceUrl} alt="No Image" className='w-full h-full object-contain' />
              </>}
          </div>
        </div>
        <div className='w-[20%] h-full  p-2'>{/*bg-orange-500*/}
          <div className=" p-2 h-full w-full flex flex-col bg-slate-200">
            <div className="w-full text-center h-[2rem]">
              Tokens
            </div>
            <div className="w-full h-full bg-slate-200 overflow-y-scroll scrollbar-thin">
              {allTokens.map(token => <div onClick={()=>getTokenOutput(token)} key={token} className='hover:cursor-pointer w-full my-1 flex justify-center items-center bg-white h-[2rem]'>{token}</div>)}
            </div>
          </div>{/*bg-pink-500*/}
        </div>
      </div>
    </>
  );
};