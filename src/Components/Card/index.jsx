import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { ShoppingBagIcon } from "@heroicons/react/16/solid"

const Card = ( data ) => {
    const context = useContext(ShoppingCartContext)
    return(
       <> <div className='w-56 bg-gray-100 cursor-pointer h-60 transition-all ease-in-out duration-500 my-5'>
            <figure className='relative w-full mb-2 h-4/5'>
                <span className='absolute bottom-0 left-0 text-xs text-black rounded-lg bg-white/60 m-2 px-3 py-0.5 font-semibold'>{data.data.category.name}</span>
                    <img className='w-full h-full object-cover transition-all ease-in-out duration-500 rounded-3xl  border-4 hover:rounded-lg hover:border-gray-400 hover:border-solid' src={data.data.images[0]} alt={data.data.title} />
                    <div 
                    onClick={()=> context.setCount(context.count + 1)}
                    className='absolute top-0 right-0 flex justify-center items-center bg-white w-10 h-10 rounded-full m-2 p-3 border-2 border-solid border-gray-400
                    transition-all ease-in-out duration-500 hover:scale-125'>
                        <span className="pb-1 text-xl transition-all ease-in-out hover:scale-125 hover:animate-pulse">
                        <ShoppingBagIcon className="size-6 text-gray-600" />
                        </span>
                        </div>
                        
                
            </figure>
            <p className='flex justify-between '>
                <span className='text-sm font-semibold'>{data.data.title}</span>
                <span className='text-lg font-bold '>${data.data.price}</span>
                
            </p>
        </div>
        
    </>
    )
}

export default Card