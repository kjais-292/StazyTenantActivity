import useAuth from '@/app/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useEffect,useState } from 'react';
import Avatar from '@/components/Avatar';
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";


const Profile = () => {

    const { user,loading} = useAuth();
  // const [user, setUser] = useState(null);
  // const [loading, setLoading] = useState(true);

  const router = useRouter();
  useEffect(() => {
    if (!loading && !user) {
      router.push('/login'); // Redirect to login if not authenticated
    }
  }, [user, loading, router]);

  return (
    <div>
        <div className="text-4xl font-bold ">Hello, <div className="text-neutral-400">
            {user?.email} {user?.username}</div></div>
        <div className="flex flex-row justify-center items-center gap-10 my-12">
            <div className="h-48 w-80 rounded-md shadow-md border-neutral-50">
                Room
            </div>
            <div className="h-48 w-80 rounded-md shadow-md border-neutral-50 p-4">
                <div className="text-neutral-400 text-xs">Property Manager</div>
                <div className="mt-2 flex flex-row items-center gap-4">
                    <Avatar src="/Placeholder.jpeg"/>
                    <div className="font-bold text-xl">Govind Tiwari</div>
                </div>
                <div className="flex flex-row items-center justify-between gap-3 mt-10">
                    <div className="text-gray-800 cursor-pointer flex flex-row gap-2 items-center bg-neutral-50 rounded-lg py-2 px-4 shadow-md">
                        <IoIosMail size={32}/> 
                        <div className="text-md font-semibold">Mail</div>
                    </div>
                    <div className="text-gray-800 cursor-pointer flex flex-row gap-2 items-center bg-neutral-50 rounded-lg py-3 px-4 shadow-md">
                        <FaPhoneAlt size={24}/>
                        <div className="text-md font-semibold">Phone</div>
                    </div>
                </div>
            </div>
            <div className="h-36 w-64 rounded-md shadow-md border-neutral-50">
                Rent
            </div>
        </div>
    </div>
  )
}

export default Profile