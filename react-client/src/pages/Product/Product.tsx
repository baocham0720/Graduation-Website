

const Product = () => {
  return (
   
    <div className="bg-gray-100">
      <div className="container mx-auto p-4">
        {/* Sidebar */}
        <div className="flex">
        <aside className="w-1/4 p-4 bg-white rounded-lg shadow-lg font-serif" >
          <h2 className="text-xl font-bold mb-4">Product Categories</h2>
          <ul className="space-y-2">
            <li>
              <input type="checkbox" id="mobile-laptops" className="mr-2 " />
              <label htmlFor="mobile-laptops">Mobile & Laptops</label>
            </li>
            <li>
              <input type="checkbox" id="gaming-entertainment" className="mr-2" />
              <label htmlFor="gaming-entertainment">Gaming Entertainment</label>
            </li>
            <li>
              <input type="checkbox" id="image-video" className="mr-2" />
              <label htmlFor="image-video">Image & Video</label>
            </li>
            <li>
              <input type="checkbox" id="vehicles" className="mr-2" />
              <label htmlFor="vehicles">Vehicles</label>
            </li>
            <li>
              <input type="checkbox" id="furnitures" className="mr-2" />
              <label htmlFor="furnitures">Furnitures</label>
            </li>
            <li>
              <input type="checkbox" id="sport" className="mr-2" />
              <label htmlFor="sport">Sport</label>
            </li>
            <li>
              <input type="checkbox" id="food-drinks" className="mr-2" />
              <label htmlFor="food-drinks">Food & Drinks</label>
            </li>
            <li>
              <input type="checkbox" id="fashion-accessories" className="mr-2" />
              <label htmlFor="fashion-accessories">Fashion Accessories</label>
            </li>
            <li>
              <input type="checkbox" id="toilet-sanitation" className="mr-2" />
              <label htmlFor="toilet-sanitation">Toilet & Sanitation</label>
            </li>
            <li>
              <input type="checkbox" id="makeup-corner" className="mr-2" />
              <label htmlFor="makeup-corner">Makeup Corner</label>
            </li>
            <li>
              <input type="checkbox" id="baby-items" className="mr-2" />
              <label htmlFor="baby-items">Baby Items</label>
            </li>
          </ul>

          <hr className="my-4 border-gray-300" />

          <div className="mt-4">
            <h3 className="text-lg font-semibold">Price Range</h3>
            <input type="range" className="w-full mt-2" />
          </div>

          <hr className="my-4 border-gray-300" />

          <h2 className="text-xl font-bold mb-4">Brands</h2>
          <ul className="space-y-2">
            <li>
              <input type="checkbox" id="apple" className="mr-2" />
              <label htmlFor="apple">Apple</label>
            </li>
            <li>
              <input type="checkbox" id="samsung" className="mr-2" />
              <label htmlFor="samsung">Samsung</label>
            </li>
            <li>
              <input type="checkbox" id="walton" className="mr-2" />
              <label htmlFor="walton">Walton</label>
            </li>
            <li>
              <input type="checkbox" id="oneplus" className="mr-2" />
              <label htmlFor="oneplus">Oneplus</label>
            </li>
            <li>
              <input type="checkbox" id="vivo" className="mr-2" />
              <label htmlFor="vivo">Vivo</label>
            </li>
            <li>
              <input type="checkbox" id="oppo" className="mr-2" />
              <label htmlFor="oppo">Oppo</label>
            </li>
            <li>
              <input type="checkbox" id="xiomi" className="mr-2" />
              <label htmlFor="xiomi">Xiomi</label>
            </li>
            <li>
              <input type="checkbox" id="others" className="mr-2" />
              <label htmlFor="others">Others</label>
            </li>
          </ul>

          <hr className="my-4 border-gray-300" />

          <h2 className="text-xl font-bold mb-4">Size</h2>
          <ul className="space-y-2">
            <li>
              <input type="checkbox" id="m" className="mr-2" />
              <label htmlFor="m">M</label>
            </li>
            <li>
              <input type="checkbox" id="xl" className="mr-2" />
              <label htmlFor="xl">XL</label>
            </li>
            <li>
              <input type="checkbox" id="xxl" className="mr-2" />
              <label htmlFor="xxl">XXL</label>
            </li>
            <li>
              <input type="checkbox" id="slim-fit" className="mr-2" />
              <label htmlFor="slim-fit">Slim Fit</label>
            </li>
          </ul>

          <hr className="my-4 border-gray-300" />

          <img src="https://shopo-next.vercel.app/assets/images/ads-5.png" alt="Advertisement" className="mt-4" />
        </aside>


          {/* Main content */}
          <div className="w-3/4 p-4">
            <div className="flex justify-between items-center mb-4">
              <span>Showing 1-16 of 66 results</span>
              <select className="border p-2 rounded">
                <option>Default</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {/* Product 1 */}
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <img src="https://shopo-next.vercel.app/assets/images/product-img-1.jpg" alt="Controller" className="w-full h-40  object-contain mb-4" />
                <h3 className="text-lg font-semibold mb-2">Xoggle aute et pariatur adipisicing nostrud et...</h3>
                <div className="flex items-center mb-2">
                  <div className="text-yellow-400">
                    ★★★☆☆
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="line-through text-gray-500">$27.27</span>
                  <span className="text-red-500">$18.73</span>
                </div>
              </div>
              {/* Product 2 */}
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <img src="https://shopo-next.vercel.app/assets/images/product-img-2.jpg" alt="Headset" className="w-full h-40  object-contain mb-4" />
                <h3 className="text-lg font-semibold mb-2">Geeky ipsum esse repreh est consequat</h3>
                <div className="flex items-center mb-2">
                  <div className="text-yellow-400">
                    ★★★★★
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="line-through text-gray-500">$24.55</span>
                  <span className="text-red-500">$17.79</span>
                </div>
              </div>
              {/* Product 3 */}
              <div className="bg-white p-4 rounded-lg shadow-lg relative">
                <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">POPULAR</div>
                <img src="https://shopo-next.vercel.app/assets/images/product-img-3.jpg" alt="Console" className="w-full h-40  object-contain mb-4" />
                <h3 className="text-lg font-semibold mb-2">Conjurica ea magna eiusmod esse cupt anim...</h3>
                <div className="flex items-center mb-2">
                  <div className="text-yellow-400">
                    ★★★★★
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="line-through text-gray-500">$32.63</span>
                  <span className="text-red-500">$18.03</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <img src="https://shopo-next.vercel.app/assets/images/product-img-4.jpg" alt="Controller" className="w-full h-40  object-contain mb-4" />
                <h3 className="text-lg font-semibold mb-2">Xoggle aute et pariatur adipisicing nostrud et...</h3>
                <div className="flex items-center mb-2">
                  <div className="text-yellow-400">
                    ★★★☆☆
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="line-through text-gray-500">$27.27</span>
                  <span className="text-red-500">$18.73</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <img src="https://shopo-next.vercel.app/assets/images/product-img-5.jpg" alt="Controller" className="w-full h-40  object-contain mb-4" />
                <h3 className="text-lg font-semibold mb-2">Xoggle aute et pariatur adipisicing nostrud et...</h3>
                <div className="flex items-center mb-2">
                  <div className="text-yellow-400">
                    ★★★☆☆
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="line-through text-gray-500">$27.27</span>
                  <span className="text-red-500">$18.73</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <img src="https://shopo-next.vercel.app/assets/images/product-img-6.jpg" alt="Controller" className="w-full h-40  object-contain mb-4" />
                <h3 className="text-lg font-semibold mb-2">Xoggle aute et pariatur adipisicing nostrud et...</h3>
                <div className="flex items-center mb-2">
                  <div className="text-yellow-400">
                    ★★★☆☆
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="line-through text-gray-500">$27.27</span>
                  <span className="text-red-500">$18.73</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <img src="https://shopo-next.vercel.app/assets/images/product-img-1.jpg" alt="Controller" className="w-full h-40  object-contain mb-4" />
                <h3 className="text-lg font-semibold mb-2">Xoggle aute et pariatur adipisicing nostrud et...</h3>
                <div className="flex items-center mb-2">
                  <div className="text-yellow-400">
                    ★★★☆☆
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="line-through text-gray-500">$27.27</span>
                  <span className="text-red-500">$18.73</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <img src="https://shopo-next.vercel.app/assets/images/product-img-1.jpg" alt="Controller" className="w-full h-40  object-contain mb-4" />
                <h3 className="text-lg font-semibold mb-2">Xoggle aute et pariatur adipisicing nostrud et...</h3>
                <div className="flex items-center mb-2">
                  <div className="text-yellow-400">
                    ★★★☆☆
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="line-through text-gray-500">$27.27</span>
                  <span className="text-red-500">$18.73</span>
                </div>
              </div>

              <div className="w-full flex justify-center items-center col-span-4">
                <img src="https://shopo-next.vercel.app/assets/images/ads-6.png" alt="Advertisement" className="max-w-full h-auto" />
              </div>
               

              <div className="bg-white p-4 rounded-lg shadow-lg">
                <img src="https://shopo-next.vercel.app/assets/images/product-img-1.jpg" alt="Controller" className="w-full h-40  object-contain mb-4" />
                <h3 className="text-lg font-semibold mb-2">Xoggle aute et pariatur adipisicing nostrud et...</h3>
                <div className="flex items-center mb-2">
                  <div className="text-yellow-400">
                    ★★★☆☆
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="line-through text-gray-500">$27.27</span>
                  <span className="text-red-500">$18.73</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <img src="https://shopo-next.vercel.app/assets/images/product-img-1.jpg" alt="Controller" className="w-full h-40  object-contain mb-4" />
                <h3 className="text-lg font-semibold mb-2">Xoggle aute et pariatur adipisicing nostrud et...</h3>
                <div className="flex items-center mb-2">
                  <div className="text-yellow-400">
                    ★★★☆☆
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="line-through text-gray-500">$27.27</span>
                  <span className="text-red-500">$18.73</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <img src="https://shopo-next.vercel.app/assets/images/product-img-1.jpg" alt="Controller" className="w-full h-40  object-contain mb-4" />
                <h3 className="text-lg font-semibold mb-2">Xoggle aute et pariatur adipisicing nostrud et...</h3>
                <div className="flex items-center mb-2">
                  <div className="text-yellow-400">
                    ★★★☆☆
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="line-through text-gray-500">$27.27</span>
                  <span className="text-red-500">$18.73</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <img src="https://shopo-next.vercel.app/assets/images/product-img-1.jpg" alt="Controller" className="w-full h-40  object-contain mb-4" />
                <h3 className="text-lg font-semibold mb-2">Xoggle aute et pariatur adipisicing nostrud et...</h3>
                <div className="flex items-center mb-2">
                  <div className="text-yellow-400">
                    ★★★☆☆
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="line-through text-gray-500">$27.27</span>
                  <span className="text-red-500">$18.73</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <img src="https://shopo-next.vercel.app/assets/images/product-img-1.jpg" alt="Controller" className="w-full h-40  object-contain mb-4" />
                <h3 className="text-lg font-semibold mb-2">Xoggle aute et pariatur adipisicing nostrud et...</h3>
                <div className="flex items-center mb-2">
                  <div className="text-yellow-400">
                    ★★★☆☆
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="line-through text-gray-500">$27.27</span>
                  <span className="text-red-500">$18.73</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <img src="https://shopo-next.vercel.app/assets/images/product-img-1.jpg" alt="Controller" className="w-full h-40  object-contain mb-4" />
                <h3 className="text-lg font-semibold mb-2">Xoggle aute et pariatur adipisicing nostrud et...</h3>
                <div className="flex items-center mb-2">
                  <div className="text-yellow-400">
                    ★★★☆☆
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="line-through text-gray-500">$27.27</span>
                  <span className="text-red-500">$18.73</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <img src="https://shopo-next.vercel.app/assets/images/product-img-1.jpg" alt="Controller" className="w-full h-40  object-contain mb-4" />
                <h3 className="text-lg font-semibold mb-2">Xoggle aute et pariatur adipisicing nostrud et...</h3>
                <div className="flex items-center mb-2">
                  <div className="text-yellow-400">
                    ★★★☆☆
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="line-through text-gray-500">$27.27</span>
                  <span className="text-red-500">$18.73</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <img src="https://shopo-next.vercel.app/assets/images/product-img-1.jpg" alt="Controller" className="w-full h-40  object-contain mb-4" />
                <h3 className="text-lg font-semibold mb-2">Xoggle aute et pariatur adipisicing nostrud et...</h3>
                <div className="flex items-center mb-2">
                  <div className="text-yellow-400">
                    ★★★☆☆
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="line-through text-gray-500">$27.27</span>
                  <span className="text-red-500">$18.73</span>
                </div>
              </div>
              {/* More products here... */}
            </div>
          </div>
        </div>
      </div>
      
    </div>
   
  );
};

export default Product;
