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
    {
      id: "3",
      profileImg: "/path/to/profile2.jpg",
      name: "김철수",
      location: "서울시 강남구 역삼동",
      content: "토마토 남는 분 계시면 댓글 주세요...",
    },
    {
      id: "4",
      profileImg: "/path/to/profile2.jpg",
      name: "김철수",
      location: "서울시 강남구 역삼동",
      content: "토마토 남는 분 계시면 댓글 주세요...",
    },
  ]);

  const [newComment, setNewComment] = useState("");

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

        <CommentSection>
          <CommentHeader>
            <CommentTitle>댓글</CommentTitle>
            <CommentCount>{comments.length}</CommentCount>
          </CommentHeader>
          <CommentList>
            {comments.map((comment) => (
              <div key={comment.id}>
                <CommentContainer>
                  <ProfileImage src={comment.profileImg} alt={comment.name} />
                  <CommentText>
                    <CommentHeaderRow>
                      <Name>{comment.name}</Name>
                      <Location>{comment.location}</Location>
                    </CommentHeaderRow>
                    <Content>{comment.content}</Content>
                  </CommentText>
                </CommentContainer>
                <Separator />
              </div>
            ))}
          </CommentList>
        </CommentSection>
      </Container>
      <CommentInputSection>
        <CommentInput
          placeholder="댓글을 입력하세요"
          value={newComment}
          onChange={handleInputChange}
        />
        <SubmitButton
          onClick={handlePostComment}
          active={newComment.trim().length > 0}
        >
          작성
        </SubmitButton>
      </CommentInputSection>
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
