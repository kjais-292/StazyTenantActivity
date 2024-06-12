import PayNowButton from "./PayNowButton"
const Overdue = () => {
  return (
    <div className="bg-gray-800 rounded-md w-96 h-48 text-white p-6">
        <div className="flex flex-row justify-between">
            <div className="text-2xl font-bold">Rent</div>
            <div className="text-red-600 font-semibold text-xl">Overdue</div>
        </div>
        <div className="text-neutral-400">Total outstanding for this month</div>
        <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-2 mt-12">
                <div className="text-5xl">₹</div>
                <div className="text-3xl">3500<span className="text-neutral-400 text-xl">.00</span></div>
            </div>
            <div className="mt-12"><PayNowButton/></div>
        </div>
    </div>
  )
}

export default Overdue