const Footer = () => {
    return (
        <footer className="">
            <section className="relative py-8">
                <div className="container mx-auto text-center relative">
                <img src="https://shopo-next.vercel.app/assets/images/discount-banner-1.jpg" alt="" className="w-full h-auto" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h2 className="text-2xl font-bold mb-4 text-white">Get 20% Off Discount Coupon</h2>
                    <p className="mb-4 text-white">by Subscribe our Newsletter</p>
                    <form className="flex justify-center">
                    <input type="email" placeholder="Email Address" className="p-2 w-64 border border-gray-300 rounded-l" />
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded-r">Get the Coupon</button>
                    </form>
                </div>
                </div>
            </section>
            <div className="flex justify-center items-center ">
            <img src="https://shopo-next.vercel.app/assets/images/logo.svg" alt="Centered Logo" className=""/>
            </div>
            <div className="flex  justify-evenly m-20 ">
                <div>
                    <h6 className="font-bold">About Us</h6>
                        <ul>
                            <li><a href="">We know there are a lot of threa <br />
                            developers our but we pride into a  <br />
                            firm in the industry.    </a></li>
                        </ul>
                </div>
                <div>
                    <h6 className="font-bold">Feature</h6>
                        <ul>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Terms Condition</a></li>
                            <li><a href="">Best Products</a></li>
                        </ul>
                </div>
                <div>
                    <h6 className="font-bold">General Links</h6>
                        <ul>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Tracking Order</a></li>
                            <li><a href="">Become Seller</a></li>
                        </ul>
                </div>
                <div>
                    <h6 className="font-bold">Helpful</h6>
                        <ul>
                            <li><a href="">Flash Sale</a></li>
                            <li><a href="">FAQ</a></li>
                            <li><a href="">Support</a></li>
                        </ul>
                </div>
            </div>

            <hr />
            <div>

                <div className="text-center">
                    <span>©2024 <a href="" className="font-bold ">Quomodosoft </a> All rights reserved</span>
                </div>
               
            </div>
        </footer>
    )
}

export default Footer