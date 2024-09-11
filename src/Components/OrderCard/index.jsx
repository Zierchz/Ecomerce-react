import { BackspaceIcon } from "@heroicons/react/16/solid";

const OrderCard = (props) => {
    const {product, handleDelete} = props
    let renderDeleteIcon
    if(handleDelete){
        renderDeleteIcon = <BackspaceIcon onClick={() => handleDelete(product.id)}
        className='size-5 transition-transform ease-in-out duration-300 hover:scale-125 cursor-pointer'/>
    }
    return (
        <>
        <div className="flex justify-between items-center ">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20 p-1 pl-2 ">

                    <img className="w-full min-w-10 h-full rounded-xl rounded-r-sm object-cover border-2 border-gray-500" src={product.images[0]} alt={product.title} />
                </figure>
                <p className="text-md font-semibold">{product.title}</p>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-lg font-bold">${product.price}</p>
                {renderDeleteIcon}
            </div>
            
        </div>
        <hr />
        </>
    )
}

export default OrderCard;

