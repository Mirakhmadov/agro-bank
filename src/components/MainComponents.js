import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  padding: 10px 25px;
  margin: 15px;
  font-size: 16px;
  letter-spacing: .5px;
  font-weight: 600;
  border-radius: 5px;
  border: 2px solid #226A47;
  color: #226A47;
  transition: ease-in-out .2s;
  
  &:hover {
    color: white;
    background: #226A47;
  }
`


export const Title = styled.div`
  width: 100%;
  text-align: center;
  padding: 10px;
  margin: 15px 0;
  color: white;
  background: #226A47;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 1px;
`

export const Flex = styled.div`
  display: flex;
  min-width: 390px;
  flex-direction: row;
  width: auto;
  justify-content: space-between;
  padding: 10px;
`

export const Block = styled.div`
  width: 100%;
  padding: 10px 20px;
  border: 1px dashed #ccc;
  margin: 15px 0;
`
