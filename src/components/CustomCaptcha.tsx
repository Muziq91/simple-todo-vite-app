import { useEffect, useRef, useState } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import Typography from './Typography';

type CustomCaptchaProps = {
  onChange: (token: string) => void;
  shouldReset: boolean;
  errorMessages: Array<string>;
};

function CustomCaptcha({
  onChange,
  shouldReset,
  errorMessages,
}: CustomCaptchaProps) {
  const captchaRef = useRef(null);

  useEffect(() => {
    if (shouldReset) {
      captchaRef.current?.resetCaptcha();
    }
  }, [shouldReset]);

  function displayErrorMessages() {
    return errorMessages.map((errorMessage) => (
      <Typography
        as="subtitle"
        className="text-error"
        id="input_error_captcha"
        key={errorMessage}
      >
        {errorMessage}
      </Typography>
    ));
  }

  return (
    <div className="form-control m-2 w-full max-w-xs p-2">
      <HCaptcha
        ref={captchaRef}
        sitekey={import.meta.env.VITE_CAPTCHA_SITE_KEY}
        onVerify={(token) => onChange(token)}
      />
      <div className="flex">
        <div className="flex-grow">
          <Typography
            as="subtitle"
            className="text-error"
            id={`input_error_captcha`}
          >
            {displayErrorMessages()}
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default CustomCaptcha;
