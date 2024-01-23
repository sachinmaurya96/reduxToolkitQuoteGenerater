import React from "react";
import styled from "styled-components";

function Toast() {
  return (
    <Wrapper>
      <div class="toast ">
        <div className="icon">
        <i class="fas fa-check-circle"></i>
        </div>
        <div className="message">Qutoe copied</div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: #73ef73;
    padding: 10px 20px;
    border-radius: 10px;
    .toast{
        font-size: 20px;
        font-family: 'Karla', sans-serif;
        display: flex;
        gap: 10px;
        align-items: center;
        .icon{
            color: green;
        }
    }
`
export default Toast;
