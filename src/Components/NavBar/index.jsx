import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { ShoppingCartIcon } from "@heroicons/react/16/solid";

const NavBar = () => {

    const activeStyle = 'underline underline-offset-4 ';
    const context = useContext(ShoppingCartContext);
    const LiClassname = 'transition-all ease-in-out duration-200 hover:underline hover:underline-offset-4 hover:text-gray-500';

    return (
        <nav className="fixed top-0 z-10 flex items-center justify-between w-full px-8 py-5 font-semibold bg-gray-50">
            <ul className="flex items-center gap-3 ">
                <li className="mr-2 text-2xl font-bold pb-1 ">
                    <NavLink to="/" >
                        Shopi
                    </NavLink>
                </li>
                <li className={LiClassname}>
                    <NavLink to="/" className={({ isActive }) => isActive ? activeStyle : undefined}>
                        All
                    </NavLink>
                </li>
                <li className={LiClassname}>
                    <NavLink to="/clothes" className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Clothes
                    </NavLink>
                </li>
                <li className={LiClassname}>
                    <NavLink to="/electronics" className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Electronics
                    </NavLink>
                </li>
                <li className={LiClassname}>
                    <NavLink to="/furnitures" className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Furnitures
                    </NavLink>
                </li>
                <li className={LiClassname}>
                    <NavLink to="/toys" className={({ isActive }) => isActive ? activeStyle : undefined} >
                        Toys
                    </NavLink>
                </li>
                <li className={LiClassname}>
                    <NavLink to="/others" className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60 cursor-default"> 
                    leonardosuarez@gmail.com
                </li>
                <li className={LiClassname}>
                    <NavLink to="/my-orders" className={({ isActive }) => isActive ? activeStyle : undefined}>
                        My Orders
                    </NavLink>
                </li>
                <li className={LiClassname}>
                    <NavLink to="/my-account" className={({ isActive }) => isActive ? activeStyle : undefined}>
                        My Account
                    </NavLink>
                </li>
                <li className={LiClassname}>
                    <NavLink to="/sing-in" className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Sign In
                    </NavLink>
                </li>
                <li className="flex items-center justify-between text-lg">
                    <ShoppingCartIcon className="size-6"/>{context.count}
                </li>
            </ul>
        </nav>
    )
}


export default NavBar