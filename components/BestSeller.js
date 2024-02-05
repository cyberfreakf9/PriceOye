import React from 'react'

const BestSeller = () => {
  return (
    <div className="lg:w-[80%] mx-auto">
      <div className="m-5">
        <h3 className="text-center font-bold"> Best Seller</h3>
        <h4 className="text-center">Get the best price in town</h4>
      </div>
      <div className="best-seller-container">
        <div className=" best-sellers best-seller1">
          <div className="w-full h-full">
            <div className="m-5">
              <h4>Mini Hair Straightener</h4>
            </div>
            <div className="best-seller-img mt-2">
              <img src="images/best-price-grid-big.webp" alt="grid image" />
            </div>
            <div className="px-5 span-width">
              <span>Rs.599</span>
            </div>
            <div className="px-5">
              <span className="line-through opacity-60">4500</span>
              <span className="px-5">(40% OFF)</span>
            </div>
          </div>
        </div>
        <div className="best-sellers best-seller2">
          <div className="w-full h-[80%]">
            <div className="best-seller-grid-list">
              <div className="best-seller-grid-list-left">
                <h6>Dinglong</h6>
                <h6>Professional Beard</h6>
                <h6>And Hair Timmer</h6>
                <h6>RF-609</h6>
              </div>
              <div className="best-seller-grid-list-right">
                <img src="images/best-seller-trimmer.webp" alt="trimer" />
              </div>
            </div>
          </div>
          <div className="best-seller-grid-list-price ">Rs.2499</div>
          <div className="best-seller-grid-list-cut">
            <span className="best-seller-grid-cut-price">5000</span>
            <span>(50% OFF)</span>
          </div>
        </div>
        <div className="best-sellers best-seller3">
          <div className="w-full h-[80%]">
            <div className="best-seller-grid-list">
              <div className="best-seller-grid-list-left">
                <h6>Dinglong</h6>
                <h6>Professional Beard</h6>
                <h6>And Hair Timmer</h6>
                <h6>RF-609</h6>
              </div>
              <div className="best-seller-grid-list-right">
                <img src="images/best-seller-infinix.webp" alt="trimer" />
              </div>
            </div>
          </div>
          <div className="best-seller-grid-list-price">Rs.2499</div>
          <div className="best-seller-grid-list-cut">
            <span className="best-seller-grid-cut-price">5000</span>
            <span>(50% OFF)</span>
          </div>
        </div>
        <div className="best-sellers best-seller4">
          <div className="w-full h-[80%]">
            <div className="best-seller-grid-list">
              <div className="best-seller-grid-list-left">
                <h6>Dinglong</h6>
                <h6>Professional Beard</h6>
                <h6>And Hair Timmer</h6>
                <h6>RF-609</h6>
              </div>
              <div className="best-seller-grid-list-right">
                <img src="images/best-seller-infinix-buds.webp" alt="trimer" />
              </div>
            </div>
          </div>
          <div className="best-seller-grid-list-price">Rs.2499</div>
          <div className="best-seller-grid-list-cut">
            <span className="best-seller-grid-cut-price">5000</span>
            <span>(50% OFF)</span>
          </div>
        </div>
        <div className="best-sellers best-seller5">
          <div className="w-full h-[80%]">
            <div className="best-seller-grid-list">
              <div className="best-seller-grid-list-left">
                <h6>Dinglong</h6>
                <h6>Professional Beard</h6>
                <h6>And Hair Timmer</h6>
                <h6>RF-609</h6>
              </div>
              <div className="best-seller-grid-list-right">
                <img src="images/best-seller-mini-trimer.webp" alt="trimer" />
              </div>
            </div>
          </div>
          <div className="best-seller-grid-list-price">Rs.2499</div>
          <div className="best-seller-grid-list-cut">
            <span className="best-seller-grid-cut-price">5000</span>
            <span>(50% OFF)</span>
          </div>
        </div>
        {/* <div className="best-sellers best-seller6">6</div>
      <div className="best-sellers best-seller7">7</div>
      <div className="best-sellers best-seller8">8</div>
      <div className="best-sellers best-seller9">9</div>
      <div className="best-sellers best-seller10">10</div>
      <div className="best-sellers best-seller11">11</div>
      <div className="best-sellers best-seller12">12</div> */}
      </div>
    </div>
  )
}

export default BestSeller
