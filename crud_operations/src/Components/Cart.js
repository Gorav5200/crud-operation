import React from "react";
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

function Cart() {
  const cartData=useSelector((state)=>state.cartData)
//   let amount =cartData.length> 0 && cartData.map((item)=>item.price).reduce((prev,next)=>prev+next)
  console.log(cartData)
  return (
    <>
      <div className="product-container">
        {
        cartData && cartData.map((item)=><div className='product-item'>
            <img src={item.photo} alt='mobile'/>
            <div>name : {item.name}</div>
              <div>price : {item.price}</div>
              <div>category: {item.category}</div>
              <div>brand: {item.brand}</div>
            </div>
            )
      } 
      </div>
      
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        badgeContent={
          <SmallAvatar sx={{ bgcolor:"Green" ,fontSize:"10px", width: 15, height: 15 , ml:2}}>
            1
          </SmallAvatar>
        }
      >
       
        <AiOutlineShoppingCart className="fs-3 mt-2" />
      </Badge>
    </>
  );
}

export default Cart;
