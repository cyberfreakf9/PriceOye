import Approve from '@/components/Approve'
import BestSeller from '@/components/BestSeller'
import CustomerReview from '@/components/CustomerReview'
import DownFullBanner from '@/components/DownFullBanner'
import Headerslider from '@/components/Header-slider'
import LatestTablet from '@/components/LatestTablet'
import MultiMobile from '@/components/MultiMobile'
import MultiSmartWatch from '@/components/MultiSmartWatch'
import MultiWireless from '@/components/MultiWireless'
import ReasonBy from '@/components/ReasonBy'
import ShopByBrand from '@/components/ShopByBrand'
import ShopByPrice from '@/components/ShopByPrice'
import VideoReview from '@/components/VideoReview'
import Footer from '@/components/footer'
import MainSecondaryNav from '@/components/main-secondary-nav'
import Image from 'next/image'

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between">
    <main>
      <MainSecondaryNav />
      <Headerslider />
      <MultiWireless />
      <BestSeller />
      <MultiSmartWatch />
      <DownFullBanner />
      <MultiMobile />
      <ShopByPrice />
      <ShopByBrand />
      <CustomerReview />
      <VideoReview />
      <ReasonBy />
      <LatestTablet />
      <Approve />
      {/* <Footer /> */}
    </main>
  )
}
