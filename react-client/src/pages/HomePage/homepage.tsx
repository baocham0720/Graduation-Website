import './HomePage.css';

const HomePage = () => {
  return (
    <div>  
        <div className='slides'>
          <div className='left'> 
            <img src="https://shopo-next.vercel.app/assets/images/banner-1.png" alt="" />
          </div>
          <div className='right'>
            <img src="https://shopo-next.vercel.app/assets/images/banner-2.png" alt="" />
            <img src="https://shopo-next.vercel.app/assets/images/banner-3.png" alt="" />
          </div>
        </div>

           <div className="info-box">
                <div className="info-item">
                    <img src="https://img.icons8.com/ios-filled/50/000000/free-shipping.png" alt="Free Shipping" />
                    <p>Free Shipping</p>
                    <a>When ordering over $100</a>
                </div>
                <div className="info-item">
                    <img src="https://img.icons8.com/ios-filled/50/000000/return.png" alt="Free Return" />
                    <p>Free Return</p>
                    <a>Get Return within 30 days</a>
                </div>
                <div className="info-item">
                    <img src="https://img.icons8.com/ios-filled/50/000000/lock.png" alt="Secure" />
                    <p>Secure Payment</p>
                    <a>100% Secure Online Payment</a>
                </div>
                <div className ="info-item">
                    <img src="https://img.icons8.com/ios-filled/50/000000/star.png" alt="Best" />
                    <p>Best Quality</p>
                    <a>Original Product Guarenteed</a>
                </div>
            </div>


          <div className='img-banner'>
              <img src="https://shopo-next.vercel.app/assets/images/discount-banner-1.jpg" alt="" />
              <div className="email-container">
                <p className='get'>Get <span> 20%</span> Off Discount Coupon</p>
                <p>by Subscribe our Newsletter</p>
                <input type="email" placeholder="EMAIL ADDRESS" className="email-input" />
                <button className="email-btn">Get the Coupon</button>
              </div>
          </div> 


          
    </div>
  )
}

export default HomePage