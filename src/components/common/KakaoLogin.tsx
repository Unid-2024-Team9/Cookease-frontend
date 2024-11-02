"use client";

import React from "react";

declare global {
  interface Window {
    Kakao: any;
  }
}

const KakaoLogin = () => {
  const handleLogin = () => {
    if (window.Kakao && window.Kakao.isInitialized()) {
      window.Kakao.Auth.authorize({
        redirectUri: "http://localhost:3000/oauth/callback/kakao",
      });
    } else {
      console.error("Kakao SDK가 초기화되지 않았습니다.");
    }
  };

  return (
    <img
      alt="카카오 로그인"
      src="/images/uni_kakao_login_medium_wide.png"
      onClick={handleLogin}
      width={300}
      height={45}
      style={{ width: "500px", cursor: "pointer" }}
    />
  );
};

export default KakaoLogin;
