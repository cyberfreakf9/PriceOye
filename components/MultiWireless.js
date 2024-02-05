'use client'
import React from 'react'
import Slider from 'react-slick'
import { Wireless } from '@/utils/data'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import Link from 'next/link'
const MultiWireless = () => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 4,
    speed: 500,
    rows: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // slidesPerRow: 2,
    responsive: [
      {
        breakpoint: 767,
        settings: { slidesToShow: 2, slidesToScroll: 2, rows: 2 },
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
    <div className="lg:w-[80%] mx-auto">
      <div className="flex  justify-between  mt-4 mb-6">
        <div>
          <span className="px-2">Latest Wireless Earbuds</span>
        </div>
        <div>
          <a
            className="hover:underline hover:text-blue-300 cursor-pointer px-2"
            href="#"
          >
            View All
          </a>
        </div>
      </div>
      {/* multi row slider  */}
      <div className="w-full">
        <Slider {...settings}>
          {Wireless.wireless.map((item) => {
            return (
              <div className="card-text cursor-pointer ">
                <Link href={`/smart-watches/${item.id}`}>
                  <img src={item.image} alt="slider image" />
                </Link>
                <h6>{item.title}</h6>
                <div className="px-3">
                  <span>Rs:{item.price}</span>
                </div>
                <div className="px-3">
                  <span className="line-through decoration-red-500 decoration-2 opacity-60">
                    {item.cut}
                  </span>
                  <span>{item.off}</span>
                </div>
              </div>
            )
          })}
          {/* <div className="card-text ">
            <img src="images/wireless-1.webp" alt="slider image" />
            <h6>itel Wireless Earbuds (KT-01)</h6>
            <div className="px-3">
              <span>R.2499</span>
            </div>
            <div className="px-3">
              <span className="line-through decoration-red-500 decoration-2 opacity-60">
                5000
              </span>
              <span>(50% OFF)</span>
            </div>
          </div> */}
          {/* <div className="card-text">
            <img src="images/wireless-2.webp" alt="slider image" />
            <h6>itel Wireless Earbuds (KT-01)</h6>
            <div className="px-3">
              <span>R.2499</span>
            </div>
            <div className="px-3">
              <span className="line-through  decoration-red-500 decoration-2  opacity-60">
                5000
              </span>
              <span>(50% OFF)</span>
            </div>
          </div>
          <div className="card-text">
            <img src="images/wireless-3.webp" alt="slider image" />
            <h6>itel Wireless Earbuds (KT-01)</h6>
            <div className="px-3">
              <span>R.2499</span>
            </div>
            <div className="px-3">
              <span className="line-through  decoration-red-500 decoration-2 opacity-60">
                5000
              </span>
              <span>(50% OFF)</span>
            </div>
          </div>
          <div className="card-text">
            <img src="images/wireless-4.webp" alt="slider image" />
            <h6>itel Wireless Earbuds (KT-01)</h6>
            <div className="px-3">
              <span>R.2499</span>
            </div>
            <div className="px-3">
              <span className="line-through  decoration-red-500 decoration-2 opacity-60">
                5000
              </span>
              <span>(50% OFF)</span>
            </div>
          </div>
          <div className="card-text">
            <img src="images/wireless-5.webp" alt="slider image" />
            <h6>itel Wireless Earbuds (KT-01)</h6>
            <div className="px-3">
              <span>R.2499</span>
            </div>
            <div className="px-3">
              <span className="line-through  decoration-red-500 decoration-2 opacity-60">
                5000
              </span>
              <span>(50% OFF)</span>
            </div>
          </div>
          <div className="card-text">
            <img src="images/wireless-6.webp" alt="slider image" />
            <h6>itel Wireless Earbuds (KT-01)</h6>
            <div className="px-3">
              <span>R.2499</span>
            </div>
            <div className="px-3">
              <span className="line-through  decoration-red-500 decoration-2 opacity-60">
                5000
              </span>
              <span>(50% OFF)</span>
            </div>
          </div>
          <div className="card-text">
            <img src="images/wireless-7.webp" alt="slider image" />
            <h6>itel Wireless Earbuds (KT-01)</h6>
            <div className="px-3">
              <span>R.2499</span>
            </div>
            <div className="px-3">
              <span className="line-through  decoration-red-500 decoration-2 opacity-60">
                5000
              </span>
              <span>(50% OFF)</span>
            </div>
          </div>
          <div className="card-text">
            <img src="images/wireless-8.webp" alt="slider image" />
            <h6>itel Wireless Earbuds (KT-01)</h6>
            <div className="px-3">
              <span>R.2499</span>
            </div>
            <div className="px-3">
              <span className="line-through  decoration-red-500 decoration-2 opacity-60">
                5000
              </span>
              <span>(50% OFF)</span>
            </div>
          </div>
          <div className="card-text">
            <img src="images/wireless-9.webp" alt="slider image" />
            <h6>itel Wireless Earbuds (KT-01)</h6>
            <div className="px-3">
              <span>R.2499</span>
            </div>
            <div className="px-3">
              <span className="line-through  decoration-red-500 decoration-2 opacity-60">
                5000
              </span>
              <span>(50% OFF)</span>
            </div>
          </div>
          <div className="card-text">
            <img src="images/wireless-10.webp" alt="slider image" />
            <h6>itel Wireless Earbuds (KT-01)</h6>
            <div className="px-3">
              <span>R.2499</span>
            </div>
            <div className="px-3">
              <span className="line-through  decoration-red-500 decoration-2 opacity-60">
                5000
              </span>
              <span>(50% OFF)</span>
            </div>
          </div> */}
        </Slider>
      </div>
      {/* multi row slider */}
    </div>
  )
}

export default MultiWireless
