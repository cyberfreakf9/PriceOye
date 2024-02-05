import React from 'react'
import WatchSub from '@/components/smart-watches/watchsub'
import WatchSubgrid from '@/components/smart-watches/watchsubgrid'
const SmartWatches = () => {
  return (
    <div>
      <WatchSub />
      <div className="mobile-sub-message-container">
        <h2>Smart Watch Price In Pakistan</h2>
        <h5>
          404 smartwatch results found. Get your smartwatch at the lowest price
          in Pakistan. Find your favorite smartwatch with Priceoye.
        </h5>
      </div>
      <WatchSubgrid />
    </div>
  )
}

export default SmartWatches
