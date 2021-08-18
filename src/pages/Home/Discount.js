import React from 'react';
import styled from 'styled-components';
const DiscountWrapper = styled.div`
  width: 90%;
  height: 200px;
  margin: 0 auto;
  padding: 25px 10px;

`
const DiscountBar = styled.div`
  width: 100%;
  height: 100%;
  background: black;
  color: green;
  font-size: 42px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Discount = () => {
  return (
    <DiscountWrapper>
      <DiscountBar>
        貓咪大戰六周年 大大大大~大優惠
      </DiscountBar>
    </DiscountWrapper>
  )
}
export default Discount;