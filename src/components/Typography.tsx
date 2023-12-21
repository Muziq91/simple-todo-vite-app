import { ReactNode } from 'react';

type TypographyProps = {
  as: 'label' | 'paragraph' | 'subtitle';
  children?: ReactNode;
};

function Typography({ as, children }: TypographyProps) {
  return (
    <div className="prose">
      {as === 'paragraph' && <p>{children}</p>}
      {as === 'label' && (
        <label className="label">
          <span className="label-text">{children}</span>
        </label>
      )}
      {as === 'subtitle' && (
        <label className="label">
          <small className="label-text-alt">{children}</small>
        </label>
      )}
    </div>
  );
}

export default Typography;
