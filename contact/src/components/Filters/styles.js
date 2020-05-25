import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;

  @media screen and (min-width: 960px) {
    {
      width: 960px;
    }
  }
`;

export const SectionFilters = styled.section`
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  padding: 24px 0;

  div {
    background: #fff;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 2px rgba(0, 0, 0, .07);
    display: flex;
    flex-wrap: nowrap;
    height: 40px;
    justify-content: stretch;
    margin-right: 8px;
    overflow: hidden;
    width: 100%;

    input {
      background: transparent;
      border: none;
      color: #4C84FF;
      font-size: 1.4rem;
      font-weight: bold;
      outline: none;
      padding: 5px 10px;
      width: 100%;

      ::placeholder {
        color: #9fa9bc;
        font-weight: normal;
      }
    }

    button {
      margin-right: 8px;
      font-size: 1.4rem;
      color: #9fa9bc;

      &:hover {
        color: #4c84ff;
      }
    }
  }
`;