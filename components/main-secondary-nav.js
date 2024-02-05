'use client'
import React, { useEffect } from 'react'
const MainSecondaryNav = () => {
  let count = 0
  const goNext = () => {
    if (count == 4) {
      count = 0
      slideImage()
    } else {
      count++
      slideImage()
    }
  }
  const goPrev = () => {
    if (count <= 0) {
      count = 0
      slideImage()
    } else {
      count--
      slideImage()
    }
  }
  const RemoveAll = () => {
    const test5 = document.querySelector('.item5')
    const test1 = document.querySelector('.item1')
    const test2 = document.querySelector('.item2')
    const test3 = document.querySelector('.item3')
    const test4 = document.querySelector('.item4')
    const test6 = document.querySelector('.item6')
    const test7 = document.querySelector('.item7')
    const test8 = document.querySelector('.item8')
    test1.style.display = 'none'
    test2.style.display = 'none'
    test3.style.display = 'none'
    test4.style.display = 'none'
    test5.style.display = 'none'
    test6.style.display = 'none'
    test7.style.display = 'none'
    test8.style.display = 'none'
  }
  const slideImage = () => {
    const slides = document.getElementById('slide-container')
    const slide = document.querySelectorAll('.items')
    slide.forEach((item) => {
      if (count == 1) {
        RemoveAll()
        const test1 = document.querySelector('.item1')
        const test2 = document.querySelector('.item2')
        const test3 = document.querySelector('.item3')
        const test4 = document.querySelector('.item4')
        const test5 = document.querySelector('.item5')
        test1.transform = `translateX(-${count * 25}%)`
        test1.style.display = 'block'
        test2.style.display = 'block'
        test3.style.display = 'block'
        test4.style.display = 'block'
        test5.style.display = 'block'
      }
      if (count == 2) {
        RemoveAll()
        const test1 = document.querySelector('.item1')
        const test2 = document.querySelector('.item2')
        const test3 = document.querySelector('.item3')
        const test4 = document.querySelector('.item4')
        const test5 = document.querySelector('.item5')
        const test6 = document.querySelector('.item6')
        test2.transform = `translateX(-${count * 25}%)`
        test2.style.display = 'block'
        test3.style.display = 'block'
        test4.style.display = 'block'
        test5.style.display = 'block'
        test6.style.display = 'block'
      }
      if (count == 3) {
        RemoveAll()
        const test3 = document.querySelector('.item3')
        const test4 = document.querySelector('.item4')
        const test5 = document.querySelector('.item5')
        const test6 = document.querySelector('.item6')
        const test7 = document.querySelector('.item7')
        test3.transform = `translateX(-${count * 25}%)`
        test3.style.display = 'block'
        test4.style.display = 'block'
        test5.style.display = 'block'
        test6.style.display = 'block'
        test7.style.display = 'block'
      }
      if (count == 4) {
        RemoveAll()
        const test4 = document.querySelector('.item4')
        const test5 = document.querySelector('.item5')
        const test6 = document.querySelector('.item6')
        const test7 = document.querySelector('.item7')
        const test8 = document.querySelector('.item8')
        test4.transform = `translateX(-${count * 25}%)`
        test4.style.display = 'block'
        test5.style.display = 'block'
        test6.style.display = 'block'
        test7.style.display = 'block'
        test8.style.display = 'block'
      }
    })
    // slides.style.transform = `translateX(-${count * 25}%)`

    // }
    // })
  }

  useEffect(() => {}, [])
  return (
    <div className="flex w-full mx-auto h-[80px] bg-white relative">
      <div className="flex w-full lg:w-[80%] mx-auto mt-0 relative ">
        <div
          className="absolute w-full left-0 flex h-full"
          id="slide-container"
        >
          <div className="items item1">
            <span>
              <a href="/mobiles">
                {' '}
                <img src="images/mobiles.svg" alt="mobile" />{' '}
              </a>
            </span>
          </div>
          <div className="items item2">
            <span>
              <a href="/smart-watches">
                {' '}
                <img src="images/smart-watches.svg" alt="smart watches" />{' '}
              </a>
            </span>
          </div>
          <div className="items item3">
            <span>
              <a href="airbuds">
                {' '}
                <img
                  src="images/wireless-earbuds.svg"
                  alt="wireless airbuds"
                />{' '}
              </a>
            </span>
          </div>
          <div className="items item4">
            <span>
              <a href="bluetooth-speaker">
                <img
                  src="images/bluetooth-speakers.svg"
                  alt="bluetooth speaker"
                />{' '}
              </a>
            </span>
          </div>
          <div className="items item5">
            <span>
              <a href="power-banks">
                <img src="images/power-banks.svg" alt="power banks" />
              </a>
            </span>
          </div>
          <div className="items item6">
            <span>
              <a href="laptops">
                {' '}
                <img src="images/laptops.svg" alt="laptops" />
              </a>
            </span>
          </div>
          <div className="items item7">
            <span>
              <a href="tablets">
                {' '}
                <img src="images/tablets.svg" alt="tablets" />
              </a>
            </span>
          </div>
          <div className="items item8">
            <span>
              <a href="trimmer-shaver">
                {' '}
                <img
                  src="images/trimmers-shaver.svg"
                  alt="trimmer <shaver"
                />{' '}
              </a>
            </span>
          </div>
        </div>
        <button
          className=" lg:hidden p-2 bg-gray-400 w-6 h-6 rounded-md absolute top-8 left-1   opacity-30 hover:opacity-70 btn-left"
          type="button"
          onClick={goPrev}
        ></button>
        <button
          className=" lg:hidden p-2 bg-gray-400 w-6 h-6 rounded-md absolute top-8 right-1  opacity-30 hover:opacity-70 btn-right"
          type="button"
          onClick={goNext}
        ></button>
      </div>
    </div>
  )
}

export default MainSecondaryNav
