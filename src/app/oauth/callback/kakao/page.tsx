"use client";

import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const KakaoCallback = () => {
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const params = new URL(document.location.toString()).searchParams;
      const code = params.get("code");

      try {
        const response = await axios.get(
          // `https://banggeul.store/login/kakao?code=${code}`
          `http://43.201.46.230:8080/api/v1/login/kakao?code=${code}`
        );
        const access_token = response.data.response["accessToken"];
        console.log(access_token);

        // axios.defaults.headers.common[
        //   "Authorization"
        // ] = `Bearer ${access_token}`;

        // axios.get("https://banggeul.store/check").then((response: any) => {
        //   console.log(response);
        // });
      } catch (error) {
        console.error("kakaoLogin error:", error);
      }
    };

    fetchData();
    router.push("/home");
  }, [router]);

  return <div>로그인 처리중입니다.</div>;
};

export default KakaoCallback;
