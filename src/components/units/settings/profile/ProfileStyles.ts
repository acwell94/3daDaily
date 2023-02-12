import theme from "@src/utils/theme";
import Image from "next/image";
import styled from "styled-components";

export const ButtonBox = styled.div`
  width: 98%;
`;

export const ImageBox = styled.div`
  width: 30rem;
  height: 30rem;
  position: relative;
  border: 2px solid ${theme.colors.inputBorder};
  border-radius: 50%;
  margin-bottom: 4rem;
`;
export const DefaultImage = styled(Image)`
  cursor: pointer;
  border-radius: 50%;
`;
