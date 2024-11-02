"use client";

import styled from "styled-components";
import Image from "next/image";
import { useEffect, useState, useRef, useCallback } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Heading3 } from "@/styles/texts";

export default function Recipe() {
  return (
    <Container>
      <div style={{ width: "100%", margin: "10px 0 10px 0" }}>
        <Heading3>계란국</Heading3>
      </div>
      <div style={{ width: "100%" }}>
        <div
          style={{
            width: "185px",
            height: "185px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Image
            src="/images/ce_recipe_ex.svg"
            layout="fill" // 이미지가 부모 요소에 맞춰 꽉 차도록 설정
            objectFit="cover" // 이미지가 부모 요소에 맞게 꽉 차게 자르기
            alt="recipe Image"
          />
        </div>
      </div>

      <div style={{ width: "100%", margin: "30px 0 0px 0" }}>
        <Heading3>재료</Heading3>
        <GrayBox style={{ height: "312px", marginTop: "10px" }}></GrayBox>
      </div>
    </Container>
  );
}

// 스타일 정의
const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 80px;

  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const GrayBox = styled.div`
  width: 100%;

  background-color: #fafafb;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
`;
