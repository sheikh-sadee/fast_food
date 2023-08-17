import LatestArticles from "@/components/LatestArticles";
import SEO from "@/components/Seo";
import GrowingTeam from "@/components/GrowingTeam";
import JobCardSection from "@/components/JobCardSection";

export default function Career() {
  return (
    <>
      <SEO
        title="Career | Plastk Visa Credit Card | Plastk"
        description="Ambition to create a better future for our clients and team growth; Plastk Visa Credit Card believes in teamwork, therefore, seeking to collaborate with the right person.
        "
      />
      <GrowingTeam />
      <JobCardSection />
    </>
  );
}
