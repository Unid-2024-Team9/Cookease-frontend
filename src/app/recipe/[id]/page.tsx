"use client";

import { useParams } from "next/navigation";
import styled from "styled-components";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

const dummyRecipe = {
  id: 1,
  title: "계란국",
  imageUrl: "/images/sample_image.jpg",
  description: "따뜻한 계란국 만드는 방법",
  ingredients: [
    { name: "간장", amount: 0.5, unit: "숟가락" },
    { name: "간장", amount: 0.5, unit: "숟가락" },
    { name: "간장", amount: 0.5, unit: "숟가락" },
    { name: "간장", amount: 0.5, unit: "숟가락" },
    { name: "물", amount: 3, unit: "컵" },
    { name: "계란", amount: 2, unit: "개" },
  ],
  instructions: [
    "냄비에 물을 넣고 끓입니다.",
    "간장을 넣고 맛을 냅니다.",
    "계란을 풀어서 넣고 저어줍니다.계란을 풀어서 넣고 저어줍니다.계란을 풀어서 넣고 저어줍니다.계란을 풀어서 넣고 저어줍니다.계란을 풀어서 넣고 저어줍니다.",
    "완성된 계란국을 그릇에 담아냅니다.",
    "완성된 계란국을 그릇에 담아냅니다.",
    "완성된 계란국을 그릇에 담아냅니다.",
    "완성된 계란국을 그릇에 담아냅니다.",
  ],
};

interface Ingredient {
  name: string;
  amount: number;
  unit: string;
}

interface RecipeDetails {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  ingredients: Ingredient[];
  instructions: string[];
}

export default function RecipeDetail() {
  const { id } = useParams(); // URL에서 id 추출
  //const [recipe, setRecipe] = useState<RecipeDetails | null>(null);

  // useEffect(() => {
  //   if (id) {
  //     fetchRecipeDetails(id);
  //   }
  // }, [id]);

  // const fetchRecipeDetails = async (recipeId: string) => {
  //   try {
  //     const response = await axios.get(`/api/recipes/${recipeId}`);
  //     setRecipe(response.data);
  //   } catch (error) {
  //     console.error("Failed to fetch recipe details:", error);
  //   }
  // };

  // if (!recipe) {
  //   return <p>Loading...</p>;
  // }

  const recipe = dummyRecipe;

  return (
    <Container>
      <Header>
        <Image
          src={recipe.imageUrl}
          alt={recipe.title}
          width={200}
          height={200}
          style={{ borderRadius: "8px" }}
        />
        <TitleContainer>
          <Title>요리명</Title>
          <Subtitle>{recipe.title}</Subtitle>
        </TitleContainer>
      </Header>

      <SectionTitle>재료</SectionTitle>
      <IngredientsContainer>
        <IngredientsTable>
          {recipe.ingredients.map((ingredient, index) => (
            <IngredientRow key={index}>
              <IngredientCell>{index + 1}.</IngredientCell>
              <IngredientCell>{ingredient.name}</IngredientCell>
              <IngredientCell>{ingredient.amount}</IngredientCell>
              <IngredientCell>{ingredient.unit}</IngredientCell>
            </IngredientRow>
          ))}
        </IngredientsTable>
      </IngredientsContainer>

      <SectionTitle>레시피</SectionTitle>
      <InstructionsContainer>
        {recipe.instructions.map((instruction, index) => (
          <InstructionContainer key={index}>
            <InstructionStep>{index + 1}.</InstructionStep>
            <InstructionText>{instruction}</InstructionText>
          </InstructionContainer>
        ))}
      </InstructionsContainer>
      <div style={{ width: "100%", height: "100px" }}></div>
    </Container>
  );
}

// 스타일 정의
const Container = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const InstructionsContainer = styled.div`
  width: 100%;
  max-height: 300px; // 고정 높이 설정
  overflow-y: auto; // 세로 스크롤 가능하게 설정
  padding: 8px;
  margin-top: 8px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const IngredientsContainer = styled.div`
  width: 100%;
  max-height: 200px; // 고정 높이 설정
  overflow-y: auto; // 세로 스크롤 가능하게 설정
  padding: 16px; // 좌우 패딩 추가
  margin-top: 8px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 45px;
  margin: -25px;
`;

const TitleContainer = styled.div`
  text-align: left;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 18px;
  color: #333;
`;

const Subtitle = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  color: #000;
`;

const SectionTitle = styled.h3`
  width: 100%;
  text-align: left;
  margin-top: 24px;
  font-size: 20px;
  color: #333;
`;

const IngredientsTable = styled.div`
  width: 100%;
  display: table;
  border-collapse: collapse;
`;

const IngredientRow = styled.div`
  display: table-row;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
`;

const IngredientCell = styled.div`
  display: table-cell;
  padding: 8px;
  text-align: center;
  font-size: 16px;
`;

const InstructionContainer = styled.div`
  width: 100%;
  display: flex;
  max-height: 300px;
  align-items: flex-start;
  margin: 8px 0;
  padding: 8px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const InstructionStep = styled.div`
  font-weight: bold;
  margin-right: 8px;
`;

const InstructionText = styled.div`
  font-size: 16px;
  text-align: left;
  color: #555;
`;

const GrayBox = styled.div`
  width: 100%;

  background-color: #fafafb;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
`;
