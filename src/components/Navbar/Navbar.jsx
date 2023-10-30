import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => toast.success(`User LogOut Successfully`))
            .catch(error => toast.error(error))
    }

    // Function to extract the email part
    const extractEmailPart = (email) => {
        const emailParts = email.split('@');
        if (emailParts.length > 0) {
            return emailParts[0];
        }
        return email;
    }

    return (
        <div>
            <div className="navbar bg-slate-100 shadow-md">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to='/' className='font-medium'>Home</NavLink></li>
                            {user ? (
                                <li><NavLink to='/profile' className='font-medium'>Profile</NavLink></li>
                            ) : null}
                            <li><NavLink to='/addProduct' className='font-medium'>Add Product</NavLink></li>
                            {user ? (<li><NavLink to='/allProduct' className='font-medium'>All Product</NavLink></li>) : null}
                            <li><NavLink to='/myCart' className='font-medium'>My Cart</NavLink></li>
                            <li><NavLink to='/signUp' className='font-medium'>SignUp</NavLink></li>
                        </ul>
                    </div>
                    <NavLink to='/' className="btn btn-ghost normal-case text-2xl font-semibold text-indigo-700 md:text-4xl lg:text-4xl">Crafter</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-2">
                        <li><NavLink to='/' className='font-medium'>Home</NavLink></li>
                        {user ? (
                            <li><NavLink to='/profile' className='font-medium'>Profile</NavLink></li>
                        ) : null}
                        <li><NavLink to='/addProduct' className='font-medium'>Add Product</NavLink></li>
                        {user ? (<li><NavLink to='/allProduct' className='font-medium'>All Product</NavLink></li>) : null}
                        <li><NavLink to='/myCart' className='font-medium'>My Cart</NavLink></li>
                        <li><NavLink to='/signUp' className='font-medium'>SignUp</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className=" lg:p-1">
                        {user ? (
                            <div className="p-1">
                                <div className="flex justify-between mb-2">
                                    <kbd className="font-bold kbd  lg:kbd-md md:m-1 lg:m-1">{extractEmailPart(user.email)}</kbd>
                                    <img className="rounded-full border-2 border-black w-12 " src={user.photoURL || 'https://cdn-icons-png.flaticon.com/128/64/64572.png'} alt="IMG" />
                                </div>
                                <button onClick={handleLogOut} className="ml-3 btn btn-sm btn-outline btn-primary lg:btn lg:btn-outline md:btn md:btn-outline">LogOut</button>
                            </div>
                        ) : (
                            <NavLink to='/logIn'>
                                <button className="btn btn-outline btn-primary">Login</button>
                            </NavLink>
                        )}
                        <Toaster />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
