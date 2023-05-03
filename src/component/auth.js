import { Link, useNavigate } from "react-router-dom";


var users = [
    { ID: "ddd@ddd", Password: "123", name: "Kim" },
    { ID: "aaa@aaa", Password: "123", name: "Kim" },
    { ID: "sss@sss", Password: "123", name: "Kim" }
];

export function Auth({ID, Password}) {
    const navigate = useNavigate();
    const user = users.find(
          user => user.ID === ID && user.Password === Password)
          navigate('/nextpage');
          
        if(user === undefined) throw new Error();
        return user;      
};




