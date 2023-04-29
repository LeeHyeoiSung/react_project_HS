import {Link, Route, Routes, BrowserRouter } from "react-router-dom"
import { useState } from "react";
import  { Auth } from "./auth";

import Nextpage from "../router/nextpage";
import Home from "../router/home";
import LoginPage from "../router/loginpage";

function Router () {
  const[User , setUser] = useState(null);
  const logininfo = User != null;

  const login = 1
  const logout = () => setUser(null);

  if(logininfo != null) <Link to="/" />
  
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

