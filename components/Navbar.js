'use client'
import React, { useState } from 'react'
import { CiMobile4, CiLaptop } from 'react-icons/ci'
import { IoIosTabletPortrait } from 'react-icons/io'
import { IoWatchOutline, IoHeadsetOutline } from 'react-icons/io5'
import { MdMobileScreenShare } from 'react-icons/md'
const Navbar = () => {
  const [show, setShow] = useState(false)
  const hambHandler = () => {
    const hambEl = document.getElementById('hamb')
    const btnEl = document.getElementById('btn-close')
    if (!show) {
      hambEl.style.transform = 'translate(0)'
      setShow(true)
    } else {
      hambEl.style.transform = 'translateX(-355px)'
      setShow(false)
    }
  }
  const accordion = document.querySelector('.accordion')
  function toggleAccordion(panelToActivate) {
    const activeButton = panelToActivate.querySelector('button')
    const activePanel = panelToActivate.querySelector('.accordion-content')
    const activePanelIsOpened = activeButton.getAttribute('aria-expanded')

    if (activePanelIsOpened === 'true') {
      panelToActivate
        .querySelector('button')
        .setAttribute('aria-expanded', false)

      panelToActivate
        .querySelector('.accordion-content')
        .setAttribute('aria-hidden', true)
    } else {
      panelToActivate
        .querySelector('button')
        .setAttribute('aria-expanded', true)

      panelToActivate
        .querySelector('.accordion-content')
        .setAttribute('aria-hidden', false)
    }
  }
  const accordionHandler = (e) => {
    const activePanel = e.target.closest('.accordion-panel')
    if (!activePanel) return
    toggleAccordion(activePanel)
  }
  return (
    <div className="w-full h-[60px] bg-[#48afff] flex justify-center items-center relative">
      <div className="w-[30%] lg:w-[20%] flex px-5 logo ">
        <div className="block  w-[20%] lg:mt-2 ">
          <span onClick={hambHandler}>
            <img
              src="/images/bar.svg"
              alt="hambergr menu icon"
              className="w-full lg:w-[70%] cursor-pointer"
            />
          </span>
        </div>
        <div className="pl-5 w-[80%]">
          <span>
            <img src="/images/logo.svg" alt="logo image " className="w-full " />
          </span>
        </div>
      </div>
      <div className="hidden lg:block w-[70%] lg:w-[60%] search">
        <div className=" w-[90%] lg:w-[50%] mx-auto flex justify-center items-center bg-white border rounded-md ">
          <input
            className="w-full h-10  placeholder:p-2"
            type="text"
            placeholder="search..."
          />
          <span className="px-2">
            <img src="/images/mic-blue.svg" alt="mic " />
          </span>
        </div>
      </div>
      {/* Mobile Menu search box for slide */}
      <div className=" mob-search">
        <div className=" w-[90%] lg:w-[50%] mx-auto flex justify-center items-center bg-white border rounded-md ">
          <input
            className="w-full h-10  placeholder:p-2"
            type="text"
            placeholder="search..."
          />
          <span className="px-2">
            <img src="/images/mic-blue.svg" alt="mic " />
          </span>
        </div>
      </div>
      {/* Mobile Menu search box for slide */}
      <div className="hidden lg:block w-[20%]">
        <button className=" btn bg-white px-5 py-1 bg-[] rounded-md text-[#48afff] mx-2">
          Log in
        </button>
        <button className="btn  px-5 py-1 bg-transparent border border-white  rounded-md text-white mx-2">
          Register
        </button>
      </div>
      {/* Hamberger Side menu */}
      <div className="hamb-comtainer" id="hamb">
        <div className="hamb-panel">
          <span className="close-btn" id="btn-close" onClick={hambHandler}>
            X
          </span>
          <div className="top-side-menu">
            <span className="top-side-menu-img">
              <img src="images/logo.svg" alt="logo image" />
            </span>
            <div>
              <button type="button" className="login-btn">
                Login
              </button>
            </div>
            <div className="track-container">
              <span>
                <img src="images/tracker.svg" alt="tracker icon" />{' '}
              </span>
              <span>
                <a href="#">Track my Order </a>
              </span>
            </div>
            <div className="complain-container">
              <span>
                <img src="images/complaint-white.svg" alt="complain white" />{' '}
              </span>
              <span>
                <a href="#">Launch a Complaint </a>
              </span>
            </div>
          </div>
          {/*---------Accordion------------*/}
          <div className="menu-accordion">
            <div className="accordion" onClick={accordionHandler}>
              <div className="accordion-panel">
                <h2 id="panel1-title">
                  <CiMobile4 className="flex-panel" />
                  <button
                    className="accordion-trigger"
                    aria-expanded="false"
                    aria-controls="accordion1-content"
                  >
                    Mobiles
                  </button>
                </h2>
                <div
                  className="accordion-content"
                  role="region"
                  aria-labelledby="panel1-title"
                  aria-hidden="true"
                  id="panel1-content"
                >
                  <div className="accordion-sub-container">
                    {/* <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Iusto, amet! Made By Tariq Mahmood
                    </p> */}
                    <div>
                      <a href="#">Apple</a>
                    </div>
                    <div>
                      <a href="#">Infinix</a>
                    </div>
                    <div>
                      <a href="#">Itel</a>
                    </div>
                    <div>
                      <a href="#">Nokia</a>
                    </div>
                    <div>
                      <a href="#">Oppo</a>
                    </div>
                    <div>
                      <a href="#">Realme</a>
                    </div>
                    <div>
                      <a href="#">Samsung</a>
                    </div>
                    <div>
                      <a href="#">Tecno</a>
                    </div>
                    <div>
                      <a href="#">Vivo</a>
                    </div>
                    <div>
                      <a href="#">Xiaomi</a>
                    </div>
                    <div>
                      <a href="#">More Brands</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="accordion-panel">
                <h2 id="panel2-title">
                  <IoIosTabletPortrait className="flex-panel" />
                  <button
                    className="accordion-trigger"
                    aria-expanded="false"
                    aria-controls="accordion1-content"
                  >
                    Tablets
                  </button>
                </h2>
                <div
                  className="accordion-content"
                  role="region"
                  aria-labelledby="panel2-title"
                  aria-hidden="true"
                  id="panel2-content"
                >
                  <div className="accordion-sub-container">
                    {/* <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Iusto, amet! Made By Tariq Mahmood
                    </p> */}
                    <div>
                      <a href="#">Apple</a>
                    </div>
                    <div>
                      <a href="#">Infinix</a>
                    </div>
                    <div>
                      <a href="#">Itel</a>
                    </div>
                    <div>
                      <a href="#">Nokia</a>
                    </div>
                    <div>
                      <a href="#">Oppo</a>
                    </div>
                    <div>
                      <a href="#">Realme</a>
                    </div>
                    <div>
                      <a href="#">Samsung</a>
                    </div>
                    <div>
                      <a href="#">Tecno</a>
                    </div>
                    <div>
                      <a href="#">Vivo</a>
                    </div>
                    <div>
                      <a href="#">Xiaomi</a>
                    </div>
                    <div>
                      <a href="#">More Brands</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="accordion-panel">
                <h2 id="panel3-title">
                  <IoWatchOutline className="flex-panel" />
                  <button
                    className="accordion-trigger"
                    aria-expanded="false"
                    aria-controls="accordion1-content"
                  >
                    Smart Watches
                  </button>
                </h2>
                <div
                  className="accordion-content accordion-content"
                  role="region"
                  aria-labelledby="panel1-title"
                  aria-hidden="true"
                  // className="accordion-content"
                  id="panel3-content"
                >
                  <div className="accordion-sub-container">
                    {/* <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Iusto, amet! Made By Tariq Mahmood
                    </p> */}
                    <div>
                      <a href="#">Apple</a>
                    </div>
                    <div>
                      <a href="#">Infinix</a>
                    </div>
                    <div>
                      <a href="#">Itel</a>
                    </div>
                    <div>
                      <a href="#">Nokia</a>
                    </div>
                    <div>
                      <a href="#">Oppo</a>
                    </div>
                    <div>
                      <a href="#">Realme</a>
                    </div>
                    <div>
                      <a href="#">Samsung</a>
                    </div>
                    <div>
                      <a href="#">Tecno</a>
                    </div>
                    <div>
                      <a href="#">Vivo</a>
                    </div>
                    <div>
                      <a href="#">Xiaomi</a>
                    </div>
                    <div>
                      <a href="#">More Brands</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="accordion-panel">
                <h2 id="panel4-title">
                  <IoHeadsetOutline className="flex-panel" />
                  <button
                    className="accordion-trigger"
                    aria-expanded="false"
                    aria-controls="accordion1-content"
                  >
                    wireless Earbuds
                  </button>
                </h2>
                <div
                  className="accordion-content accordion-content"
                  role="region"
                  aria-labelledby="panel4-title"
                  aria-hidden="true"
                  // className="accordion-content"
                  id="panel4-content"
                >
                  <div className="accordion-sub-container">
                    {/* <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Iusto, amet! Made By Tariq Mahmood
                    </p> */}
                    <div>
                      <a href="#">Apple</a>
                    </div>
                    <div>
                      <a href="#">Infinix</a>
                    </div>
                    <div>
                      <a href="#">Itel</a>
                    </div>
                    <div>
                      <a href="#">Nokia</a>
                    </div>
                    <div>
                      <a href="#">Oppo</a>
                    </div>
                    <div>
                      <a href="#">Realme</a>
                    </div>
                    <div>
                      <a href="#">Samsung</a>
                    </div>
                    <div>
                      <a href="#">Tecno</a>
                    </div>
                    <div>
                      <a href="#">Vivo</a>
                    </div>
                    <div>
                      <a href="#">Xiaomi</a>
                    </div>
                    <div>
                      <a href="#">More Brands</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="accordion-panel">
                <h2 id="panel5-title">
                  <MdMobileScreenShare className="flex-panel" />
                  <button
                    className="accordion-trigger"
                    aria-expanded="false"
                    aria-controls="accordion5-content"
                  >
                    Mobile Accessories
                  </button>
                </h2>
                <div
                  className="accordion-content accordion-content"
                  role="region"
                  aria-labelledby="panel5-title"
                  aria-hidden="true"
                  // className="accordion-content"
                  id="panel3-content"
                >
                  <div className="accordion-sub-container">
                    {/* <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Iusto, amet! Made By Tariq Mahmood
                    </p> */}
                    <div>
                      <a href="#">Apple</a>
                    </div>
                    <div>
                      <a href="#">Infinix</a>
                    </div>
                    <div>
                      <a href="#">Itel</a>
                    </div>
                    <div>
                      <a href="#">Nokia</a>
                    </div>
                    <div>
                      <a href="#">Oppo</a>
                    </div>
                    <div>
                      <a href="#">Realme</a>
                    </div>
                    <div>
                      <a href="#">Samsung</a>
                    </div>
                    <div>
                      <a href="#">Tecno</a>
                    </div>
                    <div>
                      <a href="#">Vivo</a>
                    </div>
                    <div>
                      <a href="#">Xiaomi</a>
                    </div>
                    <div>
                      <a href="#">More Brands</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-panel">
                <h2 id="panel6-title">
                  <CiLaptop className="flex-panel" />
                  <button
                    className="accordion-trigger"
                    aria-expanded="false"
                    aria-controls="accordion5-content"
                  >
                    Laptops
                  </button>
                </h2>
                <div
                  className="accordion-content accordion-content"
                  role="region"
                  aria-labelledby="panel6-title"
                  aria-hidden="true"
                  // className="accordion-content"
                  id="panel6-content"
                >
                  <div className="accordion-sub-container">
                    {/* <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Iusto, amet! Made By Tariq Mahmood
                    </p> */}
                    <div>
                      <a href="#">Apple</a>
                    </div>
                    <div>
                      <a href="#">Infinix</a>
                    </div>
                    <div>
                      <a href="#">Itel</a>
                    </div>
                    <div>
                      <a href="#">Nokia</a>
                    </div>
                    <div>
                      <a href="#">Oppo</a>
                    </div>
                    <div>
                      <a href="#">Realme</a>
                    </div>
                    <div>
                      <a href="#">Samsung</a>
                    </div>
                    <div>
                      <a href="#">Tecno</a>
                    </div>
                    <div>
                      <a href="#">Vivo</a>
                    </div>
                    <div>
                      <a href="#">Xiaomi</a>
                    </div>
                    <div>
                      <a href="#">More Brands</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* checking horizontal scrollbar */}
              <div className="accordion-panel">
                <h2 id="panel6-title">
                  <CiLaptop className="flex-panel" />
                  <button
                    className="accordion-trigger"
                    aria-expanded="false"
                    aria-controls="accordion5-content"
                  >
                    Laptops
                  </button>
                </h2>
                <div
                  className="accordion-content accordion-content"
                  role="region"
                  aria-labelledby="panel6-title"
                  aria-hidden="true"
                  // className="accordion-content"
                  id="panel6-content"
                >
                  <div className="accordion-sub-container">
                    {/* <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Iusto, amet! Made By Tariq Mahmood
                    </p> */}
                    <div>
                      <a href="#">Apple</a>
                    </div>
                    <div>
                      <a href="#">Infinix</a>
                    </div>
                    <div>
                      <a href="#">Itel</a>
                    </div>
                    <div>
                      <a href="#">Nokia</a>
                    </div>
                    <div>
                      <a href="#">Oppo</a>
                    </div>
                    <div>
                      <a href="#">Realme</a>
                    </div>
                    <div>
                      <a href="#">Samsung</a>
                    </div>
                    <div>
                      <a href="#">Tecno</a>
                    </div>
                    <div>
                      <a href="#">Vivo</a>
                    </div>
                    <div>
                      <a href="#">Xiaomi</a>
                    </div>
                    <div>
                      <a href="#">More Brands</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-panel">
                <h2 id="panel6-title">
                  <CiLaptop className="flex-panel" />
                  <button
                    className="accordion-trigger"
                    aria-expanded="false"
                    aria-controls="accordion5-content"
                  >
                    Laptops
                  </button>
                </h2>
                <div
                  className="accordion-content accordion-content"
                  role="region"
                  aria-labelledby="panel6-title"
                  aria-hidden="true"
                  // className="accordion-content"
                  id="panel6-content"
                >
                  <div className="accordion-sub-container">
                    {/* <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Iusto, amet! Made By Tariq Mahmood
                    </p> */}
                    <div>
                      <a href="#">Apple</a>
                    </div>
                    <div>
                      <a href="#">Infinix</a>
                    </div>
                    <div>
                      <a href="#">Itel</a>
                    </div>
                    <div>
                      <a href="#">Nokia</a>
                    </div>
                    <div>
                      <a href="#">Oppo</a>
                    </div>
                    <div>
                      <a href="#">Realme</a>
                    </div>
                    <div>
                      <a href="#">Samsung</a>
                    </div>
                    <div>
                      <a href="#">Tecno</a>
                    </div>
                    <div>
                      <a href="#">Vivo</a>
                    </div>
                    <div>
                      <a href="#">Xiaomi</a>
                    </div>
                    <div>
                      <a href="#">More Brands</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-panel">
                <h2 id="panel6-title">
                  <CiLaptop className="flex-panel" />
                  <button
                    className="accordion-trigger"
                    aria-expanded="false"
                    aria-controls="accordion5-content"
                  >
                    Laptops
                  </button>
                </h2>
                <div
                  className="accordion-content accordion-content"
                  role="region"
                  aria-labelledby="panel6-title"
                  aria-hidden="true"
                  // className="accordion-content"
                  id="panel6-content"
                >
                  <div className="accordion-sub-container">
                    {/* <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Iusto, amet! Made By Tariq Mahmood
                    </p> */}
                    <div>
                      <a href="#">Apple</a>
                    </div>
                    <div>
                      <a href="#">Infinix</a>
                    </div>
                    <div>
                      <a href="#">Itel</a>
                    </div>
                    <div>
                      <a href="#">Nokia</a>
                    </div>
                    <div>
                      <a href="#">Oppo</a>
                    </div>
                    <div>
                      <a href="#">Realme</a>
                    </div>
                    <div>
                      <a href="#">Samsung</a>
                    </div>
                    <div>
                      <a href="#">Tecno</a>
                    </div>
                    <div>
                      <a href="#">Vivo</a>
                    </div>
                    <div>
                      <a href="#">Xiaomi</a>
                    </div>
                    <div>
                      <a href="#">More Brands</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-panel">
                <h2 id="panel6-title">
                  <CiLaptop className="flex-panel" />
                  <button
                    className="accordion-trigger"
                    aria-expanded="false"
                    aria-controls="accordion5-content"
                  >
                    Laptops
                  </button>
                </h2>
                <div
                  className="accordion-content accordion-content"
                  role="region"
                  aria-labelledby="panel6-title"
                  aria-hidden="true"
                  // className="accordion-content"
                  id="panel6-content"
                >
                  <div className="accordion-sub-container">
                    {/* <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Iusto, amet! Made By Tariq Mahmood
                    </p> */}
                    <div>
                      <a href="#">Apple</a>
                    </div>
                    <div>
                      <a href="#">Infinix</a>
                    </div>
                    <div>
                      <a href="#">Itel</a>
                    </div>
                    <div>
                      <a href="#">Nokia</a>
                    </div>
                    <div>
                      <a href="#">Oppo</a>
                    </div>
                    <div>
                      <a href="#">Realme</a>
                    </div>
                    <div>
                      <a href="#">Samsung</a>
                    </div>
                    <div>
                      <a href="#">Tecno</a>
                    </div>
                    <div>
                      <a href="#">Vivo</a>
                    </div>
                    <div>
                      <a href="#">Xiaomi</a>
                    </div>
                    <div>
                      <a href="#">More Brands</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* ///////////////////////////////// */}
            </div>
          </div>
          {/*-------Accordion-End---------*/}
        </div>
      </div>
    </div>
  )
}

export default Navbar
