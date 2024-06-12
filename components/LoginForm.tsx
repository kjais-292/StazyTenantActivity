"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../app/lib/firebase';
import { toast } from "react-hot-toast"
import { Poppins } from "next/font/google";
const inter = Poppins({ weight: ['600'],subsets: ["latin"] });

const LoginForm = () => {
    
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful!")
      router.push('/dashboard'); // Redirect to a protected page
    } catch (error) {
      console.error('Error logging in:', error);
      toast.error((error as Error).message);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Login successful!")
      setIsLogin(!isLogin);
    //   router.push('/login'); // Redirect to a protected pa ge
    } catch (error) {
      console.error('Error signing up:', error);
      toast.error((error as Error).message);
    }
  };

  return (
    <div className="relative">
      <div className="mb-6 flex items-center justify-center">
      <a href="#" className={inter.className}>
        <h1 className=" text-4xl text-black">Stazy<span className="text-purple-600">.</span></h1>
        {/* <span className="w-1 bg-black">.............................</span> */}
      </a>
      </div>
    <label className="relative flex justify-between items-center mb-2 w-16 h-8 bg-white border-2
     border-gray-800 rounded-full cursor-pointer">
      <input
        type="checkbox"
        className="absolute opacity-0 w-0 h-0"
        checked={!isLogin}
        onChange={() => setIsLogin(!isLogin)}
      />
      <span
        className={`absolute left-6 sm:left-0 top-0 w-8 h-8 bg-gray-400 border-2 border-gray-800 rounded-full transition-transform ${
          isLogin ? 'translate-x-0' : 'translate-x-6'
        }`}
      ></span>
      <span className={`absolute left-[-80px] text-gray-800 text-lg  ${
          isLogin ? 'underline font-extrabold' : ''
        }`}>
        Log in
      </span>
      <span className={`absolute right-[-80px] text-gray-800 text-lg ${isLogin ? '' : 'underline font-extrabold'}`}>
        Sign up
      </span>
    </label>
    <div className="relative w-80 h-96 sm:w-96 sm:h-128 perspective">
      <div
        className={`absolute w-full h-full transition-transform duration-700 transform ${
          isLogin ? '' : 'rotate-y-180'
        }`}
      >
        <div className={`absolute w-full h-full bg-gray-100 border-2 border-gray-800 rounded-md shadow-lg 
             ${isLogin ? 'backface-hidden' : ''}
            `}>
          <div className="flex flex-col justify-center items-center h-full">
            <div className="text-4xl font-black text-gray-800 mb-12">
              Log in
            </div>
            <form className="flex flex-col items-center gap-5" onSubmit={handleLogin}>
              <input
                className="w-72 sm:w-80 h-12 px-3 border-neutral-50 focus:outline-none hover:border-gray-600 hover:border-b-2 rounded-md shadow-md text-gray-800 text-md"
                name="email"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="w-72 sm:w-80 h-12 px-3 border-neutral-50 focus:outline-none hover:border-gray-600 hover:border-b-2 rounded-md shadow-md text-gray-800"
                name="password"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="submit"
                className="w-32 h-12 mt-6 bg-white border-1 border-gray-800 hover:border-b-2 hover:border-r-2 rounded-md shadow-md text-gray-800 text-lg font-bold hover:scale-110 transition"
              >
                Let's go!
              </button>
            </form>
          </div>
        </div>
        <div className={`absolute w-full h-full bg-gray-100 border-2 border-gray-800 rounded-md shadow-lg transform 
            rotate-y-180 ${isLogin ? 'backface-hidden' : ''}`}>
          <div className="flex flex-col justify-center items-center h-full p-5">
            <div className="text-4xl font-black text-gray-800 mt-4 mb-10">
              Sign up
            </div>
            <form className="flex flex-col items-center gap-4" onSubmit={handleSignup}>
            <input
        className="w-72 sm:w-80 h-12 px-3 border-neutral-50 focus:outline-none hover:border-gray-600 hover:border-b-2 rounded-md shadow-md text-gray-800 text-md"
        placeholder="Name"
        type="text"
      />
      <input
        className="w-72 sm:w-80 h-12 px-3 border-neutral-50 focus:outline-none hover:border-gray-600 hover:border-b-2 rounded-md shadow-md text-gray-800 text-md"
        name="email"
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="w-72 sm:w-80 h-12 px-3 border-neutral-50 focus:outline-none hover:border-gray-600 hover:border-b-2 rounded-md shadow-md text-gray-800 text-md"
        name="password"
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="submit"
        className="w-32 h-12 mt-6 bg-white border-1 border-gray-800 hover:border-b-2 hover:border-r-2 rounded-md shadow-md text-gray-800 text-lg font-bold hover:scale-110 transition"
      >
        Confirm!
      </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .backface-hidden {
           backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
  </div>
  
  )
}

export default LoginForm