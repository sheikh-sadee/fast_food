import React from 'react';

import { toast } from 'react-toastify';
import { StyledAlert, Message } from './Toast.styles';
import 'react-toastify/dist/ReactToastify.min.css';
import AlertIcon from '../AlertIcon';

function Toast({ type, message, ...props }) {
  const { duplicateOff, id } = props;
  if (duplicateOff) {
    if (!toast.isActive(id.current)) {
      id.current = toast(
        <StyledAlert $type={type} {...props}>
          <AlertIcon $type={type} />
          <Message $type={type}>{message}</Message>
        </StyledAlert>,
        {
          position: toast.POSITION.BOTTOM_CENTER,
          hideProgressBar: true,
        },
      );
    }
  } else {
    return toast(
      <StyledAlert $type={type} {...props}>
        <AlertIcon $type={type} />
        <Message $type={type}>{message}</Message>
      </StyledAlert>,
      {
        position: toast.POSITION.BOTTOM_CENTER,
        hideProgressBar: true,
      },
    );
  }
}

export default Toast;
