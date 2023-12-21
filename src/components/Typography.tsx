import { ReactNode } from 'react';

type TypographyProps = {
  as: 'label' | 'paragraph' | 'subtitle';
  className?: string;
  children?: ReactNode;
};

function Typography({ as, className, children }: TypographyProps) {
  return (
    <div className="prose">
      {as === 'paragraph' && <p className={className}>{children}</p>}
      {as === 'label' && (
        <label className="label">
          <span className={`label-text ${className}`}>{children}</span>
        </label>
      )}
      {as === 'subtitle' && (
        <label className="label">
          <small className={`label-text-alt ${className}`}>{children}</small>
        </label>
      )}
    </div>
  );
}

export default Typography;
