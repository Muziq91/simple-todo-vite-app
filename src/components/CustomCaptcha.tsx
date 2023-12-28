import { useEffect, useRef } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import Typography from './Typography';
import MotionDiv from './MotionDiv';

type CustomCaptchaProps = {
  onChange: (token: string) => void;
  onReset: () => void;
  shouldReset: boolean;
  errorMessage: string;
};

function CustomCaptcha({
  onChange,
  onReset,
  shouldReset,
  errorMessage,
}: CustomCaptchaProps) {
  const captchaRef = useRef(null);

  useEffect(() => {
    if (shouldReset) {
      captchaRef.current?.resetCaptcha();
      onReset();
    }
  }, [shouldReset, onReset]);

  return (
    <div className="form-control m-2 w-full max-w-xs p-2">
      <HCaptcha
        ref={captchaRef}
        sitekey={import.meta.env.VITE_CAPTCHA_SITE_KEY}
        onVerify={(token) => onChange(token)}
      />
      <div className="flex">
        <MotionDiv className="flex-grow">
          <Typography
            as="subtitle"
            className="text-error"
            id={`input_error_captcha`}
          >
            {errorMessage}
          </Typography>
        </MotionDiv>
      </div>
    </div>
  );
}

export default CustomCaptcha;
