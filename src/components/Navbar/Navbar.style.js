import styled from "styled-components";

const Wrapper = styled.nav`
  width: 100%;
  height: 70px;
  z-index: 2;
  background: ${props => props.colors};
  box-shadow: ${props =>
    props.colors === "none"
      ? "none"
      : "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"};
  transition: 0.5s ease-in-out;
  display: flex;
  justify-content: space-around;
  position: fixed;
  border-radius: 0 0 5px 5px;
  .nav-buttons {
    color: ${props => props.buttonColors};
    font-weight: 800;
    &:hover {
      color: tomato;
      transition: 0.4s;
    }
  }
`;

const SideBar = styled.div`
  position: fixed;
  width: 50%;
  max-width: 400px;
  height: 100%;
  background: rgba(220, 200, 200, 0.8);
  left: ${props => (props.sideBarLeft ? "0" : "-50%")};
  transition: 0.5s;
  ul {
    list-style-type: none;
    padding: 3rem 0;
    margin: 0;
    li {
      padding: 1rem 0;
      margin: 0;
      padding-left: 0.6rem;
    }
  }
`;

export { Wrapper, SideBar };
