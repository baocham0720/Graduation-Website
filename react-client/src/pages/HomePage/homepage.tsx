import { Link,  } from 'react-router-dom';
const HomePage = () => {
  return (
   
    
    <div className="container mx-auto p-4">
      {/* Header Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-gray-100 p-4">
          <h2 className="text-2xl font-bold">Apple Wireless</h2>
          <img src="https://shopo-next.vercel.app/assets/images/banner-1.png" alt="" />
          <h1 className="text-4xl font-bold">Samsung S10+</h1>
          <button className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded">   <Link to="/details">Shop Now</Link> </button>
        </div>
        <div className="grid grid-rows-2 gap-4">
  <div className="bg-gray-100 p-4">
    <h2 className="text-xl font-bold">Apple Smart Watch</h2>
    <img className="h-64 w-full object-cover" src="https://shopo-next.vercel.app/assets/images/banner-2.png" alt="Apple Smart Watch" />
    <button className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded">   <Link to="/details">Shop Now</Link> </button>
  </div>
  <div className="bg-gray-100 p-4">
    <h2 className="text-xl font-bold">Xbox 5th Version</h2>
    <img className="h-64 w-full object-cover" src="https://shopo-next.vercel.app/assets/images/banner-3.png" alt="Xbox 5th Version" />
    <button className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded">   <Link to="/details">Shop Now</Link> </button>
  </div>
</div>

      </div>

      {/* Features Section */}
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

      {/* Product Categories Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Gamer World</h2>
          <a href="#" className="text-black-500">View More →</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Product Cards */}
          <div className="bg-white p-4 rounded shadow">
            <img src="https://shopo-next.vercel.app/assets/images/product-img-1.jpg" alt="Product" className="w-full h-48 object-contain mb-4 rounded" />
            <div className="text-yellow-400">★★★☆☆</div>
            <h3 className="text-xl font-bold">Mobile & Tablet</h3>
            <p className="text-yellow-500">$99.99</p>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <img src="https://shopo-next.vercel.app/assets/images/product-img-2.jpg" alt="Product" className="w-full h-48  object-contain mb-4 rounded" />
            <div className="text-yellow-400">★★★☆☆</div>
            <h3 className="text-xl font-bold">Gaming Accessories</h3>
            <p className="text-yellow-500">$59.99</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <img src="https://shopo-next.vercel.app/assets/images/product-img-3.jpg" alt="Product" className="w-full h-48  object-contain mb-4 rounded" />
            <div className="text-yellow-400">★★★☆☆</div>
            <h3 className="text-xl font-bold">Gaming Consoles</h3>
            <p className="text-yellow-500">$299.99</p>
          </div>
        </div>
      </div>

      {/* Brands Section */}
      <div className="bg-gray-100 p-4 mb-8">
        <h2 className="text-2xl font-bold mb-4">Shop by Brand</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {/* Brand Logos */}
          <img src="https://shopo-next.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrand-1.png&w=1920&q=75" alt="Brand" className="mx-auto" />
          <img src="https://shopo-next.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrand-2.png&w=1920&q=75" alt="Brand" className="mx-auto" />
          <img src="https://shopo-next.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrand-3.png&w=1920&q=75" alt="Brand" className="mx-auto" />
          <img src="https://shopo-next.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrand-4.png&w=1920&q=75" alt="Brand" className="mx-auto" />
          <img src="https://shopo-next.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrand-5.png&w=1920&q=75" alt="Brand" className="mx-auto" />
          <img src="https://shopo-next.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrand-7.png&w=1920&q=75" alt="Brand" className="mx-auto" />
          <img src="https://shopo-next.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrand-9.png&w=1920&q=75" alt="Brand" className="mx-auto" />
          <img src="https://shopo-next.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrand-10.png&w=1920&q=75" alt="Brand" className="mx-auto" />
          <img src="https://shopo-next.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrand-11.png&w=1920&q=75" alt="Brand" className="mx-auto" />
          <img src="https://shopo-next.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrand-12.png&w=1920&q=75" alt="Brand" className="mx-auto" />
        </div>
      </div>

      {/* Flash Sale Section */}
      <div className="bg-yellow-100 p-4 mb-8 text-center relative">
        <div className="flex justify-center mt-16 space-x-8">
          <div className="relative">
            <img src="https://shopo-next.vercel.app/assets/images/campaign-cover-countdown.jpg" alt="Google Play" className="mr-2" />
            <h2 className="text-4xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">WOO! Flash Sale</h2>
            <button className="absolute top-3/4 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white px-4 py-2 rounded mt-4">Shop Now</button>
          </div>
          <div className="relative">
            <img src="https://shopo-next.vercel.app/assets/images/download-app-cover.png" alt="App Store" />
            <p className="text-4xl font-bold absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              Get Our <span className="text-red-500">Mobile App</span>
            </p>
            <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-16" src="https://shopo-next.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fapp-screen.png&w=1920&q=75" alt="Additional Image" />
          </div>
        </div>
      </div>






      {/* Top Selling Products Section */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Top Selling Products</h2>
          <a href="#" className="text-black-500">View More →</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Top Selling Product Cards */}
          <div className="bg-white p-4 rounded shadow">
            <img src="https://shopo-next.vercel.app/assets/images/product-img-4.jpg" alt="Product" className="w-full h-48 object-contain mb-4 rounded" />
            <div className="text-yellow-400">★★★☆☆</div>
            <h3 className="text-xl font-bold">Senmei ipsum dolore eiusmod dolor officia do nisi</h3>
            <p className="text-yellow-500">$199.99</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <img src="https://shopo-next.vercel.app/assets/images/product-img-5.jpg" alt="Product" className="w-full h-48 object-contain mb-4 rounded" />
            <div className="text-yellow-400">★★★☆☆</div>
            <h3 className="text-xl font-bold">Canopoly duis voluptate dolor sunt sit adipisicing in</h3>
            <p className="text-yellow-500">$299.99</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <img src="https://shopo-next.vercel.app/assets/images/product-img-6.jpg" alt="Product" className="w-full h-48 object-contain mb-4 rounded" />
            <div className="text-yellow-400">★★★☆☆</div>
            <h3 className="text-xl font-bold">Unisure aliqua repreh ex cupt qui elit officia</h3>
            <p className="text-yellow-500">$399.99</p>
          </div>
        </div>
      </div>

      {/* Best Deal Section */}
      <div className=" text-white">
        <div className="container mx-auto py-4">
          <img src="https://shopo-next.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fads-4.png&w=1920&q=75" alt="" />
        </div>
      </div>

      {/* Popular Sales Section */}
      <section className="container mx-auto my-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl font-bold">Popular Sales</h2>
            <a href="#" className="text-black-500">View More →</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {/* Sale Product Card */}
            <div className="bg-white p-4 rounded shadow">
              <img src="https://shopo-next.vercel.app/assets/images/product-img-1.jpg" alt="Xoggle aute et pariatur" className="w-full h-24 object-contain mb-4" />
              <h3 className="text-lg font-semibold">Xoggle aute et pariatur</h3>
              <p className="text-red-500 text-lg font-bold">$18.73 <span className="line-through text-gray-500">$27.27</span></p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <img src="https://shopo-next.vercel.app/assets/images/product-img-4.jpg" alt="Xoggle aute et pariatur" className="w-full h-24 object-contain mb-4" />
              <h3 className="text-lg font-semibold">Xoggle aute et pariatur</h3>
              <p className="text-red-500 text-lg font-bold">$18.73 <span className="line-through text-gray-500">$27.27</span></p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <img src="https://shopo-next.vercel.app/assets/images/product-img-2.jpg" alt="Xoggle aute et pariatur" className="w-full h-24 object-contain mb-4" />
              <h3 className="text-lg font-semibold">Xoggle aute et pariatur</h3>
              <p className="text-red-500 text-lg font-bold">$18.73 <span className="line-through text-gray-500">$27.27</span></p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <img src="https://shopo-next.vercel.app/assets/images/product-img-7.jpg" alt="Xoggle aute et pariatur" className="w-full h-24 object-contain mb-4" />
              <h3 className="text-lg font-semibold">Xoggle aute et pariatur</h3>
              <p className="text-red-500 text-lg font-bold">$18.73 <span className="line-through text-gray-500">$27.27</span></p>
            </div>
          </div>
        </section>

 <section className="py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-900">Best Seller</h2>
            <a href="#" className="text-black-500">View More →</a>
        </div>
        <div className="grid grid-cols-7 gap-4 justify-items-stretch">
            <div className="flex flex-col items-center flex-grow">
                <div className="bg-white p-4 rounded-full shadow-md">
                    <img src="https://shopo-next.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fsaller-1.png&w=1920&q=75" alt="Shopno BD" className="h-12 w-12" />
                </div>
                <span className="mt-2 text-sm text-gray-700">Shopno BD</span>
            </div>
            <div className="flex flex-col items-center flex-grow">
                <div className="bg-white p-4 rounded-full shadow-md">
                    <img src="https://shopo-next.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fsaller-2.png&w=1920&q=75" alt="Eecoms Shop" className="h-12 w-12" />
                </div>
                <span className="mt-2 text-sm text-gray-700">Eecoms Shop</span>
            </div>
            <div className="flex flex-col items-center flex-grow">
                <div className="bg-white p-4 rounded-full shadow-md">
                    <img src="https://shopo-next.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fsaller-3.png&w=1920&q=75" alt="Fusion X" className="h-12 w-12" />
                </div>
                <span className="mt-2 text-sm text-gray-700">Fusion X</span>
            </div>
            <div className="flex flex-col items-center flex-grow">
                <div className="bg-white p-4 rounded-full shadow-md">
                    <img src="https://shopo-next.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fsaller-4.png&w=1920&q=75" alt="Rikayi Rox" className="h-12 w-12" />
                </div>
                <span className="mt-2 text-sm text-gray-700">Rikayi Rox</span>
            </div>
            <div className="flex flex-col items-center flex-grow">
                <div className="bg-white p-4 rounded-full shadow-md">
                    <img src="https://shopo-next.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fsaller-5.png&w=1920&q=75" alt="Habbriyi" className="h-12 w-12" />
                </div>
                <span className="mt-2 text-sm text-gray-700">Habbriyi</span>
            </div>
            <div className="flex flex-col items-center flex-grow">
                <div className="bg-white p-4 rounded-full shadow-md">
                    <img src="https://shopo-next.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fsaller-6.png&w=1920&q=75" alt="Rayhans" className="h-12 w-12" />
                </div>
                <span className="mt-2 text-sm text-gray-700">Rayhans</span>
            </div>
        </div>
    </div>
</section>


<div className="py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4">
            <img src="https://shopo-next.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fads-1.png&w=1920&q=75" alt="Image 1" className="w-full h-auto rounded-md shadow-md" />
            <img src="https://shopo-next.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fads-2.png&w=1920&q=75" alt="Image 2" className="w-full h-auto rounded-md shadow-md" />
        </div>
    </div>
</div>


<section className="py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-900">Popular Sales</h2>
            <a href="#" className="text-black-500">View More →</a>
        </div>
        <div className="grid grid-cols-4 gap-4">
        <div className="col-span-1 bg-white p-4 rounded-md shadow-md relative">
            <h3 className="text-lg font-medium text-gray-900 mb-2 relative z-10">Electronics</h3>
            <ul className="relative z-10">
                <li><a href="#" className="text-sm text-gray-700">Xiaomi</a></li>
                <li><a href="#" className="text-sm text-gray-700">Apple</a></li>
                <li><a href="#" className="text-sm text-gray-700">Google</a></li>
                <li><a href="#" className="text-sm text-gray-700">Samsung</a></li>
            </ul>
            <a href="#" className="text-black-500 mt-4 block relative z-10">Shop Now →</a>
            <img src="https://shopo-next.vercel.app/assets/images/section-category-2.jpg" alt="Electronics" className="absolute inset-0 w-full h-full object-cover rounded-md z-0" />
            <div className="absolute inset-0 bg-white opacity-50 rounded-md"></div> 
        </div>

            <div className="col-span-3 grid grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-md shadow-md">
                    <img src="https://shopo-next.vercel.app/assets/images/product-img-5.jpg" alt="Product 1" className="w-24 h-24 object-contain" />
                    <div className="text-yellow-400">★★★☆☆</div>
                    <h3 className="text-lg font-semibold">Xoggle aute et pariatur</h3>
                    <p className="text-red-500 text-lg font-bold">$10.42 <span className="line-through text-gray-500">$39.27</span></p>
                </div>
                <div className="bg-white p-4 rounded-md shadow-md">
                    <img src="https://shopo-next.vercel.app/assets/images/product-img-6.jpg" alt="Product 2" className="w-24 h-24 object-contain" />
                    <div className="text-yellow-400">★★★☆☆</div>
                    <h3 className="text-lg font-semibold">Xoggle aute et pariatur</h3>
                    <p className="text-red-500 text-lg font-bold">$16.43 <span className="line-through text-gray-500">$36.90</span></p>
                </div>
                <div className="bg-white p-4 rounded-md shadow-md">
                    <img src="https://shopo-next.vercel.app/assets/images/product-img-7.jpg" alt="Product 3" className="w-24 h-24 object-contain" />
                    <div className="text-yellow-400">★★★☆☆</div>
                    <h3 className="text-lg font-semibold">Xoggle aute et pariatur</h3>
                    <p className="text-red-500 text-lg font-bold">$11.92 <span className="line-through text-gray-500">$26.62</span></p>
                </div>
            </div>
        </div>
    </div>
</section>



    </div>

 
  );
};

export default HomePage;
