import * as React from "react";
// import { StaticImage } from 'gatsby-plugin-image';
import Slider from "react-slick";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";
import postImg01 from "../../../public/article-img1_[plastk,blogs,latestArticles].png";
import postImg02 from "../../../public/article-img2_[plastk,blogs,latestArticles].png";
import postImg03 from "../../../public/article-img3_[plastk,blogs,latestArticles].png";
import { useMediaPredicate } from "react-media-hook";
import ArticleCard from "../ArticleCard";
import "slick-carousel/slick/slick.css";
import { LatestArticlesSection, ArticleHeader } from "./LatestArticles.styles";
import Button from "../UI/Button";
// import Loader from "../UI/Loader";

function LatestArticles() {
  const biggerThan768 = useMediaPredicate("(min-width: 768px)");
  const [blogData, setBlogData] = React.useState([]);
  // eslint-disable-next-line no-unused-vars
  const [isError, setIsError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const PER_PAGE = 3;
  const fetchData = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/application/blogs`,
        {
          url: `https://api.hubapi.com/content/api/v2/blog-posts?hapikey=3beb074d-16ff-4e94-872e-03b8d2c10f21&limit=${PER_PAGE}&state=PUBLISHED`,
        }
      );

      if (response?.data) {
        setBlogData(response?.data);
        setIsLoading(false);
      }
    } catch (error) {
      setIsError(true);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    centerMode: true,

    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  };
  return (
    <LatestArticlesSection>
      <div className="container">
        <ArticleHeader>
          <h2>Our latest articles</h2>
          {/* <Link className="view-all" href="/">
            View All
            <span class="plastk-iconsarrow-circle"></span>
          </Link> */}
        </ArticleHeader>
        {/* {isLoading ? (
          <Loader className="latest-article-loader" />
        ) : (
          <div className="slide-holder">
            <Slider {...settings}>
              {blogData.objects &&
                blogData.objects.map((item, i) => (
                  <ArticleCard
                    key={i}
                    image={postImg01}
                    slug={item.slug}
                    featuredImageAltText={item.featured_image_alt_text}
                    tag="News"
                    title={item.html_title}
                  />
                ))}
            </Slider>
          </div>
        )} */}

        <div className="slide-holder">
          <Slider {...settings}>
            <ArticleCard
              bgcolor="#F9FFE8"
              color="#A0D800"
              image={postImg01}
              slug="asasd"
              featuredImageAltText="sdfsdfsd"
              tag="Learning"
              title="9 Financial Mistakes To Leave In 2022"
            />
            <ArticleCard
              bgcolor="#D4EEF8"
              color="#11475A"
              image={postImg02}
              slug="asasd"
              featuredImageAltText="sdfsdfsd"
              tag="Credit Tip Tuesday"
              title="How To Build A Lender-Friendly Credit Profile?"
            />
            <ArticleCard
              bgcolor="#D6FFE4"
              color="#16BC4E"
              image={postImg03}
              slug="asasd"
              featuredImageAltText="sdfsdfsd"
              tag="Podcasts"
              title="Episode #1 - Achieve Financial Stability"
            />
          </Slider>
        </div>

        <Button
          as={Link}
          href="/blog"
          type="outline"
          width={150}
          rounded
          md
          className="center-btn"
        >
          View All
        </Button>
      </div>
    </LatestArticlesSection>
  );
}

export default LatestArticles;
