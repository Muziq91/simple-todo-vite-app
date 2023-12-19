import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

type LinkProps = {
  src: string;
  children: ReactNode;
};

function Link({ src, children }: LinkProps) {
  const navigate = useNavigate();
  return (
    <a
      className="link link-neutral p-2"
      onClick={() => {
        navigate(src);
      }}
    >
      {children}
    </a>
  );
}

export default Link;
