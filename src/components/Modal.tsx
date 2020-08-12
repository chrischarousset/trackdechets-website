import * as React from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  overflow-y: auto;
  padding-top: ${(props) => props.theme.spacing(4)};
`;

const ModalInnerContainer = styled.div`
  max-width: 40rem;
  margin: 0 auto;
  padding: ${(props) => props.theme.spacing(4)};
  background-color: ${(props) => props.theme.colors.common.white};
  border-radius: 4px;
`;

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({ onClose, children }: ModalProps) {
  return (
    <ModalContainer
      onClick={(event) => {
        if (event.target !== event.currentTarget) {
          // Exit early if the element being clicked is not the overlay itself
          return;
        }

        onClose();
      }}
    >
      <ModalInnerContainer>{children}</ModalInnerContainer>
    </ModalContainer>
  );
}
