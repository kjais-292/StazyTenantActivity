"use client";
import useAuth from '../hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useEffect,useState } from 'react';
import Navbar from "@/components/Navbar"
import {  onAuthStateChanged } from "firebase/auth";
import { ref, onValue } from "firebase/database";
import { database,auth} from "@/app/lib/firebase";
import PayNowButton from '@/components/PayNowButton';
import TenantDetails from '@/components/TenantDetails';


const Dashboard = () => {
  const [data, setData] = useState(null);
  const { user,loading} = useAuth();
  // const [user, setUser] = useState(null);
  // const [loading, setLoading] = useState(true);

  const router = useRouter();
  useEffect(() => {
    if (!loading && !user) {
      router.push('/login'); // Redirect to login if not authenticated
    }
  }, [user, loading, router]);
  // useEffect(() => {
  //     onAuthStateChanged(auth, (user) => {
  //       if (user) {
  //         setUser(user);
  //       } else {
  //         setUser(null);
  //       }
  //       setLoading(false);
  //     });
  //   }, []);
  
    // useEffect(() => {
    //   if (user) {
    //     const myDataRef = ref(database, 'path/to/your/data');
    //     const unsubscribe = onValue(myDataRef, (snapshot) => {
    //       const data = snapshot.val();
    //       setData(data);
    //     });
  
    //     return () => unsubscribe();
    //   }
    // }, [user]);
  

  if (loading) return <p>Loading...</p>;
  

  return (
    <div className="flex flex-row">
      <Navbar/>
      <div className="mt-24">
      <TenantDetails/>
      </div>
    </div>
    // <div className="min-h-screen flex items-center justify-center bg-gray-100">
    //   <div className="p-6 bg-white rounded-lg shadow-lg">
    //     <h1 className="text-2xl font-bold mb-4">Firebase Data</h1>
        /* {user ? (
          data ? (
            Object.entries(data).map(([key, value]) => (
              <div key={key} className="p-2 border-b border-gray-300">
                {value}
              </div>
            ))
          ) : (
            <p>Loading data...</p>
          )
        ) : (
          <div>Not found</div>
        )}
      </div>
    </div> */
    // <div className="min-h-screen flex items-center justify-center bg-gray-100">
    //   <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
    //     <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
    //     {user && <p>Welcome, {user.email}</p>}
    //   </div>
    // </div>
  );
};

export default Dashboard;
