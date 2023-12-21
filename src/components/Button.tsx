import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  secondary?: boolean;
};

function Button({ children, secondary }: ButtonProps) {
  return (
    <button
      className={`btn ${secondary ? 'btn-secondary' : 'btn-primary'}`}
      type="submit"
    >
      {children}
    </button>
  );
}

export default Button;
