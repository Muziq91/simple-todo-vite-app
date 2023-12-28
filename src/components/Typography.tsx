import { ReactNode } from 'react';

type TypographyProps = {
  as: 'label' | 'paragraph' | 'subtitle';
  className?: string;
  children?: ReactNode;
  id?: string;
};

function Typography({
  as,
  className,
  children,
  id,
  ...props
}: TypographyProps) {
  return (
    <div className="prose" id={id} {...props}>
      {as === 'paragraph' && <p className={className}>{children}</p>}
      {as === 'label' && (
        <label className="label" id={id}>
          <span className={`label-text ${className}`}>{children}</span>
        </label>
      )}
      {as === 'subtitle' && (
        <label className="label" id={id}>
          <small className={`label-text-alt ${className}`}>{children}</small>
        </label>
      )}
    </div>
  );
}

export default Typography;
