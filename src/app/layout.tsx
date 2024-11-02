import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/layout/Layout";
import GlobalStyle from "@/styles/global";
import Providers from "@/redux/provider";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import KakaoInit from "@/components/common/KakaoInit";

export const metadata: Metadata = {
  title: "Cookease",
  description: "Food",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.3.0/kakao.min.js"
          integrity="sha384-70k0rrouSYPWJt7q9rSTKpiTfX6USlMYjZUtr1Du+9o4cGvhPAWxngdtVZDdErlh"
          crossOrigin="anonymous"
          async
        ></script>
        <script
          src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
          async
        ></script>
      </head>
      <body>
        <GlobalStyle />
        <Providers>
          <KakaoInit />
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
