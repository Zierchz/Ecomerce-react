import Layout from "../../Components/Layout"
import { NoResults } from "../../Components/NoResults"

function NotFound() {

  return (
    <Layout>
        <div className="flex items-center justify-center my-2 relative w-96 text-2xl font-semibold text-green-700">
        <h1>Not Found</h1>
      </div>
      <NoResults/>
    </Layout>
  )
}

export default NotFound
