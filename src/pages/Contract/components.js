import styled from "styled-components";

export const Table = styled.table`
  border: none;
  border-collapse: collapse;
  position: relative;
  width: 100%;

  thead, tfoot {
    vertical-align: center;
    z-index: 99;
    width: 100%;

    tr {
      border-color: inherit;
      border-style: solid;
      border-width: 0;


      & > :not(:first-child) {
        min-width: 150px;
      }

      .min-w {
        min-width: 250px;
      }

      th {
        font-size: 16px;
        padding: 2px 10px;
        color: white;
        border: 2px solid white;
        background: #226A47;
        user-select: none;

      }
    }
  }

  tbody {
    & > :not(:first-child) {
      border-top: 2px solid white;
    }

    tr {
      cursor: pointer;

      &:hover {
        td {
          //color: white;
          //background: #226A47;
          background: #e9ecef;
        }
      }

      .text-left {
        text-align: left;
      }

      &:nth-child(odd) {
        background: #f1f1f1;
      }

      td {
        transition: ease-in-out .1s;
        font-size: 15px;
        text-align: right;
        padding: 2px 10px;
        border: 2px solid white;
      }


    }

  }


  tfoot {
    text-align: right;
  }
`

export const Wrapper = styled.div`
  width: calc(100% - 20px);
  margin: 10px auto;
`
