const Footer = () => {
    return (
        <footer className="">
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
               <i className="fab fa-facebook"></i>
               
                <div>
                    <span>©2022 <a href="" className="font-bold ">Quomodosoft </a> All rights reserved</span>
                </div>
                <div></div>
            </div>
        </footer>
    )
}

export default Footer