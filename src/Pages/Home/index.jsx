import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail";
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { NoResults } from "../../Components/NoResults";
import { BackspaceIcon } from "@heroicons/react/16/solid";

function Home() {
  const context = useContext(ShoppingCartContext)

  const Cards = <div className="grid grid-cols-4 w-full max-w-screen-lg items-center rounded-xl justify-items-center 
  ">
    {
    context.filteredItems?.map( (item) => (
     <Card key={item.id} data={item}/>
    )) 
    }
  </div>

  return (
    <Layout>
      <div className=" z-1 flex flex-col bg-white w-full items-center justify-center">
        <div className="flex items-center justify-center my-2 w-96 text-2xl font-semibold text-green-700">
        <h1>Exclusive Products For You!</h1>
      </div>
      <div className="flex flex-row items-center">
      <input type="text"  placeholder="Search a product..." value={context.searchByTitle}
      onChange={(event) => context.setSearchByTitle(event.target.value)}
      className="transition-all ease-in-out duration-300 border-2
       border-gray-300 my-3 p-1 rounded-lg shadow-md focus:outline-none focus:scale-110 w-80"/>
        <BackspaceIcon
         className="ml-4 size-8 text-green-800 cursor-pointer "
        onClick={() => context.setSearchByTitle('')}/>
        </div>
        </div>
      {context.filteredItems?.length >0 ? Cards : <NoResults/>}
     <ProductDetail/>
    </Layout>
  )
}

export default Home
