import styled from "styled-components";

export const Wrapper = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  width: ${({theme}) => {
    return theme.open ? "calc(100vw - 275px)" : "calc(100vw - 102px)"
  }};
  height: 100vh;
  transition: ease-in-out .2s;
  padding: 10px;

  @media (max-width: 768px) {

  }


  .border {
    width: 100%;
    background-color: rgb(241, 241, 241);
    padding: 2px;
    border-radius: 6px;
    margin: 15px 0;
  }
  
  
  .main-content {
    width: 100%;
    min-height: 70vh;
    overflow: scroll;
  }
`
