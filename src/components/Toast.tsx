import { useEffect, useState } from 'react';
import ErrorIcon from '../icons/ErrorIcon';
import InfoIcon from '../icons/InfoIcon';
import SuccessIcon from '../icons/SuccessIcon';
import WarningIcon from '../icons/WarningIcon';
import Typography from './Typography';

type ToastProps = {
  text: string;
  as: 'info' | 'success' | 'warning' | 'error';
  isOpen: boolean;
};

const alertProperties = {
  info: { alertClass: 'alert-info', icon: <InfoIcon /> },
  success: { alertClass: 'alert-success', icon: <SuccessIcon /> },
  warning: { alertClass: 'alert-warning', icon: <WarningIcon /> },
  error: { alertClass: 'alert-error', icon: <ErrorIcon /> },
};

function Toast({ text, as, isOpen }: ToastProps) {
  function displayToastAlert() {
    const alertProperty = alertProperties[as];

    return (
      <div className="toast toast-end toast-top">
        <div role="alert" className={`alert ${alertProperty.alertClass}`}>
          {alertProperty.icon}
          <Typography as="label" className="font-bold text-primary">
            {text}
          </Typography>
        </div>
      </div>
    );
  }

  if (!isOpen) {
    return null;
  }

  return <div className="toast toast-end toast-top">{displayToastAlert()}</div>;
}

export default Toast;
