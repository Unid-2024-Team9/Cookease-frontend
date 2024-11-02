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
import { Heading2 } from "@/styles/texts";

export default function Community() {
  const [isSlideUpModalOpen, setIsSlideUpModalOpen] = useState(false);
  const [isDepositPopUpModalOpen, setIsDepositPopUpModalOpen] = useState(false);
  const [isCompletePopUpModalOpen, setIsCompletePopUpModalOpen] =
    useState(false);
  const [isPersonClicked, setIsPersonClicked] = useState(false);
  const [isTimeClicked, setIsTimeClicked] = useState(false);
  const [isGoDown, setIsGoDown] = useState(false);

  const router = useRouter();

  const [txHash, setTxHash] = useState("");

  const [recipes, setRecipes] = useState([
    {
      id: 1,
      profileImg: "/path/to/profile1.jpg",
      name: "홍길동",
      location: "서울시 동작구 상도동",
      title: "파랑 감자 교환하실 분",
      date: "2024-11-02",
      content:
        "파랑 감자 교환하실 분 구해요 파랑 감자 교환하실 분 구해요 파랑 감자 교환하실 분 구해요 파랑 감자 교환하실 분 구해요 파랑 감자 교환하실 분 구해요 파랑 감자 교환하실 분 구해요 파랑 감자 교환하실 분 구해요 파랑 감자 교환하실 분 구해요 파랑 감자 교환하실 분 구해요 파랑 감자 교환하실 분 구해요 파랑 감자 교환하실 분 구해요",
    },
    {
      id: 2,
      profileImg: "/path/to/profile2.jpg",
      name: "김철수",
      location: "서울시 강남구 역삼동",
      title: "토마토 남는 분 계신가요?",
      date: "2024-11-01",
      content: "토마토 남는 분 계시면 댓글 주세요... (중략)",
    },
    {
      id: 3,
      profileImg: "/path/to/profile1.jpg",
      name: "홍길동",
      location: "서울시 동작구 상도동",
      title: "파랑 감자 교환하실 분",
      date: "2024-11-02",
      content: "파랑 감자 교환하실 분 구해요... (중략)",
    },
    {
      id: 4,
      profileImg: "/path/to/profile1.jpg",
      name: "홍길동",
      location: "서울시 동작구 상도동",
      title: "파랑 감자 교환하실 분",
      date: "2024-11-02",
      content: "파랑 감자 교환하실 분 구해요... (중략)",
    },
    {
      id: 5,
      profileImg: "/path/to/profile1.jpg",
      name: "홍길동",
      location: "서울시 동작구 상도동",
      title: "파랑 감자 교환하실 분",
      date: "2024-11-02",
      content: "파랑 감자 교환하실 분 구해요... (중략)",
    },
    {
      id: 6,
      profileImg: "/path/to/profile1.jpg",
      name: "홍길동",
      location: "서울시 동작구 상도동",
      title: "파랑 감자 교환하실 분",
      date: "2024-11-02",
      content: "파랑 감자 교환하실 분 구해요... (중략)",
    },
    {
      id: 7,
      profileImg: "/path/to/profile1.jpg",
      name: "홍길동",
      location: "서울시 동작구 상도동",
      title: "파랑 감자 교환하실 분",
      date: "2024-11-02",
      content: "파랑 감자 교환하실 분 구해요... (중략)",
    },
  ]);

  return (
    <>
      <Container>
        {recipes.map((recipe) => (
          <ArticleContainer
            key={recipe.id}
            onClick={() => router.push(`/community/${recipe.id}`)}
          >
            <ArticleHeader>
              <LeftInfo>
                <ProfileImage src={recipe.profileImg} alt={recipe.name} />
                <Name>{recipe.name}</Name>
                <Location>{recipe.location}</Location>
              </LeftInfo>
              <Date>{recipe.date}</Date>
            </ArticleHeader>
            <Title>{recipe.title}</Title>
            <Content>
              {recipe.content.length > 120
                ? `${recipe.content.slice(0, 120)}...`
                : recipe.content}
            </Content>
          </ArticleContainer>
        ))}
      </Container>
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
          커뮤니티
        </Heading2>
        <Image
          src="/images/hs_reservation_when.svg"
          alt={"reservation when"}
          width={720}
          height={32}
          style={{ marginTop: "33px" }}
        />
        {/* <CalendarInput margin="16px 0 38px 0" /> */}
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

      <Modal
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
      </Modal>
      <Modal
        onClose={() => setIsCompletePopUpModalOpen(false)}
        isOpen={isCompletePopUpModalOpen}
        description="Can’t wait for your visit./The creator earned a reward for helping you discover this restaurant!"
        buttonText={"Go to My Page"}
        buttonOnClick={() => {
          router.push("/mypage");
        }}
        extra={
          <a
            href={`https://evm-testnet.flowscan.io/tx/0x05629a87d6a44e9bf5016d95e62390167fed513fe6cdb07f9d79dda7a94e31ca`}
            target="_blank"
          >
            <WhiteButton>View on Explorer</WhiteButton>
          </a>
        }
        title="Your reservation is all set!"
      >
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Image
            src="/images/hs_payment_complete.svg"
            alt="payment complete"
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
  flex-direction: column;
  align-items: center;
`;

const ArticleContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #fafafb;
  border-radius: 20px;
  margin-top: 2px;
  margin-bottom: 18px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
`;

const ArticleHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftInfo = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  margin-right: 16px;
`;

const Name = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-right: 10px;
`;

const Location = styled.div`
  font-weight: semi-bold;
  font-size: 15px;
  color: #646464;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin: 5px 0 3px;
`;

const Date = styled.div`
  font-weight: semi-bold;
  font-size: 15px;
  color: #646464;
`;

const Content = styled.div`
  font-weight: semi-bold;
  font-size: 15px;
  color: #646464;
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
