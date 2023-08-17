import postImg01 from "../../../public/article-img1_[plastk,blogs,latestArticles].png";
import postImg02 from "../../../public/article-img2_[plastk,blogs,latestArticles].png";
import postImg03 from "../../../public/article-img3_[plastk,blogs,latestArticles].png";
import Grid from "../Grid";
import GridCol from "../GridCol";
import ArticleCard from "../ArticleCard";
import { ArticleSection } from "./BlogSection.styles";
import { Container } from "@/styles/common";

function BlogSection() {
  return (
    <ArticleSection>
      <div className="container">
        <div className="header">
          <h1>Plastk Blog</h1>
        </div>
        <ul className="filter-list">
          <li>
            <button className="btn-text">All</button>
          </li>
          <li>
            <button className="btn-text">Credit Tip Tuesday</button>
          </li>
          <li>
            <button className="btn-text">Financial Literacy</button>
          </li>
          <li>
            <button className="btn-text">Paper & Plastk Podcast</button>
          </li>
        </ul>
        <Grid md={24} gap={10}>
          <GridCol md={12} lg={8}>
            <ArticleCard
              bgcolor="#F9FFE8"
              color="#A0D800"
              image={postImg01}
              slug="asasd"
              featuredImageAltText="sdfsdfsd"
              tag="Learning"
              title="9 Financial Mistakes To Leave In 2022"
            />
          </GridCol>
          <GridCol md={12} lg={8}>
            <ArticleCard
              bgcolor="#D4EEF8"
              color="#11475A"
              image={postImg02}
              slug="asasd"
              featuredImageAltText="sdfsdfsd"
              tag="Credit Tip Tuesday"
              title="How To Build A Lender-Friendly Credit Profile?"
            />
          </GridCol>
          <GridCol md={12} lg={8}>
            <ArticleCard
              bgcolor="#D6FFE4"
              color="#16BC4E"
              image={postImg03}
              slug="asasd"
              featuredImageAltText="sdfsdfsd"
              tag="Podcasts"
              title="Episode #1 - Achieve Financial Stability"
            />
          </GridCol>
          <GridCol md={12} lg={8}>
            <ArticleCard
              bgcolor="#F9FFE8"
              color="#A0D800"
              image={postImg01}
              slug="asasd"
              featuredImageAltText="sdfsdfsd"
              tag="Learning"
              title="9 Financial Mistakes To Leave In 2022"
            />
          </GridCol>
          <GridCol md={12} lg={8}>
            <ArticleCard
              bgcolor="#D4EEF8"
              color="#11475A"
              image={postImg02}
              slug="asasd"
              featuredImageAltText="sdfsdfsd"
              tag="Credit Tip Tuesday"
              title="How To Build A Lender-Friendly Credit Profile?"
            />
          </GridCol>
          <GridCol md={12} lg={8}>
            <ArticleCard
              bgcolor="#D6FFE4"
              color="#16BC4E"
              image={postImg03}
              slug="asasd"
              featuredImageAltText="sdfsdfsd"
              tag="Podcasts"
              title="Episode #1 - Achieve Financial Stability"
            />
          </GridCol>
          <GridCol md={12} lg={8}>
            <ArticleCard
              bgcolor="#F9FFE8"
              color="#A0D800"
              image={postImg01}
              slug="asasd"
              featuredImageAltText="sdfsdfsd"
              tag="Learning"
              title="9 Financial Mistakes To Leave In 2022"
            />
          </GridCol>
          <GridCol md={12} lg={8}>
            <ArticleCard
              bgcolor="#D4EEF8"
              color="#11475A"
              image={postImg02}
              slug="asasd"
              featuredImageAltText="sdfsdfsd"
              tag="Credit Tip Tuesday"
              title="How To Build A Lender-Friendly Credit Profile?"
            />
          </GridCol>
          <GridCol md={12} lg={8}>
            <ArticleCard
              bgcolor="#D6FFE4"
              color="#16BC4E"
              image={postImg03}
              slug="asasd"
              featuredImageAltText="sdfsdfsd"
              tag="Podcasts"
              title="Episode #1 - Achieve Financial Stability"
            />
          </GridCol>
        </Grid>
      </div>
    </ArticleSection>
  );
}

export default BlogSection;
