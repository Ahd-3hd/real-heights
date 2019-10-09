import styled from "styled-components";
import headerPic from "../../assets/header2.jpg";

const Wrapper = styled.header`
  width: 100%;
  height: 100vh;
  background: url(${headerPic}) no-repeat;
  background-size: cover;
  position: relative;
`;
const HeaderContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
`;

const HeaderText = styled.div`
  background: rgb(49, 55, 62, 0.5);
  margin: 0 1.25rem;
  padding: 2rem;
  color: #fff;
  letter-spacing: 2px;
  h2 {
    font-size: 2.25rem;
  }
  p {
    font-size: 1.25rem;
  }
`;

const ScrollButton = styled.div`
  position: absolute;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.8);
`;

export { Wrapper, HeaderContent, HeaderText, ScrollButton };
