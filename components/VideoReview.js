'use client'
import React from 'react'
import Slider from 'react-slick'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
const VideoReview = () => {
  const settingss = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // slidesPerRow: 2,
    responsive: [
      {
        breakpoint: 767,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
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
    <div className="w-full lg:w-[80%] mx-auto video-review-container">
      <h5 className="text-center mt-5">Love and Recommended</h5>
      <h6 className="text-center mb-5">
        influencers talk about pirceoye as trusted brand
      </h6>
      <div className="video-review-panel">
        <Slider {...settingss}>
          <div className="video-reviews video-review1">
            <iframe
              width="400"
              height="100%"
              src="https://www.youtube.com/embed/LEcj8UWul94?si=p7TABRris38P_9Qq"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer;
            autoplay; clipboard-write; encrypted-media; gyroscope;
            picture-in-picture; web-share"
              allowfullscreen
            >
              {' '}
            </iframe>
          </div>
          <div className="video-reviews video-review2">
            {' '}
            <iframe
              width="400"
              height="100%"
              src="https://www.youtube.com/embed/LEcj8UWul94?si=p7TABRris38P_9Qq"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer;
            autoplay; clipboard-write; encrypted-media; gyroscope;
            picture-in-picture; web-share"
              allowfullscreen
            >
              {' '}
            </iframe>
          </div>
          <div className="video-reviews video-review3">
            {' '}
            <iframe
              width="400"
              height="100%"
              src="https://www.youtube.com/embed/LEcj8UWul94?si=p7TABRris38P_9Qq"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer;
            autoplay; clipboard-write; encrypted-media; gyroscope;
            picture-in-picture; web-share"
              allowfullscreen
            >
              {' '}
            </iframe>
          </div>
          <div className="video-reviews video-review4">
            {' '}
            <iframe
              width="400"
              height="100%"
              src="https://www.youtube.com/embed/LEcj8UWul94?si=p7TABRris38P_9Qq"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer;
            autoplay; clipboard-write; encrypted-media; gyroscope;
            picture-in-picture; web-share"
              allowfullscreen
            >
              {' '}
            </iframe>
          </div>
          <div className="video-reviews video-review5">
            {' '}
            <iframe
              width="400"
              height="100%"
              src="https://www.youtube.com/embed/LEcj8UWul94?si=p7TABRris38P_9Qq"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer;
            autoplay; clipboard-write; encrypted-media; gyroscope;
            picture-in-picture; web-share"
              allowfullscreen
            >
              {' '}
            </iframe>
          </div>
          <div className="video-reviews video-review6">
            {' '}
            <iframe
              width="400"
              height="100%"
              src="https://www.youtube.com/embed/LEcj8UWul94?si=p7TABRris38P_9Qq"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer;
            autoplay; clipboard-write; encrypted-media; gyroscope;
            picture-in-picture; web-share"
              allowfullscreen
            >
              {' '}
            </iframe>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default VideoReview
