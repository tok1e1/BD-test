import styled from "styled-components";

export const PaymentFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 10;
  background-color: #a8a091;
  height: 100vh;
  font-family: "Rubik", sans-serif;
`;
export const StyledLogo = styled.img`
  margin-right: 8px;
  padding: 5px, 5px, 0px, 5px;
  width: 35px;
  height: 35px;
`;

export const PaymentFormWrapper = styled.div`
  padding-top: 10px;
  display: grid;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  font-size: 25px;
  margin-top: 10px;
  background-color: #ffffff;
  color: #030200;
  width: 60vw;
  height: 38vh;
  border-radius: 10px;
  @media (max-width: 1024px) {
    width: 50vw;
  }

  @media (max-width: 768px) {
    width: 70vw;
  }

  @media (max-width: 425px) {
    font-size: 30px;
    width: 90vw;
  }
`;

export const PaymentFormTitle = styled.h1`
  font-size: 24px;
`;

export const InputLabel = styled.label`
  display: block;
  margin-bottom: 15px;
`;

export const InputField = styled.input`
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 0px;
`;

export const SuccessMessage = styled.div`
  color: green;
  font-size: 14px;
  margin-top: 5px;
`;

export const PaymentFormButton = styled.button<{ isDisabled: boolean }>`
  background-color: #0070f3;
  color: #fff;
  border: none;
  border-radius: 5px;
  height: 40px;
  width: 450px;
  cursor: pointer;
  display: block;
  margin: 0 auto;
  margin-bottom: 50px;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #0060d9;
  }
`;
