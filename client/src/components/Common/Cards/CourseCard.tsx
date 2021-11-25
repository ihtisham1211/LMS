import React, { FC } from 'react';

interface CourseCardProps {
  courseImg: string;
  tag: string;
  price: string;
  title: string;
  paragraph: string;
  teacherImg: string;
  teacherName: string;
  numberOfStudents: string;
}
export const CourseCard: FC<CourseCardProps> = ({
  courseImg,
  tag,
  price,
  title,
  paragraph,
  teacherImg,
  teacherName,
  numberOfStudents
}: CourseCardProps): JSX.Element => {
  return (
    <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
      <div className="course-item">
        <img src={courseImg} className="img-fluid" alt="course-img" />
        <div className="course-content">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4>{title}</h4>
            <p className="price">{price}</p>
          </div>

          <h3>{tag}</h3>
          <p>{paragraph}</p>
          <div className="trainer d-flex justify-content-between align-items-center">
            <div className="trainer-profile d-flex align-items-center">
              <img src={teacherImg} className="img-fluid" alt="teacher-img" />
              <span>{teacherName}</span>
            </div>
            <div className="trainer-rank d-flex align-items-center">
              <i className="bx bx-user" />
              &nbsp;{numberOfStudents}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
