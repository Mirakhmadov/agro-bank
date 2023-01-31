import styled from "styled-components";

export const Table = styled.table`
  border: none;
  border-collapse: collapse;
  position: relative;
  width: 100%;
  
  thead {
    position: absolute;
    top: 0;
    left: 0;
    vertical-align: center;
    z-index: 99;
    width: 100%;
    
    tr {
      border-color: inherit;
      border-style: solid;
      border-width: 0;
      
      
      &>:not(:first-child){
        min-width: 150px;
      }
      
      th {
        padding: 2px 10px;
        color: white;
        border: 2px solid white;
        background: #226A47;
        
      }
    }
  }
  
  tbody {
    &>:not(:first-child) {
      border-top: 2px solid white;
    }
    
  }
`
