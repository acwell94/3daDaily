import theme from "@src/utils/theme";
import Image from "next/image";
import styled from "styled-components";

export const ProfileFormImg = styled(Image)`
  width: 12rem;
  height: 12rem;
  margin-bottom: 6rem;
`;

export const ButtonBox = styled.div`
  width: 98%;
`;

export const ImageBox = styled.div`
  width: 12rem;
  height: 12rem;
  position: relative;
  border: 1px solid ${theme.colors.inputBorder};
  border-radius: 50%;
  margin-bottom: 4rem;
`;
export const DefaultImage = styled(Image)`
  cursor: pointer;
  border-radius: 50%;
`;
