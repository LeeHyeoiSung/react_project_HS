import React from "react";
import { useNavigate ,Link } from "react-router-dom";

const Users = 
    { ID: "ddd@ddd", Password: "123", name: "Kim" }
;

function LoginButton(User) {
    const navigate  = useNavigate();

    const Buttoncheck = () => {
        console.log("user" , User)
        console.log("ID" , User.ID)
        console.log("Password" , User.Password)
        if(User.ID === Users.ID && User.Password === Users.Password) {
           
          } else {
            alert("등록되지 않은 회원입니다.");
          } 
    };
    return(
       
                <Link to ='/Nextpage' onClick={Buttoncheck}>로그인</Link> 
    )


}

export default LoginButton;

///// 기능보류 ///////////