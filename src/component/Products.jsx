import React from "react";
import Mobiles from "./Mobile";
import Computers from "./Computers";
import ACdata from "./AC";
import Furniture from "./Furniture";
import Mens from "./Men";
import Women from "./Women";
import Watches from "./Watches";
import Kitchen from "./Kitchen";
import Fridge from "./Fridge";

const Products = () =>{
    return(
        <div>
            <Mobiles />
            <Computers />
            <ACdata />
            <Watches />
            <Fridge />
            <Kitchen />
            <Furniture />
            <Mens />
            <Women />
        </div>
    )
}
export default Products;