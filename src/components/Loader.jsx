import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <Wrapper>
      <div className="typewriter">
        <div className="slide">
          <i></i>
        </div>
        <div className="paper"></div>
        <div className="keyboard"></div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
 
  .typewriter {
    --blue: #5c86ff;
    --blue-dark: #275efe;
    --key: #fff;
    --paper: #eef0fd;
    --text: #d3d4ec;
    --tool: #fbc56c;
    --duration: 3s;
    position: relative;
    -webkit-animation: bounce05 var(--duration) linear infinite;
    animation: bounce05 var(--duration) linear infinite;
  }

  .typewriter .slide {
    width: 92px;
    height: 20px;
    border-radius: 3px;
    margin-left: 14px;
    transform: translateX(14px);
    background: linear-gradient(var(--blue), var(--blue-dark));
    -webkit-animation: slide05 var(--duration) ease infinite;
    animation: slide05 var(--duration) ease infinite;
  }

  .typewriter .slide:before,
  .typewriter .slide:after,
  .typewriter .slide i:before {
    content: "";
    position: absolute;
    background: var(--tool);
  }

  .typewriter .slide:before {
    width: 2px;
    height: 8px;
    top: 6px;
    left: 100%;
  }

  .typewriter .slide:after {
    left: 94px;
    top: 3px;
    height: 14px;
    width: 6px;
    border-radius: 3px;
  }

  .typewriter .slide i {
    display: block;
    position: absolute;
    right: 100%;
    width: 6px;
    height: 4px;
    top: 4px;
    background: var(--tool);
  }

  .typewriter .slide i:before {
    right: 100%;
    top: -2px;
    width: 4px;
    border-radius: 2px;
    height: 14px;
  }

  .typewriter .paper {
    position: absolute;
    left: 24px;
    top: -26px;
    width: 40px;
    height: 46px;
    border-radius: 5px;
    background: var(--paper);
    transform: translateY(46px);
    -webkit-animation: paper05 var(--duration) linear infinite;
    animation: paper05 var(--duration) linear infinite;
  }

  .typewriter .paper:before {
    content: "";
    position: absolute;
    left: 6px;
    right: 6px;
    top: 7px;
    border-radius: 2px;
    height: 4px;
    transform: scaleY(0.8);
    background: var(--text);
    box-shadow: 0 12px 0 var(--text), 0 24px 0 var(--text), 0 36px 0 var(--text);
  }

  .typewriter .keyboard {
    width: 120px;
    height: 56px;
    margin-top: -10px;
    z-index: 1;
    position: relative;
  }

  .typewriter .keyboard:before,
  .typewriter .keyboard:after {
    content: "";
    position: absolute;
  }

  .typewriter .keyboard:before {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 7px;
    background: linear-gradient(135deg, var(--blue), var(--blue-dark));
    transform: perspective(10px) rotateX(2deg);
    transform-origin: 50% 100%;
  }

  .typewriter .keyboard:after {
    left: 2px;
    top: 25px;
    width: 11px;
    height: 4px;
    border-radius: 2px;
    box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key),
      60px 0 0 var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key),
      22px 10px 0 var(--key), 37px 10px 0 var(--key), 52px 10px 0 var(--key),
      60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 10px 0 var(--key);
    -webkit-animation: keyboard05 var(--duration) linear infinite;
    animation: keyboard05 var(--duration) linear infinite;
  }

  @keyframes bounce05 {
    85%,
    92%,
    100% {
      transform: translateY(0);
    }

    89% {
      transform: translateY(-4px);
    }

    95% {
      transform: translateY(2px);
    }
  }

  @keyframes slide05 {
    5% {
      transform: translateX(14px);
    }

    15%,
    30% {
      transform: translateX(6px);
    }

    40%,
    55% {
      transform: translateX(0);
    }

    65%,
    70% {
      transform: translateX(-4px);
    }

    80%,
    89% {
      transform: translateX(-12px);
    }

    100% {
      transform: translateX(14px);
    }
  }

  @keyframes paper05 {
    5% {
      transform: translateY(46px);
    }

    20%,
    30% {
      transform: translateY(34px);
    }

    40%,
    55% {
      transform: translateY(22px);
    }

    65%,
    70% {
      transform: translateY(10px);
    }

    80%,
    85% {
      transform: translateY(0);
    }

    92%,
    100% {
      transform: translateY(46px);
    }
  }

  @keyframes keyboard05 {
    5%,
    12%,
    21%,
    30%,
    39%,
    48%,
    57%,
    66%,
    75%,
    84% {
      box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key),
        60px 0 0 var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key),
        22px 10px 0 var(--key), 37px 10px 0 var(--key), 52px 10px 0 var(--key),
        60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 10px 0 var(--key);
    }

    9% {
      box-shadow: 15px 2px 0 var(--key), 30px 0 0 var(--key),
        45px 0 0 var(--key), 60px 0 0 var(--key), 75px 0 0 var(--key),
        90px 0 0 var(--key), 22px 10px 0 var(--key), 37px 10px 0 var(--key),
        52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 var(--key),
        83px 10px 0 var(--key);
    }

    18% {
      box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key),
        60px 2px 0 var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key),
        22px 10px 0 var(--key), 37px 10px 0 var(--key), 52px 10px 0 var(--key),
        60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 10px 0 var(--key);
    }

    27% {
      box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key),
        60px 0 0 var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key),
        22px 12px 0 var(--key), 37px 10px 0 var(--key), 52px 10px 0 var(--key),
        60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 10px 0 var(--key);
    }

    36% {
      box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key),
        60px 0 0 var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key),
        22px 10px 0 var(--key), 37px 10px 0 var(--key), 52px 12px 0 var(--key),
        60px 12px 0 var(--key), 68px 12px 0 var(--key), 83px 10px 0 var(--key);
    }

    45% {
      box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key),
        60px 0 0 var(--key), 75px 0 0 var(--key), 90px 2px 0 var(--key),
        22px 10px 0 var(--key), 37px 10px 0 var(--key), 52px 10px 0 var(--key),
        60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 10px 0 var(--key);
    }

    54% {
      box-shadow: 15px 0 0 var(--key), 30px 2px 0 var(--key),
        45px 0 0 var(--key), 60px 0 0 var(--key), 75px 0 0 var(--key),
        90px 0 0 var(--key), 22px 10px 0 var(--key), 37px 10px 0 var(--key),
        52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 var(--key),
        83px 10px 0 var(--key);
    }

    63% {
      box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key),
        60px 0 0 var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key),
        22px 10px 0 var(--key), 37px 10px 0 var(--key), 52px 10px 0 var(--key),
        60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 12px 0 var(--key);
    }

    72% {
      box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key),
        45px 2px 0 var(--key), 60px 0 0 var(--key), 75px 0 0 var(--key),
        90px 0 0 var(--key), 22px 10px 0 var(--key), 37px 10px 0 var(--key),
        52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 var(--key),
        83px 10px 0 var(--key);
    }

    81% {
      box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key),
        60px 0 0 var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key),
        22px 10px 0 var(--key), 37px 12px 0 var(--key), 52px 10px 0 var(--key),
        60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 10px 0 var(--key);
    }
  }
`;
export default Loader;
