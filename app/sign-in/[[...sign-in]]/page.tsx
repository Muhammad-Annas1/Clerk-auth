import { SignIn } from "@clerk/nextjs";

export default function SignInpage(){
    return(
        <div className="bg-gradient-to-br from-slate-500 to-teal-600 h-screen flex items-center justify-center">
          <SignIn/>  
        </div>
    ) 
}