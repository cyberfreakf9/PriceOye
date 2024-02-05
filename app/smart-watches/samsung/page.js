import React from 'react'
import WatchSub from '@/components/smart-watches/watchsub'
import WatchSubgrid from '@/components/smart-watches/watchsubgrid'
import WatchSubSearch from '@/components/watchsubsearch'
const SamSungList = () => {
  return (
    <div>
      <WatchSub />
      <div className="mobile-sub-message-container">
        <h2>Shop Samsung Smart Watches in Pakistan January 2024</h2>
        <h5>
          16 Samsung Smart Watch results found. Browse PriceOye and buy Samsung
          smart watches at the lowest rates online.
        </h5>
      </div>
      {/* <WatchSubgrid /> */}
      <WatchSubSearch />
    </div>
  )
}

export default SamSungList
