import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { styled } from "styled-components";
import colors from "@/styles/color";

const LoginButton = () => {
  const dispatch = useDispatch();
  // const getSigner = useGetSigner();
  const router = useRouter();

  return (
    <LoginBaseButton onClick={() => router.push("/home")}>
      Sign Up
    </LoginBaseButton>
  );
};

export default LoginButton;

const LoginBaseButton = styled.div`
  width: 100%;
  height: 64px;

  background-color: white;
  color: ${colors.primary};

  font-weight: 600;
  font-size: 20px;
  font-family: SFPro;

  border: none;
  border-radius: 100px;
  cursor: pointer;

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
