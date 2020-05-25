import styled from 'styled-components';

export const Container = styled.div`
  backface-visibility: hidden;
  background-color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, .07);
  left: 0;
  padding: 10px 16px;
  position: fixed;
  top: 0;
  width: 100%;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  a {
    display: inline-block;
    height: 40px;
  }

  svg {
    height: 100%;
  }
`;