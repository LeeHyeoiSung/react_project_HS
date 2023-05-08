import {Link, Route, Routes, BrowserRouter } from "react-router-dom"
import { useState } from "react";
import  { Auth } from "./auth";

import Nextpage from "../router/nextpage";
import Home from "../router/home";
import LoginPage from "../router/loginpage";

function Router () {
  const[User , setUser] = useState(null);
  const logininfo = User != null;
  console.log(User)

  const login = ({ ID, Password }) => setUser(Auth({ ID, Password }));
//임시 보류  const logout = () => setUser(null);
//
  if(logininfo != null) <Link to="/" />
  
    return(
        <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/login"
            render={props => (
              <LoginPage logininfo={logininfo} login={login} {...props} />
            )}
            element={<LoginPage />}
          />
          <Route path="/nextpage" element={<Nextpage />} />
        </Routes>
        </BrowserRouter>
    );
}
export default Router;
///

