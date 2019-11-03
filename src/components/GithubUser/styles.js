import styled from "styled-components";


export const Wrapper = styled.div`
  margin-left: 3rem;
  margin-top: 8rem;
`;

export const UserTitle = styled.h2`
  font-family: TTCommons-regular, sans-serif;
  font-size: ${({ theme }) => theme.font.size.lg};
  font-weight: ${({ theme }) => theme.font.weight.normal};
`;

export const Image = styled.img`
  width: auto;
  height: 20rem;
  border-radius: 10px;
  margin: 0 6px;
`;
