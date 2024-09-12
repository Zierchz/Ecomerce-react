import { ChevronRightIcon } from '@heroicons/react/16/solid';
import './styles.css';

const OrdersCard = ({ order }) => {
    return (
        <>
        <div className="container flex justify-between items-center transition-transform duration-500 ease-in-out w-96 p-3 bg-gray-50 
        rounded-xl border-2 border-gray-500 hover:scale-110 hover:border-4 hover:font-semibold text-lg">
            <p className='flex flex-col w-3/6'>
            <span className="flex-grow text-center ">
                {order.date.toDateString()}
            </span>

            <span className="flex-grow text-center ">
                {order.totalProducts} Articles
            </span>
            </p>
            <span className="flex-grow text-end order-item font-bold text-3xl text-green-600">
                ${order.totalPrice}
            </span>
            <ChevronRightIcon className='size-10  text-green-600'/>
        </div>
        </>
    );
}

export default OrdersCard;
