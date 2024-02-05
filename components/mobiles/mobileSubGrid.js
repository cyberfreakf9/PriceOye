import React from 'react'
import Mobilegridleft from './mobilegridleft'
import { data } from '@/utils/data'
const MobileSubGrid = () => {
  const checkList = ['Apple', 'Banana', 'Tea', 'Coffee']
  return (
    <div>
      <div className="mobile-sub-grid-container">
        <div className="mobile-sub-grid mobile-sub-grid1">
          <Mobilegridleft />
        </div>
        <div className="mobile-sub-grid mobile-sub-grid2">
          {/* Grid Panel Right */}
          {data.products.map((item) => {
            return (
              <div className="mobile-card-container">
                <div className="mobile-card-image">
                  <img src={item.image} />
                </div>
                <div className="mobile-card-title">{item.name}</div>
                <div className="mobile-card-price">Rs.{item.price}</div>
                <div className="mobile-card-cut-price">
                  <div className="mobile-card-cut">
                    {Math.floor(Math.round(item.price + item.price * 0.24))}
                  </div>
                  <div className="mobile-card-off">{item.cut}% off</div>
                </div>
              </div>
            )
          })}
        </div>
        {/* <div className="mobile-sub-grid-right-mobile-view">
        <span>Next</span>
      </div> */}
      </div>
      <div className="w-[80%] mx-auto mt-7">
        <h5>Mobile Finder</h5>
        <div className="mobile-sub-finder-grid">
          <div className="mobile-sub-finder">
            <div className="mobile-sub-input-phone">
              <div className="input-circle-flex">
                <span className="input-circle">1</span>
                <span>Mobile Phone</span>
              </div>
              <div className="mobile-sub-input-text">
                <input type="text" placeholder="Add Movies" />
              </div>
            </div>
            <div className="mobile-sub-input-range"></div>
            <div className="mobile-sub-input-imp-feature"></div>
            <div className="input-circle-flex">
              <span className="input-circle">2</span>
              <span>Price Rage</span>
            </div>
            <div className="mobile-sub-price-range-btns">
              <div>10,000-20,000</div>
              <div>20,000-30,000</div>
              <div>30,000-50,000</div>
              <div>50,000</div>
            </div>
            <div className="input-circle-flex">
              <span className="input-circle">3</span>
              <span>Important Feature</span>
            </div>
            <div className="mobile-sub-price-range-btns">
              <div>Camera</div>
              <div>Ram</div>
              <div>Display</div>
            </div>
            <button className="mobile-sub-input-btn">Find Mobiles</button>
          </div>
          <div className="mobile-sub-finder-grid-right">
            <h5>All Brand List</h5>
            <div className="mobile-sub-finder-grid-right-container">
              <span>
                <img src="images/brand-logo-1.jpg" />
              </span>
              <span>
                <img src="images/brand-logo-2.jpg" />
              </span>
              <span>
                <img src="images/brand-logo-3.jpg" />
              </span>
              <span>
                <img src="images/brand-logo-4.jpg" />
              </span>
              <span>
                <img src="images/brand-logo-5.jpg" />
              </span>
              <span>
                <img src="images/brand-logo-6.jpg" />
              </span>
              <span>
                <img src="images/brand-logo-7.jpg" />
              </span>
              <span>
                <img src="images/brand-logo-8.jpg" />
              </span>
              <span>
                <img src="images/brand-logo-9.jpg" />
              </span>
              <span>
                <img src="images/brand-logo-10.jpg" />
              </span>
              <span>
                <img src="images/brand-logo-12.jpg" />
              </span>
              <span>
                <img src="images/brand-logo-13.jpg" />
              </span>
              <span>
                <img src="images/brand-logo-14.jpg" />
              </span>
              <span>
                <img src="images/brand-logo-15.jpg" />
              </span>
              <span>
                <img src="images/brand-logo-16.png" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="footer-three-grid">
          <div>
            <span>
              <img src="images/footer-logo-1.svg" />
            </span>
            <span>100% Original Product</span>
          </div>
          <div>
            <span>
              <img src="images/footer-logo-2.svg" />
            </span>
            <span>Fast delivery</span>
          </div>
          <div>
            <span>
              <img src="images/footer-logo-3.svg" />
            </span>
            <span>Easy Replacement</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileSubGrid
