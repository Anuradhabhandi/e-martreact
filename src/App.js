import React from "react";
import { Routes,Route } from "react-router-dom";
import LandingPage from "./component/pages/LandingPage";
import MobilePage from "./component/pages/MobilesPage";
import ComputerPage from "./component/pages/ComputerPage";
import AcComputerPage from "./component/pages/AcPage";
import WatchesPage from "./component/pages/WatchesPage";
import FridgeDataPage from "./component/pages/fridgePage";
import KitchenPage from "./component/pages/kitchesPage";
import FurniturePage from "./component/pages/FurniturePage";
import MenPage from "./component/pages/MensPage";
import WomenPage from "./component/pages/WomenPage";
import UserCart from "./component/UserCard";
import MobileSingle from "./singles/MobileSingle";

const App = () =>{
  return(
    <div>
      <Routes>
        <Route path="/" element={ <LandingPage />} />
        <Route path="/mobiles" element={<MobilePage />}/>
        <Route path="/computer" element = {<ComputerPage/>} />
        <Route path="/acData" element={<AcComputerPage/>}/>
        <Route path="/watches" element={<WatchesPage />}/>
        <Route path="/Refrigerator" element={<FridgeDataPage />}/>
        <Route path="/kitchen" element={<KitchenPage />}/>
        <Route path="/Furnitures" element={<FurniturePage />}/>
        <Route path="/Mens" element={<MenPage />}/>
        <Route path="/Women" element={<WomenPage/>}/>
          <Route path="/mobiles/id" element={<MobileSingle />} />
        <Route path="/cart" element={<UserCart />} />
      </Routes>
    </div>
  )
}
export default App;