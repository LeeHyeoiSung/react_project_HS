import React, {useState } from "react";
import styled from 'styled-components';
import LoginButton from "./component/loginbutton";
import Router from "./router/router";
const Main = styled.div`
    width: 210vh;
    height: 100vh;
    background-image: url(/asd.jpg);
    background-size: cover;
`; 
const LoginBox = styled.div`
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
    margin: auto;

    width: 50%;
    height: 50%;
    
    background-color: white;
    border-radius: 30px;
`
const Login1 = styled.div`
    width: 80%;
    height: 80%;

   position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;

    margin: auto;
    background-color: blue;
    .ID,.Password{
        width: 80%;
        height: 10%;
       // position: relative;
    }
    .ID{
        background-color: gray;
    }
    .Password{
        background-color: yellow;
        top: 10vh;
    }
  
`
const LoginInput = styled.input`
    
    width: 98%;
    height: 94%;

    background-color: transparent;
    margin: auto;
    /* top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%; */
    //border: none;

`
function App() {
    
    const [ID, setID] = useState("");
    const [Password, setPassword] = useState("");
    const [UserObj, setUserobj] = useState();
    const [LoginCheck, setLogincheck] = useState(false);
    const handleID = e => setID(e.target.value);
    const handlePW = e => setPassword(e.target.value);

  
    const Users = 
    { ID: "ddd@ddd", Password: "123", name: "Kim" }
;

console.log("3",ID);
console.log("4",Password);
    const handleSubmit = (e) =>  {
        e.preventDefault()
        // console.log(Password)
        console.log("2");
        if(Password === Users.Password) {
            console.log("1");
            setUserobj(Password)
            setLogincheck(true)
            alert("등록된 회원입니다.");
            
          } else {
            alert("등록되지 않은 회원입니다.");
          } 
    
    };
 console.log("test",UserObj)


    return(
      <>
        <form >
            <Main>
                ID : {ID}
                PW : {Password}
                <LoginBox> 
                    <Login1>
                        <Login1 className="ID">
                            <LoginInput
                                name = "id"
                                value = {ID}
                                onChange={handleID}
                                ></LoginInput>
                            </Login1>
                        <Login1 className="Password">
                            <LoginInput 
                                type='password'
                                name = "PW"
                                value = {Password}
                                onChange={handlePW}
                                ></LoginInput>
                        </Login1>
                        <button onClick={handleSubmit}  type="submit"></button>
                    </Login1>
                </LoginBox>
            </Main>    
        </form>
       <Router user ={UserObj} lcheck={LoginCheck}></Router>
       </>
    )
}

export default App;


//sdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd