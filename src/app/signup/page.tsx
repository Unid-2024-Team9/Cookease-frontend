"use client";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { LongOrangeButton } from "@/components/base/LongOrangeButton";
import { useRouter } from "next/navigation";
import { signContract } from "@/lib/sign/sign-contract";
// import { useGetSigner } from "@/lib/sign/useGetSigner";
import Modal from "@/components/common/Modal";
import colors from "@/styles/color";
import Image from "next/image";

export default function Signup() {
  const router = useRouter();
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <Container>
        <div style={{ fontSize: "28px", fontWeight: "700" }}>
          Set your profile
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "24px",
          }}
        >
          <Image
            src={
              isClicked
                ? "/images/hs_profile_yennie.svg"
                : "/images/hs_profile_set.svg"
            }
            alt="profile set"
            width={116}
            height={116}
            style={{ cursor: "pointer" }}
            onClick={() => setIsClicked(!isClicked)}
          />
        </div>
        <div
          style={{
            fontWeight: "500",
            fontSize: "12px",
            color: `${colors.grey6}`,
            margin: "24px 0 4px 0",
          }}
        >
          NickName
        </div>
        <NicknameInput type="text" placeholder="Enter your Nickname" />
        <FooterWrapper>
          <LongOrangeButton active={true} onClick={() => router.push("/home")}>
            {"Let’s get started!"}
          </LongOrangeButton>
        </FooterWrapper>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto; /* 부모 요소가 스크롤을 허용하도록 설정 */
  padding: 24px 24px 0px 24px;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 16px 0;
  & > h1 {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 4px;
  }
  & > h3 {
    font-size: 1.25rem;
    font-weight: 400;
    margin-bottom: 40px;
  }
`;

const NicknameInput = styled.input`
  width: 100%;
  height: 52px;
  padding: 0px 17px;

  border: 1px solid ${colors.grey2};

  font-size: 17px;
  font-weight: 400;
  color: ${colors.grey6};
`;

const FooterWrapper = styled.div`
  width: 100%;
  padding: 0px 24px 24px 24px;
  position: fixed;
  z-index: 10;

  bottom: 0px;
  left: 0px;
`;
