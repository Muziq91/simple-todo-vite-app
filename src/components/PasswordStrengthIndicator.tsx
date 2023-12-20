import { useEffect, useState } from 'react';

type PasswordStrengthIndicatorProps = {
  value: string;
};

const lowercaseLetter = '(?=.*[a-z])'.trim();
const uppercaseLetter = ' (?=.*[A-Z])'.trim();
const oneDigit = '(?=.*[0-9])'.trim();
const oneSpecialCharacter = '(?=.*[^A-Za-z0-9])'.trim();
const atLeast8Char = '(?=.{8,})'.trim();
const atLeast12Char = '(?=.{12,})'.trim();
const strongPassword =
  `${lowercaseLetter}${uppercaseLetter}${oneDigit}${oneSpecialCharacter}${atLeast12Char}`.trim();
const mediumPassword =
  `(${lowercaseLetter}${uppercaseLetter}${oneDigit}${atLeast8Char}|${strongPassword})`.trim();

const strongPasswordReg = new RegExp(strongPassword);
const mediumPasswordReg = new RegExp(mediumPassword);

function PasswordStrengthIndicator({ value }: PasswordStrengthIndicatorProps) {
  const [passwordStrength, setPasswordStrength] = useState('progress-error');
  const [strengthPercentage, setStrengthPercentage] = useState(0);

  useEffect(() => {
    let newPasswordStrength = 'progress-error';
    setStrengthPercentage(() => 25);

    if (mediumPasswordReg.test(value)) {
      newPasswordStrength = 'progress-warning';
      setStrengthPercentage(() => 50);
    }

    if (strongPasswordReg.test(value)) {
      newPasswordStrength = 'progress-success';
      setStrengthPercentage(() => 100);
    }

    setPasswordStrength(() => newPasswordStrength);
  }, [value]);

  if (!value) {
    return null;
  }

  return (
    <progress
      className={`progress m-auto ${passwordStrength}`}
      value={strengthPercentage}
      max="100"
    ></progress>
  );
}

export default PasswordStrengthIndicator;
