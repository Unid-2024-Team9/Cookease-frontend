// "use client";

// import styled from "styled-components";
// import { useState } from "react";
// import Image from "next/image";
// import { Heading3 } from "@/styles/texts";

// const defaultImgSource = "/images/ce_profile.svg";

// type Ingredient = {
//   id: number;
//   name: string;
//   amount: string;
//   unit: string;
// };

// type RecipeStep = {
//   id: number;
//   description: string;
// };

// export default function RecipeWrite() {
//   const [ingredients, setIngredients] = useState<Ingredient[]>([
//     { id: 1, name: "", amount: "", unit: "" },
//   ]);
//   const [recipeSteps, setRecipeSteps] = useState<RecipeStep[]>([
//     { id: 1, description: "" },
//   ]);

//   const handleIngredientChange = (
//     id: number,
//     field: keyof Ingredient,
//     value: string
//   ) => {
//     setIngredients((prev) =>
//       prev.map((ingredient) =>
//         ingredient.id === id ? { ...ingredient, [field]: value } : ingredient
//       )
//     );
//   };

//   const handleAddIngredient = () => {
//     setIngredients((prev) => [
//       ...prev,
//       { id: prev.length + 1, name: "", amount: "", unit: "" },
//     ]);
//   };

//   const handleDeleteIngredient = (id: number) => {
//     setIngredients((prev) => prev.filter((ingredient) => ingredient.id !== id));
//   };

//   const handleRecipeStepChange = (id: number, value: string) => {
//     setRecipeSteps((prev) =>
//       prev.map((step) =>
//         step.id === id ? { ...step, description: value } : step
//       )
//     );
//   };

//   const handleAddRecipeStep = () => {
//     setRecipeSteps((prev) => [
//       ...prev,
//       { id: prev.length + 1, description: "" },
//     ]);
//   };

//   const handleDeleteRecipeStep = (id: number) => {
//     setRecipeSteps((prev) => prev.filter((step) => step.id !== id));
//   };

//   return (
//     <Container>
//       <div
//         style={{
//           width: "100%",
//           height: "200px",
//           display: "flex",
//           justifyContent: "space-between",
//         }}
//       >
//         <Image
//           src="/images/ce_recipe_image_default.svg"
//           alt="recipe default"
//           width={200}
//           height={200}
//         />
//         <div
//           style={{
//             height: "100%",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "space-between",
//             alignItems: "flex-end",
//           }}
//         >
//           <Image
//             src="/images/ce_recipe_write_manual.svg"
//             alt="recipe manual"
//             width={161}
//             height={115}
//           />
//           <div>
//             <Heading3>요리명</Heading3>
//             <RecipeNameInput type="text" />
//           </div>
//         </div>
//       </div>
//       <div style={{ width: "100%", marginTop: "16px" }}>
//         <Heading3>재료</Heading3>
//       </div>
//       <GrayBox>
//         <IngredientsTable>
//           {ingredients.map((ingredient) => (
//             <IngredientRow key={ingredient.id}>
//               <div>{ingredient.id}.</div>
//               <IngredientInput
//                 type="text"
//                 value={ingredient.name}
//                 onChange={(e) =>
//                   handleIngredientChange(ingredient.id, "name", e.target.value)
//                 }
//                 placeholder="재료명"
//                 style={{ width: "250px" }}
//               />
//               <IngredientInput
//                 type="text"
//                 value={ingredient.amount}
//                 onChange={(e) =>
//                   handleIngredientChange(
//                     ingredient.id,
//                     "amount",
//                     e.target.value
//                   )
//                 }
//                 placeholder="양"
//                 style={{ width: "150px" }}
//               />
//               <IngredientInput
//                 type="text"
//                 value={ingredient.unit}
//                 onChange={(e) =>
//                   handleIngredientChange(ingredient.id, "unit", e.target.value)
//                 }
//                 placeholder="단위"
//                 style={{ width: "150px" }}
//               />
//               <DeleteButton
//                 onClick={() => handleDeleteIngredient(ingredient.id)}
//               >
//                 🗑
//               </DeleteButton>
//             </IngredientRow>
//           ))}
//           <AddButton onClick={handleAddIngredient}>+ 추가</AddButton>
//         </IngredientsTable>
//       </GrayBox>
//       <div style={{ width: "100%", marginTop: "16px" }}>
//         <Heading3>레시피</Heading3>
//       </div>
//       <GrayBox>
//         {recipeSteps.map((step) => (
//           <RecipeStepRow key={step.id}>
//             <div>{step.id}.</div>
//             <RecipeStepInput
//               value={step.description}
//               onChange={(e) => handleRecipeStepChange(step.id, e.target.value)}
//               placeholder="레시피 단계를 입력하세요"
//             />
//             <DeleteButton onClick={() => handleDeleteRecipeStep(step.id)}>
//               🗑
//             </DeleteButton>
//           </RecipeStepRow>
//         ))}
//         <AddButton onClick={handleAddRecipeStep} style={{ marginTop: "10px" }}>
//           + 추가
//         </AddButton>
//       </GrayBox>
//     </Container>
//   );
// }

// const Container = styled.div`
//   width: 100%;
//   padding: 0px 80px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const RecipeNameInput = styled.input`
//   width: 355px;
//   height: 45px;
//   background-color: white;
//   border: 1px solid #d9d9d9;
//   border-radius: 10px;
//   padding-left: 10px;
//   font-size: 20px;
//   margin-top: 10px;
// `;

// const GrayBox = styled.div`
//   width: 100%;
//   background-color: #fafafb;
//   border: 1px solid #d9d9d9;
//   border-radius: 10px;
//   padding: 10px;
// `;

// const IngredientsTable = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
// `;

// const IngredientRow = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   padding: 5px;
// `;

// const IngredientInput = styled.input`
//   width: 80px;
//   padding: 8px;
//   background-color: white;
//   border: 1px solid #d9d9d9;
//   border-radius: 5px;
//   font-size: 14px;
//   text-align: center;
// `;

// const DeleteButton = styled.button`
//   background: none;
//   border: none;
//   color: #888;
//   font-size: 16px;
//   cursor: pointer;

//   &:hover {
//     color: #ff5c5c;
//   }
// `;

// const AddButton = styled.button`
//   width: 100%;
//   padding: 8px;
//   background-color: #f0f0f0;
//   border: none;
//   border-radius: 5px;
//   color: #555;
//   font-size: 14px;
//   cursor: pointer;

//   &:hover {
//     background-color: #e0e0e0;
//   }
// `;

// const RecipeStepRow = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   padding: 5px;
// `;

// const RecipeStepInput = styled.textarea`
//   flex: 1;
//   padding: 8px;
//   background-color: white;
//   border: 1px solid #d9d9d9;
//   border-radius: 5px;
//   font-size: 14px;
//   resize: none;
// `;

"use client";

import styled from "styled-components";
import { useState } from "react";
import Image from "next/image";
import { Heading3 } from "@/styles/texts";
import SmallOrangeButton from "@/components/base/SmallOrangeButton";
import { useRouter } from "next/navigation";

const defaultImgSource = "/images/ce_profile.svg";

type Ingredient = {
  id: number;
  name: string;
  amount: string;
  unit: string;
};

type RecipeStep = {
  id: number;
  description: string;
};

export default function RecipeWrite() {
  const [ingredients, setIngredients] = useState<Ingredient[]>([
    { id: 1, name: "", amount: "", unit: "" },
  ]);

  // 기본적으로 3단계의 레시피 단계를 제공
  const [recipeSteps, setRecipeSteps] = useState<RecipeStep[]>([
    { id: 1, description: "" },
    { id: 2, description: "" },
    { id: 3, description: "" },
  ]);

  const router = useRouter();

  const handleIngredientChange = (
    id: number,
    field: keyof Ingredient,
    value: string
  ) => {
    setIngredients((prev) =>
      prev.map((ingredient) =>
        ingredient.id === id ? { ...ingredient, [field]: value } : ingredient
      )
    );
  };

  const handleAddIngredient = () => {
    setIngredients((prev) => [
      ...prev,
      { id: prev.length + 1, name: "", amount: "", unit: "" },
    ]);
  };

  const handleDeleteIngredient = (id: number) => {
    setIngredients((prev) => prev.filter((ingredient) => ingredient.id !== id));
  };

  const handleRecipeStepChange = (id: number, value: string) => {
    setRecipeSteps((prev) =>
      prev.map((step) =>
        step.id === id ? { ...step, description: value } : step
      )
    );
  };

  const handleAddRecipeStep = () => {
    setRecipeSteps((prev) => [
      ...prev,
      { id: prev.length + 1, description: "" },
    ]);
  };

  const handleDeleteRecipeStep = (id: number) => {
    setRecipeSteps((prev) => prev.filter((step) => step.id !== id));
  };

  return (
    <Container>
      <div
        style={{
          width: "100%",
          height: "200px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Image
          src="/images/ce_recipe_image_default.svg"
          alt="recipe default"
          width={200}
          height={200}
        />
        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <Image
            src="/images/ce_recipe_write_manual.svg"
            alt="recipe manual"
            width={161}
            height={115}
          />
          <div>
            <Heading3>요리명</Heading3>
            <RecipeNameInput type="text" />
          </div>
        </div>
      </div>
      <div style={{ width: "100%", marginTop: "16px" }}>
        <Heading3>재료</Heading3>
      </div>
      <GrayBox>
        <IngredientsTable>
          {ingredients.map((ingredient) => (
            <IngredientRow key={ingredient.id}>
              <div>{ingredient.id}.</div>
              <IngredientInput
                type="text"
                value={ingredient.name}
                onChange={(e) =>
                  handleIngredientChange(ingredient.id, "name", e.target.value)
                }
                placeholder="재료명"
                style={{ width: "250px" }}
              />
              <IngredientInput
                type="text"
                value={ingredient.amount}
                onChange={(e) =>
                  handleIngredientChange(
                    ingredient.id,
                    "amount",
                    e.target.value
                  )
                }
                placeholder="양"
                style={{ width: "150px" }}
              />
              <IngredientInput
                type="text"
                value={ingredient.unit}
                onChange={(e) =>
                  handleIngredientChange(ingredient.id, "unit", e.target.value)
                }
                placeholder="단위"
                style={{ width: "150px" }}
              />
              <DeleteButton
                onClick={() => handleDeleteIngredient(ingredient.id)}
              >
                🗑
              </DeleteButton>
            </IngredientRow>
          ))}
          <AddButton onClick={handleAddIngredient}>+ 추가</AddButton>
        </IngredientsTable>
      </GrayBox>
      <div style={{ width: "100%", marginTop: "16px" }}>
        <Heading3>레시피</Heading3>
      </div>
      <GrayBox>
        {recipeSteps.map((step) => (
          <RecipeStepRow key={step.id}>
            <div>{step.id}.</div>
            <RecipeStepInput
              value={step.description}
              onChange={(e) => handleRecipeStepChange(step.id, e.target.value)}
              placeholder="레시피 단계를 입력하세요"
            />
            <DeleteButton onClick={() => handleDeleteRecipeStep(step.id)}>
              🗑
            </DeleteButton>
          </RecipeStepRow>
        ))}
        <AddButton onClick={handleAddRecipeStep} style={{ marginTop: "10px" }}>
          + 추가
        </AddButton>
      </GrayBox>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "10px",
        }}
      >
        <SmallOrangeButton onClick={() => router.push("/recipe")}>
          게시
        </SmallOrangeButton>
      </div>
      <div style={{ width: "100%", height: "200px" }}></div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 0px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RecipeNameInput = styled.input`
  width: 355px;
  height: 45px;
  background-color: white;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  padding-left: 10px;
  font-size: 20px;
  margin-top: 10px;
`;

const GrayBox = styled.div`
  width: 100%;
  background-color: #fafafb;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  padding: 10px;
`;

const IngredientsTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const IngredientRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px;
`;

const IngredientInput = styled.input`
  width: 80px;
  padding: 8px;
  background-color: white;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  font-size: 14px;
  text-align: center;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #888;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    color: #ff5c5c;
  }
`;

const AddButton = styled.button`
  width: 100%;
  padding: 8px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 5px;
  color: #555;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const RecipeStepRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px;
`;

const RecipeStepInput = styled.textarea`
  flex: 1;
  padding: 8px;
  background-color: white;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  font-size: 14px;
  resize: none;
`;
