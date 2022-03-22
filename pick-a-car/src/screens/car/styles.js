import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 0px auto;
  position: relative;

  .applied-filter {
    padding: 15px 20px;
    position: sticky;
    top: 0;
    background: #ebeff3;
    padding-bottom: 20px;
    border-bottom: 1px solid #cfd7df;
    z-index: 1;
  }

  .all-list {
    padding: 15px 20px;
    position: relative;
    background: #fff;
  }
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  color: #333;
  font-size: 14px;
  margin-top: 30px;
  &:before {
    display: inline-block;
    content: "";
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: solid 3px transparent;
    border-bottom-color: var(--bg-dark);
    border-right-color: var(--bg-dark);
    animation: ${rotate360} 0.45s linear 0s infinite normal none running;
    margin-right: 6px;
    vertical-align: bottom;
  }
`;

export const Button = styled.button`
  background: #12344d;
  cursor: pointer;
  line-height: 1.5;
  text-align: center;
  font-weight: 500;
  letter-spacing: 0.3px;
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  white-space: nowrap;
  user-select: none;
  padding: 8px 16px;
  font-size: 14px;
  color: #fff;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
