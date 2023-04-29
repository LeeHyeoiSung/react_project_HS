import {Link, Route, Routes, BrowserRouter } from "react-router-dom"
import { useState } from "react";
import  { Auth } from "./auth";

import Nextpage from "../router/nextpage";
import Home from "../router/home";
import LoginPage from "../router/loginpage";

function Router () {
  console.log("router1",Auth("ddd@ddd","123"))

  const[User , setUser] = useState(null);
  const login = ({ID,Password}) => setUser(Auth(ID,Password));

  const logininfo = User != null;


  console.log("router2",login)
  
    return(
        <BrowserRouter>
        <Link to="/" />
        <Link to="/login" />
        <Link to="/nextpage" />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/login" element={<Nextpage />} />
        </Routes>
        </BrowserRouter>
    );
}
export default Router;

