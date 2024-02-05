'use client'
import React, { useState, useEffect } from 'react'
import './style.css'
import { watches } from '@/utils/data'
import Approve from '@/components/Approve'
import Link from 'next/link'
const SamsungWatchDetail = ({ params }) => {
  const [num, setNum] = useState()
  const Product = watches.watch.find((item) => {
    return item.id == params.samsungId
  })
  function StartRating() {}
  const ImageHandler = (pic) => {
    const imgEl = document.getElementById('ProductImg')
    const moveEl = document.getElementById('move')
    imgEl.src = Product.img[pic]
    moveEl.style.transform = 'translateX(0)'
  }
  function ColorHandler() {
    const imgEl = document.getElementById('ProductImg')
    const moveEl = document.getElementById('move')
    imgEl.src = Product.color[0]
  }
  /* Fix idnav code start */
  // const threshold = $nav.getBoundingClientRect()
  function handleScroll() {
    const ulEl = document.getElementById('moveid')
    const offset = window.scrollY

    if (offset > 200) {
      // setScrolled(true)
      // alert('scroll hit' + ulEl)
      ulEl.classList.add('sticky')
      // } else {
      //   setScrolled(false)
      // }
    }
  }
  function AccordionHandler() {
    var acc = document.getElementsByClassName('accordion')
    var i

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener('click', function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle('active')

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling
        if (panel.style.display === 'block') {
          panel.style.display = 'none'
        } else {
          panel.style.display = 'block'
        }
      })
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <div className="relative container-wrapper">
      {/* Samsung Watch Detail List of {params.samsungId} */}
      {/* <div className="wrappper"> */}
      <h1>
        Detail of {params.samsungId} and {Product.name}
      </h1>
      {/* <div className="single-wrapper"> */}
      <section className=" text-gray-600  bg-white body-font ">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap ">
            <div className=" flex flex-col p-5 border  rounded-md">
              <div className="slide-image">
                <span id="move">
                  <img
                    alt="ecommerce"
                    className=" w-full lg:h-auto h-64 object-cover object-center rounded"
                    src={Product.image}
                    id="ProductImg"
                  />
                </span>
              </div>
              <div className="flex w-full h-[90px] mt-2">
                <div className=" h-20 border rounded-md p-2 cursor-pointer hover:border-solid hover:border-gray-500">
                  <span
                    onClick={() => {
                      setNum(0)
                      const pic = 0
                      ImageHandler(pic)
                    }}
                  >
                    {' '}
                    <img
                      alt="ecommerce"
                      className="w-full h-full  object-cover object-center rounded"
                      src={Product.img[0]}
                    />
                  </span>
                </div>
                <div className=" h-20 border rounded-md p-2 cursor-pointer hover:border-solid hover:border-gray-500 ml-1">
                  <span
                    onClick={() => {
                      setNum(1)
                      const pic = 1
                      ImageHandler(pic)
                    }}
                  >
                    {' '}
                    <img
                      alt="ecommerce"
                      className="w-full h-full  object-cover object-center rounded"
                      src={Product.img[1]}
                    />
                  </span>
                </div>
                <div className=" h-20 border rounded-md p-2 cursor-pointer hover:border-solid hover:border-gray-500 ml-1">
                  <span
                    onClick={() => {
                      setNum(2)
                      const pic = 2
                      ImageHandler(pic)
                    }}
                  >
                    {' '}
                    <img
                      alt="ecommerce"
                      className="w-full h-full  object-cover object-center rounded"
                      src={Product.img[2]}
                    />
                  </span>
                </div>
                <div className=" h-20 border rounded-md p-2 cursor-pointer hover:border-solid hover:border-gray-500 ml-1">
                  <span
                    onClick={() => {
                      setNum(3)
                      const pic = 3
                      ImageHandler(pic)
                    }}
                  >
                    {' '}
                    <img
                      alt="ecommerce"
                      className="w-full h-full  object-cover object-center rounded"
                      src={Product.img[3]}
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                BRAND NAME : <span className="uppercase">{Product.brand}</span>
              </h2>
              <h1 className="text-base text-gray-900 md:text-2xl title-font font-medium mb-1">
                {Product.name}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  {StartRating()}
                  {/* <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 text-indigo-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 text-indigo-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 text-indigo-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 text-indigo-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg> */}
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <div className="flex">
                <span className="px-1">
                  <img src="/images/price-approve.svg" width={24} />
                </span>
                <span className="text-base">PriceOye Assured</span>
              </div>
              {/* PriceOye Price  */}
              <div className=" w-full">
                <div className="flex justify-between">
                  <h6 className="opacity-50 text-base">Priceoye Price</h6>
                  <h6 className="opacity-50 text-base">Availability</h6>
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <div>Rs. {Product.price}</div>
                    <div className="flex ">
                      <div className="opacity-60 line-through decoration-red-600 ">
                        {Product.price + (Product.price % Product.cut)}
                      </div>
                      <div className=" ml-2 px-1 border rounded-md bg-blue-300 opacity-75 text-base">
                        {Product.cut}% Off
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <span>In Stock</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex  mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex flex-col">
                  <span className="mr-3">Color</span>
                  <div className="flex flex-col justify-center w-[80px] h-[80px] border p-2 rounded-md cursor-pointer border-[#48afff]">
                    <span
                      className="inline-block mx-auto"
                      onClick={ColorHandler}
                    >
                      {' '}
                      <img src={Product.color[0]} width={50} />
                    </span>
                    <span className="text-[12px] text-center">Grey</span>
                  </div>
                  {/* <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button> */}
                </div>
                {/* <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div> */}
              </div>
              {/* Installment Plan section */}
              <div className="flex w-[90%] md:w-[70%] justify-start items-center border border-[#cfcfcf] rounded-md">
                <div className="ml-5">
                  <img src="/images/calender.svg" />
                </div>
                <div className="flex flex-col px-5 ">
                  <span>Installment Plan</span>
                  <span>Pakistan</span>
                </div>
              </div>
              {/* Guaranted Section Under Installment gray bg */}
              <div className="flex m-2 bg-[whitesmoke]w-[90%] md:w-[70%] justify-start items-center border border-[#cfcfcf] rounded-md">
                <div className="ml-5">
                  <img src="/images/po-logo.svg" width={30} />
                </div>
                <div className="flex flex-col px-5">
                  <span className="text-[12px] leading-2">
                    PriceOye Guarantee
                  </span>
                  <span className="text-[12px] leading-2">
                    Get the item your order or get your money back
                  </span>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${Product.price}
                </span>
                {/* <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Button
                </button> */}
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
              <div className="hidden  lg:flex p-2 w-[80%] gap-1  justify-around  ">
                <span className="inline-block text-center px-2 py-2 w-[45%]  cursor-pointer text-white rounded-md bg-[#f88b2a]">
                  Add to Cart
                </span>
                <span className="inline-block text-center px-2 py-2 w-[45%] cursor-pointer  text-white rounded-md  bg-[#48afff]">
                  Compare
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Approve />
      </section>
      <section
        className="w-full  m-0  h-[150px] bg-[#f1f3f6] nav--fixed"
        id="moveid"
      >
        <nav className="w-full mt-4 h-['40px'] mx-auto" id="moveid">
          <ul className="flex justify-center items-center py-2  bg-white">
            <li className="text-[10px] font-semibold whitespace-nowrap md:text-base  px-2 border-r border-blackp ">
              <Link href={'/'}>Highlight</Link>
            </li>
            <li className="text-[10px] font-semibold whitespace-nowrap md:text-base  px-2  border-r border-black  ">
              <Link href={'/'}>Specification</Link>
            </li>
            <li className="text-[10px] font-semibold whitespace-nowrap md:text-base  px-2  border-r border-black  ">
              <Link href={'/'}>Connect Your Accessories</Link>
            </li>
            <li className="text-[10px] font-semibold whitespace-nowrap md:text-base  px-2  border-r border-black  ">
              <Link href={'/'}>Installment Plans</Link>
            </li>
            <li className="hidden md:block text-[8px] whitespace-nowrap md:text-base  px-2  border-r border-black font-semibold   ">
              <Link href={'/'}>Reviews</Link>
            </li>
            <li className="hidden md:block px-2 text-[8px] whitespace-nowrap md:text-base font-semibold">
              <Link href={'/'}>FAQs</Link>
            </li>
          </ul>
        </nav>
        <div className="w-[25%] h-[70%] relative text-center">
          <span className="absolute top-1/2 font-semibold text-[gray]">
            Highlight
          </span>
        </div>
      </section>
      <section className="w-full md:w-[80%] mx-auto gap-2 text-justify grid grid-cols-1 md:grid-cols-3">
        <div>
          <h4 className="text-[.8rem] md:text-[1rem] font-semibold py-5 px-2">
            Classic Design
          </h4>
          <div>
            <p className="text-[.8rem] md:text-[1rem]  p-2 text-gray-500">
              The Galaxy watch 4 features a rotating bezel, giving it a classic
              old-school design. The watch incorporates high-end stainless steel
              materials, making it not just stylish but durable as well.
            </p>
          </div>
        </div>
        <div>
          <h4 className="text-[.8rem] md:text-[1rem] font-semibold py-5 px-2">
            Customized Watch Faces
          </h4>
          <div>
            <p className="text-[.8rem] md:text-[1rem]  p-2 text-gray-500">
              Personalize the Samsung Galaxy Watch 4 Classic Bluetooth 46mm
              (R890) by switching up the watch faces. Each watch face has a
              unique design, so there?s guaranteed to be one that matches your
              style.
            </p>
          </div>
        </div>
        <div>
          <h4 className="text-[.8rem] md:text-[1rem] font-semibold py-5 px-2">
            Activity Tracker
          </h4>
          <div>
            <p className="text-[.8rem] md:text-[1rem]  p-2 text-gray-500">
              Who needs a fitness trainer when you can just buy the Galaxy Watch
              4 Classic and use its activity tracking features to monitor your
              routine. The watch can optimize health and fitness tracking for up
              to 90 excerices!
            </p>
          </div>
        </div>
        <div>
          <h4 className="text-[.8rem] md:text-[1rem] font-semibold py-5 px-2">
            Heart Rate Monitor
          </h4>
          <div>
            <p className="text-[.8rem] md:text-[1rem]  p-2 text-gray-500">
              With the Samsung Galaxy smartwatch's ECG tracker, you can check
              your heart rate in real-time and take a more active approach to
              improving your health.
            </p>
          </div>
        </div>
        <div>
          <h4 className="text-[.8rem] md:text-[1rem] font-semibold py-5 px-2">
            Advanced Sleep Analysis
          </h4>
          <div>
            <p className="text-[.8rem] md:text-[1rem]  p-2 text-gray-500">
              The Samsung Galaxy smartwatch can track sleep through each stage
              of the sleep cycle and help users recognize unhealthy patterns.
              The watch also provides useful insights from the national sleep
              foundation for improving sleep quality.
            </p>
          </div>
        </div>
        <div>
          <h4 className="text-[.8rem] md:text-[1rem] font-semibold py-5 px-2">
            New Os
          </h4>
          <div>
            <p className="text-[.8rem] md:text-[1rem]  p-2 text-gray-500">
              Samsungs Wear OS, designed specifically for the company?s
              smartwatch series, gives users access to a wide range of awesome
              health, fitness, and lifestyle apps.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full h-[300px] m-0 p-0 ">
        <div className=" w-full h-[90px] bg-gray-200 relative">
          <div className="w-[80%] mx-auto">
            <span className="inline-block absolute top-[40%] ">
              Specification
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 my-5">
          <div className="flex flex-col justify-center  items-center ">
            <span>
              <img
                src="/images/specification-image-1.svg"
                // width={50}
                // height={30}
              />
            </span>
            <p className="text-[.8rem]">1.5 inch</p>
            <p className="text-[.8rem] opacity-50 -mt-1">Display</p>
          </div>
          <div className="flex flex-col  justify-center  items-center ">
            <span>
              <img
                src="/images/specification-image-2.svg"
                width={50}
                height={50}
              />
            </span>
            <p className="text-[.8rem]">Super AMOLED</p>
            <p className="text-[.8rem] opacity-50 -mt-1">Screen Type</p>
          </div>
          <div className="flex flex-col justify-center  items-center ">
            <span>
              <img
                src="/images/specification-image-3.svg"
                // width={50}
                // height={30}
              />
            </span>
            <p className="text-[.8rem]">2-3 Days</p>
            <p className="text-[.8rem] opacity-50 -mt-1">Battery Life</p>
          </div>
        </div>
      </section>
      <section className="w-full lg:w-[70%] mx-auto p-2 flex flex-col lg:flex-row gap-1 bg-slate-200">
        <div className="flex flex-col w-full lg:w-[80%]">
          <div className="w-full p-2 rounded-md bg-white">
            <p>General Features</p>
            <div className="flex w-full">
              <p className="w-[40%]  border-b border-gray-400">SIM Support</p>
              <p className="w-[60%] border-b border-gray-400">N/A</p>
            </div>
            <div className="flex w-full">
              <p className="w-[40%]  border-b border-gray-400">Dimension</p>
              <p className="w-[60%] border-b border-gray-400">
                46.5 x 46.5 10.9 mm
              </p>
            </div>
            <div className="flex w-full">
              <p className="w-[40%]  border-b border-gray-400">
                Strap Material
              </p>
              <p className="w-[60%] border-b border-gray-400">Silicon</p>
            </div>
            <div className="flex w-full">
              <p className="w-[40%]  border-b border-gray-400">
                Water Resistance
              </p>
              <p className="border-b border-gray-400">
                50m water resistance (IP68)
              </p>
            </div>
            <div className="flex w-full">
              <p className="w-[40%]  border-b border-gray-400">Weight</p>
              <p className="w-[60%] border-b border-gray-400">59 g</p>
            </div>
            <div className="flex w-full">
              <p className="w-[40%]  border-b border-gray-400">
                Operating System
              </p>
              <p className="w-[60%] border-b border-gray-400">Propriety OS</p>
            </div>
            <div className="flex w-full">
              <p className="w-[40%]  border-b border-gray-400">Speaker</p>
              <p className="border-b border-gray-400">Yes</p>
            </div>
            <div className="flex w-full">
              <p className="w-[40%]  border-b border-gray-400">Modes</p>
              <p className="w-[60%]border-b border-gray-400">
                Multiple sports modes
              </p>
            </div>
          </div>
          {/* Down section of first column */}
          <div className="w-full p-2 mt-2 rounded-md bg-white">
            <p>Display</p>
            <div className="flex w-full">
              <p className="w-[40%]  border-b border-gray-400">Camera</p>
              <p className="w-[60%] border-b border-gray-400">N/A</p>
            </div>
            <div className="flex w-full">
              <p className="w-[40%]  border-b border-gray-400">Screen Size</p>
              <p className="w-[60%] border-b border-gray-400">1.5 inches</p>
            </div>
            <div className="flex w-full">
              <p className="w-[40%]  border-b border-gray-400">
                Screen Resolution
              </p>
              <p className="w-[60%] border-b border-gray-400">
                480 x 480 pixels
              </p>
            </div>
            <div className="flex w-full">
              <p className="w-[40%]  border-b border-gray-400">Screen Type</p>
              <p className="w-[60%] border-b border-gray-400">Super AMOLED</p>
            </div>
          </div>
          {/* Down Section of first colum */}
        </div>
        <div className="w-full flex flex-col ">
          {/* Down section of first column */}
          <div className="w-full p-2 mt-0 rounded-md bg-white">
            <p>Memory</p>
            <div className="flex w-full">
              <p className="w-[40%]  border-b border-gray-400">Ram</p>
              <p className="w-[60%] border-b border-gray-400">N/A</p>
            </div>
            <div className="flex w-full">
              <p className="w-[40%]  border-b border-gray-400">Rom</p>
              <p className="w-[60%] border-b border-gray-400">N/A</p>
            </div>
          </div>
          <div className="w-full p-2 mt-2 rounded-md bg-white">
            <p>Connectivity</p>
            <div className="flex w-full">
              <p className="w-[40%]  border-b border-gray-400">Wifi</p>
              <p className="w-[60%] border-b border-gray-400">Yes</p>
            </div>
            <div className="flex w-full">
              <p className="w-[40%]  border-b border-gray-400">GPS</p>
              <p className="w-[60%] border-b border-gray-400">no</p>
            </div>
            <div className="flex w-full">
              <p className="w-[40%]  border-b border-gray-400">NFC</p>
              <p className="w-[60%] border-b border-gray-400">no</p>
            </div>
          </div>
          <div className="w-full p-2 mt-2 rounded-md bg-white">
            <p>Battery</p>
            <div className="flex w-full">
              <p className="w-[40%]  border-b border-gray-400">Capicity</p>
              <p className="w-[60%] border-b border-gray-400">Li-Ion 425 mAh</p>
            </div>
            <div className="flex w-full">
              <p className="w-[40%]  border-b border-gray-400">Battery Life</p>
              <p className="w-[60%] border-b border-gray-400">2-3 days</p>
            </div>
          </div>
          {/* Down Section of first colum */}
        </div>
      </section>
      <section className="flex justify-start items-center bg-slate-200 w-full h-[60px]">
        <div className="w-[80%] mx-auto ml-5">
          <span>Installment Plan</span>
        </div>
      </section>
      <section className="w-full bg-white">
        <div className="flex flex-col w-full lg:w-[80%] mx-auto ">
          <div className="p-2">
            <span>
              *Only Credit Card holders are eligible for installmnent plan
            </span>
          </div>
          <div>
            <button className="accordion" onClick={AccordionHandler}>
              <div className="flex justify-start items-center h-4">
                <span>
                  <img src="/images/bank_alfalah.svg" width={20} height={20} />
                </span>{' '}
                <span className="px-2"> Bank Alfalah </span>
              </div>
            </button>
            <div className="panel">
              {/* <p>Lorem ipsum...</p> */}
              <table>
                <tr>
                  <th>EMI</th>
                  <th>Monthly Installment</th>
                  {/* <th>Points</th> */}
                </tr>
                <tr>
                  <td>3 Month</td>
                  <td>Rs 14,736</td>
                  {/* <td>50</td> */}
                </tr>
                <tr>
                  <td>6 Month</td>
                  <td>Rs 14,736</td>
                  {/* <td>94</td> */}
                </tr>
                <tr>
                  <td>9 Month</td>
                  <td>Rs 14,736</td>
                  {/* <td>67</td> */}
                </tr>
                <tr>
                  <td>12 Month</td>
                  <td>Rs 14,736</td>
                  {/* <td>67</td> */}
                </tr>
                <tr>
                  <td>18 Month</td>
                  <td>Rs 14,736</td>
                  {/* <td>67</td> */}
                </tr>
                <tr>
                  <td>24 Month</td>
                  <td>Rs 14,736</td>
                  {/* <td>67</td> */}
                </tr>
                <tr>
                  <td>36 Month</td>
                  <td>Rs 14,736</td>
                  {/* <td>67</td> */}
                </tr>
              </table>
              <p className="text-[.8rem]">
                1. One Time Processing Fees: Flat 2.50% or PKR 1,000 whichever
                is higher and FED will be charged by the bank as per their
                Schedule of Charges (SOC).
              </p>
              <p className="text-[.8rem]">
                {' '}
                2. One Time Service Fee: 2.5% will be charged.{' '}
              </p>
              <p className="text-[.8rem]">
                {' '}
                3. Please ensure Name and CNIC are of the cardholder.
              </p>
              <p className="text-[.8rem]">
                {' '}
                4. SBS Plan will be processed as per assigned credit limit.
              </p>
            </div>

            <button className="accordion" onClick={AccordionHandler}>
              <div className="flex justify-start items-center h-4">
                <span>
                  <img src="/images/askari_bank.svg" width={20} height={20} />
                </span>{' '}
                <span className="px-2"> Askari Bank </span>
              </div>
            </button>
            <div className="panel">
              <table>
                <tr>
                  <th>EMI</th>
                  <th>Monthly Installment</th>
                  {/* <th>Points</th> */}
                </tr>
                <tr>
                  <td>3 Month</td>
                  <td>Rs 14,736</td>
                  {/* <td>50</td> */}
                </tr>
                <tr>
                  <td>6 Month</td>
                  <td>Rs 14,736</td>
                  {/* <td>94</td> */}
                </tr>
                <tr>
                  <td>9 Month</td>
                  <td>Rs 14,736</td>
                  {/* <td>67</td> */}
                </tr>
                <tr>
                  <td>12 Month</td>
                  <td>Rs 14,736</td>
                  {/* <td>67</td> */}
                </tr>
                <tr>
                  <td>18 Month</td>
                  <td>Rs 14,736</td>
                  {/* <td>67</td> */}
                </tr>
                <tr>
                  <td>24 Month</td>
                  <td>Rs 14,736</td>
                  {/* <td>67</td> */}
                </tr>
                <tr>
                  <td>36 Month</td>
                  <td>Rs 14,736</td>
                  {/* <td>67</td> */}
                </tr>
              </table>
            </div>

            <button className="accordion" onClick={AccordionHandler}>
              <div className="flex justify-start items-center h-4">
                <span>
                  <img src="/images/faysal_bank.svg" width={20} height={20} />
                </span>{' '}
                <span className="px-2"> Faysal Bank </span>
              </div>
            </button>
            <div className="panel">
              <table>
                <tr>
                  <th>EMI</th>
                  <th>Monthly Installment</th>
                  {/* <th>Points</th> */}
                </tr>
                <tr>
                  <td>3 Month</td>
                  <td>Rs 14,736</td>
                  {/* <td>50</td> */}
                </tr>
                <tr>
                  <td>6 Month</td>
                  <td>Rs 14,736</td>
                  {/* <td>94</td> */}
                </tr>
                <tr>
                  <td>9 Month</td>
                  <td>Rs 14,736</td>
                  {/* <td>67</td> */}
                </tr>
                <tr>
                  <td>12 Month</td>
                  <td>Rs 14,736</td>
                  {/* <td>67</td> */}
                </tr>
                <tr>
                  <td>18 Month</td>
                  <td>Rs 14,736</td>
                  {/* <td>67</td> */}
                </tr>
                <tr>
                  <td>24 Month</td>
                  <td>Rs 14,736</td>
                  {/* <td>67</td> */}
                </tr>
                <tr>
                  <td>36 Month</td>
                  <td>Rs 14,736</td>
                  {/* <td>67</td> */}
                </tr>
              </table>
            </div>
            <button className="accordion" onClick={AccordionHandler}>
              <div className="flex justify-start items-center h-4">
                <span>
                  <img src="/images/js_bank.svg" width={20} height={20} />
                </span>{' '}
                <span className="px-2"> Js Bank </span>
              </div>
            </button>
            <div className="panel">
              <table>
                <tr>
                  <th>EMI</th>
                  <th>Monthly Installment</th>
                  {/* <th>Points</th> */}
                </tr>
                <tr>
                  <td>3 Month</td>
                  <td>Rs 14,736</td>
                  {/* <td>50</td> */}
                </tr>
                <tr>
                  <td>6 Month</td>
                  <td>Rs 14,736</td>
                  {/* <td>94</td> */}
                </tr>
                <tr>
                  <td>9 Month</td>
                  <td>Rs 14,736</td>
                  {/* <td>67</td> */}
                </tr>
                <tr>
                  <td>12 Month</td>
                  <td>Rs 14,736</td>
                  {/* <td>67</td> */}
                </tr>
                <tr>
                  <td>18 Month</td>
                  <td>Rs 14,736</td>
                  {/* <td>67</td> */}
                </tr>
                <tr>
                  <td>24 Month</td>
                  <td>Rs 14,736</td>
                  {/* <td>67</td> */}
                </tr>
                <tr>
                  <td>36 Month</td>
                  <td>Rs 14,736</td>
                  {/* <td>67</td> */}
                </tr>
              </table>
            </div>
            <button className="accordion" onClick={AccordionHandler}>
              <div className="flex justify-start items-center h-4">
                <span>
                  <img src="/images/mcb.svg" width={20} height={20} />
                </span>{' '}
                <span className="px-2"> MCB Bank </span>
              </div>
            </button>
            <div className="panel">
              <table>
                <tr>
                  <th>EMI</th>
                  <th>Monthly Installment</th>
                  {/* <th>Points</th> */}
                </tr>
                <tr>
                  <td>3 Month</td>
                  <td>Rs 14,736</td>
                  {/* <td>50</td> */}
                </tr>
                <tr>
                  <td>6 Month</td>
                  <td>Rs 14,736</td>
                  {/* <td>94</td> */}
                </tr>
                <tr>
                  <td>9 Month</td>
                  <td>Rs 14,736</td>
                  {/* <td>67</td> */}
                </tr>
                <tr>
                  <td>12 Month</td>
                  <td>Rs 14,736</td>
                  {/* <td>67</td> */}
                </tr>
                <tr>
                  <td>18 Month</td>
                  <td>Rs 14,736</td>
                  {/* <td>67</td> */}
                </tr>
                <tr>
                  <td>24 Month</td>
                  <td>Rs 14,736</td>
                  {/* <td>67</td> */}
                </tr>
                <tr>
                  <td>36 Month</td>
                  <td>Rs 14,736</td>
                  {/* <td>67</td> */}
                </tr>
              </table>
            </div>
            <button className="accordion" onClick={AccordionHandler}>
              <div className="flex justify-start items-center h-4">
                <span>
                  <img src="/images/silkbank.svg" width={20} height={20} />
                </span>{' '}
                <span className="px-2"> Soneri Bank </span>
              </div>
            </button>
            <div className="panel">
              <table>
                <tr>
                  <th>EMI</th>
                  <th>Monthly Installment</th>
                  {/* <th>Points</th> */}
                </tr>
                <tr>
                  <td>3 Month</td>
                  <td>Rs 14,736</td>
                  {/* <td>50</td> */}
                </tr>
                <tr>
                  <td>6 Month</td>
                  <td>Rs 14,736</td>
                  {/* <td>94</td> */}
                </tr>
                <tr>
                  <td>9 Month</td>
                  <td>Rs 14,736</td>
                  {/* <td>67</td> */}
                </tr>
                <tr>
                  <td>12 Month</td>
                  <td>Rs 14,736</td>
                  {/* <td>67</td> */}
                </tr>
                <tr>
                  <td>18 Month</td>
                  <td>Rs 14,736</td>
                  {/* <td>67</td> */}
                </tr>
                <tr>
                  <td>24 Month</td>
                  <td>Rs 14,736</td>
                  {/* <td>67</td> */}
                </tr>
                <tr>
                  <td>36 Month</td>
                  <td>Rs 14,736</td>
                  {/* <td>67</td> */}
                </tr>
              </table>
            </div>
            <button className="accordion" onClick={AccordionHandler}>
              <div className="flex justify-start items-center h-4">
                <span>
                  <img src="/images/ubl.svg" width={20} height={20} />
                </span>{' '}
                <span className="px-2"> UBL Bank </span>
              </div>
            </button>
            <div className="panel">
              <table>
                <tr>
                  <th>EMI</th>
                  <th>Monthly Installment</th>
                  {/* <th>Points</th> */}
                </tr>
                <tr>
                  <td>3 Month</td>
                  <td>Rs 14,736</td>
                  {/* <td>50</td> */}
                </tr>
                <tr>
                  <td>6 Month</td>
                  <td>Rs 14,736</td>
                  {/* <td>94</td> */}
                </tr>
                <tr>
                  <td>9 Month</td>
                  <td>Rs 14,736</td>
                  {/* <td>67</td> */}
                </tr>
                <tr>
                  <td>12 Month</td>
                  <td>Rs 14,736</td>
                  {/* <td>67</td> */}
                </tr>
                <tr>
                  <td>18 Month</td>
                  <td>Rs 14,736</td>
                  {/* <td>67</td> */}
                </tr>
                <tr>
                  <td>24 Month</td>
                  <td>Rs 14,736</td>
                  {/* <td>67</td> */}
                </tr>
                <tr>
                  <td>36 Month</td>
                  <td>Rs 14,736</td>
                  {/* <td>67</td> */}
                </tr>
              </table>
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-slate-200 w-full h-[60px]">
        <div className="flex justify-start items-center w-[80%] h-full mx-auto">
          <span className="block">Connect Your Accessories</span>
        </div>
      </section>
      <section className="w-full m-5 bg-white">
        <div className="flex flex-col lg:flex lg:flex-row gap-2 p-5 justify-center items-center w-[80%] mx-auto h-full">
          <div>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/gFWmGYvMWBg?si=HbQbb0TduobD_H5R"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/gFWmGYvMWBg?si=HbQbb0TduobD_H5R"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>
      <section className="fixed left-0 bottom-0 w-full h-[65px] bg-[whitesmoke] flex lg:hidden">
        <div className="flex w-full h-full justify-around items-center">
          <div className="flex flex-col p-1">
            <span className="p-2">
              <img src="/images/fixed-1.svg" width={30} height={30} />
            </span>
            <span className="-mt-2">Reviews</span>
          </div>
          <div>Compare</div>
        </div>
        <div>
          <button>Add to Cart</button>
        </div>
      </section>
    </div>
  )
}

export default SamsungWatchDetail
