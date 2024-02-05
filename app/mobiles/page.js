import MobileSubGrid from '@/components/mobiles/mobileSubGrid'
import MobileSub from '@/components/mobiles/mobilesub'
import React from 'react'

const MobileList = () => {
  return (
    <div>
      <MobileSub />
      <div className="mobile-sub-message-container">
        <h2>Buy Mobile Phones in Pakistan 2024</h2>
        <h5>
          539 results for Mobiles. Find a wide range of mobiles at the lowest
          rates in Pakistan, only at PriceOye.
        </h5>
      </div>
      <MobileSubGrid />
    </div>
  )
}

export default MobileList
