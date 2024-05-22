import React from 'react'
type Image = {
  src: string,
  alt: string
}
type Props ={
    title: string, 
    description: string,
    images: Image[],
    price?: number,
}
const Product = () => {
  return (
    <div className='container p-0 mt-10'>
      <img src="{props.images[0].src}" alt="{props.iamges[0].alt}" />
      <div>
        <h1>Shop</h1>
      </div>
      <div>
          <button>Buy now</button>
      </div>
    </div>

  
  )
}

export default Product