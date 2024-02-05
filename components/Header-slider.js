'use client'
import React from 'react'
import Slider from 'react-slick'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
const Headerslider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  function SampleNextArrow(props) {
    const { className, style, onClick } = props
    return (
      <div onClick={onClick}>
        <span className="absolute top-[45%] right-[20px] z-10  bg-slate-300 opacity-30 hover:opacity-70 cursor-pointer py-2 px-2 md:py-4 md:px-4 rounded-full">
          <BsChevronRight />
        </span>
      </div>
      // />
    )
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props
    return (
      <div className="z-10" onClick={onClick}>
        <span className="absolute top-[45%] left-[20px] z-10  bg-slate-300 opacity-30 hover:opacity-70 cursor-pointer py-2 px-2 md:py-4 md:px-4 rounded-full">
          <BsChevronLeft />
        </span>
      </div>
      // />
    )
  }
  return (
    <div className="mt-1">
      <Slider {...settings}>
        <div>
          <img src="images/slide-1.jpg" alt="image slider" />
        </div>
        <div>
          <img src="images/slide-2.jpg" alt="image slider" />
        </div>
        <div>
          <img src="images/slide-3.jpg" alt="image slider" />
        </div>
        <div>
          <img src="images/slide-4.jpg" alt="image slider" />
        </div>
        <div>
          <img src="images/slide-5.jpg" alt="image slider" />
        </div>
      </Slider>
    </div>
  )
}

export default Headerslider
