import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { IoCartSharp } from 'react-icons/io5';
import { FaShoppingCart } from 'react-icons/fa';
import UseCart from '../../../Hooks/UseCart';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [cart] = UseCart()
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navOption = <>

        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/menu'}>Our Menu</Link></li>
        <li><Link to={'/order/salad'}>Order Food</Link></li>
        <li><Link to={'/secret'}>Secret</Link></li>
        <li>
            <Link to={'/dashboard/cart'}>
                <button className="btn">
                    <FaShoppingCart></FaShoppingCart>
                    <div className="badge badge-sm badge-secondary">+{cart.length}</div>
                </button>
            </Link>
        </li>

        {
            user ? <>
                {/* <span><p>{user?.displayName}</p></span> */}
                <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
            </> : <><li><Link to={'/login'}>Login</Link></li></>
        }

    </>
    return (
        <div>
            <div className="navbar fixed z-10 bg-gray-800/50 max-w-screen-xl text-white shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm  dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navOption}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 justify-center items-center flex">
                        {navOption}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;