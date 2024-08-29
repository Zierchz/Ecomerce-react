import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"

const Card = ( data ) => {
    const context = useContext(ShoppingCartContext)
    return(
       <> <div className='w-56 bg-gray-100 cursor-pointer h-60 transition-all ease-in-out duration-500 my-5 '>
            <figure className='relative w-full mb-2 h-4/5'>
                <span className='absolute bottom-0 left-0 text-xs text-black rounded-lg bg-white/60 m-2 px-3 py-0.5'>{data.data.category.name}</span>
                    <img className='w-full h-full object-cover rounded-lg transition-all ease-in-out duration-400 hover:border-solid hover:border-4 hover:border-gray-300' src={data.data.images[0]} alt={data.data.title} />
                    <div 
                    onClick={()=> context.setCount(context.count + 1)}
                    className='absolute top-0 right-0 flex justify-center items-center bg-white w-8 h-8 rounded-full m-2 p-3 transition-all duration-500 hover:scale-125'>
                        <span className="pb-1 text-xl transition-all ease-in-out hover:scale-125 hover:animate-pulse">🛒</span>
                        </div>
                
            </figure>
            <p className='flex justify-between '>
                <span className='text-sm font-medium'>{data.data.title}</span>
                <span className='text-lg font-bold '>${data.data.price}</span>
            </p>
        </div>
        
    </>
    )
}

export default Card