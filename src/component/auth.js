const users = [
    { ID: "ddd@ddd", Password: "123", name: "Kim" },
    { ID: "aaa@aaa", Password: "123", name: "Kim" },
    { ID: "sss@sss", Password: "123", name: "Kim" }
];

export function Auth(ID, Password) {
    const user = users.find(
          (user) => user.ID === ID && user.Password === Password);
        if(user === undefined) alert("등록되지 않은 회원입니다.");
        return user;      
};




