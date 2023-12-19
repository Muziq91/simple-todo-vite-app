import { ReactNode } from 'react';

type HeadingProps = {
  as: 'h1' | 'h2' | 'h3' | 'h4';
  children?: ReactNode;
};

function Heading({ as, children }: HeadingProps) {
  return (
    <div className="prose">
      {as === 'h1' && <h1>{children}</h1>}
      {as === 'h2' && <h2>{children}</h2>}
      {as === 'h3' && <h3>{children}</h3>}
      {as === 'h4' && <h4>{children}</h4>}
    </div>
  );
}

export default Heading;
