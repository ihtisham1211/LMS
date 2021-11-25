import { Link } from 'react-router-dom';
import React, { FC } from 'react';

interface FeatureCardProps {
  title: string;
  icon: HTMLElement | JSX.Element;
  to?: string;
}
export const FeatureCard: FC<FeatureCardProps> = ({
  title,
  icon,
  to
}: FeatureCardProps): JSX.Element => {
  return (
    <div className="col-lg-3 col-md-4">
      <div className="icon-box">
        {icon}
        <h3>
          <Link to={to || ''}>{title}</Link>
        </h3>
      </div>
    </div>
  );
};
