import React from "react";
import { acData } from "../data/ac";
import Navbar from "../Navbar";

const AcComputerPage = () =>{
    return(
       <>
       <Navbar />
       
        <div className="pageSection">
            {acData.map((item)=>{
                return(
                    <div>
                        <div className="pageImg">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="proModel">
                            {item.company},{item.model}
                        </div>
                    </div>
                )
            })}
        </div>
       </>
    )
}
export default AcComputerPage;