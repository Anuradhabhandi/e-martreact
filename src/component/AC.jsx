import React from "react";
import { acData } from "./data/ac";

const ACdata = () =>{

    const firstFiveImages = acData.slice(0,5)
    return(
       <>
       <div className="proTitle">
        <h1>AC</h1>
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
export default ACdata;