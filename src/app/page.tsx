"use client";

import Image from "next/image";
import styled from "styled-components";
import LoginButton from "@/components/common/LoginButton";
import { Body2Regular, Heading1, Heading2, Heading3 } from "@/styles/texts";
import { useRouter } from "next/navigation";
import colors from "@/styles/color";
import "./button.css";
import KakaoLogin from "@/components/common/KakaoLogin";

export default function HomeBeforeLogin() {
  return (
    <Container>
      <Image src="/images/ce_logo.png" alt={"logo"} width={900} height={900} />
      <KakaoLogin />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.primary};
  height: 100%;
  padding: 60px 24px 0 24px;
`;
