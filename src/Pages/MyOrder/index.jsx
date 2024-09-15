import Layout from "../../Components/Layout"
import { ShoppingCartContext } from "../../Context";
import { useContext } from 'react';
import OrderCard from "../../Components/OrderCard";
import { Link } from "react-router-dom";
import { ArrowUturnLeftIcon } from "@heroicons/react/16/solid";

function MyOrder() {
  const context = useContext(ShoppingCartContext)
  const currentPath = window.location.pathname
  const index = currentPath.substring(currentPath.lastIndexOf('/')+1)
 
  
  
  return (
    <Layout>
        <div className="flex items-center justify-center my-2 relative w-96 text-2xl font-semibold text-green-700">
        <Link to={`/my-orders`} className="absolute left-0">
        <ArrowUturnLeftIcon className="size-7"/>
        </Link>
        <h1>My Order</h1>
      </div>
      
      <div className="flex flex-col p-4 w-2/6 justify-between text-md rounded-xl bg-gray-50 shadow-xl border-2 border-gray-300">
       
        {context.order[index]?.products.map(product => (
          <OrderCard product={product} key={product.id} />))}
        <br />
        {context.order.length > 0 ? <p className="flex items-center justify-between pb-2 text-center font-semibold text-green-700">
          <span className="pl-3 text-xl">
            Products: {context.order[index].totalProducts}
          </span>
          <span className="text-xl">
            Total: ${context.order[index].totalPrice}
          </span>
        </p>  : null}
      </div>
    </Layout>
  )
}

export default MyOrder
