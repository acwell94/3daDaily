"use client";
import { flexBox } from "@src/utils/flexBox";
import styled from "styled-components";

export const DescriptionBox = styled.div`
  ${flexBox("col", "center", "center")};
  margin-bottom: 40px;
`;
export const Description = styled.div`
  font-size: 2rem;
  line-height: 2.5rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: #6c6c6f;
`;

export const WelcomeImage = styled.image`
  width: 300px;
  height: 200px;
`;
