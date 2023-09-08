import React, { FC, ReactNode } from "react";
import LayoutProvider from "../providers/layout";
import { styled } from "styled-components";

export const RenderPage = (Page: ReactNode) => {
  return (
    <LayoutProvider>
      {Page}
    </LayoutProvider>
  );
};

export const StyledDiv = styled.div`
  margin: 0px;
`;