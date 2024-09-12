import Layout from "../../Components/Layout"
import { ShoppingCartContext } from "../../Context";
import { useContext } from 'react';
import OrderCard from "../../Components/OrderCard";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";

function MyOrder() {
  const context = useContext(ShoppingCartContext)
  const currentPath = window.location.pathname
  const index = currentPath.substring(currentPath.lastIndexOf('/')+1)
 
  
  
  return (
    <Layout>
      <div className="flex items-center justify-center mb-2 relative w-96">
        <Link to={`/my-orders`} className="absolute left-0">
        <ChevronLeftIcon className="size-8"/>
        </Link>
        <h1>MyOrder</h1>
      </div>
      
      <div className="flex flex-col p-4 w-2/6 justify-between text-md rounded-xl bg-gray-50">
       
        {context.order[index]?.products.map(product => (
          <OrderCard product={product} key={product.id} />))}
        <br />
        {context.order.length > 0 ? <p className="flex items-center justify-between pb-2 text-center font-semibold">
          <span className="pl-3">
            Products: {context.order[index].totalProducts}
          </span>
          <span className="">
            Total: ${context.order[index].totalPrice}
          </span>
        </p>  : null}
      </div>
    </Layout>
  )
}

export default MyOrder
