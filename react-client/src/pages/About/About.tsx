
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
            
        </div>
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
          

          <div className="flex justify-between bg-yellow-100 p-4 mb-8">
        <div className="flex items-center">
          <img src="https://img.icons8.com/ios-filled/50/000000/free-shipping.png" alt="Free Shipping" className="w-12 h-12 mr-2" />
          <div>
            <p className="font-bold">Free Shipping</p>
            <p className="text-xs">When ordering over $100</p>
          </div>
        </div>
        <div className="flex items-center">
          <img src="https://img.icons8.com/ios-filled/50/000000/return.png" alt="Free Return" className="w-12 h-12 mr-2" />
          <div>
            <p className="font-bold">Free Return</p>
            <p className="text-xs">Get Return within 30 days</p>
          </div>
        </div>
        <div className="flex items-center">
          <img src="https://img.icons8.com/ios-filled/50/000000/lock.png" alt="Secure Payment" className="w-12 h-12 mr-2" />
          <div>
            <p className="font-bold">Secure Payment</p>
            <p className="text-xs">100% Secure Online Payment</p>
          </div>
        </div>
        <div className="flex items-center">
          <img src="https://img.icons8.com/ios-filled/50/000000/star.png" alt="Best Quality" className="w-12 h-12 mr-2" />
          <div>
            <p className="font-bold">Best Quality</p>
            <p className="text-xs">Original Product Guaranteed</p>
          </div>
        </div>
      </div>
          {/* info */}
          <div className="info-section">
           
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