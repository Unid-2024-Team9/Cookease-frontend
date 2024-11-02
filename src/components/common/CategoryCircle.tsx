import { styled } from "styled-components";

export default function CategoryCircle({ title }: { title: string }) {
  return <Container>{title}</Container>;
}

function CategoryCicleWithDetail({
  title,
  detail,
}: {
  title: string;
  detail: string;
}) {
  return (
    <div style={{ width: "80px" }}>
      <CategoryCircle title={title} />
      <div style={{ width: "100%" }}>{detail}</div>
    </div>
  );
}

const Container = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;

  background-color: #fafafb;
  border: 1px solid #eaeaea;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
