import React from 'react'

const Approve = () => {
  return (
    <div className="approve-container">
      <div className="approved">
        <div className="approved-panels approve-panel1">
          <img src="/images/approve-1.svg" alt="approve images" />
          <div className="text-grid">
            <h5 className="text-center">PTA Approved</h5>
            <h6 className="text-center">Mobile Phones</h6>
          </div>
        </div>
        <div className="approved-panels approve-panel2">
          <img src="/images/approve-2.svg" alt="approve images" />
          <div className="text-grid">
            <h5 className="text-center">1 Year</h5>
            <h6 className="text-center">Brand Waranty</h6>
          </div>
        </div>
        <div className="approved-panels approve-panel3">
          <img src="/images/approve-3.svg" alt="approve images" />
          <div className="text-grid">
            <h5 className="text-center">48hr Delivery</h5>
            <h6 className="text-center">Open Parcel</h6>
          </div>
        </div>
        <div className="approved-panels approve-panel4">
          <img src="/images/approve-4.svg" alt="approve images" />
          <div className="text-grid">
            <h5 className="text-center">Free Delivery</h5>
            <h6 className="text-center">All Over Pakistan</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Approve
