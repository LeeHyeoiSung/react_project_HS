import React, {useState } from "react";
import styled from 'styled-components';
import { Auth } from "../component/auth";

////////////////////////style component////////////////////////
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
`

////////////////////////여기서부터 funtion////////////////////////
function LoginPage({login, logininfo}) {   
    console.log(login, logininfo)
    const [ID, setID] = useState("");
    const [Password, setPassword] = useState("");

    const handleID = (e) => setID(e.target.value);
    const handlePW = (e) => setPassword(e.target.value);

    const handleSubmit = (e) =>  {
        e.preventDefault()
        Auth({ ID, Password });
        };
        console.log(login)

    return(
        <form >
            <Main>
                <LoginBox> 
                    <Login1>
                        <Login1 className="ID">
                            <LoginInput
                                name = "id"
                                value = {ID}
                                onChange={handleID}
                                placeholder="ID"
                                ></LoginInput>
                            </Login1>
                        <Login1 className="Password">
                            <LoginInput 
                                type='password'
                                name = "PW"
                                value = {Password}
                                onChange={handlePW}
                                placeholder="Passsword"
                                ></LoginInput>
                        </Login1>
                        <button onClick={handleSubmit}  type="submit">로그인</button>        
                    </Login1>
                </LoginBox>
                
            </Main>    
        </form>
    )
}
export default LoginPage;