import Layout from "../../Components/Layout"
import { Link } from "react-router-dom"
function SignIn() {
  return (
    <Layout>
      <h1 className="font-medium text-xl text-center mb-6 w-80 m-2">Welcome</h1>
      <div className='flex flex-col w-80 text-lg border-2 border-gray-300 p-5 rounded-xl shadow-lg'>
        <p>
          <span className='font-semibold'>Email: </span>
          <span>teff@platzi.com</span>
        </p>
        <p>
          <span className='font-semibold'>Password: </span>
          <span>******</span>
        </p>
        <Link
          to="/">
          <button
            className='transition-transform duration-500 bg-green-400 disabled:bg-black/40 text-white w-full rounded-lg py-3 mt-4 mb-2 hover:scale-110'>
            Log in
          </button>
        </Link>
        <div className='text-center m-2 mt-3 transition-transform hover:translate-y-1 hover:scale-110 duration-300'>
          <a className='font-bold' href='/'>Forgot my password</a>
        </div>
        <button
          className='transition-transform duration-500 border border-green-400 text-green-400 border-green/40 hover:scale-110 
          rounded-lg mt-6 py-3'>
          Sign up
        </button>
      </div>
    </Layout>
  )
}
  
  export default SignIn
  