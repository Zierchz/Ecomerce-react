import { NavLink } from "react-router-dom";


const NavBar = () => {

    const activeStyle = 'underline underline-offset-4 '

    return (
        <nav className="fixed top-0 z-10 flex items-center justify-between w-full px-8 py-5 font-semibold bg-gray-50">
            <ul className="flex items-center gap-3">
                <li className="mr-2 text-2xl font-bold pb-1">
                    <NavLink to="/" >
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? activeStyle : undefined}>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/clothes" className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/electronics" className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/furnitures" className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/toys" className={({ isActive }) => isActive ? activeStyle : undefined} >
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/others" className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60"> 
                    leonardosuarez@gmail.com
                </li>
                <li>
                    <NavLink to="/my-orders" className={({ isActive }) => isActive ? activeStyle : undefined}>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/my-account" className={({ isActive }) => isActive ? activeStyle : undefined}>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/sing-in" className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Sign In
                    </NavLink>
                </li>
                <li>
                    🛒0
                </li>
            </ul>
        </nav>
    )
}


export default NavBar