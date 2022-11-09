import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.black};
  padding: 2rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: flex-end;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h4 {
    color: ${(props) => props.theme.colors.white};
  }

  span {
    font-size: ${(props) => props.theme.fontSize.size01};
    color: ${(props) => props.theme.colors.orange};
  }

  a {
    align-self: flex-start;
    display: inline-block;
    background-color: ${(props) => props.theme.colors.yellow};
    padding: 1rem 2rem;
    border-radius: 0.75rem;
    text-decoration: none;
  }
`;

export const List = styled.nav``;
