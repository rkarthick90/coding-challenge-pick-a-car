import styled, { keyframes } from "styled-components";

export const Combobox = styled.div`
  display: flex;
  width: 100%;
  max-width: 400px;
  background: #fff;
  border-radius: 4px;
  position: relative;
  input,
  button {
    padding: 6px 10px;
    border-radius: 4px;
    font-size: 14px;
    width: 100%;
    background: #fff;
    text-align: left;
    cursor: pointer;
    height: 38px;
  }

  .icon.search {
    right: 30px;
    position: absolute;
    top: 12px;
  }

  .icon:last-child {
    position: absolute;
    right: 10px;
    top: 12px;
    cursor: pointer;
  }
`;

const fadeIn = keyframes`
  from {  opacity: 0;, height: 0 }
  to { opacity: 1; height: 150px }
`;

export const Menu = styled.ul`
  position: absolute;
  max-height: 150px;
  max-width: 400px;
  width: 100%;
  background-color: #fff;
  list-style: none;
  overflow: auto;
  top: 78px;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  padding: 5px;
  animation: ${fadeIn} 0.2s ease-in;
  z-index: 1;
  min-width: 200px;
  display: ${(props) => (props.isOpen ? "block" : "none")};

  li {
    padding: 2px 5px;
    font-size: 14px;
    border-radius: 4px;
    margin: 5px 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  margin-top: 10px;
  position: relative;

  label {
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    margin: 10px 0;
  }
`;
