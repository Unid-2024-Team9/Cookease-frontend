"use client";

import styled from "styled-components";
import Image from "next/image";
import { useEffect, useState, useRef, useCallback } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Recipe() {
  const [isSlideUpModalOpen, setIsSlideUpModalOpen] = useState(false);
  const [isDepositPopUpModalOpen, setIsDepositPopUpModalOpen] = useState(false);
  const [isCompletePopUpModalOpen, setIsCompletePopUpModalOpen] =
    useState(false);
  const [isPersonClicked, setIsPersonClicked] = useState(false);
  const [isTimeClicked, setIsTimeClicked] = useState(false);
  const [isGoDown, setIsGoDown] = useState(false);

  const router = useRouter();
  const [txHash, setTxHash] = useState("");

  // const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [page, setPage] = useState(1);
  // const [hasMore, setHasMore] = useState(true);
  // const observer = useRef<HTMLDivElement | null>(null);

  interface Recipe {
    id: number;
    title: string;
    imageUrl: string;
    isBookmarked: boolean;
  }

  return <Container></Container>;
}

// 스타일 정의
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;
