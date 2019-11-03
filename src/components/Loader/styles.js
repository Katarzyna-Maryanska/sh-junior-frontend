import styled, {keyframes} from "styled-components";

export const keyFrameOne = keyframes`
   0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`;

export const LoaderElement = styled.div`
  color: ${({theme}) => theme.color.shuttleGray};
  font-size: ${({ theme }) => theme.font.size.s};
  text-indent: -99999em;
  position: relative;
  width: 10em;
  height: 10em;
  border-radius: 50%;
  box-shadow: inset 0 0 0 1em;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
    &:before, :after {
    border-radius: 50%;
    position: absolute;
    content: '';
    }
    &:before {
    width: 5.2em;
    height: 10.2em;
    background: ${({theme}) => theme.color.white};
    border-radius: 10.2em 0 0 10.2em;
    top: -0.1em;
    left: -0.1em;
    -webkit-transform-origin: 5.2em 5.1em;
    transform-origin: 5.2em 5.1em;
    -webkit-animation: load2 2s infinite ease 1.5s;
    animation: ${keyFrameOne} 2s infinite ease 1.5s;
    }
    &:after {
    width: 5.2em;
    height: 10.2em;
    background: ${({theme}) => theme.color.white};
    border-radius: 0 10.2em 10.2em 0;
    top: -0.1em;
    left: 5.1em;
    -webkit-transform-origin: 0px 5.1em;
    transform-origin: 0px 5.1em;
    -webkit-animation: load2 2s infinite ease;
    animation: ${keyFrameOne} 2s infinite ease;
    }
`;
