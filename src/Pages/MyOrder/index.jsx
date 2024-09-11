import Layout from "../../Components/Layout"
import { ShoppingCartContext } from "../../Context";
import { useContext } from 'react';
import OrderCard from "../../Components/OrderCard";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";

function MyOrder() {
  const context = useContext(ShoppingCartContext)
  console.log(context.order)

  return (
    <Layout>
      <div className="flex items-center mb-2">
        <Link to={`/my-orders`}>
        <ChevronLeftIcon className="size-8"/>
        </Link>
        <h1>MyOrder</h1>
      </div>
      
      <div className="flex flex-col p-4 w-2/6 justify-between text-xl rounded-xl bg-gray-50">
        {context.order?.slice(-1)[0].products.map(product => (
          <OrderCard product={product} key={product.id} />))}
        <br />
        <p className="flex items-center justify-between pb-2 text-center font-semibold">
          <span className="">
            Products: {context.order?.slice(-1)[0].totalProducts}
          </span>
          <span className="">
            Total: ${context.order?.slice(-1)[0].totalPrice}
          </span>
        </p>
      </div>
    </Layout>
  )
}

export default MyOrder
