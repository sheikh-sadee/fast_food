import SEO from "@/components/Seo";
import BlogDetail from "@/components/BlogDetail";
import LatestArticles from "@/components/LatestArticles";

export default function Blog() {
  return (
    <>
      <SEO
        title="Blog & Podcast | Credit Tips | Build Strong Credit | Plastk"
        description="Get credit tips to create a strong credit profile, a good credit history, and a variety of other tips that can help them protect themselves against this safe credit card.
        "
      />
      <BlogDetail />
      <LatestArticles />
    </>
  );
}
