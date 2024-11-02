import { Heading3 } from "@/styles/texts";
import { useState } from "react";
import { styled } from "styled-components";

export default function CategoryCircle({
  title,
  isClicked,
}: {
  title: string;
  isClicked: boolean;
}) {
  return <Container isclicked={isClicked}>{title}</Container>;
}

export function CategoryCicleWithDetail({
  title,
  detail,
  setter,
  set,
}: {
  title: string;
  detail: string;
  setter: any;
  set: any;
}) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div
      style={{
        width: "80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={() => {
        setter(detail);
      }}
    >
      <CategoryCircle title={title} isClicked={set === detail} />
      <Heading3
        style={{ width: "100%", textAlign: "center", marginTop: "5px" }}
      >
        {detail}
      </Heading3>
    </div>
  );
}

const Container = styled.div<{ isclicked: boolean }>`
  width: 56px;
  height: 56px;
  border-radius: 50%;

  background-color: ${(props) => (props.isclicked ? "#e0e0e0" : "#fafafb")};
  border: 1px solid #eaeaea;

  font-size: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);

  /* Hover 스타일 - isclicked가 false일 때만 적용 */
  &:hover {
    background-color: ${(props) => (!props.isclicked ? "#f0f0f0" : "#e0e0e0")};
    border-color: ${(props) => (!props.isclicked ? "#d0d0d0" : "#b0b0b0")};
  }

  /* Active 스타일 */
  &:active {
    background-color: #e0e0e0;
    border-color: #b0b0b0;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
  }
`;
