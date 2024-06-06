import {genAI} from './GeminiCong'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export async function ChatWithGemi(prompt,imgs) {
  // console.log(imgs)
  try {
    const model = genAI.getGenerativeModel({ model:'gemini-1.5-pro'});
    const result = await model.generateContent([prompt,...imgs]);
    const response = await result.response;
    // console.log(response)
    const text = response.text();
    return text
  } catch (error) {
    console.log(error.message)
    toast.error("something went wrong ")
    // alert("something went wrong ")
  }
}


// export async function InputImgreponse(prompt,Imgarry){
//   try {
//     const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
//     const result = await model.generateContent((prompt,[...Imgarry]));
//     const response = await result.response;
//     console.log(response)
//     const text = response.text();
//     return text
//   } catch (error) {
//     console.log(error)
//     alert("something went wrong ")
//   }

// }