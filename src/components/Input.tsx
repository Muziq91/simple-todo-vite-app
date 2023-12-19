import { ReactNode, useState } from 'react';
import PasswordStrengthIndicator from './PasswordStrengthIndicator';

type InputProps = {
  id?: string;
  name?: string;
  label?: string;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
  errorMessage?: string;
  defaultValue?: string;
  disabled?: boolean;
  withCounter?: boolean;
  maxCount?: number;
  topRightElement?: ReactNode;
  onValueChange?: (value: string) => void;
  artifact?: 'None' | 'PasswordStrength';
};

function Input({
  id = 'text_field',
  name = 'text_field',
  label = '',
  type = 'text',
  autoComplete = '',
  placeholder = '',
  defaultValue = '',
  errorMessage = '',
  disabled = false,
  withCounter = false,
  maxCount = 20,
  topRightElement,
  onValueChange = () => {},
  artifact = 'None',
}: InputProps) {
  const [value, setValue] = useState(defaultValue);
  return (
    <label className="form-control w-full max-w-xs p-2 m-2">
      <div className="label" id={`input_label_${id}`}>
        <span className="label-text">{label}</span>
        <span className="label-text-alt">{topRightElement}</span>
      </div>
      <input
        autoComplete={autoComplete}
        className={`input input-bordered w-full max-w-xs ${
          errorMessage && 'input-error'
        }`}
        disabled={disabled}
        id={`input_field_${id}`}
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(event) => {
          const newValue = event.target.value;
          setValue(() => newValue);
          onValueChange(newValue);
        }}
      />
      <div className="label" id={`input_error_${id}`}>
        <span className="label-text-alt text-error">{errorMessage}</span>
        {withCounter && (
          <span className="label-text-alt">{`${value.length}/${maxCount}`}</span>
        )}
      </div>
      {artifact === 'PasswordStrength' && (
        <PasswordStrengthIndicator value={value} />
      )}
    </label>
  );
}

export default Input;
