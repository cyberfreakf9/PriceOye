import React from 'react'
const checkList = [
  'Popularity',
  'Prics(Low to High)',
  'Prices(High t o Low',
  'Coffee',
]
const WatchGridLeft = () => {
  return (
    <div className="mobile-sub-grid-left-container">
      <h1>Accordion</h1>
      <div className="faq-drawer">
        <input
          className="faq-drawer__trigger"
          id="faq-drawer"
          type="checkbox"
        />
        <label className="faq-drawer__title" for="faq-drawer">
          SORTING{' '}
        </label>
        <div className="faq-drawer__content-wrapper">
          <div className="faq-drawer__content">
            {/* <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur.
                </p> */}
            <div className="faq-drawer__content_check ">
              {checkList.map((item, index) => (
                <div key={index}>
                  <input value={item} type="checkbox" className="text-xs" />
                  <span className="faq-frawer-checkbox text-xs">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="faq-drawer">
        <input
          className="faq-drawer__trigger"
          id="faq-drawer-2"
          type="checkbox"
        />
        <label className="faq-drawer__title" for="faq-drawer-2">
          EXPRESS DELIVERY
        </label>
        <div className="faq-drawer__content-wrapper">
          <div className="faq-drawer__content">
            <div className="faq-drawer__content_check ">
              <input value="check2" type="checkbox" className="text-xs" />
              <span className="faq-frawer-checkbox text-xs">
                Express Delivery
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="faq-drawer">
        <input
          className="faq-drawer__trigger"
          id="faq-drawer-3"
          type="checkbox"
        />
        <label className="faq-drawer__title" for="faq-drawer-3">
          SET YOUR PRICE RANGE
        </label>
        <div className="faq-drawer__content-wrapper">
          <div className="faq-drawer__content">
            <div className="faq-drawer__content_check ">
              <div>
                <input value="check2" type="checkbox" className="text-xs" />
                <span className="faq-frawer-checkbox text-xs">
                  Below Rs 15,000
                </span>
              </div>
              <div>
                <input value="check2" type="checkbox" className="text-xs" />
                <span className="faq-frawer-checkbox text-xs">
                  Rs 15,000 - Rs 25,000
                </span>
              </div>
              <div>
                <input value="check2" type="checkbox" className="text-xs" />
                <span className="faq-frawer-checkbox text-xs">
                  Rs 25,000 - Rs 40,000
                </span>
              </div>
              <div>
                <input value="check2" type="checkbox" className="text-xs" />
                <span className="faq-frawer-checkbox text-xs">
                  Rs 40,000 - 60,000
                </span>
              </div>
              <div>
                <input value="check2" type="checkbox" className="text-xs" />
                <span className="faq-frawer-checkbox text-xs">
                  Rs 60,000 - 80,000
                </span>
              </div>
              <div>
                <input value="check2" type="checkbox" className="text-xs" />
                <span className="faq-frawer-checkbox text-xs">
                  Rs 80,000 - 100,000
                </span>
              </div>
              <div>
                <input value="check2" type="checkbox" className="text-xs" />
                <span className="faq-frawer-checkbox text-xs">
                  100,000 - 150,000
                </span>
              </div>
              <div>
                <input value="check2" type="checkbox" className="text-xs" />
                <span className="faq-frawer-checkbox text-xs">
                  Above 150,000
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="faq-drawer">
        <input
          className="faq-drawer__trigger"
          id="faq-drawer-4"
          type="checkbox"
        />
        <label className="faq-drawer__title" for="faq-drawer-4">
          PRIMARY CAMERA
        </label>
        <div className="faq-drawer__content-wrapper">
          <div className="faq-drawer__content">
            <div className="faq-drawer__content_check ">
              <input value="check2" type="checkbox" className="text-xs" />
              <span className="faq-frawer-checkbox text-xs">Minimum 4MP</span>
            </div>
            <div className="faq-drawer__content_check ">
              <input value="check2" type="checkbox" className="text-xs" />
              <span className="faq-frawer-checkbox text-xs">Minimum 8MP</span>
            </div>
            <div className="faq-drawer__content_check ">
              <input value="check2" type="checkbox" className="text-xs" />
              <span className="faq-frawer-checkbox text-xs">Minimum 13MP</span>
            </div>
          </div>
        </div>
      </div>
      <div className="faq-drawer">
        <input
          className="faq-drawer__trigger"
          id="faq-drawer-5"
          type="checkbox"
        />
        <label className="faq-drawer__title" for="faq-drawer-5">
          RAM
        </label>
        <div className="faq-drawer__content-wrapper">
          <div className="faq-drawer__content">
            <div className="faq-drawer__content_check ">
              <input value="check2" type="checkbox" className="text-xs" />
              <span className="faq-frawer-checkbox text-xs">1 GB or Less</span>
            </div>
            <div className="faq-drawer__content_check ">
              <input value="check2" type="checkbox" className="text-xs" />
              <span className="faq-frawer-checkbox text-xs">2 GB</span>
            </div>
            <div className="faq-drawer__content_check ">
              <input value="check2" type="checkbox" className="text-xs" />
              <span className="faq-frawer-checkbox text-xs">3 GB</span>
            </div>
            <div className="faq-drawer__content_check ">
              <input value="check2" type="checkbox" className="text-xs" />
              <span className="faq-frawer-checkbox text-xs">4 GB</span>
            </div>
            <div className="faq-drawer__content_check ">
              <input value="check2" type="checkbox" className="text-xs" />
              <span className="faq-frawer-checkbox text-xs">6 GB Above</span>
            </div>
          </div>
        </div>
      </div>
      <div className="faq-drawer">
        <input
          className="faq-drawer__trigger"
          id="faq-drawer-6"
          type="checkbox"
        />
        <label className="faq-drawer__title" for="faq-drawer-6">
          MEMORY
        </label>
        <div className="faq-drawer__content-wrapper">
          <div className="faq-drawer__content">
            <div className="faq-drawer__content_check ">
              <input value="check2" type="checkbox" className="text-xs" />
              <span className="faq-frawer-checkbox text-xs">4 GB </span>
            </div>
            <div className="faq-drawer__content_check ">
              <input value="check2" type="checkbox" className="text-xs" />
              <span className="faq-frawer-checkbox text-xs">8 GB</span>
            </div>
            <div className="faq-drawer__content_check ">
              <input value="check2" type="checkbox" className="text-xs" />
              <span className="faq-frawer-checkbox text-xs">16 GB</span>
            </div>
            <div className="faq-drawer__content_check ">
              <input value="check2" type="checkbox" className="text-xs" />
              <span className="faq-frawer-checkbox text-xs">32 GB</span>
            </div>
            <div className="faq-drawer__content_check ">
              <input value="check2" type="checkbox" className="text-xs" />
              <span className="faq-frawer-checkbox text-xs">64 GB </span>
            </div>
            <div className="faq-drawer__content_check ">
              <input value="check2" type="checkbox" className="text-xs" />
              <span className="faq-frawer-checkbox text-xs">128 GB </span>
            </div>
            <div className="faq-drawer__content_check ">
              <input value="check2" type="checkbox" className="text-xs" />
              <span className="faq-frawer-checkbox text-xs">256 GB </span>
            </div>
            <div className="faq-drawer__content_check ">
              <input value="check2" type="checkbox" className="text-xs" />
              <span className="faq-frawer-checkbox text-xs">512 GB </span>
            </div>
          </div>
        </div>
      </div>
      <div className="faq-drawer">
        <input
          className="faq-drawer__trigger"
          id="faq-drawer-7"
          type="checkbox"
        />
        <label className="faq-drawer__title" for="faq-drawer-7">
          BRANDS
        </label>
        <div className="faq-drawer__content-wrapper">
          <div className="faq-drawer__content">
            <div className="faq-drawer__content_check ">
              <input value="check2" type="checkbox" className="text-xs" />
              <span className="faq-frawer-checkbox text-xs">Samsung </span>
            </div>
            <div className="faq-drawer__content_check ">
              <input value="check2" type="checkbox" className="text-xs" />
              <span className="faq-frawer-checkbox text-xs">Infinix</span>
            </div>
            <div className="faq-drawer__content_check ">
              <input value="check2" type="checkbox" className="text-xs" />
              <span className="faq-frawer-checkbox text-xs">Oppo</span>
            </div>
            <div className="faq-drawer__content_check ">
              <input value="check2" type="checkbox" className="text-xs" />
              <span className="faq-frawer-checkbox text-xs">Xiaomi</span>
            </div>
            <div className="faq-drawer__content_check ">
              <input value="check2" type="checkbox" className="text-xs" />
              <span className="faq-frawer-checkbox text-xs">Alcatel </span>
            </div>
            <div className="faq-drawer__content_check ">
              <input value="check2" type="checkbox" className="text-xs" />
              <span className="faq-frawer-checkbox text-xs">Apple </span>
            </div>
            <div className="faq-drawer__content_check ">
              <input value="check2" type="checkbox" className="text-xs" />
              <span className="faq-frawer-checkbox text-xs">Asus </span>
            </div>
            <div className="faq-drawer__content_check ">
              <input value="check2" type="checkbox" className="text-xs" />
              <span className="faq-frawer-checkbox text-xs">Blackberry </span>
            </div>
            <div className="faq-drawer__content_check ">
              <input value="check2" type="checkbox" className="text-xs" />
              <span className="faq-frawer-checkbox text-xs">Caime </span>
            </div>
            <div className="faq-drawer__content_check ">
              <input value="check2" type="checkbox" className="text-xs" />
              <span className="faq-frawer-checkbox text-xs">Club Mobile </span>
            </div>
            <div className="faq-drawer__content_check ">
              <input value="check2" type="checkbox" className="text-xs" />
              <span className="faq-frawer-checkbox text-xs">Dcode </span>
            </div>
            <div className="faq-drawer__content_check ">
              <input value="check2" type="checkbox" className="text-xs" />
              <span className="faq-frawer-checkbox text-xs">Digit </span>
            </div>
            <div className="faq-drawer__content_check ">
              <input value="check2" type="checkbox" className="text-xs" />
              <span className="faq-frawer-checkbox text-xs">E Tachi </span>
            </div>
            <div className="faq-drawer__content_check ">
              <input value="check2" type="checkbox" className="text-xs" />
              <span className="faq-frawer-checkbox text-xs">Faywa </span>
            </div>
            <div className="faq-drawer__content_check ">
              <input value="check2" type="checkbox" className="text-xs" />
              <span className="faq-frawer-checkbox text-xs">Gfive </span>
            </div>
            <div className="faq-drawer__content_check ">
              <input value="check2" type="checkbox" className="text-xs" />
              <span className="faq-frawer-checkbox text-xs">Gionee </span>
            </div>
            <div className="faq-drawer__content_check ">
              <input value="check2" type="checkbox" className="text-xs" />
              <span className="faq-frawer-checkbox text-xs">Google </span>
            </div>
            <div className="faq-drawer__content_check ">
              <input value="check2" type="checkbox" className="text-xs" />
              <span className="faq-frawer-checkbox text-xs">Gresso </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WatchGridLeft
