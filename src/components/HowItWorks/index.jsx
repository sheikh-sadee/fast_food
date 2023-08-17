import * as React from "react";
// import { StaticImage } from 'gatsby-plugin-image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import axios from "axios";
import Image from "next/image";
import postImg01 from "../../../public/Signup_[plastk,plastkRewards,howItWorks].svg";
import postImg02 from "../../../public/Explore_[plastk,plastkRewards,howItWorks].svg";
import postImg03 from "../../../public/Reciept_[plastk,plastkRewards,howItWorks].svg";
import postImg04 from "../../../public/Share_[plastk,plastkRewards,howItWorks].svg";
import { useMediaPredicate } from "react-media-hook";
import HowItWorksCard from "../HowItWorksCard";
import { HowItWorksSection, Heading } from "./HowItWorks.styles";
// import Loader from "../UI/Loader";

function HowItWorks() {
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
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,

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
          dots: true,
        },
      },
    ],
  };
  return (
    <HowItWorksSection>
      <div className="container">
        <Heading>
          <h2>How It Works</h2>
        </Heading>
        <div className="slide-holder">
          <Slider {...settings}>
            <HowItWorksCard
              data-aos-delay="50"
              image={postImg01}
              featuredImageAltText="sdfsdfsd"
              title="Sign Up"
              description="Get the Rewards App for free & create your account."
            />
            <HowItWorksCard
              data-aos-delay="100"
              image={postImg02}
              featuredImageAltText="sdfsdfsd"
              title="Explore"
              description="Explore offers for all your favourite stores & brands"
            />
            <HowItWorksCard
              data-aos-delay="150"
              image={postImg03}
              featuredImageAltText="sdfsdfsd"
              title="Scan Reciept"
              description="Scan your receipts to confirm your purchases"
            />
            <HowItWorksCard
              data-aos-delay="200"
              image={postImg04}
              featuredImageAltText="sdfsdfsd"
              title="Earn & Spend"
              description="Earn Rewards Points and spend them on what you like!"
            />
          </Slider>
        </div>
      </div>
    </HowItWorksSection>
  );
}

export default HowItWorks;
