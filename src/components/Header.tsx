const Header = () => {
    return (
        <div className="flex flex-row justify-around items-center bg-gray-300">
            <div>
                <img className="w-28 h-30 rounded-full"
                     src="https://i.pinimg.com/originals/5d/9d/b8/5d9db8bc07e68add8039cd3b3f96a17a.png"/>
                <p className="italic text-gray-500">a super cool design agency...</p>
            </div>
            <ul className="w-400 flex flex-row justify-around mt-10">
                <li className="w-20 h-20 text-blue-900 font-bold hover:bg-gray-400 text-center border-t-2">HOME</li>
                <li className="w-20 h-20 text-blue-900 font-bold hover:bg-gray-400 text-center border-t-2">PORTFOLIO</li>
                <li className="w-20 h-20 text-blue-900 font-bold hover:bg-gray-400 text-center border-t-2">BLOG</li>
                <li className="w-20 h-20 text-blue-900 font-bold hover:bg-gray-400 text-center border-t-2">SERVICES</li>
                <li className="w-20 h-20 text-blue-900 font-bold hover:bg-gray-400 text-center border-t-2">ABOUT</li>
            </ul>
        </div>
    )
}

export default Header;