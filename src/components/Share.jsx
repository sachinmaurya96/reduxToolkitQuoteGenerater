import React from "react";
import styled from "styled-components";
import {WhatsappShareButton ,WhatsappIcon} from "react-share"
import { useSelector } from "react-redux";
import { selectQuto } from "../feature/qutoSlice";

const Share = () => {
  const data = useSelector(selectQuto);
  const quto = data.qutos.quotes
  const title = quto[0]?.quote
  return (
    <Wrapper>
     
      <WhatsappShareButton title={`${title}
         - ${quto[0].author}

         `}
         
          url="https://redux-toolkit-quote-generater.vercel.app/" >
        <WhatsappIcon size={35}/>
         </WhatsappShareButton>
     
    </Wrapper>
  );
};
const Wrapper = styled.div`
  button{
    background: none;
    border: none;
  }
`;
export default Share;
