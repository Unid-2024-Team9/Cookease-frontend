import colors from "@/styles/color";
import { styled } from "styled-components";

const SmallOrangeButton = styled.button`
  background-color: #ff471e;
  color: white;
  font-size: 16px;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  border: none;

  width: 80px;

  &:hover {
    background-color: #ff7a47;
  }

  &:disabled {
    background-color: ${colors.grey1};
    cursor: not-allowed;
  }
`;

export default SmallOrangeButton;
