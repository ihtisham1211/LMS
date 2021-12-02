import React, { FC } from 'react';
import { CourseCard } from '../Common/Cards/CourseCard';

import demoCourse from '../../assets/img/course-3.jpg';
import demoTeacher from '../../assets/img/trainers/trainer-2.jpg';
import { Heading } from '../Common/Heading';

export const PopularCourses: FC = (): JSX.Element => {
  return (
    <section id="popular-courses" className="courses">
      <div className="container">
        <Heading title={'Courses'} paragraph={'Popular Courses'} />
        <div className="row">
          <CourseCard
            courseImg={demoCourse}
            tag={'Web Development'}
            price={'16,000 PKR'}
            title={'Website Design'}
            paragraph={
              'Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.'
            }
            teacherImg={demoTeacher}
            teacherName={'Ali Ahmed'}
            numberOfStudents={'69'}
          />
          <CourseCard
            courseImg={demoCourse}
            tag={'Web Development'}
            price={'16,000 PKR'}
            title={'Website Design'}
            paragraph={
              'Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.'
            }
            teacherImg={demoTeacher}
            teacherName={'Ali Ahmed'}
            numberOfStudents={'69'}
          />
          <CourseCard
            courseImg={demoCourse}
            tag={'Web Development'}
            price={'16,000 PKR'}
            title={'Website Design'}
            paragraph={
              'Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.'
            }
            teacherImg={demoTeacher}
            teacherName={'Ali Ahmed'}
            numberOfStudents={'69'}
          />
        </div>
      </div>
    </section>
  );
};
