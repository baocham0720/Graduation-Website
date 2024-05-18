import {Link} from "react-router-dom"
// import {useCustomers} from "../../hooks/useCustomers"

const Header = () =>{
    // const {itemCount} = useCustomers();
    return (
        <header className="">
            <div className="container mx-auto">
             <div className="header-middle flex justify-between py-5">
                <div className="logo">
                    <img src="https://shopo-next.vercel.app/assets/images/logo-3.svg" alt="" />
                </div>
                <nav>
                    <ul className="flex gap-x-10">
                        <li>
                            <Link to={`/`}>Home</Link>
                        </li>
                        <li>
                            <Link to={`/shop`}>Shop</Link>
                        </li>
                        <li>
                            <Link to={`/pages`}>Pages</Link>
                        </li>
                        <li>
                            <Link to={`/about`}>About</Link>
                        </li>
                        <li>
                            <Link to={`/blog`}>Blog</Link>
                        </li>
                        <li>
                            <Link to={`/contact`}>Contact</Link>
                        </li>
                        <li>
                            <Link to={`/login`}>Login</Link>
                        </li>
                    </ul>
                </nav>
             </div>
            </div>
        </header>
    )
}

export default Header