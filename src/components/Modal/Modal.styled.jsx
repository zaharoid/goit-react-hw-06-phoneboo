import styled from '@emotion/styled';
import { ReactComponent as CloseIcn } from '../../icons/close.svg';

export const CloseIcon = styled(CloseIcn)`
  width: 12px;
  height: 12px;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
`;
export const Window = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 350px;
  background-color: #fff;
  padding: 15px;
  border-radius: 15px;
`;

export const ModalTitle = styled.h2`
  text-align: center;
`;

export const CloseModalBtn = styled.button`
  position: absolute;
  display: flex;
  width: 25px;
  height: 25px;
  justify-content: center;
  align-items: center;
  top: 24px;
  right: 24px;
  border-radius: 50%;
  border: 1px solid #000;
  background-color: #fff;
  transition: all 250ms linear;
  cursor: pointer;

  &:hover {
    background-color: #45cd24;
  }
`;
