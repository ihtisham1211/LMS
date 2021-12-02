import React, { FC } from 'react';

interface HeadingProps {
  title: string;
  paragraph: string;
}

export const Heading: FC<HeadingProps> = ({ title, paragraph }: HeadingProps): JSX.Element => {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      <p>{paragraph}</p>
    </div>
  );
};
