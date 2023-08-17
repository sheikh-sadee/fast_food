import React, { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';


import Image from "next/image";
import Link from "next/link";
import Polygon from "../../../public/polygon-img_[plastk,home,buildCreditScore].png.png";
import imgTrack from "../../../public/track-img_[plastk,home,buildCreditScore].png";
import { Container } from "../../styles/common";
import {
  CreditScore,
  ContentHolder,
  Heading,
  TextBox,
  ScoreWrap,
  TrackNumbers,
  TextBlock,
} from "./BuildCreditScore.styles";
import Button from "../UI/Button";

function BuildCreditScore() {
 const [animationStarted, setAnimationStarted] = useState(false);
  const dotRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const dotPosition = dotRef.current?.getBoundingClientRect()?.top;
      const windowScrollPosition = window.innerHeight;

      if (dotPosition && dotPosition < windowScrollPosition && !animationStarted) {
        setAnimationStarted(true);
        dotRef.current.classList.add('animate-dot');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animationStarted]);
  return (
    <CreditScore>
      <Container>
        <ContentHolder>
          <Heading>
            <h2>Build your credit score</h2>
          </Heading>
          <TextBox>
            <p>
              Secured Cards report to credit agencies such as Equifax and
              Transunion, so if you use your card properly, your credit history
              will build
            </p>
          </TextBox>
          <ScoreWrap>
            <div className="score-inner">

              <Image
                className="polygon-img"
                src={Polygon}
                width={367}
                height={406}
                alt="img description"
              />

            {/* <div className={`progress-pointer ${animationStarted ? 'animate-dot' : ''}`} id="progress-pointer" ref={dotRef}></div> */}

              <div className="textCounter">
                <strong className="text-number">900</strong>
                <strong className="text">Great Work!</strong>
              </div>
              <TrackNumbers>
                <li>300</li>
                <li>400</li>
                <li>500</li>
                <li>600</li>
                <li>700</li>
                <li>900</li>
                
              </TrackNumbers>
              
            </div>
            <Image className="img" src={imgTrack} alt="img description" />
{/* <div style={{position: "relative", marginTop: "100px"}}>
  <div className='circle circle-animate'></div>
                 <svg width="756" height="" viewBox="0 0 756 921" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M395.847 10.8371C395.847 16.3635 391.711 20.9238 386.365 21.5904V94.0584C386.365 106.131 392.627 117.339 402.908 123.668L564.708 215.136C583.801 226.889 595.431 247.704 595.431 270.124V435.661C595.431 458.817 583.032 480.2 562.935 491.702L403.863 582.748C393.041 588.942 386.365 600.456 386.365 612.924V698.091H719.711C739.662 698.091 755.835 714.264 755.835 734.215L755.835 853.4V884C755.835 903.951 739.662 920.124 719.711 920.124H36.6257C16.6751 920.124 0.501953 903.951 0.501953 884V853.4L0.502441 734.215C0.502441 714.264 16.6756 698.091 36.6262 698.091H383.656V612.924C383.656 599.484 390.852 587.073 402.517 580.397L561.589 489.351C580.843 478.331 592.722 457.845 592.722 435.661V270.124C592.722 248.645 581.58 228.703 563.288 217.443L401.488 125.975C390.406 119.153 383.656 107.072 383.656 94.0584V21.5904C378.31 20.9238 374.173 16.3635 374.173 10.8371C374.173 4.85194 379.025 0 385.01 0C390.995 0 395.847 4.85194 395.847 10.8371ZM3.21172 734.215C3.21172 715.76 18.1719 700.8 36.6262 700.8H719.711C738.166 700.8 753.126 715.76 753.126 734.215L753.125 853.4V884C753.125 902.454 738.165 917.414 719.711 917.414H385.01H36.6257C18.1714 917.414 3.21123 902.454 3.21123 884V853.4L3.21172 734.215Z" fill="url(#paint0_linear_1_619)"/>
<circle className="circle" cx="385" cy="10" r="10" fill="black">
  </circle>
<defs>
<linearGradient id="paint0_linear_1_619" x1="770.942" y1="460.062" x2="0.501953" y2="460.062" gradientUnits="userSpaceOnUse">
<stop stopColor="#FE9C68"/>
<stop offset="1" stopColor="#F22D48"/>
</linearGradient>
</defs>
</svg>
</div> */}
          </ScoreWrap>
        </ContentHolder>
        <TextBlock>
          <div className="inner">
            <div className="wrap">
              <h2>What’s Your Credit Score?</h2>
              <p>
                Knowing your credit score is the quickest way to improve your
                credit score. To learn more about your credit score,{" "}
                <Link href="/">
                  visit our blog <span class="plastk-iconsarrow-circle"></span>
                </Link>
              </p>
            </div>
          </div>
        </TextBlock>
   
      </Container>
    </CreditScore>
  );
}

export default BuildCreditScore;
