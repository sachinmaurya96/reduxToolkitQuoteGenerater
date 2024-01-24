import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getQutoAsync } from "../feature/qutoSlice";

const Pagination = () => {
    const [pagination,setPagination]= useState(0)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getQutoAsync(pagination))
    },[pagination])
    
  return (
    <Wrapper>
      <div className="pagination">
        <span onClick={()=> pagination>0 && setPagination((prev)=>prev-1)}>❮</span>
        <span onClick={()=>pagination<1454 && setPagination((prev)=>prev+1)}>❯</span>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .pagination {
    display: inline-block;
  }

  .pagination span {
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    transition: background-color 0.3s;
    border: 3px solid #fff;
    cursor: pointer;
  }

  .pagination span.active {
    background-color: #4caf50;
    color: white;
    border: 1px solid #4caf50;
  }

  .pagination span:hover:not(.active) {
    background-color: #ddd;
  }
`;

export default Pagination;
