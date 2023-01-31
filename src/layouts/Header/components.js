import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-height: 150px;
  background-color: rgba(34, 106, 93, 0.88);
  border-radius: 12px;
  position: relative;
  padding: 12px;
  color: white;
  
  h1 {
    margin-top: 10px;
    font-size: 30px;
  }
  
  
  &:before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-image: url("/static/img/navbar.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    z-index: -1;
  }
`
