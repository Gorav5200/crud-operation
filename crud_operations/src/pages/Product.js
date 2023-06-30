import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import  {products}  from "../ProductsData";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, emptyCart, removeToCart } from "../redux/actions";
import Header from "../Components/Header";

export default function Product() {
  const dispatch = useDispatch();
  console.log(products);

//   useEffect(() => {
//     dispatch(products());
//   }, []);
  return (
    <>
    <Header/>
    <div className="container-fluid bg-dark ">
      <div className="d-flex flex-wrap  gap-4 flex-row justify-content-around p-3">
        {products &&
          products.map((item, i) => {
            return (
              <div className="flex-item " key={i}>
                <Card className="bg-image hover-zoom" sx={{ maxWidth: 250 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={item.image}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.name}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button
                      size="small"
                      variant="contained"
                    //   onClick={() => dispatch(addToCart(item))}
                    >
                      Add to Cart
                    </Button>
                    <Button size="small">Wishlist</Button>
                  </CardActions>
                </Card>
              </div>
            );
          })}
      </div>
    </div>
    </>
  );
}
