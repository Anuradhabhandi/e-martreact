import React from "react";
import { watchData } from "./data/watch";

const Watches = () =>{

    const firstFiveImages = watchData.slice(0,5)

    return(
        <>
        <div className="proTitle">
            <h1>Watches</h1>
        </div>
        <div className="proSection">
            {
                firstFiveImages.map((item)=>{
                    return(
                        <div className="imgBox">
                            <img className="proImage" src={item.image} alt=""/>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}
export default Watches;