import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../../../assets/logo.svg";
import PropTypes from "prop-types";
import { AuthContext } from "../../../../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = ({ isTrue }) => {
    const { user, userLogOut } = useContext(AuthContext)
    const [openToggle, setOpenTOggle] = useState(false)

    const LogOut = () => {
        userLogOut()
            .then(() => {
                toast.success('Successfully LogOut')
            })
            .catch(error => {
                if (error) {
                    toast.error('Somthing Wrong, Please try Again!')
                }
            })
    }


    return (

        <header className="bg-white w-full z-20 top-0 start-0 border-b">
            <div className="container mx-auto px-4 md:px-12 lg:px-24 py-4">
                <div className={`flex flex-wrap items-center justify-between`}>
                    <Link to={'/'} className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={Logo} className="h-16" alt="Logo" />

                    </Link>
                    <div className={`flex md:order-2 ${user ? "block gap-3" : isTrue ? "md:hidden" : "block"} space-x-3 md:space-x-0 rtl:space-x-reverse`}>
                        <button type="button" className={`text-[#FF3811] border border-[#FF3811] focus:ring-1 focus:outline-none ${isTrue ? "hidden" : "block"} focus:ring-[#FF3811] font-medium rounded text-sm px-4 py-2.5 text-center font-inter`}>Appointment</button>
                        <button onClick={LogOut} type="button" className={`text-[#FF3811] border border-[#FF3811] focus:ring-1 focus:outline-none ${user ? "block" : "hidden"} focus:ring-[#FF3811] font-medium rounded text-sm px-4 py-2.5 text-center font-inter`}>Sign Out</button>

                        <ToastContainer />

                        <button
                            onClick={() => setOpenTOggle(!openToggle)}
                            type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#444444] hover:text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#444444] hover:bg-[#444444] focus:ring-[#444444]">
                            {/* <span className="sr-only">Open main menu</span> */}
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <nav className={`${openToggle ? "bolck" : "hidden"} items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-sticky`}>
                        {
                            isTrue ? (
                                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                                    <li>
                                        <Link to={'/deshboard'} className="block py-2 px-3 rounded md:bg-transparent md:text-[#FF3811] md:p-0" aria-current="page">Order</Link>
                                    </li>
                                    <li>
                                        <Link className="block py-2 px-3 text-[#444444] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#FF3811] md:p-0">Order Review</Link>
                                    </li>
                                    <li>
                                        <Link className="block py-2 px-3 text-[#444444] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#FF3811] md:p-0">Manage Inventory</Link>
                                    </li>
                                    <li>
                                        <Link to={'/deshboard/login'} className="block py-2 px-3 text-[#444444] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#FF3811] md:p-0">Login</Link>
                                    </li>
                                </ul>
                            ) :
                                (
                                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                                        <li>
                                            <Link to={'/'} className="block py-2 px-3 rounded md:bg-transparent md:text-[#FF3811] md:p-0" aria-current="page">Home</Link>
                                        </li>
                                        <li>
                                            <Link className="block py-2 px-3 text-[#444444] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#FF3811] md:p-0">About</Link>
                                        </li>
                                        <li>
                                            <Link className="block py-2 px-3 text-[#444444] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#FF3811] md:p-0">Services</Link>
                                        </li>
                                        <li>
                                            <Link className="block py-2 px-3 text-[#444444] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#FF3811] md:p-0">Blog</Link>
                                        </li>
                                        <li>
                                            <Link className="block py-2 px-3 text-[#444444] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#FF3811] md:p-0">Contact</Link>
                                        </li>
                                    </ul>
                                )
                        }

                    </nav>
                </div>
            </div>
        </header>
    );
};

Header.propTypes = {
    isTrue: PropTypes.bool
}

export default Header;