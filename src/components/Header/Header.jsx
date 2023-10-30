import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <header className="flex justify-center items-center ">
                <div className="container px-6 py-16 mx-auto">
                    <div className="items-center lg:flex">
                        <div className="w-full lg:w-1/2  flex justify-center items-center">
                            <div className="lg:max-w-lg">
                                <h1 className="text-3xl font-semibold dark:text-white lg:text-5xl text-indigo-600">Welcome to Crafter</h1>

                                <p className="mt-3 text-gray-600 dark:text-gray-400">Discover tech products that meet your needs at Crafter. We provide expertly curated options for gadgets, electronics, and more, helping you make informed choices and find the perfect tech solutions. Dive into innovation with Crafter, where technology meets expertise.</p>
                                <Link to=''>
                                    <button className="btn w-full px-5 py-2 mt-6 text-sm text-white  bg-indigo-600 rounded-lg lg:w-auto hover:bg-indigo-700">Shop Now</button>
                                </Link>

                            </div>
                        </div>

                        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                            {/* <img className="w-full h-full lg:max-w-3xl" src="https://merakiui.com/images/components/Catalogue-pana.svg" alt="Catalogue-pana.svg" /> */}
                            <img className="w-full h-full lg:max-w-3xl" src="/banner.png" alt="Catalogue-pana.svg" />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;


