import { BackspaceIcon } from "@heroicons/react/16/solid";

const OrderCard = (props) => {
    const {product, handleDelete} = props
    let renderDeleteIcon
    if(handleDelete){
        renderDeleteIcon = <BackspaceIcon onClick={() => handleDelete(product.id)}
        className='size-5 transition-transform ease-in-out duration-300 hover:scale-125 cursor-pointer text-green-800'/>
    }
    return (
        <>
        <div className="flex justify-between">
            <div className="flex items-center gap-1">
                <figure className="w-20 h-16 p-1 ">

                    <img className="w-full h-full rounded-xl rounded-r-sm object-cover border-2 border-gray-500" src={product.images[0]} alt={product.title} />
                </figure>
                <p className="text-sm font-semibold">{product.title}</p>
            </div>
            <div className="flex items-center  gap-2">
                <p className="text-lg font-bold text-green-600">${product.price}</p>
                {renderDeleteIcon}
            </div>
            
        </div>
        <hr />
        </>
    )
}

export default OrderCard;

