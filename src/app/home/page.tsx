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
import CategoryCircle, {
  CategoryCicleWithDetail,
} from "@/components/common/CategoryCircle";

export default function Home() {
  const [isFirstSlideUpModalOpen, setIsFirstSlideUpModalOpen] = useState(false);
  const [isSecondSlideUpModalOpen, setIsSecondSlideUpModalOpen] =
    useState(false);
  const [isThirdSlideUpModalOpen, setIsThirdSlideUpModalOpen] = useState(false);
  const [refrigeratedCategory, setRefrigeratedCategory] = useState(undefined);
  const [refrigeratedSubCategory, setRefrigeratedSubCategory] =
    useState(undefined);

  const [isCompleteModalOpen, setIsCompleteModalOpen] = useState(false);
  const [isFull, setIsFull] = useState(false);

  const refrigeratedSubCatergoryEmoji = new Map();
  refrigeratedSubCatergoryEmoji.set("소고기", "🥩");
  refrigeratedSubCatergoryEmoji.set("돼지고기", "🥓");
  refrigeratedSubCatergoryEmoji.set("닭고기", "🍗");
  refrigeratedSubCatergoryEmoji.set("양고기", "🍖");
  const [expDate, setExpDate] = useState("");

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
            onClick={() => {
              setIsFirstSlideUpModalOpen(true);
            }}
          />
        </div>
        <Fridge>
          {isFull && (
            <div
              style={{
                display: "flex",
                height: "100%",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <CategoryCicleWithDetail
                  title={"🥩"}
                  detail={"소고기"}
                  setter={undefined}
                  set={undefined}
                />
                <CategoryCicleWithDetail
                  title={"🐟"}
                  detail={"고등어"}
                  setter={undefined}
                  set={undefined}
                />
                <CategoryCicleWithDetail
                  title={"🐡"}
                  detail={"참치"}
                  setter={undefined}
                  set={undefined}
                />
                <CategoryCicleWithDetail
                  title={"🍎"}
                  detail={"사과"}
                  setter={undefined}
                  set={undefined}
                />
                <CategoryCicleWithDetail
                  title={"🍈"}
                  detail={"멜론"}
                  setter={undefined}
                  set={undefined}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <CategoryCicleWithDetail
                  title={"🥬"}
                  detail={"상추"}
                  setter={undefined}
                  set={undefined}
                />
                <CategoryCicleWithDetail
                  title={"🥕"}
                  detail={"당근"}
                  setter={undefined}
                  set={undefined}
                />
                <DummyItem></DummyItem>
                <DummyItem></DummyItem>
                <DummyItem></DummyItem>
              </div>
            </div>
          )}
        </Fridge>

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
            onClick={() => {
              setIsFull(true);
            }}
          />
        </div>
        <Fridge>
          {isFull && (
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <CategoryCicleWithDetail
                title={"🥟"}
                detail={"물만두"}
                setter={undefined}
                set={undefined}
              />
              <CategoryCicleWithDetail
                title={"🍦"}
                detail={"메로나"}
                setter={undefined}
                set={undefined}
              />
              <CategoryCicleWithDetail
                title={"🍕"}
                detail={"냉동 피자"}
                setter={undefined}
                set={undefined}
              />
              <CategoryCicleWithDetail
                title={"🧀"}
                detail={"치즈"}
                setter={undefined}
                set={undefined}
              />
              <CategoryCicleWithDetail
                title={"🍗"}
                detail={"냉동 치킨"}
                setter={undefined}
                set={undefined}
              />
            </div>
          )}
        </Fridge>

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "40px 0 14px 0",
          }}
        >
          <Heading3 style={{ marginLeft: "15px" }}>실온</Heading3>
          <Image
            src="/images/ce_home_plus.svg"
            alt="plus"
            width={30}
            height={30}
            style={{ marginRight: "13px", cursor: "pointer" }}
          />
        </div>
        <Fridge>
          {isFull && (
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <CategoryCicleWithDetail
                title={"🧂"}
                detail={"소금"}
                setter={undefined}
                set={undefined}
              />
              <CategoryCicleWithDetail
                title={"🌶️"}
                detail={"고춧가루"}
                setter={undefined}
                set={undefined}
              />
              <DummyItem></DummyItem>
              <DummyItem></DummyItem>
              <DummyItem></DummyItem>
            </div>
          )}
        </Fridge>
        <div style={{ width: "100%", height: "40px" }}></div>
      </Container>
      <SlideUpModal
        isOpen={isFirstSlideUpModalOpen}
        onClose={() => setIsFirstSlideUpModalOpen(false)}
        buttonText="다음"
        buttonOnClick={() => {
          setIsSecondSlideUpModalOpen(true);
          setIsFirstSlideUpModalOpen(false);
        }}
        buttonActive={refrigeratedCategory !== undefined}
      >
        <Heading2
          style={{ width: "100%", textAlign: "center", marginTop: "28px" }}
        >
          냉장실에 넣을 재료 선택하기
        </Heading2>
        <Heading3 style={{ margin: "20px 0 20px 12px" }}>카테고리</Heading3>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            padding: "0 27px",
          }}
        >
          <CategoryCicleWithDetail
            title={"🍚"}
            detail={"곡물"}
            setter={setRefrigeratedCategory}
            set={refrigeratedCategory}
          />
          <CategoryCicleWithDetail
            title={"🍎"}
            detail={"과일"}
            setter={setRefrigeratedCategory}
            set={refrigeratedCategory}
          />
          <CategoryCicleWithDetail
            title={"🧀"}
            detail={"유제품"}
            setter={setRefrigeratedCategory}
            set={refrigeratedCategory}
          />
          <CategoryCicleWithDetail
            title={"🥩"}
            detail={"육류"}
            setter={setRefrigeratedCategory}
            set={refrigeratedCategory}
          />
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            padding: "0 27px",
            margin: "20px 0 30px 0 ",
          }}
        >
          <CategoryCicleWithDetail
            title={"🥬"}
            detail={"채소"}
            setter={setRefrigeratedCategory}
            set={refrigeratedCategory}
          />
          <CategoryCicleWithDetail
            title={"🫛"}
            detail={"콩/견과류"}
            setter={setRefrigeratedCategory}
            set={refrigeratedCategory}
          />
          <CategoryCicleWithDetail
            title={"🐠"}
            detail={"해산물"}
            setter={setRefrigeratedCategory}
            set={refrigeratedCategory}
          />
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            padding: "0 27px",
            margin: "20px 0 30px 0 ",
          }}
        >
          <CategoryCicleWithDetail
            title={"🥟"}
            detail={"가공식품"}
            setter={setRefrigeratedCategory}
            set={refrigeratedCategory}
          />
          <CategoryCicleWithDetail
            title={"🍜"}
            detail={"면"}
            setter={setRefrigeratedCategory}
            set={refrigeratedCategory}
          />
          <CategoryCicleWithDetail
            title={"🍡"}
            detail={"떡"}
            setter={setRefrigeratedCategory}
            set={refrigeratedCategory}
          />
          <CategoryCicleWithDetail
            title={"🍞"}
            detail={"빵"}
            setter={setRefrigeratedCategory}
            set={refrigeratedCategory}
          />
        </div>
      </SlideUpModal>

      <SlideUpModal
        isOpen={isSecondSlideUpModalOpen}
        onClose={() => setIsSecondSlideUpModalOpen(false)}
        buttonText="다음"
        buttonOnClick={() => {
          setIsThirdSlideUpModalOpen(true);
          setIsSecondSlideUpModalOpen(false);
        }}
        buttonActive={refrigeratedSubCategory !== undefined}
      >
        <Heading2
          style={{ width: "100%", textAlign: "center", marginTop: "28px" }}
        >
          냉장실에 넣을 재료 선택하기
        </Heading2>
        <Heading3 style={{ margin: "20px 0 20px 12px" }}>
          {refrigeratedCategory}
        </Heading3>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            padding: "0 27px",
            marginBottom: "30px",
          }}
        >
          <CategoryCicleWithDetail
            title={"🥩"}
            detail={"소고기"}
            setter={setRefrigeratedSubCategory}
            set={refrigeratedSubCategory}
          />
          <CategoryCicleWithDetail
            title={"🥓"}
            detail={"돼지고기"}
            setter={setRefrigeratedSubCategory}
            set={refrigeratedSubCategory}
          />
          <CategoryCicleWithDetail
            title={"🍗"}
            detail={"닭고기"}
            setter={setRefrigeratedSubCategory}
            set={refrigeratedSubCategory}
          />
          <CategoryCicleWithDetail
            title={"🍖"}
            detail={"양고기"}
            setter={setRefrigeratedSubCategory}
            set={refrigeratedSubCategory}
          />
        </div>
      </SlideUpModal>

      <SlideUpModal
        isOpen={isThirdSlideUpModalOpen}
        onClose={() => setIsThirdSlideUpModalOpen(false)}
        buttonText="등록하기"
        buttonOnClick={() => {
          setIsCompleteModalOpen(true);
          setIsThirdSlideUpModalOpen(false);
        }}
        buttonActive={expDate !== ""}
      >
        <Heading2
          style={{ width: "100%", textAlign: "center", marginTop: "28px" }}
        >
          냉장실에 넣을 재료 선택하기
        </Heading2>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            margin: "20px 0",
          }}
        >
          <CategoryCircle
            title={refrigeratedSubCatergoryEmoji.get(refrigeratedSubCategory)}
            isClicked={false}
          />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            padding: "0px 12px",
            marginBottom: "20px",
          }}
        >
          <Heading3>재료이름</Heading3>
          <Heading3>{refrigeratedSubCategory}</Heading3>
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            padding: "0px 12px",
            marginBottom: "20px",
          }}
        >
          <Heading3>카테고리</Heading3>
          <Heading3>{refrigeratedCategory}</Heading3>
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            padding: "0px 12px",
            marginBottom: "20px",
          }}
        >
          <Heading3>보관</Heading3>
          <Heading3>냉장</Heading3>
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            padding: "0px 12px",
            marginBottom: "20px",
          }}
        >
          <Heading3>등록일시</Heading3>
          <CalendarInput margin="none" isOcr={false} />
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            padding: "0px 12px",
            marginBottom: "20px",
          }}
        >
          <Heading3>소비기한</Heading3>
          <CalendarInput margin="none" isOcr={true} extrafunc={setExpDate} />
        </div>
      </SlideUpModal>
      <Modal
        onClose={() => setIsCompleteModalOpen(false)}
        isOpen={isCompleteModalOpen}
        description="등록을 완료했습니다!"
        buttonText={"닫기"}
        buttonOnClick={() => setIsCompleteModalOpen(false)}
        title="냉장실 재료 등록 완료!"
      >
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Image
            src="/images/ce_complete.svg"
            alt="registration complete"
            width={136}
            height={147}
            style={{ marginBottom: "16px" }}
          />
        </div>
      </Modal>
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

  padding: 20px;

  background-color: #fafafb;
  border: 1px solid #d9d9d9;
  border-radius: 25px;
`;

const DummyItem = styled.div`
  width: 80px;
  height: 91px;
`;
