import React from "react";
import { useSelector } from "react-redux";
import { selectQuto } from "../feature/qutoSlice";
import Pagination from "./Pagination";
import styled from "styled-components";
import Share from "./Share";
import Copy from "./Copy";
import Toast from "./Toast";

const Quotos = () => {
  const data = useSelector(selectQuto);
  const quto = data.qutos.quotes
  console.log(quto)
  return (
    <Wrapper>
      <h1>{data.qutos.total} Famous Qutes </h1>
      <div className="container">
        {/* <div className="quto">
          <div className="copy">
            <Copy/>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quae laboriosam unde tempore quo sequi alias, in explicabo iste molestiae.</p>
          <div className="auther">
            <span>- Auther</span>
          </div>
        </div> */}
        {
          quto?.map((item)=>(
            <div key={item.id} className="quto">
          <div className="copy">
            <Copy/>
          </div>
          <p><span><i class="fa fa-quote-left"> </i></span> {item.quote} <span><i class="fa fa-quote-right"> </i></span></p>
          <div className="auther">
            <span>- {item.author}</span>
          </div>
        </div>
          ))
        }

        <div className="action">
          <div className="share">
            <Share/>
          </div>
          <Pagination/>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
background-color: #ef4cae;
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 30px;
h1{
  font-family: 'Montserrat', sans-serif;
  font-size: 50px;
  color: #464545;
}
 .container{
  background: #ffcc00;
  width: 600px;
  padding: 20px;
  
  border-radius: 20px;
  box-shadow: 0 0.7065919983928324px 0.7065919983928324px -0.625px #00000026,
    0 1.8065619053231785px 1.8065619053231785px -1.25px #00000025,
    0 3.6217592146567767px 3.6217592146567767px -1.875px #00000023,
    0 6.8655999097303715px 6.8655999097303715px -2.5px #00000020,
    0 13.646761411524492px 13.646761411524492px -3.125px #0000001b,
    0 30px 30px -3.75px #0000000d;
  .action{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .quto{
    box-shadow: 0 0.7065919983928324px 0.7065919983928324px -0.625px #00000026,
    0 1.8065619053231785px 1.8065619053231785px -1.25px #00000025,
    0 3.6217592146567767px 3.6217592146567767px -1.875px #00000023,
    0 6.8655999097303715px 6.8655999097303715px -2.5px #00000020,
    0 13.646761411524492px 13.646761411524492px -3.125px #0000001b,
    0 30px 30px -3.75px #0000000d;
    p{
      padding: 20px;
      color: #373636;
      span{
        color: #fff;
        font-size: 30px;
        margin: 0 10px;
      }
    }
    font-family: 'Karla', sans-serif;
    font-size: 20px;
    border: 3px solid #fff;
    padding: 20px;
    border-radius: 20px;
    margin: 30px 0;
    background: #ecce54;
    .copy{
      display: flex;
      justify-content: end;
      margin: 10px 0;
    }
    .auther{
      font-family: 'Monsieur La Doulaise', cursive;
      font-weight: 400;
      font-size: 50px;
      display: flex;
      justify-content: end;
      margin: 20px 0;
      color: #373636;
    }
  }

 }
`;
export default Quotos;
