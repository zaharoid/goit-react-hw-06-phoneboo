import styled from '@emotion/styled';

export const List = styled.ul`
  width: 650px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: center;

  margin-left: auto;
  margin-right: auto;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  width: 300px;
  height: 100px;
  padding: 5px;
  border: 2px solid #c30bb2;
  border-radius: 5px;
`;

export const TotalCount = styled.p`
  text-align: center;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 25px;
  border: solid 2px #45cd24;
  border-radius: 10px;
  cursor: pointer;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
