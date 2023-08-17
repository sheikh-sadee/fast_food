import styled from "styled-components";

export const CreditScore = styled.div`
  width: 100%;
  position: relative;
  padding: 25px 0;

  @media (min-width: 768px) {
    padding: 35px 0;
  }
  @media (min-width: 1200px) {
    padding: 50px 0;
  }
`;

export const ContentHolder = styled.div`
  position: relative;
  max-width: 1036px;
  margin: 0 auto;
  padding: 0;

  @media (min-width: 992px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 71px 50px 50px;
  }
  @media (min-width: 1200px) {
    padding: 71px 0 50px;
  }
  @media (min-width: 1420px) {
    padding: 115px 0 85px;
  }

  .img {
    display: none;
    position: absolute;
    top: -118px;
    left: 50%;
    margin-left: -14px;
    width: 185px;
    height: auto;

    @media (min-width: 768px) {
      display: block;
      top: -88px;
      left: 50%;
      margin-left: -14px;
      width: 130px;
    }
    @media (min-width: 992px) {
      top: 0;
      left: 50%;
      margin-left: -15px;
      width: 120px;
    }
    @media (min-width: 1420px) {
      top: 0;
      left: 50%;
      margin-left: 0px;
      width: 180px;
    }
  }
`;

export const Heading = styled.div`
  order: 1;
  text-transform: capitalize;
  font-weight: 600;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 270px;
    margin: 0 auto;
  }
  @media (min-width: 992px) {
    width: 270px;
    text-align: left;
    margin: 0;
  }
  @media (min-width: 1200px) {
    width: 290px;
  }

  h2 {
    @media (max-width: 767px) {
      text-align: left;
    }
  }

  .h4 {
    @media (min-width: 992px) {
      margin-bottom: 0;
    }
  }
`;

export const TextBox = styled.div`
  order: 3;
  font-size: 16px;
  line-height: 20px;
  margin: 0 auto 30px;
  text-align: left;

  @media (min-width: 768px) {
    width: 325px;
    text-align: center;
  }
  @media (min-width: 992px) {
    width: 270px;
    padding: 0 0 0 16px;
    margin: 0;
    text-align: left;
    border-left: 2px solid #fc7a5e;
  }
  @media (min-width: 1200px) {
    width: 305px;
    margin: 0 -20px 0 0;
  }
`;

export const ScoreWrap = styled.div`
  order: 2;
  width: 250px;
  position: relative;
  margin: 25px auto;

  @media (min-width: 768px) {
    width: 216px;
    margin: 105px auto 78px;
  }
  @media (min-width: 992px) {
    margin: 0 0 0 -20px;
    position: static;
  }
  @media (min-width: 1420px) {
    width: 310px;
  }

  .textCounter {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--white);
    text-align: center;

    .text-number {
      display: block;
      font-size: 30px;
      line-height: 36px;
      font-weight: 700;
      letter-spacing: -0.01em;

      @media (min-width: 768px) {
        font-size: 24px;
        line-height: 30px;
      }
      @media (min-width: 1420px) {
        font-size: 30px;
        line-height: 35px;
      }
    }

    .text {
      display: block;
      font-size: 14px;
      line-height: 18px;
      font-weight: 400;
      letter-spacing: -0.01em;

      @media (min-width: 768px) {
        font-size: 18px;
        line-height: 21px;
      }
 
    }
  }

  .score-inner {
    position: relative;

    &:before {
      content: "";
    background: linear-gradient( 215.39deg, rgba(254,173,110,0.5) 5.63%, rgba(254,51,64,0.5) 51.48%, rgba(163,5,120,0.5) 97.09% );
    -webkit-filter: blur(108.877px);
    filter: blur(108.877px);
    height: 100%;
    width: 100%;
    position: absolute;
    inset: 0;
    z-index:-1;

    .polygon-img {
      display: block;
      max-width: 100%;
      height: auto;
      position: relative;
    }
  }
 .progress-pointer {
    position: absolute;
    left: 35px;
    bottom: 90px;
}
 .progress-pointer:before {
    background: #55e19a;
    border: 3px solid var(--white);
    border-radius: 100%;
    bottom: 27px;
    content: "";
    height: 20px;
    left: -5px;
    position: absolute;
    width: 20px;
    z-index: 2;
    transform: rotate(0deg);
}



.animate-dot{
animation: moveDot 4s linear forwards;
}
.circle{
    left: 109px;
    position: absolute;
    height: 1px;
    width: 1px;
    background: #333;
}
 /* Apply the animation to the circle element */
    .circle-animate {
      animation: dotAnimation 5s linear infinite;
    }
   @keyframes dotAnimation {
      0% {
   
        width: 1px;
          height: 0px;
              transform: rotate(0deg);
      }
25% {
    height: 10px;
         transform: rotate(0deg);
  
      }
       50% {
          height: 15px;
          transform: rotate(10deg);

      }
      //  75% {
      //    transform: translate(218px,445px);
      // }
      //  90% {
      //    transform: translate(7px,577px);
      // }
      // 100% {
      //   transform: translate(7px,677px);
      // }
    }

   

  @keyframes moveDot {
      0% {
            bottom: 90px;
            transform: translate(calc(100% + 0px),0px);
      }
      25% {
        bottom: 197px;
        transform: translate(calc(100% + 4px),0px);
      }
      50% {
        bottom: 300px;
        transform: translate(calc(100% + 112px),35px);
      }
       75% {
            bottom: 276px;
    transform: translate(calc(100% + 222px),72px);
      }
      90% {
          bottom: 165px;
          transform: translate(calc(100% + 233px),84px);
      }
      100% {
          bottom: 90px;
          transform: translate(calc(100% + 119px),82px);
      }
    }
`;

export const TrackNumbers = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 11px;
  line-height: 13px;
  font-weight: 700;
  color: var(--white);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  @media (min-width: 768px) {
    font-size: 13px;
    line-height: 16px;
  }
  @media (min-width: 1420px) {
    font-size: 15px;
    line-height: 18px;
  }

  li {
    position: absolute;

    &:nth-child(1) {
      left: 10px;
      bottom: 88px;

      @media (min-width: 768px) {
        left: 4px;
        bottom: 72px;
      }
      @media (min-width: 1420px) {
        left: 8px;
        bottom: 110px;
      }
    }
    &:nth-child(2) {
      top: 84px;
      left: 10px;

      @media (min-width: 768px) {
        top: 62px;
        left: 5px;
      }
      @media (min-width: 1420px) {
        top: 90px;
        left: 12px;
      }
    }
    &:nth-child(3) {
      top: 19px;
      left: 50%;
      transform: translateX(-50%);

      @media (min-width: 768px) {
        top: 8px;
      }
      @media (min-width: 1420px) {
        top: 25px;
      }
    }
    &:nth-child(4) {
      top: 84px;
      right: 10px;

      @media (min-width: 768px) {
        top: 60px;
        right: 7px;
      }
      @media (min-width: 1420px) {
        top: 90px;
        right: 12px;
      }
    }
    &:nth-child(5) {
      right: 8px;
      bottom: 90px;

      @media (min-width: 768px) {
        right: 7px;
        bottom: 63px;
      }
      @media (min-width: 1420px) {
        right: 11px;
        bottom: 93px;
      }
    }
    &:nth-child(6) {
      left: 50%;
      bottom: 18px;
      transform: translateX(-50%);

      @media (min-width: 768px) {
        bottom: 10px;
      }
      @media (min-width: 1420px) {
        bottom: 23px;
      }
    }
  }
`;

export const TextBlock = styled.div`
  position: relative;
  max-width: 550px;
  margin: 0 auto;
  padding: 2px;
  border-radius: 25px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  text-align: center;
  background: linear-gradient(270deg, #fe9c68 -2%, #f22d48 100%);
  z-index: 3;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 25px;
  }
  @media (min-width: 992px) {
    max-width: 650px;
    font-size: var(--font-size-base);
    line-height: calc(var(--font-size-base) + 6px);
  }
  @media (min-width: 1200px) {
    max-width: 750px;
  }
  @media (min-width: 1420px) {
    font-size: var(--font-size-lg);
    line-height: calc(var(--font-size-lg) + 6px);
  }

  .inner {
    width: 100%;
    border-radius: 24px;
    padding: 20px 15px 25px;
    background: var(--white);

    @media (min-width: 768px) {
      padding: 20px 40px;
    }
    @media (min-width: 992px) {
      padding: 15px 80px 20px;
    }
    @media (min-width: 1420px) {
      padding: 25px 80px 30px;
    }
  }

  .wrap {
    max-width: 775px;
    margin: 0 auto;
  }

  h2 {
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 10px;

    @media (min-width: 768px) {
      font-size: 30px;
      line-height: 33px;
    }
    @media (min-width: 1420px) {
      font-size: var(--h2-font-size);
      line-height: calc(var(--h2-font-size) + 6px);
      margin-bottom: 25px;
    }
  }

  p {
    @media (min-width: 768px) {
      margin-bottom: 16px;
    }

    a {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      background: linear-gradient(
        249.15deg,
        #fead6e 4.75%,
        #fe3340 25.3%,
        #a30578 45.74%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
  }
`;
