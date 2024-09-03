import { XMarkIcon } from "@heroicons/react/16/solid";

const OrderCard = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20 ">
                    <img className="w-full h-full rounde-xl object-cover" src='' alt='' />
                </figure>
                <p className=""></p>
            </div>
            <div>
                <p></p>
                <XMarkIcon
         className='size-8 transition-transform ease-in-out duration-300 hover:scale-150 cursor-pointer border-2 border-gray-500 rounded-full'/>
            </div>
        </div>
    )
}

export default OrderCard;

