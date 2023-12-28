import { useEffect, useRef } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import Typography from './Typography';
import MotionDiv from './MotionDiv';

type CustomCaptchaProps = {
  onChange: (token: string) => void;
  shouldReset: boolean;
  errorMessage: string;
};

function CustomCaptcha({
  onChange,
  shouldReset,
  errorMessage,
}: CustomCaptchaProps) {
  const captchaRef = useRef(null);

  useEffect(() => {
    if (shouldReset) {
      console.log('reseting');
      captchaRef.current?.resetCaptcha();
    }
  }, [shouldReset]);

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
