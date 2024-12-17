import Link from "next/link";

export default function Home() {
  return (
    <section className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-500 to-teal-600">
    <div className="text-center flex flex-col items-center justify-center px-6">
 
      <h1 className="text-2xl md:text-4xl font-bold font-mono text-white mb-4">
        Clerk Authentication
      </h1>
      
      <p className="text-lg md:text-xl text-gray-200 mb-8 mt-3">
      Get Started With Clerk
      </p>
    
     
      <button className="bg-lime-400 text-black py-2 px-7 text-lg font-medium shadow-md border-2 border-lime-900 hover:text-black rounded-2xl hover:bg-lime-500">
  <Link href="/sign-in">Sign In To Clerk</Link>
</button>

 


      
    </div>
  </section>
  );
}

  