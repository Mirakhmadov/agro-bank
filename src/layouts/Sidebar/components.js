import styled from "styled-components";

export const Wrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({theme}) => {
    return theme.open ? "275px" : "102px"
  }};
  height: 100vh;
  transition: ease-in-out .2s;
  backdrop-filter: blur(7px);
  z-index: 10;
  background-image: url("/static/img/aside.png");

  @media (max-width: 768px) {

  }
`

export const Logo = styled.div`
  position: relative;
  padding: 30px;

  .img-wrapper {
    height: 70px;
    a {
      visibility: ${({theme}) => {
        return theme.open ? "visible" : "hidden"
      }};

      opacity: ${({theme}) => {
        return theme.open ? "1" : "0"
      }};

      transition: ${({theme}) => {
        return theme.open ? ".2s" : ".1s"
      }};

      img {
        max-width: 100%;
        vertical-align: middle;
      }
    }
  }

  .hamburger {
    position: absolute;
    right: ${({theme}) => {
      return theme.open ? "5px" : "auto"
    }};

    left: ${({theme}) => {
      return !theme.open && "50%"
    }};
    
    top: 50%;
    transform: ${({theme}) => {
      return theme.open ? "translateY(-50%)" : "translateX(-50%)"
    }};
    width: max-content;

    button {
      cursor: pointer;
      border: none;
      background: transparent;

      svg {
        color: white;
        transition: .25s;
        font-size: 20px;
      }
    }
  }
`

export const Menus = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  max-height: calc(100% - 272px);
  padding-left: 8px;
  transition: .2s;


  ul {
    margin-right: .5rem;
    list-style: none;

    li {
      margin-top: 2px;
      
      .without-img {
        padding-left: 68px;
      }
      
      .active-menu {
        background-color: #fff !important;

        span {
          color: #427640;

          .first {
            display: none;
          }

          .second {
            display: block;
          }
        }

        svg {
          color: #427640;
          transform: rotate(180deg);
        }
      }
    }
  }


  /* width */

  &::-webkit-scrollbar {
    width: 8px;
  }

  /* Handle */

  &::-webkit-scrollbar-thumb {
    background: #ddd;
    border-radius: 5px;
  }
`

export const MenuItem = styled.div`
  width: 100%;
  display: flex;
  color: white;
  cursor: pointer;
  padding: 10px 30px;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  user-select: none;


  &:hover {
    background-color: #fff;

    span {
      color: #427640;

      .first {
        display: none;
      }

      .second {
        display: block;
      }
    }

    svg {
      transform: ${({theme}) => {
        return theme.open ? "rotate(180deg)" : "rotate(0deg)"
      }};
      color: #427640;
    }
  }

  span {
    opacity: 1;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 18px;

    .first {
      display: block;
    }

    .second {
      display: none;
    }
  }

  svg {
    margin-left: 5px;
    transition: .2s;
  }
`

export const Helper = styled.div`
  position: absolute;
  background-color: rgba(74, 146, 111, 1);
  padding: 20px;
  bottom: 0;
  width: 100%;
  display: ${({theme}) => {
    return theme.open ? "block" : "none"
  }};

  ul {
    list-style: none;

    li {
      a {
        display: flex;
        align-items: center;

        svg {
          background-color: #fff;
          border-radius: 50%;
          padding: 10px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          border: 2px solid white;
          font-size: .875em;
          color: rgba(74, 146, 111, 1);
          transition: ease-in-out .1s;

          &:hover {
            color: white;
            background: transparent;
          }
        }


        span {
          color: rgba(255, 255, 255, 1);
          margin-left: 15px;
          transition: .2s;
        }
      }

      &:nth-child(2) {
        margin-top: 20px;

        a {
          display: block;
          background-color: rgba(255, 255, 255, 1);
          border-radius: 4px;
          text-align: center;
          padding: 8px 10px;
          border: 2px solid white;

          span {
            text-align: center;
            font-family: "Inter-500", serif;
            color: rgba(60, 140, 111, 1);
            font-size: 12px;
          }
        }
      }

      &:nth-child(2):hover {
        margin-top: 20px;

        a {
          background-color: rgba(60, 140, 111, 1);
          
          span {
            color: white;
          }
        }
      }
      
      
    }
  }
`
