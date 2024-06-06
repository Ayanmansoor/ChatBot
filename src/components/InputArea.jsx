import React, {useEffect, useContext, useState } from "react";
import { ChatWithGemi } from "../Gmini/InputGemini";
import { GeminiContext } from "./Gemini";
import { fileToGenerativePart } from "../Gmini/ImgTOBuffer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { account,db, } from "../appwrite/Config.Appwrite";

function InputArea() {
  const [InputValue, setInputValue] = useState("");
  const [Show,setShow]=useState(true)
  const [imgs, setimgs] = useState([])
  const [imageUrls, setimageUrls] = useState([])


  const { setResponse, Reponse } = useContext(GeminiContext);
  function HandleSend() {
    setShow(false)
    if (InputValue.length < 3  ) {
       toast.warning("plz enter query !!!")
       setShow(true)
    } else {
      // i will call gemini function
      ChatWithGemi(InputValue, imgs.length > 0 ? imgs : [])// im sending image to Gemini
        .then((text) => text)
        .then((text) => {
          let arry = new Array();
          let UaerObj = {
            User: InputValue,
            image: imageUrls,
            code: "user",
            date: new Date().toDateString(),
          };
          let GeminiObj = {
            Reponse: text,
            code: "gemini",
            date: new Date().toDateString(),
          };
          arry.push(UaerObj, GeminiObj);
          setResponse((prv) => [...Reponse, arry]);
          setInputValue("")
          setShow(true)
          setimgs([])
          setimageUrls([])
        })
        .catch((error) => {
          // console.log(error);
          toast.error(" something wrong ")

        });
    }
  }



  function FileUpload(e) {
    for (let i = 0; i < e.target.files.length; ++i) {
      let imgobj = e.target.files[i]
      setimageUrls((prev) => [imgobj.name, ...prev])
      fileToGenerativePart(imgobj).then((reponseobj) => {
        setimgs((prev) => [reponseobj, ...prev])
        console.log(imgs)
      })
      // console.log(bufferimg)
    }
  }



  return (
    <>
      {/* input filed inner wraper */}
      <div
        className=" flex  items-center justify-center gap-2  relative p-2  "
      >
        <div
          className=" relative bg-slate-950 w-3/6 rounded-xl
       border-none  p-2  "
        >
          {imageUrls.length > 0 &&
            <div className=" w-auto h-auto rounded-sm backdrop-blur-sm bg-white/30 mx-2 relative overflow-hidden  ">
              <h3 className=" font-bold align-middle p-4 text-white ">you have selected {imgs.length} images</h3>
            </div>
          }


          <div className=" w-full relative bg-transparent p-1.5  ">
            <input
              type="text"
              value={InputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Text your query here!!"
              className=" rounded-sm w-full border-none  font-medium  p-1.5 "
            />
          </div>
        </div>
        <div className=" flex align-middle gap-3 justify-evenly w-fit  bg-transparent relative ">
          <input
            type="file"
            id="custom-input"
            onChange={FileUpload}
            multiple
            hidden
          />
          <label
            htmlFor="custom-input"
            className=" font-normal p-3 rounded-xl bg-gradient-to-bl from-slate-300 
          to-pink-200  "
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-image" viewBox="0 0 16 16">
              <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
              <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z" />
            </svg>
          </label>
          <button
            className=" font-normal px-3 rounded-xl flex items-center justify-center  bg-gradient-to-bl from-pink-200 
            to-zinc-500 "
            onClick={HandleSend}
          >
            { Show ? 
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
              <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
            </svg>  : 
             <svg class="animate-spin h-6 w-6 mr-0 bg-white rounded-xl " viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12"  r="10" stroke="" stroke-width=""></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            }
          
           
          </button>
        </div>
      </div>
    </>
  );
}

export default InputArea;
