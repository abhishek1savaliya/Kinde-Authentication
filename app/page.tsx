import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/server";
export default function Home() {
  return (
    <main
      className="flex flex-col items-center justify-center p-24"
      style={{
        height:' 150vh',
        backgroundImage: 'url("https://gcdnb.pbrd.co/images/CwptviYCKll6.jpg?o=1")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h1 className='text-3xl font-bold text-white'>Krishna Creation 😀😀✨</h1>
      <div className="m-40">
      <button type="button" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"><RegisterLink>Sign up</RegisterLink></button>
          
     
      <button type="button" className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">  <LoginLink>Sign in</LoginLink></button>
        
   
      </div>
    </main>
  );
}
