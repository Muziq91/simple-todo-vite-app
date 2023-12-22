import { ReactNode, useState } from 'react';
import Typography from './Typography';
import MotionDiv from './MotionDiv';

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
  required?: boolean;
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
  maxCount,
  name = 'text_field',
  onValueChange = () => {},
  placeholder = '',
  required = false,
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
        required={required}
        type={type}
        value={value}
        onChange={(event) => {
          const newValue = event.target.value;
          setValue(() => newValue);
          onValueChange(newValue);
        }}
      />
      <div className="flex">
        <MotionDiv className="flex-grow">
          <Typography
            as="subtitle"
            className="text-error"
            id={`input_error_${id}`}
          >
            {errorMessage}
          </Typography>
        </MotionDiv>
        <Typography as="subtitle" id={`input_error_${id}`}>
          {withCounter &&
            (!maxCount ? `${value.length}` : `${value.length}/${maxCount}`)}
        </Typography>
      </div>
      {footerElement}
    </label>
  );
}

export default Input;
