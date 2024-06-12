"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase';


const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       router.push('/dashboard'); // Redirect to a protected page
//     } catch (error) {
//       console.error('Error logging in:', error);
//       alert((error as Error).message);
//     }
//   };
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/dashboard'); // Redirect to a protected page
    } catch (error) {
      console.error('Error logging in:', error);
      alert((error as Error).message);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setIsLogin(!isLogin);
      router.push('/login'); // Redirect to a protected pa ge
    } catch (error) {
      console.error('Error signing up:', error);
      alert((error as Error).message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-neutral-50">

      <div className="relative">
        <input type="checkbox" className="absolute opacity-0 w-0 h-0" checked={!isLogin} onChange={() => setIsLogin(!isLogin)}/>
        <span className="relative flex justify-between items-center mb-2 w-12 h-6 bg-white border-2 border-gray-800 rounded-full cursor-pointer">
          <span
            className={`absolute left-0 top-0 w-6 h-6 bg-white border-2 border-gray-800 rounded-full transition-transform ${
              isLogin ? 'translate-x-0' : 'translate-x-6'
            }`}
          ></span>
          <span className="absolute left-[-80px] text-gray-800 font-semibold underline">
            Log in
          </span>
          <span className="absolute right-[-80px] text-gray-800 font-semibold">
            Sign up
          </span>
        </span>
        <div className="relative w-80 h-96 perspective">
          <div
            className={`absolute w-full h-full transition-transform duration-700 transform ${
              isLogin ? '' : 'rotate-y-180'
            }`}
          >
            <div className="absolute w-full h-full bg-gray-200 border-2 border-gray-800 rounded-md shadow-lg backface-hidden">
              <div className="flex flex-col justify-center items-center h-full p-5">
                <div className="text-2xl font-black text-gray-800 mb-5">
                  Log in
                </div>
                <form className="flex flex-col items-center gap-5" onSubmit={handleLogin}>
                  <input
                    className="w-64 h-10 px-3 border-2 border-gray-800 rounded-md shadow-md text-gray-800"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    className="w-64 h-10 px-3 border-2 border-gray-800 rounded-md shadow-md text-gray-800"
                    name="password"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="w-32 h-10 bg-white border-2 border-gray-800 rounded-md shadow-md text-gray-800 font-semibold"
                  >
                    Let&apos;s go!
                  </button>
                  
                </form>
              </div>
            </div>
            <div className="absolute w-full h-full bg-gray-200 border-2 border-gray-800 rounded-md shadow-lg backface-hidden transform rotate-y-180">
              <div className="flex flex-col justify-center items-center h-full p-5">
                <div className="text-2xl font-black text-gray-800 mb-5">
                  Sign up
                </div>
                <form className="flex flex-col items-center gap-5" onSubmit={handleSignup}>
                  <input
                    className="w-64 h-10 px-3 border-2 border-gray-800 rounded-md shadow-md text-gray-800"
                    placeholder="Name"
                    type="text"
                  />
                  <input
                    className="w-64 h-10 px-3 border-2 border-gray-800 rounded-md shadow-md text-gray-800"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    className="w-64 h-10 px-3 border-2 border-gray-800 rounded-md shadow-md text-gray-800"
                    name="password"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button  type="submit" className="w-32 h-10 bg-white border-2 border-gray-800 rounded-md shadow-md text-gray-800 font-semibold">
                    Confirm!
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

{/* <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6">Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          />
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">
            Login
          </button>
        </form>
      </div>
    </div> */}