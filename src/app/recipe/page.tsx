"use client";

import styled from "styled-components";
import Image from "next/image";
import { useEffect, useState, useRef, useCallback } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import HomeSearchBar from "@/components/common/RecipeSearchBar";
import SlideUpModal from "@/components/base/SlideUpModal";
import CalendarInput from "@/components/base/CalendarInput";
import Modal from "@/components/common/Modal";
import { LongOrangeButton } from "@/components/base/LongOrangeButton";
import colors from "@/styles/color";
import { Heading2 } from "@/styles/texts";


// 테스트용 더미데이터
const dummyRecipes: Recipe[] = [
  { id: 1, title: "계란국", imageUrl: "/images/sample_image.jpg", isBookmarked: false },
  { id: 2, title: "된장찌개", imageUrl: "/images/sample_image.jpg", isBookmarked: true },
  { id: 3, title: "김치찌개", imageUrl: "/images/sample_image.jpg", isBookmarked: false },
  { id: 4, title: "불고기", imageUrl: "/images/sample_image.jpg", isBookmarked: true },
  { id: 5, title: "비빔밥", imageUrl: "/images/sample_image.jpg", isBookmarked: false },
  { id: 6, title: "떡볶이", imageUrl: "/images/sample_image.jpg", isBookmarked: true },
  { id: 7, title: "불고기", imageUrl: "/images/sample_image.jpg", isBookmarked: true },
  { id: 8, title: "비빔밥", imageUrl: "/images/sample_image.jpg", isBookmarked: false },
  { id: 9, title: "떡볶이", imageUrl: "/images/sample_image.jpg", isBookmarked: true },
  { id: 10, title: "불고기", imageUrl: "/images/sample_image.jpg", isBookmarked: true },
  { id: 11, title: "비빔밥", imageUrl: "/images/sample_image.jpg", isBookmarked: false },
  { id: 12, title: "떡볶이", imageUrl: "/images/sample_image.jpg", isBookmarked: true },
  { id: 13, title: "불고기", imageUrl: "/images/sample_image.jpg", isBookmarked: true },
  { id: 14, title: "비빔밥", imageUrl: "/images/sample_image.jpg", isBookmarked: false },
  { id: 15, title: "떡볶이", imageUrl: "/images/sample_image.jpg", isBookmarked: true },
  { id: 16, title: "불고기", imageUrl: "/images/sample_image.jpg", isBookmarked: true },
  { id: 17, title: "비빔밥", imageUrl: "/images/sample_image.jpg", isBookmarked: false },
  { id: 18, title: "떡볶이", imageUrl: "/images/sample_image.jpg", isBookmarked: true },
];


export default function Recipe() {
  const [isSlideUpModalOpen, setIsSlideUpModalOpen] = useState(false);
  const [isDepositPopUpModalOpen, setIsDepositPopUpModalOpen] = useState(false);
  const [isCompletePopUpModalOpen, setIsCompletePopUpModalOpen] = useState(false);
  const [isPersonClicked, setIsPersonClicked] = useState(false);
  const [isTimeClicked, setIsTimeClicked] = useState(false);
  const [isGoDown, setIsGoDown] = useState(false);

  const router = useRouter();
  const [txHash, setTxHash] = useState("");


  interface Recipe {
    id: number;
    title: string;
    imageUrl: string;
    isBookmarked: boolean;
  }


  // fetch해오는 함수
  // const fetchRecipes = async (page: number) => {
  //   try {
  //     const response = await axios.get(`/api/recipes?page=${page}`);
  //     const data = response.data;

  //     setRecipes((prevRecipes) => [...prevRecipes, ...data.recipes]);
  //     setHasMore(data.hasMore);
  //   } catch (error) {
  //     console.error("Failed to load recipes:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchRecipes(page);
  // }, [page]);

  // const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
  //   const target = entries[0];
  //   if (target.isIntersecting && hasMore) {
  //     setPage((prevPage) => prevPage + 1);
  //   }
  // }, [hasMore]);

  // useEffect(() => {
  //   const option = {
  //     root: null,
  //     rootMargin: "20px",
  //     threshold: 1.0
  //   };
  //   const observerInstance = new IntersectionObserver(handleObserver, option);
  //   if (observer.current) observerInstance.observe(observer.current);

  //   return () => {
  //     if (observer.current) observerInstance.unobserve(observer.current);
  //   };
  // }, [handleObserver]);


  const [recipes, setRecipes] = useState<Recipe[]>(dummyRecipes); // 더미 데이터를 기본 값으로 설정
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef<HTMLDivElement | null>(null);
  




  return (
    <Container>
    <GridContainer>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
      <div ref={observer} style={{ height: "1px" }}></div>
    </GridContainer>
  </Container>



  );
}



// 레시피 카드 컴포넌트
const RecipeCard: React.FC<{ recipe: Recipe }> = ({ recipe }) => {
  const [isBookmarked, setIsBookmarked] = useState(recipe.isBookmarked);
  const router = useRouter(); // useRouter를 사용하여 라우팅 기능 추가

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    // TODO: 서버에 북마크 상태 업데이트 요청
  };

  const navigateToRecipe = () => {
    // 레시피 id에 맞는 페이지로 이동 (예: /recipe/[id])
    router.push(`/recipe/${recipe.id}`);
  };

  return (
    <CardContainer onClick={navigateToRecipe}>
      <ImageContainer>
        <Image
          src={recipe.imageUrl}
          alt={recipe.title}
          width={300}
          height={300}
          layout="responsive"
        />
      </ImageContainer>
      <Overlay>
        <Title>{recipe.title}</Title>
        <BookmarkIcon onClick={(e) => {
          e.stopPropagation(); // 북마크 클릭 시 부모 클릭 이벤트 방지
          toggleBookmark();
        }}>
          {isBookmarked ? "🔖" : "📑"}
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
  margin-left: 16px;
  margin-right: 16px;
  overflow-y: auto;
`;

const CardContainer = styled.div`
  position: relative;
  width: 100%;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: auto;
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
