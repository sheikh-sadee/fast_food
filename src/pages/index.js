import PremiumRewards from "../components/PremiumRewards";
import PlastkProducts from "../components/PlastkProducts";
import PlastkApp from "../components/PlastkApp";
import InfoSection from "../components/InfoSection";
import CustomerReviews from "../components/CustomerReviews";
import LatestArticles from "../components/LatestArticles";
import Image from "next/image";
import Img02 from "../../public/images/promo-img_[plastk,home,info].png";
import Img03 from "../../public/images/promo-img-mobile_[plastk,home,info].jpg";
// import Seo from "../components/Seo";

import HeroSlider from "../components/HeroSlider";
import SEO from "@/components/Seo";
import Button from "@/components/UI/Button";
import PageBanner from "@/components/PageBanner";
import MapHolder from "@/components/MapHolder";

export default function Home() {
  return (
    <>
      <SEO
        title="Best Secured Credit Card | Improve Your Credit Score | Plastk"
        description="Guaranteed approval even with bad credit. Plastk Secured Credit Card is the newest and best way to build your credit in Canada. Get weekly tips and insights to improve your credit in Canada.
        "
      />
      <PageBanner/>
      <HeroSlider />
      <MapHolder />
      <PremiumRewards />
      {/* <PlastkApp />
      <PlastkProducts />
      <InfoSection
        mobileHide
        title="Active Plastk promotions"
        text="Plastk Secured Credit Card's main benefit is that you can earn rewards points on all of your regular transactions everywhere Visa is accepted!
        "
        img={<Image src={Img02} alt="img description" />}
        mobileImg={
          <Image src={Img03} placeholder="blurred" alt="img description" />
        }
        btn={
          <Button type="primary" rounded width={250}>
            Apply Now
          </Button>
        }
      />
      <CustomerReviews />
      <LatestArticles /> */}
    </>
  );
}
