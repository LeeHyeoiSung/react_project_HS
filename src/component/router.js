import {Link, Route, Routes, BrowserRouter } from "react-router-dom"


import Nextpage from "../router/nextpage";
import Home from "../router/home";
import LoginPage from "../router/loginpage";
function Router (user, lcheck) {
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