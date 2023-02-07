"use client";
import { flexBox } from "@src/utils/flexBox";
import theme from "@src/utils/theme";
import Image from "next/image";
import styled from "styled-components";

export const InputBox = styled.div`
  ${flexBox("col", "center", "center")}
`;

export const ResultBox = styled.div`
  width: 100%;
  margin-top: 4rem;
`;

export const ResultTitle = styled.div`
  width: 100%;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid ${theme.colors.inputBorder};
  font-size: 2rem;
  font-weight: 700;
`;

export const Result = styled.div`
  ${flexBox("row", "start", "center")}
`;

export const ResultProfileBox = styled.div`
  width: 5rem;
  height: 5rem;
  position: relative;
  margin-right: 1rem;
`;

export const ResultProfile = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const ResultName = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: ${theme.colors.middleGray};
  margin-right: 4rem;
`;

export const ResultEmail = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: ${theme.colors.deepPurple};
`;
