import React from 'react'
import { watches } from '@/utils/data'
import Link from 'next/link'
const WatchSub = () => {
  return (
    <>
      <div className="mobile-sub-container">
        <div className="mobile-sub-panel">
          {watches.watchSub.map((item) => {
            return (
              <div className="mobile-sub-container-image">
                <Link href={item.url}>
                  <img src={item.image} alt={item.name} />
                </Link>
                {/* <img src={item.image} alt={item.name} /> */}
              </div>
            )
          })}
          {/* <div className="mobile-sub-container-image">
            <img src="images/mobile-sub-1.jpg" alt="mobile image" />
          </div> */}
          {/* <div className="mobile-sub-container-image">
            <img src="images/mobile-sub-2.jpg" alt="mobile image" />
          </div>
          <div className="mobile-sub-container-image">
            <img src="images/mobile-sub-3.jpg" alt="mobile image" />
          </div>
          <div className="mobile-sub-container-image">
            <img src="images/mobile-sub-4.jpg" alt="mobile image" />
          </div>
          <div className="mobile-sub-container-image">
            <img src="images/mobile-sub-5.jpg" alt="mobile image" />
          </div>
          <div className="mobile-sub-container-image">
            <img src="images/mobile-sub-6.jpg" alt="mobile image" />
          </div>
          <div className="mobile-sub-container-image">
            <img src="images/mobile-sub-7.jpg" alt="mobile image" />
          </div>
          <div className="mobile-sub-container-image">
            <img src="images/mobile-sub-8.png" alt="mobile image" />
          </div> */}
        </div>
      </div>
      <section>
        <div className="mobile-sub-banner">
          <img src="/images/watch-sub-banner.jpg" alt="banner image" />
        </div>
      </section>
    </>
  )
}

export default WatchSub
