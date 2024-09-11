import { useContext } from "react"
import Layout from "../../Components/Layout"
import OrdersCard from "../../Components/OrdersCard"
import { ShoppingCartContext } from './../../Context/index';
import { Link } from 'react-router-dom';


function MyOrders() {
  const context = useContext(ShoppingCartContext)
  console.log(context.order)
  return (
    <Layout>
      MyOrders
      {
        context.order.map((order)=>{
          <Link to={`my-orders/${order.id}`}>
          <OrdersCard TotalPrice={order.TotalPrice} TotalProducts={order.TotalProducts}/> 
          </Link>})
      }  
    </Layout>
  )
}

export default MyOrders
