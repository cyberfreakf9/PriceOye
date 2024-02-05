import React from 'react'

const ShopByPrice = () => {
  return (
    <div className="w-full">
      <div className="w-[90%] lg:w-[80%] mx-auto mt-10">
        <div className="mb-5">
          <h6>Shop By Price</h6>
        </div>
        <div className="item-price-container">
          <div className="item-prices item-price1 item-price-shadow">
            Below Rs 15,000
          </div>
          <div className="item-prices item-price2 item-price-shadow">
            Rs.15,5000-Rs.25,000
          </div>
          <div className="item-prices item-price3 item-price-shadow">
            Rs.25,000-Rs.40,000
          </div>
          <div className="item-prices item-price4 item-price-shadow">
            Rs.40,000-Rs-60,000
          </div>
          <div className="item-prices item-price5 item-price-shadow">
            Rs 60,000-Rs.80,000
          </div>
          <div className="item-prices item-price6 item-price-shadow">
            Rs.80,5000-Rs.100,000
          </div>
          <div className="item-prices item-price7 item-price-shadow">
            Rs.100,000-Rs.40,000
          </div>
          <div className="item-prices item-price8 item-price-shadow">
            Above Rs-150,000
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopByPrice
