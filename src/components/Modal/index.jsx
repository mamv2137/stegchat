import React, { Fragment, useContext } from "react";

import { ModalContext } from './context'

import {
  ModalContainer,
  ModalBodyContainer,
  ModalBody,
  ModalHeader,
  ModalTitle, 
  ModalCloseButton, 
  ModalCloseIcon, 
  ModalContent,
  ModalFooterContainer,
  ModalButtonSave, 
  ModalGrayout,
} from './Modal.styles.tw'

const Modal = ({
  title = 'Create Task',
  onSave = () => null,
  children
}) => {
  const { isOpen, closeModal } = useContext(ModalContext);
  return (
    <>
      {isOpen ? (
        <Fragment>
          <ModalContainer>
            <ModalBodyContainer>
              {/*content*/}
              <ModalBody >
                {/*header*/}
                <ModalHeader>
                  <ModalTitle>
                    {title}
                  </ModalTitle>
                  <ModalCloseButton
                    onClick={() => closeModal()}
                  >
                    <ModalCloseIcon>
                      ×
                    </ModalCloseIcon>
                  </ModalCloseButton>
                </ModalHeader>
                {/*body*/}
                <ModalContent>
                  {children}
                </ModalContent>
                {/*footer*/}
                <ModalFooterContainer>
                  <ModalButtonSave
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={onSave}
                  >
                    Save Task
                  </ModalButtonSave>
                </ModalFooterContainer>
              </ModalBody>
            </ModalBodyContainer>
          </ModalContainer>
          <ModalGrayout  />
        </Fragment>
      ) : null}
    </>
  );
}

export default Modal;