"use client";

import theme from "@src/utils/theme";
import Image from "next/image";
import Loading from "../../../../public/icon/loading.gif";
import { memo } from "react";
import styled from "styled-components";
import { breakPoints } from "@src/styles/media";
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
  font-weight: 400;
  display: flex;
  justify-content: center;

  @media ${breakPoints.mobileWidth} {
    font-size: 5rem;
    padding: 4rem 0;
  }
  @media ${breakPoints.mobileHeight} {
    font-size: 5rem;
    padding: 4rem 0;
  }
  @media ${breakPoints.smallScreen} {
    font-size: 4rem;
    padding: 3rem 0;
  }
`;

const LoadingBox = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  position: relative;
  @media ${breakPoints.mobileWidth} {
    width: 6rem;
    height: 6rem;
  }
  @media ${breakPoints.mobileHeight} {
    width: 6rem;
    height: 6rem;
  }
  @media ${breakPoints.smallScreen} {
    width: 5rem;
    height: 5rem;
  }
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
