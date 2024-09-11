import {  } from "@heroicons/react/16/solid";


const OrdersCard = (props) => {
    const {TotalPrice, TotalProducts} = props
   
    return (
        <>
        <div className="flex justify-between items-center ">
        <p>
            <span>{new Date('d-m-y')}</span>
            <span>{TotalProducts}</span>
            <span>{TotalPrice}</span>
        </p>
        </div>
        
        </>
    )
}

export default OrdersCard;

