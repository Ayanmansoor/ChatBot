import { ID } from "appwrite"
import { account } from "./Config.Appwrite"
import { toast } from "react-toastify"



export function RegisterUser(Username,email,password){
    console.log(email,name,password)
    const createUser=async ()=>{
        try {
            await account.create(ID.unique(), email, password, Username);
            toast.success("Account has been created Successfully ")

            // alert("Account created successfully ✅");    
        } catch (error) {
            console.log(error)
            toast.error("Something went wrong happend ")

        }
    }
    createUser()
}