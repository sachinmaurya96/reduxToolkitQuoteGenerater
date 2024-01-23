import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectQuto } from "../feature/qutoSlice";
import Toast from "./Toast";

const Copy = () => {
    const [open,setOpen] = useState(false)
    const data = useSelector(selectQuto);
  const quto = data.qutos.quotes
  return (
    <Wrapper>
      <button class="Btn" onClick={()=>{
        navigator.clipboard.writeText(quto[0].quote)
        .then(function () {
            console.log('Text successfully copied to clipboard');
            setOpen(true)
            setTimeout(() => {
                setOpen(false)
            }, 2000);
        })
        .catch(function (err) {
            console.error('Unable to copy text to clipboard', err);
        });
      }}>
        <span class="text">Copy</span>
        <span class="svgIcon">
          <svg
            fill="white"
            viewBox="0 0 384 512"
            height="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M280 64h40c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128C0 92.7 28.7 64 64 64h40 9.6C121 27.5 153.3 0 192 0s71 27.5 78.4 64H280zM64 112c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16H304v24c0 13.3-10.7 24-24 24H192 104c-13.3 0-24-10.7-24-24V112H64zm128-8a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"></path>
          </svg>
        </span>
      </button>
     {
        open &&  <Toast/>
     }
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .Btn {
    width: 100px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: none;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 0.7065919983928324px 0.7065919983928324px -0.625px #00000026,
    0 1.8065619053231785px 1.8065619053231785px -1.25px #00000025,
    0 3.6217592146567767px 3.6217592146567767px -1.875px #00000023,
    0 6.8655999097303715px 6.8655999097303715px -2.5px #00000020,
    0 13.646761411524492px 13.646761411524492px -3.125px #0000001b,
    0 30px 30px -3.75px #0000000d;
    cursor: pointer;
  }

  .text {
    width: 65%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: rgb(2, 153, 153);
  }

  .svgIcon {
    width: 35%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: teal;
  }

  .Btn:hover .text {
    background-color: rgb(0, 133, 133);
  }

  .Btn:hover .svgIcon {
    background-color: rgb(0, 105, 105);
  }
`;
export default Copy;

