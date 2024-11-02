"use client";

import styled from "styled-components";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import colors from "@/styles/color";

type Post = {
  id: string;
  profileImg: string;
  name: string;
  location: string;
  title: string;
  date: string;
  content: string;
};

type Comment = {
  id: string;
  profileImg: string;
  name: string;
  location: string;
  content: string;
};

const defaultImgSource = "/images/ce_profile.svg";

export default function Detail() {
  const pathname = usePathname();
  const id = pathname.split("/").pop(); // URL의 마지막 부분을 ID로 간주
  console.log(id);

  const [post, setPost] = useState<Post | null>(null);

  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const dummyPost: Post = {
      id: id || "1",
      profileImg: defaultImgSource,
      name: "김아라",
      location: "서울시 동작구 상도동",
      title: "토마토와 오이 교환 원해요",
      date: "2024-11-03",
      content:
        "집에서 키운 토마토가 너무 많이 열렸어요. 오이와 교환하실 분 댓글 주세요!",
    };

    setPost(dummyPost);
  }, [id]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(event.target.value);
  };

  const handlePostComment = () => {
    if (newComment.trim()) {
      // 댓글 추가 로직
      setNewComment("");
    }
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
            <Title>{post.title}</Title>
            <Date>{post.date}</Date>
          </ArticleHeader>
          <Content>{post.content}</Content>
        </DetailContainer>
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
  margin-top: 20px;
  overflow-y: auto;
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

const Title = styled.div`
  margin-top: 5px;
  font-weight: bold;
  font-size: 20px;
`;

const Date = styled.div`
  font-size: 15px;
  color: #646464;
`;

const Content = styled.div`
  font-size: 16px;
  color: #646464;
  margin-top: 15px;
`;

const CommentSection = styled.div`
  width: 90%;
  height: 26.5vh;
  margin-top: 20px;
  margin-bottom: 50px;
`;

const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 0 10px;
`;

const CommentTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const CommentCount = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #646464;
`;

const CommentList = styled.div`
  height: 100%;
  overflow-y: auto;
`;

const CommentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 10px 0;
`;

const CommentText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;

const CommentHeaderRow = styled.div`
  display: flex;
  align-items: center;
`;

const Separator = styled.div`
  height: 1.5px;
  background-color: #e0e0e0;
  margin: 10px 0;
`;

const CommentInputSection = styled.div`
  bottom: 7vh;
  width: 100%;
  max-width: 768px;
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 10px 20px;
  box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.1);
`;

const CommentInput = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  outline: none;
`;

const SubmitButton = styled.button<{ active: boolean }>`
  margin-left: 10px;
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => (props.active ? "#ff6b00" : "#c0c0c0")};
  background: none;
  border: none;
  cursor: ${(props) => (props.active ? "pointer" : "default")};
`;
