import React from "react";
import styled, {keyframes} from "styled-components";

export const keyFrameOne = keyframes`
  0%    { left: -200%; }
  100%  { left: 0; }
`;

export const Wrapper = styled.div`
  width: 100vw;
  height: 8rem;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  overflow: hidden;
   &:after {
    content: "";
    top: 0;
    left: 0;
    position: absolute;
    height: 100%;
    width: 100%;
    background: -webkit-gradient(
      linear, left top, right top, 
      color-stop(0%, rgba(255, 255, 255, 1)),
      color-stop(30%, rgba(255, 255, 255, 0)), 
      color-stop(70%, rgba(255, 255, 255, 0)), 
      color-stop(100%, rgba(255, 255, 255, 1))
    );
`;

export const ImageTrain = styled.div`
    position: absolute;
    width: 300%;
    height: 100%;
    display: flex;
    align-items: center;
    animation: ${keyFrameOne} 30s linear infinite;
`;

export const Image = styled.img`
  width: auto;
  height: 100%;
  border-radius: 10px;
  margin: 0 6px;
`;
