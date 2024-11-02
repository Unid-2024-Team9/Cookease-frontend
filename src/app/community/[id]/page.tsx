"use client";

import styled from "styled-components";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
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

export default function Detail() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([
    {
      id: "1",
      profileImg: "/path/to/profile1.jpg",
      name: "홍길동",
      location: "서울시 동작구 상도동",
      content: "파랑 감자 교환하실 분 구해요...",
    },
    {
      id: "2",
      profileImg: "/path/to/profile2.jpg",
      name: "김철수",
      location: "서울시 강남구 역삼동",
      content: "토마토 남는 분 계시면 댓글 주세요...",
    },
  ]);

  useEffect(() => {
    const dummyPost: Post = {
      id: id || "dummy-id",
      profileImg: "/path/to/profile1.jpg",
      name: "홍길동",
      location: "서울시 동작구 상도동",
      title: "파랑 감자 교환하실 분",
      date: "2024-11-02",
      content: "파랑 감자 교환하실 분 구해요...",
    };

    setPost(dummyPost);
  }, [id]);

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
        </Header>

        <DetailContainer>
          <ArticleHeader>
            <Title>{post.title}</Title>
            <Date>{post.date}</Date>
          </ArticleHeader>
          <Content>{post.content}</Content>
        </DetailContainer>

        <CommentSection>
          <CommentHeader>
            <CommentTitle>댓글</CommentTitle>
            <CommentCount>{comments.length}</CommentCount>
          </CommentHeader>
          {comments.map((comment) => (
            <CommentContainer key={comment.id}>
              <ProfileImage src={comment.profileImg} alt={comment.name} />
              <CommentText>
                <Name>{comment.name}</Name>
                <Location>{comment.location}</Location>
                <Content>{comment.content}</Content>
              </CommentText>
            </CommentContainer>
          ))}
        </CommentSection>
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
`;

const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;

const DetailContainer = styled.div`
  width: 90%;
  background-color: #fafafb;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  margin-top: 20px;
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
  font-size: 18px;
`;

const Location = styled.div`
  font-size: 15px;
  color: #646464;
`;

const Title = styled.div`
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
  margin-top: 10px;
`;

const CommentSection = styled.div`
  width: 90%;
  margin-top: 20px;
`;

const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const CommentTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const CommentCount = styled.div`
  font-size: 15px;
  color: #646464;
`;

const CommentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
`;

const CommentText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
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
