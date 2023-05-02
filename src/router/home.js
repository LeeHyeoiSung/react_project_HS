import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <h1>Home</h1>
      <p>메인화면 입니다</p>
      <Link to="/login">
        <button>로그인</button>
      </Link>
    </main>
  );
}

export default Home;
