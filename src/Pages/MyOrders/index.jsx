import { useContext } from "react"
import Layout from "../../Components/Layout"
import OrdersCard from "../../Components/OrdersCard"
import { ShoppingCartContext } from './../../Context/index';
import { Link } from 'react-router-dom';
import { NoResults } from "../../Components/NoResults";


function MyOrders() {
  const context = useContext(ShoppingCartContext)
  

  return (
    <Layout>
        <div className="flex items-center justify-center my-2 relative w-96 text-2xl font-semibold text-green-700">
        <h1>My Orders</h1>
      </div>
      {
        context.order.length >0 ?
        context.order.map((order, index)=>(
          <Link to={`/my-orders/${index}`} key={index} className="p-3">
          <OrdersCard order={order}/> 
          </Link>))
          : <NoResults/>
      }  
    </Layout>
  )
}

export default MyOrders
