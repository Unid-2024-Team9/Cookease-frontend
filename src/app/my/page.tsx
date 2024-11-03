"use client";

import styled, { keyframes } from "styled-components";
import Image from "next/image";

export default function My() {
  return (
    <Container>
      <Image
        src="/images/ce_mypage.svg"
        alt="my page"
        width={520}
        height={365}
        style={{ marginTop: "-460px", cursor: "pointer" }}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
`;
