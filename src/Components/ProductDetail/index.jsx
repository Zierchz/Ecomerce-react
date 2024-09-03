import { XMarkIcon } from '@heroicons/react/16/solid'
import './styles.css'

const ProductDetail = () =>{

    return(
<aside className="product-detail flex flex-col fixed bg-white right-0 border-2 border-gray-500 rounded-t-lg border-b-0 text-gray-700">
    <div className='flex justify-between items-center p-6'>
        <h2 className='font-semibold text-2xl'>Detail</h2>
        <XMarkIcon className='size-6 transition-transform ease-in-out duration-300 hover:scale-125 '/>
    </div>
</aside>
    )
} 

export default ProductDetail