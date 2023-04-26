import {Link, Route, Routes, BrowserRouter } from "react-router-dom"


import Nextpage from "./nextpage";
import Home from "./home";

function Router (user, lcheck) {
    
        console.log("Router",user)
        console.log("Lcheck",lcheck)
  
    

    return(
        <BrowserRouter>
        <Routes>
           {lcheck ? ( 
            <>
      
           
              
               
                <Route path="/Nextpage" element={<Nextpage ID = {user.ID} />} />
           
    </>):(<>
        
        </>)};
           
        </Routes>
        </BrowserRouter>
        
    );
}

export default Router;