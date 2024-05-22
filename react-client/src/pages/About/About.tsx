import React from 'react'
import './About.css';
const About = () => {
  return (
    <div className="container ">
      <div>
          <h1 className="blog-title">About Us</h1>
      </div>
      <div className="content">
          <img src="https://shopo-next.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fabout-banner.png&w=1920&q=75" alt="About Banner" />
          <div className="text-content">
              <div className="ecommerce-description">
                  <p><strong>What is e-commerce business?</strong></p>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when a printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting.</p>
              </div>
              <div className="product-description">
                  <ul>
                      <li>. Slim body with metal cover</li>
                      <li>. Latest Intel Core i5-1135G7 processor (4 cores / 8 threads)</li>
                      <li>. 8GB DDR4 RAM and fast 512GB PCIe SSD</li>
                      <li>. NVIDIA GeForce MX350 2GB GDDR5 graphics card</li>
                      <li>. Backlit keyboard</li>
                  </ul>
              </div>
              <div className="contact-us">
                  <button>Contact Us</button>
              </div>
          </div>
      </div>


        <div>
            <p className="feedback-title">Customers Feedback</p>
        </div>
        <div className="feedback-container">
            <div className="feedback-box">
                <div className="feedback-header">
                    <div className="stars">★★★★★</div>
                    <div className="rating">5.0</div>
                </div>
                <p className="feedback-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an into the find unknown printer took a galley of type and scrambled it to make a type inot the specimen book. It has survived not only five centuries but also the on leap into find it a electronic typesetting, remaining end to make it.</p>
                <div className="reviewer">
                   <img src="https://shopo-next.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fcomment-user-1.png&w=1920&q=75" alt=""  className="avatar" />
                    <div className="reviewer-info">
                        <p className="reviewer-name">John Doe</p>
                        <p className="reviewer-country">USA</p>
                    </div>
                </div>
            </div>
            <div className="feedback-box">
                <div className="feedback-header">
                    <div className="stars">★★★★★</div>
                    <div className="rating">5.0</div>
                </div>
                <p className="feedback-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an into the find unknown printer took a galley of type and scrambled it to make a type inot the specimen book. It has survived not only five centuries but also the on leap into find it a electronic typesetting, remaining end to make it.</p>
                <div className="reviewer">
                <img src="https://shopo-next.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fcomment-user-1.png&w=1920&q=75" alt=""  className="avatar" />
                    <div className="reviewer-info">
                        <p className="reviewer-name">Jane Smith</p>
                        <p className="reviewer-country">Canada</p>
                    </div>
                </div>
            </div>
            <div className="feedback-box">
                <div className="feedback-header">
                    <div className="stars">★★★★★</div>
                    <div className="rating">5.0</div>
                </div>
                <p className="feedback-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an into the find unknown printer took a galley of type and scrambled it to make a type inot the specimen book. It has survived not only five centuries but also the on leap into find it a electronic typesetting, remaining end to make it.</p>
                <div className="reviewer">
                <img src="https://shopo-next.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fcomment-user-1.png&w=1920&q=75" alt=""  className="avatar" />
                    <div className="reviewer-info">
                        <p className="reviewer-name">Alice Johnson</p>
                        <p className="reviewer-country">UK</p>
                    </div>
                </div>
            </div>
            <div className="feedback-navigation">
              <button className="nav-button prev-button">
                  <img src="https://img.icons8.com/ios-filled/50/000000/left.png" alt="Previous" />
              </button>
              <button className="nav-button next-button">
                  <img src="https://img.icons8.com/ios-filled/50/000000/right.png" alt="Next" />
              </button>
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

          {/* info */}
          <div className="info-section">
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
            <div className ="latest-section">
            <p className ="latest-title">My Latest</p>

            {/* blog */}
            <div className='grid-container'>
        <div className="image-container">
            <img src="https://shopo-next.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fblog-img-1.jpg&w=1920&q=75" alt="" />
            <p className='font'>Reprehenderit Non Esse Anim Laboris  <br /> Reprehenderit Officia</p>
            <p>irure laborum qui deserunt excepteur id ad sit quis laboris duis ut cillum eiusmod non sint exercitation nulla tempor nostrud eiusmod commodo...</p>
            <a href="https://example.com/blog" className="view-more-btn">View More</a>
        </div>
        <div className="image-container">
            <img src="https://shopo-next.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fblog-img-2.jpg&w=1920&q=75" alt="" />
            <p className='font'>Aliquip Duis Nostrud Ex Cillum Laborum Adipisicing</p>
            <p>adipisicing dolor esse voluptate occaecat laborum fugiat adipisicing laboris id cupidatat deserunt exercitation et velit consectetur eiusmod...</p>
            <a href="https://example.com/blog" className="view-more-btn">View More</a>
        </div>
       
       
        
      </div>
             {/* blog */}

        </div>
        </div>

        
</div>
  )
}

export default About