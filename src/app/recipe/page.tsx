"use client";

import styled from "styled-components";
import Image from "next/image";
import { useEffect, useState, useRef, useCallback } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import SlideUpModal from "@/components/base/SlideUpModal";
import { Heading2 } from "@/styles/texts";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import dummyRecipes from "../../lib/recipes.json";

interface Recipe {
  id: number;
  title: string;
  imageUrl: string;
  isBookmarked: boolean;
}

export default function Recipe() {
  const [recipes, setRecipes] = useState<Recipe[]>(dummyRecipes);
  const [isSlideUpModalOpen, setIsSlideUpModalOpen] = useState(false);
  const [isDepositPopUpModalOpen, setIsDepositPopUpModalOpen] = useState(false);
  const [isCompletePopUpModalOpen, setIsCompletePopUpModalOpen] =
    useState(false);
  const [isPersonClicked, setIsPersonClicked] = useState(false);
  const [isTimeClicked, setIsTimeClicked] = useState(false);
  const [isGoDown, setIsGoDown] = useState(false);

  const observer = useRef<HTMLDivElement | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const router = useRouter();

  // 레시피 목록을 페치하는 함수 (API 요청 부분)
  const fetchRecipes = async (page: number) => {
    try {
      const response = await axios.get(`/api/recipes?page=${page}`);
      const data = response.data;
      setRecipes((prevRecipes) => [...prevRecipes, ...data.recipes]);
      setHasMore(data.hasMore);
    } catch (error) {
      console.error("Failed to load recipes:", error);
    }
  };

  // 무한 스크롤 옵저버 핸들러
  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting && hasMore) {
        setPage((prevPage) => prevPage + 1);
      }
    },
    [hasMore]
  );

  useEffect(() => {
    fetchRecipes(page);
  }, [page]);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };
    const observerInstance = new IntersectionObserver(handleObserver, option);
    if (observer.current) observerInstance.observe(observer.current);

    return () => {
      if (observer.current) observerInstance.unobserve(observer.current);
    };
  }, [handleObserver]);

  return (
    <Container>
      <Image
        src="/images/hs_updown.png"
        alt="up down"
        width={80}
        height={136}
        onClick={() => setIsGoDown(!isGoDown)}
        style={{
          position: "absolute",
          bottom: "100px",
          right: "4px",
          cursor: "pointer",
        }}
      />

      <GridContainer>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} router={router} />
        ))}
        <div ref={observer} style={{ height: "1px" }}></div>
      </GridContainer>

      <SlideUpModal
        isOpen={isSlideUpModalOpen}
        onClose={() => setIsSlideUpModalOpen(false)}
        buttonText="Reserve now"
        buttonOnClick={() => setIsDepositPopUpModalOpen(true)}
        buttonActive={isPersonClicked && isTimeClicked}
      >
        <Heading2
          style={{ width: "100%", textAlign: "center", marginTop: "28px" }}
        >
          Book a reservation
        </Heading2>
        <Image
          src="/images/hs_reservation_when.svg"
          alt={"reservation when"}
          width={720}
          height={32}
          style={{ marginTop: "33px" }}
        />
        <Image
          src={
            isPersonClicked
              ? "/images/hs_reservation_person_active.svg"
              : "/images/hs_reservation_person_inactive.svg"
          }
          alt="person"
          width={537}
          height={72}
          onClick={() => setIsPersonClicked(!isPersonClicked)}
          style={{ cursor: "pointer" }}
        />
        <Image
          src={
            isTimeClicked
              ? "/images/hs_reservation_time_active.svg"
              : "/images/hs_reservation_time_inactive.svg"
          }
          alt="time"
          width={720}
          height={128}
          style={{ margin: "32px 0 51px 0", cursor: "pointer" }}
          onClick={() => setIsTimeClicked(!isTimeClicked)}
        />
      </SlideUpModal>
    </Container>
  );
}

// 레시피 카드 컴포넌트
const RecipeCard = ({
  recipe,
  router,
}: {
  recipe: Recipe;
  router: AppRouterInstance;
}) => {
  const [isBookmarked, setIsBookmarked] = useState(recipe.isBookmarked);
  const toggleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsBookmarked((prev) => !prev);
  };

  const navigateToRecipe = () => {
    router.push(`/recipe/${recipe.id}`);
  };

  return (
    <CardContainer onClick={navigateToRecipe}>
      <ImageContainer>
        <Image
          src={recipe.imageUrl}
          alt={recipe.title}
          layout="fill" // 부모 컨테이너를 꽉 채우도록 설정
          objectFit="cover" // 이미지를 컨테이너 크기에 맞춰 꽉 채우기
        />
      </ImageContainer>
      <Overlay>
        <Title>{recipe.title}</Title>
        <BookmarkIcon onClick={toggleBookmark}>
          <Image
            src={
              isBookmarked
                ? "/images/bookmarked.png"
                : "/images/unbookmarked.png"
            }
            alt={isBookmarked ? "Bookmarked" : "Unbookmarked"}
            width={24}
            height={24}
          />
        </BookmarkIcon>
      </Overlay>
    </CardContainer>
  );
};

// 스타일 정의
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px;
  overflow-y: auto;
`;

const CardContainer = styled.div`
  position: relative;
  width: 100%;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  width: 234.67px;
  height: 234.67px;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

const BookmarkIcon = styled.div`
  cursor: pointer;
  font-size: 16px;
`;
