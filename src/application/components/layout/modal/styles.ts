import styled from 'styled-components';

export const ModalBackgroundContainer = styled.div`
  position: fixed;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  top: 50%;
  left: 50%;
  z-index: 99;
  backdrop-filter: blur(2px);
  transform: translate(-50%, -50%);
`;

export const CenteredContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
