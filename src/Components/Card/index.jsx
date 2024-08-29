const Card = ( data ) => {
    return(
       <> <div className='w-56 bg-gray-100 cursor-pointer h-60 transition-all duration-500 hover:scale-110 my-5'>
            <figure className='relative w-full mb-2 h-4/5'>
                <span className='absolute bottom-0 left-0 text-xs text-black rounded-lg bg-white/60 m-2 px-3 py-0.5'>{data.data.category.name}</span>
                    <img className='w-full h-full object-cover rounded-lg' src={data.data.images[0]} alt={data.data.title} />
                    <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full font-bold text-lg m-2 p-3'>+</div>
                
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