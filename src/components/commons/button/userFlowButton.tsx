"use client";

import theme from "@src/utils/theme";
import Image from "next/image";
import Loading from "../../../../public/icon/loading.gif";
import { memo } from "react";
import styled from "styled-components";
interface IProps {
  type?: "submit" | "button";
  title?: string;
  isComplete?: boolean;
  handler?: (a?: any) => void;
  loading?: boolean;
}

interface StyleProps {
  background?: boolean;
  title?: string;
}

const Button = styled.button<StyleProps>`
  background-color: ${(props) =>
    props.background
      ? `${theme.colors.darkPurple}`
      : `${theme.colors.lightPurple}`};
  border-radius: 8px;
  width: 100%;
  padding: 2rem 0;
  color: ${theme.colors.white};
  font-size: 2rem;
  line-height: 2.5rem;
  font-weight: 400;
  display: flex;
  justify-content: center;
`;

const LoadingBox = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  position: relative;
`;

const UserFlowButton = ({
  type,
  title,
  isComplete,
  handler,
  loading,
}: IProps) => {
  return (
    <Button type={type || "button"} onClick={handler} background={isComplete}>
      {loading ? (
        <LoadingBox>
          <Image src={Loading} alt="Loading" fill={true} />
        </LoadingBox>
      ) : (
        <>{title}</>
      )}
    </Button>
  );
};

export default memo(UserFlowButton);
