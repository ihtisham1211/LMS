import React, { FC } from 'react';

interface TeacherCardProps {
  teacherImg: string;
  name: string;
  role: string;
  paragraph: string;
}
export const TeacherCard: FC<TeacherCardProps> = ({
  teacherImg,
  name,
  role,
  paragraph
}: TeacherCardProps): JSX.Element => {
  return (
    <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
      <div className="member">
        <img src={teacherImg} className="img-fluid" alt="teacher-img" />
        <div className="member-content">
          <h4>{name}</h4>
          <span>{role}</span>
          <p>{paragraph}</p>
        </div>
      </div>
    </div>
  );
};
