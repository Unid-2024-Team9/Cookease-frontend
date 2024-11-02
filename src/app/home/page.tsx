"use client";

import styled from "styled-components";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import HomeSearchBar from "@/components/common/RecipeSearchBar";
import SlideUpModal from "@/components/base/SlideUpModal";
import CalendarInput from "@/components/base/CalendarInput";
import Modal from "@/components/common/Modal";
import { LongOrangeButton } from "@/components/base/LongOrangeButton";
import colors from "@/styles/color";
import { Heading2, Heading3 } from "@/styles/texts";

export default function Home() {
  const [isFirstSlideUpModalOpen, setIsFirstSlideUpModalOpen] = useState(false);
  const [isDepositPopUpModalOpen, setIsDepositPopUpModalOpen] = useState(false);
  const [isCompletePopUpModalOpen, setIsCompletePopUpModalOpen] =
    useState(false);
  const [isPersonClicked, setIsPersonClicked] = useState(false);
  const [isTimeClicked, setIsTimeClicked] = useState(false);
  const [isGoDown, setIsGoDown] = useState(false);

  const router = useRouter();

  const [txHash, setTxHash] = useState("");

  return (
    <>
      <Container>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "20px 0 14px 0",
          }}
        >
          <Heading3 style={{ marginLeft: "15px" }}>냉장</Heading3>
          <Image
            src="/images/ce_home_plus.svg"
            alt="plus"
            width={30}
            height={30}
            style={{ marginRight: "13px", cursor: "pointer" }}
            onClick={() => setIsFirstSlideUpModalOpen(true)}
          />
        </div>
        <Fridge />

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "40px 0 14px 0",
          }}
        >
          <Heading3 style={{ marginLeft: "15px" }}>냉동</Heading3>
          <Image
            src="/images/ce_home_plus.svg"
            alt="plus"
            width={30}
            height={30}
            style={{ marginRight: "13px", cursor: "pointer" }}
          />
        </div>
        <Fridge />

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "40px 0 14px 0",
          }}
        >
          <Heading3 style={{ marginLeft: "15px" }}>조미료</Heading3>
          <Image
            src="/images/ce_home_plus.svg"
            alt="plus"
            width={30}
            height={30}
            style={{ marginRight: "13px", cursor: "pointer" }}
          />
        </div>
        <Fridge />
        <div style={{ width: "100%", height: "40px" }}></div>
      </Container>
      <SlideUpModal
        isOpen={isFirstSlideUpModalOpen}
        onClose={() => setIsFirstSlideUpModalOpen(false)}
        buttonText="다음"
        buttonOnClick={() => {}} //수정 필요
        buttonActive={isPersonClicked && isTimeClicked}
      >
        <Heading2
          style={{ width: "100%", textAlign: "center", marginTop: "28px" }}
        >
          냉장실에 넣을 재료 선택하기
        </Heading2>
        <Heading3 style={{ margin: "20px 0 0 12px" }}>카테고리</Heading3>
      </SlideUpModal>

      {/* <Modal
        onClose={() => setIsDepositPopUpModalOpen(false)}
        isOpen={isDepositPopUpModalOpen}
        description="The reservation will be confirmed once the deposit is paid."
        buttonText={"Payment"}
        buttonOnClick={() => {}}
      >
        <Image
          src="/images/hs_reservation_detail.svg"
          alt="reservation detail"
          width={512}
          height={224}
        />
      </Modal> */}
    </>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 0 45px;
  flex-direction: column;
  align-items: center;
`;

const WhiteButton = styled.div`
  width: 100%;
  height: 64px;

  background-color: white;
  color: ${colors.primary};

  font-weight: 600;
  font-size: 20px;
  font-family: SFPro;

  border: 1px solid gray;
  border-radius: 100px;
  cursor: pointer;

  margin-bottom: 8px;

  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #f0f0f0;
  }
  &:active {
    background-color: #d9d9d9; /* 클릭 시 조금 더 어두운 색상 */
  }
`;

const Fridge = styled.div`
  width: 100%;
  height: 282px;

  background-color: #fafafb;
  border: 1px solid #d9d9d9;
  border-radius: 25px;
`;
