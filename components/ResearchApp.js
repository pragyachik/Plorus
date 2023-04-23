import { useState } from "react"

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

function downloadInnerHtml(filename, value, mimeType) {
  var link = document.createElement('a');
  mimeType = mimeType || 'text/plain';

  link.setAttribute('download', filename);
  link.setAttribute('href', 'data:' + mimeType + ';charset=utf-8,' + encodeURIComponent(value));
  link.click(); 
}


export default function ResearchApp() {
  const [response, setResponse] = useState("chatgpt output")
  const [userRequest, setUserRequest] = useState("Say this is a test")
  const [errormessage, setErrorMessage] = useState("200 OK")
  const [showButton, setShowButton] = useState(true)
  const [status, setStatus] = useState(200)


  const callChatGPT = async (thesis=false) => {
    setShowButton(false)
    console.log(userRequest)
    let prompt = userRequest
    if(thesis){
      prompt = "Write a ten page thesis, in APA style, including citations and bibliography, on the topic\"" + userRequest + "\"";
    }
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      temperature: 0,
      max_tokens: 1000,
    });
    setStatus(Number(response.status))
    if(Number(response.status)!=200){
      setErrorMessage(JSON.stringify(response))
    }
    console.log(response)
    setShowButton(true)
    // setUnformattedResponseText(response.data.choices[0].text)
    let responseText = response.data.choices[0].text//.replaceAll("\n","<br>");
    console.log(responseText)
    setResponse(responseText)
  }

  const getVal = (value) => {
    setUserRequest(value.target.value)
  }

  const downloadResponse = () => {
    // let value = document.getElementById("outputBox").innerHTML;
    downloadInnerHtml("output.txt", response,'text/html');
  }

  return (
    <>
      <div className="h-[92vh] w-full bg-slate-100 text-6xl p-auto flex flex-row items-center justify-around font-mono font-semibold text-slate-400">
        <div className="text-lg w-[40vw] items-center flex flex-col">
          <div>
              Chatbox <br></br><span className="text-stone-400 text-sm">&#x28;Generating abstract can take 10s or more&#41;</span>
          </div>
          <div className="chatbox__chatarea">
            <textarea className="chatbox__textarea border-2 border-slate-400" onChange={getVal} placeholder="enter text here" rows="3" cols="30"></textarea>
            {showButton? <><br></br><button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={()=>callChatGPT(false)}>get chat response</button><button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={()=>callChatGPT(true)}>get thesis</button></> : <div>Loading...</div>}
          </div>
        </div>
        <hr></hr>
        <div className="text-lg w-[50vw]">
          <div>
            <button class="hidden bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={downloadResponse}>download response</button>
          </div>
          <div id="outputBox" className="h-[85vh] overflow-y-scroll whitespace-pre-wrap">
            {status==200?response:errormessage}
          </div>
        </div>
      </div>
    </>
  )
}