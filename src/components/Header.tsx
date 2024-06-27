const Header = () => {
    return (
        <header 
            className=" text-gray-100 border-b border-gray-200">
            <div className="container flex w-full mx-auto p-5 flex-col md:flex-row items-center">
                <a 
                    href="" 
                    className="font-medium  text-gray-100 mb-4 md:mb-0">
                    <span className="text-xl ml-3">
                        KATO TAISUKE
                    </span>
                </a>
                <nav className="md:ml-auto text-base">
                    <a href="#about" className="mr-5 hover:text-blue-400 duration-200">
                        プロフィール
                    </a>
                    <a href="#skils" className="mr-5 hover:text-blue-400 duration-200">
                        スキル
                    </a>
                    <a href="#business" className=" hover:text-blue-400 duration-200">
                        業務経歴
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default Header;