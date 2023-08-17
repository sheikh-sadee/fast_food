import DiscoverOffers from "@/components/DiscoverOffers";
import FavStores from "@/components/FavStores";
import HowItWorks from "@/components/HowItWorks";
import LatestArticles from "@/components/LatestArticles";
import NewLookFeel from "@/components/NewLookFeel";
import SEO from "@/components/Seo";
import SpecialOffers from "@/components/SpecialOffers";
import VisualSection from "@/components/VisualSection";
import React, { useEffect } from "react";

export default function PlastkRewardsApp() {
  return (
    <>
      <SEO
        title="Sign-Up Bonus | Exclusive Offers Rewards | Plastk"
        description="Discover exclusive offers, earn rewards, and save big with Plastk. Download our app and start enjoying a new level of benefits. Sign up now and maximize your savings!
"
      />
      <VisualSection />
      <DiscoverOffers />
      <FavStores />
      <HowItWorks />
      <NewLookFeel />
      <SpecialOffers />
      <LatestArticles />
    </>
  );
}
