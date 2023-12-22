import { useEffect, useState } from 'react';
import { calculatePasswordStrength } from '../utils/passwordUtils';

type PasswordStrengthIndicatorProps = {
  value: string;
};

function PasswordStrengthIndicator({ value }: PasswordStrengthIndicatorProps) {
  const [passwordStrength, setPasswordStrength] = useState('progress-error');
  const [strengthPercentage, setStrengthPercentage] = useState(0);

  useEffect(() => {
    const {
      passwordStrength: newPasswordStrength,
      strengthPercentage: newStrengthPercentage,
    } = calculatePasswordStrength(value);

    setStrengthPercentage(() => newStrengthPercentage);
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
