import React, { ReactNode } from 'react';

type FormProps = {
  onFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
};

function Form({ onFormSubmit, children }: FormProps) {
  return (
    <form
      onSubmit={onFormSubmit}
      className="flex h-fit w-96 flex-col items-center justify-center rounded-lg bg-primary p-4"
    >
      {children}
    </form>
  );
}

export default Form;
