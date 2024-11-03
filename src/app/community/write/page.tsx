"use client";

import styled from "styled-components";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import colors from "@/styles/color";
import SmallOrangeButton from "@/components/base/SmallOrangeButton";

type Post = {
  id: string;
  profileImg: string;
  name: string;
  location: string;
  title: string;
  date: string;
  content: string;
};

const defaultImgSource = "/images/ce_profile.svg";

export default function CommunityWrite() {
  const pathname = usePathname();
  const id = pathname.split("/").pop(); // URL의 마지막 부분을 ID로 간주

  const [post, setPost] = useState<Post | null>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");

  const router = useRouter();

  useEffect(() => {
    // 오늘 날짜 가져오기
    const today = new Date();
    const formattedDate = `${today.getFullYear()}-${String(
      today.getMonth() + 1
    ).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

    const dummyPost: Post = {
      id: id || "1",
      profileImg: defaultImgSource,
      name: "이승은",
      location: "서울시 강서구 등촌동",
      title: "",
      date: formattedDate, // 현재 날짜로 설정
      content: "",
    };

    setPost(dummyPost);
    setDate(formattedDate);
  }, [id]);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setContent(event.target.value);
  };

  if (!post) return <div>Loading...</div>;

  return (
    <>
      <Container>
        <Header>
          <ProfileImage src={post.profileImg} alt={post.name} />
          <HeaderText>
            <Name>{post.name}</Name>
            <Location>{post.location}</Location>
          </HeaderText>
          <OptionsIcon>⋮</OptionsIcon>
        </Header>

        <DetailContainer>
          <ArticleHeader>
            <TitleInput
              value={title}
              onChange={handleTitleChange}
              placeholder="제목을 입력하세요"
            />
            <DateDisplay>{date}</DateDisplay>
          </ArticleHeader>
          <ContentInput
            value={content}
            onChange={handleContentChange}
            placeholder="내용을 입력하세요"
          />
        </DetailContainer>
        <div
          style={{
            width: "90%",
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "10px",
          }}
        >
          <SmallOrangeButton onClick={() => router.push("/community")}>
            게시
          </SmallOrangeButton>
        </div>
        <div style={{ width: "100%", height: "300px" }}></div>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  margin-top: 20px;
  position: relative;
  padding: 0 5px;
`;

const HeaderText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 16px;
`;

const OptionsIcon = styled.div`
  position: absolute;
  right: 0;
  font-size: 24px;
  cursor: pointer;
`;

const DetailContainer = styled.div`
  width: 90%;
  height: 40vh;
  background-color: #fafafb;
  border: 1px solid #d9d9d9;
  border-radius: 15px;
  padding: 20px 30px;
  margin-top: 15px;
`;

const ArticleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const ProfileImage = styled.img`
  width: 46px;
  height: 46px;
  border-radius: 50%;
`;

const Name = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-right: 16px;
`;

const Location = styled.div`
  font-weight: bold;
  font-size: 16px;
  color: #646464;
`;

const TitleInput = styled.input`
  margin-top: 5px;
  font-weight: bold;
  font-size: 20px;
  border: none;
  outline: none;
  width: 70%;
  background-color: transparent;
  color: #000;
`;

// Date 컴포넌트 이름을 DateDisplay로 변경
const DateDisplay = styled.div`
  font-size: 15px;
  color: #646464;
`;

const ContentInput = styled.textarea`
  font-size: 16px;
  color: #646464;
  margin-top: 15px;
  width: 100%;
  height: calc(100% - 40px); // Adjust height based on title and padding
  border: none;
  outline: none;
  background-color: transparent;
  resize: none;
`;
