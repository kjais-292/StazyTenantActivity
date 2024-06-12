import { GrNext } from "react-icons/gr";
import { Poppins } from "next/font/google";
const inter = Poppins({ weight: ['600'],subsets: ["latin"] });

const PayNowButton = () => {
  return (
    <div className="flex flex-row items-center justify-center ">
        <button className="px-4 py-2 text-xl font-semibold text-white bg-blue-500 rounded-md flex border-blue-800 
        flex-row justify-center items-center gap-2 hover:bg-blue-600 hover:border-b-4 hover:scale-105">
            Pay now
            <div className="rounded-full border-white border-2 p-1 font-extrabold hover:scale-105 transition">
            <GrNext size={15}/>
            </div>
        </button>
    </div>
  )
}

export default PayNowButton