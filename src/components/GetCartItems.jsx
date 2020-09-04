import React from "react";
import styled from "styled-components";
import DeleteButton from "./DeleteButton";
import Order from "./Order/Order";

export default function GetCartItems({
  itemImage,
  itemName,
  itemPrice,
  itemKey,
  setDeletedItem,
}) {
  function deleteHandler() {
    window.localStorage.removeItem(itemKey);
    setDeletedItem();
  }

  return (
    <>
      <CartItem>
        <Img>
          <img src={itemImage} alt="" srcSet="" />
        </Img>
        <ItemName>{itemName}</ItemName>
        <ItemPrice>Price: {itemPrice} $</ItemPrice>
        <DeleteButton deleteItem={deleteHandler} />
      </CartItem>
      <Order id={itemKey} />
    </>
  );
}
const CartItem = styled.div`
  display: flex;
  justify-content: flex-start;

  margin: 30px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Img = styled.div`
  width: 170px;
  height: 170px;
`;

const ItemName = styled.p`
  margin-left: 5px;
  display: flex;
  align-items: center;
`;

const ItemPrice = styled.p`
  margin-left: 5px;
  display: flex;
  align-items: center;
`;
