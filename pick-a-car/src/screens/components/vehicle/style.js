import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  background: #ffffff;
  border: 0.5px solid #cfd7df;
  box-shadow: 0px 2px 4px rgba(207, 215, 223, 0.3);
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 10px;
  position: relative;

  @media (min-width: 800px) {
    button {
      position: absolute;
      right: 30px;
      bottom: 30px;
    }
  }

  label {
    font-weight: 600;
    font-size: 14px;
    color: #666;
    display: block;
    margin-bottom: 5px;
  }

  .value {
    font-weight: 600;
    font-size: 16px;
    color: #333;
  }

  .col {
    padding: 5px 10px;
    min-width: 15%;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      min-width: 50%;
    }

    @media (max-width: 600px) {
      min-width: 50%;
    }
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    @media (max-width: 768px) {
      border-bottom: 1px solid #cfd7df;
      padding-bottom: 10px;
    }
  }
`;
