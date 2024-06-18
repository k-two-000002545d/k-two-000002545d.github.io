const Header = () => {
    return (
        <header 
            className=" text-gray-700 border-b border-gray-200">
            <div className="container flex w-full mx-auto p-5 flex-col md:flex-row items-center">
                <a 
                    href="" 
                    className="font-medium  text-gray-900 mb-4 md:mb-0">
                    <span className="text-xl ml-3">
                        K-TWO
                    </span>
                </a>
                <nav className="md:ml-auto text-base">
                    <a href="" className="mr-5 hover:text-blue-400 duration-200">
                        Home
                    </a>
                    <a href="" className="mr-5 hover:text-blue-400 duration-200">
                        About
                    </a>
                    <a href="" className=" hover:text-blue-400 duration-200">
                        Skils
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default Header;