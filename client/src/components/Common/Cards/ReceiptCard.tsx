import React, { FC } from 'react';

interface ReceiptCardProps {
  title: string;
  paragraph: string;
  icon: HTMLElement | JSX.Element;
}
export const ReceiptCard: FC<ReceiptCardProps> = ({
  title,
  paragraph,
  icon
}: ReceiptCardProps): JSX.Element => {
  return (
    <div className="col-xl-4 d-flex align-items-stretch">
      <div className="icon-box mt-4 mt-xl-0">
        {icon}
        <h4>{title}</h4>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};
