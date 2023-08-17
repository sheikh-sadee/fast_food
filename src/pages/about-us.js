import SEO from "@/components/Seo";
import PageBanner from "@/components/PageBanner";
import TeamSection from "@/components/TeamSection";
import TextHeadingSection from "@/components/TextHeadingSection";
import OurInfoSection from "@/components/OurInfoSection";

export default function AboutUs() {
  return (
    <>
      <SEO
        title="About Plastk | Secure Credit Card With Premium Rewards | Plastk"
        description="Plastk's mission is to help Canadians achieve financial freedom one step at a time. Read more about Plastk's founding members & team.
        "
      />
      <PageBanner />
      <TextHeadingSection
        color="var(--white)"
        bgColor="var(--primary)"
        heading="Our Story"
        paragraph={
          <>
            <p>
              Plastk was founded by Motola Omobamiduro in 2018. Motola owned a
              pre-owned vehicle dealership for years, where financing is often
              where the purchase would come together or fall apart. All too
              often many well-meaning people found it difficult to improve their
              credit rating due to previous missteps or decisions. He also
              noticed that newcomers, students and those with major life changes
              required a reasonable way to obtain a credit card while building
              or rebuilding their credit history
            </p>
            <p>
              Motola also saw an opportunity within the credit card rewards
              market. Not surprisingly the best rewards programs were reserved
              for an exclusive few. Premiums rewards benefits should be
              available to all cardholders.
            </p>
            <p>
              He envisioned a credit card that would not only provide a way for
              people to understand and strengthen their credit, but one that
              would also provide cardholders with the premium rewards perks that
              are unavailable with other secured credit card products.
            </p>
          </>
        }
      />
      <OurInfoSection />
      <TeamSection />
    </>
  );
}
