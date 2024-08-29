const Card = () => {
    return(
       <> <div className='w-56 bg-white cursor-pointer h-60'>
            <figure className='relative w-full mb-2 h-4/5'>
                <span className='absolute bottom-0 left-0 text-xs text-black rounded-lg bg-white/60 m-2 px-3 py-0.5'>Electronics</span>
                    <img className='w-full h-full object-cover rounded-lg' src='https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=600' alt="headphones" />
                    <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full font-bold text-lg m-2 p-3'>+</div>
                
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-medium'>Headphones</span>
                <span className='text-lg font-bold '>$300</span>
            </p>
        </div>
        
    </>
    )
}

export default Card