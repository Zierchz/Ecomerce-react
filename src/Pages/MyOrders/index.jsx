import { useContext } from "react"
import Layout from "../../Components/Layout"
import OrdersCard from "../../Components/OrdersCard"
import { ShoppingCartContext } from './../../Context/index';
import { Link } from 'react-router-dom';


function MyOrders() {
  const context = useContext(ShoppingCartContext)
  

  return (
    <Layout>
      MyOrders
      {
        context.order.map((order, index)=>(
          <Link to={`/my-orders/${index}`} key={index} className="p-3">
          <OrdersCard order={order}/> 
          </Link>))
      }  
    </Layout>
  )
}

export default MyOrders
