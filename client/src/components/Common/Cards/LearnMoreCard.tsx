import { Link } from 'react-router-dom';
import React, { FC } from 'react';

interface LearnMoreCardProps {
  title: string;
  paragraph: string;
  buttonText: string;
  buttonTo: string;
}
export const LearnMoreCard: FC<LearnMoreCardProps> = ({
  title,
  buttonText,
  buttonTo,
  paragraph
}: LearnMoreCardProps): JSX.Element => {
  return (
    <div className="content">
      <h3>{title}</h3>
      <p>{paragraph}</p>
      <div className="text-center">
        <Link to={buttonTo} className="more-btn">
          {buttonText} <i className="bx bx-chevron-right" />
        </Link>
      </div>
    </div>
  );
};
