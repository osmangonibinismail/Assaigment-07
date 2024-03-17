import { FaHome } from "react-icons/fa";
const Header = () => {
    return(
    <div className="mx-auto max-w-[100%] lg:max-w-[80%] py-5">
         <div className="navbar bg-base-100">
             <div className="navbar-start">
                <div className="dropdown">
                    <a className="btn btn-ghost text-3xl rounded-3xl">OAI Cooking Academy</a>
                </div>
        </div>
        <div className="navbar-center gap-4">
            <p>Home</p>
            <p>Recipes</p>
            <p>About</p>
            <p>Search</p>
        </div>
        <div className="navbar-end gap-3">
        <label className="input input-bordered flex items-center gap-2 rounded-full bg-gray-200">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
        <input type="text" className="grow" placeholder="Search" />
    
        </label>
        <button className="btn btn-ghost btn-circle bg-green-300">
        <FaHome />
        </button>
    
    </div>
</div>
        </div>
    )
}
export default Header;