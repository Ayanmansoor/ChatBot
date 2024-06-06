import { Query} from "appwrite"
import { ID } from "appwrite"
import {db ,account,collectionID,databaseID} from "./Config.Appwrite"
import { toast } from "react-toastify"


export function LoginUser(email,password){
    const Login= async ()=>{
        try {
            await account.createEmailPasswordSession(email,password)
            toast.success("Login successfull ")
        } catch (error) {
            toast.error("Login faild ")
            console.log(error)
        }
    }
    Login()
}


export function LogOutUser(){
    const LogOut=async ()=>{
        try {
            await account.deleteSession()
            toast.success("you Logout Now")
        } catch (error) {
            toast.error('LogOut Faild ')
            console.log(error)
        }
    }
    LogOut()
}


