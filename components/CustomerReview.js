'use client'
import React from 'react'
import Slider from 'react-slick'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
const CustomerReview = () => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 8,
    slidesToScroll: 1,
    speed: 500,
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
  ////////////////////
  const settingss = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // slidesPerRow: 2,
    responsive: [
      {
        breakpoint: 767,
        settings: { slidesToShow: 1, slidesToScroll: 2 },
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
    <div className="w-full">
      <div className="w-full lg:w-[80%] mx-auto">
        <div className="m-5">
          <h5 className="text-center">Customer Reviews</h5>
          <h6 className="text-center">
            What our Customers say about Priceoye.pk
          </h6>
        </div>
        <div>
          <Slider {...settings}>
            <div className="customer-reviews review1">
              <img src="images/review-1.jpg" alt="review images" />
            </div>
            <div className="customer-reviews review2">
              <img src="images/review-2.jpeg" alt="review images" />
            </div>
            <div className="customer-reviews review3">
              <img src="images/review-3.jpeg" alt="review images" />
            </div>
            <div className="customer-reviews review4">
              <img src="images/review-4.jpeg" alt="review images" />
            </div>
            <div className="customer-reviews review5">
              <img src="images/review-5.jpg" alt="review images" />
            </div>
            <div className="customer-reviews review6">
              <img src="images/review-6.jpg" alt="review images" />
            </div>
            <div className="customer-reviews review7">
              <img src="images/review-7.jpeg" alt="review images" />
            </div>
            <div className="customer-reviews review8">
              <img src="images/review-8.jpg" alt="review images" />
            </div>
            <div className="customer-reviews review9">
              <img src="images/review-9.jpg" alt="review images" />
            </div>
            <div className="customer-reviews review10">
              <img src="images/review-10.jpeg" alt="review images" />
            </div>
          </Slider>
        </div>
        <div className="text-revies">
          <Slider {...settingss}>
            <div className="text-review text-review1">
              <div className="text-review-container">
                <div className="text-review-panels">
                  <div className="txt-review1">
                    <img
                      src="images/user-icon-white.svg"
                      alt="user icon"
                      width={35}
                    />
                  </div>
                  <div className="txt-review2">
                    <span className="text-[#6dbfff]">Asif Rafique</span>
                    <div className="txt-review3">
                      <span>
                        <img src="images/stars.svg" alt="star rating" />{' '}
                      </span>
                      <span>
                        <img src="images/stars.svg" alt="star rating" />{' '}
                      </span>
                      <span>
                        <img src="images/stars.svg" alt="star rating" />{' '}
                      </span>
                      <span>
                        <img src="images/stars.svg" alt="star rating" />{' '}
                      </span>
                      <span>
                        <img src="images/stars.svg" alt="star rating" />{' '}
                      </span>
                    </div>
                    <div className="text-[gray]">21 December 2023</div>
                  </div>

                  <div className="txt-review4">
                    <span>
                      <img
                        src="images/verified-user.svg"
                        alt="verified user"
                        width={20}
                      />
                    </span>
                    <div className="text-[#0bb07e]"> Verified</div>
                  </div>
                </div>
                <div className="text-center text-[gray]">
                  Very prompt delivery and priceoye support
                </div>
              </div>
            </div>
            <div className="text-review text-review2">
              <div className="text-review-container">
                <div className="text-review-panels">
                  <div className="txt-review1">
                    <img
                      src="images/user-icon-white.svg"
                      alt="user icon"
                      width={35}
                    />
                  </div>
                  <div className="txt-review2">
                    <span className="text-[#6dbfff]">Asif Rafique</span>
                    <div className="txt-review3">
                      <span>
                        <img src="images/stars.svg" alt="star rating" />{' '}
                      </span>
                      <span>
                        <img src="images/stars.svg" alt="star rating" />{' '}
                      </span>
                      <span>
                        <img src="images/stars.svg" alt="star rating" />{' '}
                      </span>
                      <span>
                        <img src="images/stars.svg" alt="star rating" />{' '}
                      </span>
                      <span>
                        <img src="images/stars.svg" alt="star rating" />{' '}
                      </span>
                    </div>
                    <div className="text-[gray]">21 December 2023</div>
                  </div>

                  <div className="txt-review4">
                    <span>
                      <img
                        src="images/verified-user.svg"
                        alt="verified user"
                        width={20}
                      />
                    </span>
                    <div className="text-[#0bb07e]"> Verified</div>
                  </div>
                </div>
                <div className="text-center text-[gray]">
                  Very prompt delivery and priceoye support
                </div>
              </div>
            </div>
            <div className="text-review text-review3">
              <div className="text-review-container">
                <div className="text-review-panels">
                  <div className="txt-review1">
                    <img
                      src="images/user-icon-white.svg"
                      alt="user icon"
                      width={35}
                    />
                  </div>
                  <div className="txt-review2">
                    <span className="text-[#6dbfff]">Asif Rafique</span>
                    <div className="txt-review3">
                      <span>
                        <img src="images/stars.svg" alt="star rating" />{' '}
                      </span>
                      <span>
                        <img src="images/stars.svg" alt="star rating" />{' '}
                      </span>
                      <span>
                        <img src="images/stars.svg" alt="star rating" />{' '}
                      </span>
                      <span>
                        <img src="images/stars.svg" alt="star rating" />{' '}
                      </span>
                      <span>
                        <img src="images/stars.svg" alt="star rating" />{' '}
                      </span>
                    </div>
                    <div className="text-[gray]">21 December 2023</div>
                  </div>

                  <div className="txt-review4">
                    <span>
                      <img
                        src="images/verified-user.svg"
                        alt="verified user"
                        width={20}
                      />
                    </span>
                    <div className="text-[#0bb07e]"> Verified</div>
                  </div>
                </div>
                <div className="text-center text-[gray]">
                  Very prompt delivery and priceoye support
                </div>
              </div>
            </div>
            <div className="text-review text-review4">
              <div className="text-review-container">
                <div className="text-review-panels">
                  <div className="txt-review1">
                    <img
                      src="images/user-icon-white.svg"
                      alt="user icon"
                      width={35}
                    />
                  </div>
                  <div className="txt-review2">
                    <span className="text-[#6dbfff]">Asif Rafique</span>
                    <div className="txt-review3">
                      <span>
                        <img src="images/stars.svg" alt="star rating" />{' '}
                      </span>
                      <span>
                        <img src="images/stars.svg" alt="star rating" />{' '}
                      </span>
                      <span>
                        <img src="images/stars.svg" alt="star rating" />{' '}
                      </span>
                      <span>
                        <img src="images/stars.svg" alt="star rating" />{' '}
                      </span>
                      <span>
                        <img src="images/stars.svg" alt="star rating" />{' '}
                      </span>
                    </div>
                    <div className="text-[gray]">21 December 2023</div>
                  </div>

                  <div className="txt-review4">
                    <span>
                      <img
                        src="images/verified-user.svg"
                        alt="verified user"
                        width={20}
                      />
                    </span>
                    <div className="text-[#0bb07e]"> Verified</div>
                  </div>
                </div>
                <div className="text-center text-[gray]">
                  Very prompt delivery and priceoye support
                </div>
              </div>
            </div>
            <div className="text-review text-review5">
              <div className="text-review-container">
                <div className="text-review-panels">
                  <div className="txt-review1">
                    <img
                      src="images/user-icon-white.svg"
                      alt="user icon"
                      width={35}
                    />
                  </div>
                  <div className="txt-review2">
                    <span className="text-[#6dbfff]">Asif Rafique</span>
                    <div className="txt-review3">
                      <span>
                        <img src="images/stars.svg" alt="star rating" />{' '}
                      </span>
                      <span>
                        <img src="images/stars.svg" alt="star rating" />{' '}
                      </span>
                      <span>
                        <img src="images/stars.svg" alt="star rating" />{' '}
                      </span>
                      <span>
                        <img src="images/stars.svg" alt="star rating" />{' '}
                      </span>
                      <span>
                        <img src="images/stars.svg" alt="star rating" />{' '}
                      </span>
                    </div>
                    <div className="text-[gray]">21 December 2023</div>
                  </div>

                  <div className="txt-review4">
                    <span>
                      <img
                        src="images/verified-user.svg"
                        alt="verified user"
                        width={20}
                      />
                    </span>
                    <div className="text-[#0bb07e]"> Verified</div>
                  </div>
                </div>
                <div className="text-center text-[gray]">
                  Very prompt delivery and priceoye support
                </div>
              </div>
            </div>
            <div className="text-review text-review6">
              <div className="text-review-container">
                <div className="text-review-panels">
                  <div className="txt-review1">
                    <img
                      src="images/user-icon-white.svg"
                      alt="user icon"
                      width={35}
                    />
                  </div>
                  <div className="txt-review2">
                    <span className="text-[#6dbfff]">Asif Rafique</span>
                    <div className="txt-review3">
                      <span>
                        <img src="images/stars.svg" alt="star rating" />{' '}
                      </span>
                      <span>
                        <img src="images/stars.svg" alt="star rating" />{' '}
                      </span>
                      <span>
                        <img src="images/stars.svg" alt="star rating" />{' '}
                      </span>
                      <span>
                        <img src="images/stars.svg" alt="star rating" />{' '}
                      </span>
                      <span>
                        <img src="images/stars.svg" alt="star rating" />{' '}
                      </span>
                    </div>
                    <div className="text-[gray]">21 December 2023</div>
                  </div>

                  <div className="txt-review4">
                    <span>
                      <img
                        src="images/verified-user.svg"
                        alt="verified user"
                        width={20}
                      />
                    </span>
                    <div className="text-[#0bb07e]"> Verified</div>
                  </div>
                </div>
                <div className="text-center text-[gray]">
                  Very prompt delivery and priceoye support
                </div>
              </div>
            </div>
            <div className="text-review text-review7">
              <div className="text-review-container">
                <div className="text-review-panels">
                  <div className="txt-review1">
                    <img
                      src="images/user-icon-white.svg"
                      alt="user icon"
                      width={35}
                    />
                  </div>
                  <div className="txt-review2">
                    <span className="text-[#6dbfff]">Asif Rafique</span>
                    <div className="txt-review3">
                      <span>
                        <img src="images/stars.svg" alt="star rating" />{' '}
                      </span>
                      <span>
                        <img src="images/stars.svg" alt="star rating" />{' '}
                      </span>
                      <span>
                        <img src="images/stars.svg" alt="star rating" />{' '}
                      </span>
                      <span>
                        <img src="images/stars.svg" alt="star rating" />{' '}
                      </span>
                      <span>
                        <img src="images/stars.svg" alt="star rating" />{' '}
                      </span>
                    </div>
                    <div className="text-[gray]">21 December 2023</div>
                  </div>

                  <div className="txt-review4">
                    <span>
                      <img
                        src="images/verified-user.svg"
                        alt="verified user"
                        width={20}
                      />
                    </span>
                    <div className="text-[#0bb07e]"> Verified</div>
                  </div>
                </div>
                <div className="text-center text-[gray]">
                  Very prompt delivery and priceoye support
                </div>
              </div>
            </div>
            <div className="text-review text-review8">
              <div className="text-review-container">
                <div className="text-review-panels">
                  <div className="txt-review1">
                    <img
                      src="images/user-icon-white.svg"
                      alt="user icon"
                      width={35}
                    />
                  </div>
                  <div className="txt-review2">
                    <span className="text-[#6dbfff]">Asif Rafique</span>
                    <div className="txt-review3">
                      <span>
                        <img src="images/stars.svg" alt="star rating" />{' '}
                      </span>
                      <span>
                        <img src="images/stars.svg" alt="star rating" />{' '}
                      </span>
                      <span>
                        <img src="images/stars.svg" alt="star rating" />{' '}
                      </span>
                      <span>
                        <img src="images/stars.svg" alt="star rating" />{' '}
                      </span>
                      <span>
                        <img src="images/stars.svg" alt="star rating" />{' '}
                      </span>
                    </div>
                    <div className="text-[gray]">21 December 2023</div>
                  </div>

                  <div className="txt-review4">
                    <span>
                      <img
                        src="images/verified-user.svg"
                        alt="verified user"
                        width={20}
                      />
                    </span>
                    <div className="text-[#0bb07e]"> Verified</div>
                  </div>
                </div>
                <div className="text-center text-[gray]">
                  Very prompt delivery and priceoye support
                </div>
              </div>
            </div>
            <div className="text-review text-review9">
              <div className="text-review-container">
                <div className="text-review-panels">
                  <div className="txt-review1">
                    <img
                      src="images/user-icon-white.svg"
                      alt="user icon"
                      width={35}
                    />
                  </div>
                  <div className="txt-review2">
                    <span className="text-[#6dbfff]">Asif Rafique</span>
                    <div className="txt-review3">
                      <span>
                        <img src="images/stars.svg" alt="star rating" />{' '}
                      </span>
                      <span>
                        <img src="images/stars.svg" alt="star rating" />{' '}
                      </span>
                      <span>
                        <img src="images/stars.svg" alt="star rating" />{' '}
                      </span>
                      <span>
                        <img src="images/stars.svg" alt="star rating" />{' '}
                      </span>
                      <span>
                        <img src="images/stars.svg" alt="star rating" />{' '}
                      </span>
                    </div>
                    <div className="text-[gray]">21 December 2023</div>
                  </div>

                  <div className="txt-review4">
                    <span>
                      <img
                        src="images/verified-user.svg"
                        alt="verified user"
                        width={20}
                      />
                    </span>
                    <div className="text-[#0bb07e]"> Verified</div>
                  </div>
                </div>
                <div className="text-center text-[gray]">
                  Very prompt delivery and priceoye support
                </div>
              </div>
            </div>
            <div className="text-review text-review10">
              <div className="text-review-container">
                <div className="text-review-panels">
                  <div className="txt-review1">
                    <img
                      src="images/user-icon-white.svg"
                      alt="user icon"
                      width={35}
                    />
                  </div>
                  <div className="txt-review2">
                    <span className="text-[#6dbfff]">Asif Rafique</span>
                    <div className="txt-review3">
                      <span>
                        <img src="images/stars.svg" alt="star rating" />{' '}
                      </span>
                      <span>
                        <img src="images/stars.svg" alt="star rating" />{' '}
                      </span>
                      <span>
                        <img src="images/stars.svg" alt="star rating" />{' '}
                      </span>
                      <span>
                        <img src="images/stars.svg" alt="star rating" />{' '}
                      </span>
                      <span>
                        <img src="images/stars.svg" alt="star rating" />{' '}
                      </span>
                    </div>
                    <div className="text-[gray]">21 December 2023</div>
                  </div>

                  <div className="txt-review4">
                    <span>
                      <img
                        src="images/verified-user.svg"
                        alt="verified user"
                        width={20}
                      />
                    </span>
                    <div className="text-[#0bb07e]"> Verified</div>
                  </div>
                </div>
                <div className="text-center text-[gray]">
                  Very prompt delivery and priceoye support
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default CustomerReview
