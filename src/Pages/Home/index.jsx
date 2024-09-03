import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import { useState, useEffect } from "react"
import ProductDetail from "../../Components/ProductDetail";

function Home() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products').then(response => response.json()).then(data => setItems(data))
  }, []);
  return (
    <Layout >
      Home
      <div className="grid grid-cols-4 w-full max-w-screen-lg items-center justify-items-center bg-gray-100 rounded-md ">
      {
        items?.map( (item) => (
         <Card key={item.id} data={item}/>
        
        ))
      }
      </div>
     <ProductDetail/>
    </Layout>
  )
}

export default Home
