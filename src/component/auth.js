import React from "react";

const Users = 
    { ID: "ddd@ddd", Password: "123", name: "Kim" }
;

export function Auth() {
    const User = Users.find(
          (User) => User.ID === (온값) && User.Password === (온값)

        )
        //if 조건 걸고 실패시 알림창 띄우기
        
        return User;
    };


