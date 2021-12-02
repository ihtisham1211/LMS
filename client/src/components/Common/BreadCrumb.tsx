import React, { FC } from 'react';

interface BreadCrumbProps {
  title: string;
  paragraph: string;
}

export const BreadCrumb: FC<BreadCrumbProps> = ({
  title,
  paragraph
}: BreadCrumbProps): JSX.Element => {
  return (
    <div className="breadcrumbs">
      <div className="container">
        <h2>{title}</h2>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};
