import { ReactNode, useState } from 'react';

type InputProps = {
  autoComplete?: string;
  defaultValue?: string;
  disabled?: boolean;
  errorMessage?: string;
  footerElement?: ReactNode;
  id?: string;
  label?: string;
  maxCount?: number;
  name?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  topRightElement?: ReactNode;
  type?: string;
  withCounter?: boolean;
};

function Input({
  autoComplete = '',
  defaultValue = '',
  disabled = false,
  errorMessage = '',
  footerElement,
  id = 'text_field',
  label = '',
  maxCount = 20,
  name = 'text_field',
  onValueChange = () => {},
  placeholder = '',
  topRightElement,
  type = 'text',
  withCounter = false,
}: InputProps) {
  const [value, setValue] = useState(defaultValue);
  return (
    <label className="form-control m-2 w-full max-w-xs p-2">
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
      {footerElement}
    </label>
  );
}

export default Input;
