import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="bg-gradient-to-br from-slate-500 to-teal-600 min-h-screen flex items-center justify-center ">
     
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mt-5 mb-5">
        <h2 className="text-xl text-gray-700 font-bold font-serif text-center mb-7 ">
          Create Your Account With Clerk Auth App
        </h2>
        <SignUp />
      </div>
    </div>
  );
}
