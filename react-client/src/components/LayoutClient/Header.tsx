import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <header className="">
            <div className="container mx-auto">
                <div className="header-middle flex justify-between py-5">
                    <div className="logo">
                        <img src="https://shopo-next.vercel.app/assets/images/logo-3.svg" alt="Logo" />
                    </div>
                    <nav>
                        <ul className="flex gap-x-10">
                            <li>
                                <Link to={`/`}>Home</Link>
                            </li>
                            <li>
                                <Link to={`/product`}>Shop</Link>
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
                                <Link to={`/login`}>
                                    <FontAwesomeIcon icon={faUser} />
                                </Link>
                            </li>
                            <li>
                                <Link to={`/cart`}>
                                    <FontAwesomeIcon icon={faShoppingCart} />
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
