import React from 'react'
import { data } from '@/utils/data'
import { watches } from '@/utils/data'
import WatchGridLeft from '../components/smart-watches/watchgridleft'
import Link from 'next/link'
const WatchSubSearch = () => {
  const checkList = ['Apple', 'Banana', 'Tea', 'Coffee']
  const samsung = watches.watch.filter((item) => {
    return item.brand == 'samsung'
  })
  return (
    <div>
      <div className="mobile-sub-grid-container">
        <div className="mobile-sub-grid mobile-sub-grid1">
          <WatchGridLeft />
        </div>
        <div className="mobile-sub-grid mobile-sub-grid2">
          {/* Grid Panel Right */}
          {samsung.map((item) => {
            return (
              <div className="mobile-card-container cursor-pointer">
                <div className="mobile-card-image">
                  <Link href={`/smart-watches/${item.brand}/${item.id}`}>
                    <img src={item.image} />
                  </Link>
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
      </div>

      <div className="bg-white">
        <div className="footer-three-grid">
          <div>
            <span>
              <img src="/images/footer-logo-1.svg" />
            </span>
            <span>100% Original Product</span>
          </div>
          <div>
            <span>
              <img src="/images/footer-logo-2.svg" />
            </span>
            <span>Fast delivery</span>
          </div>
          <div>
            <span>
              <img src="/images/footer-logo-3.svg" />
            </span>
            <span>Easy Replacement</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WatchSubSearch
