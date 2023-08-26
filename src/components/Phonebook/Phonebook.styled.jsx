import styled from '@emotion/styled';
export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 275px;
  border: solid 3px #45cd24;
  padding: 15px;
  border-radius: 5px;

  margin-left: auto;
  margin-right: auto;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 20px;

  text-align: center;
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const Input = styled.input`
  border-radius: 5px;
  border: 2px solid #c30bb2;
`;

export const Button = styled.button`
  padding: 7px;
  border: solid 2px #45cd24;
  border-radius: 10px;
  cursor: pointer;
`;
