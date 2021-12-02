import React, { FC } from 'react';
import { BreadCrumb } from '../components/Common/BreadCrumb';
import { Heading } from '../components/Common/Heading';
import { CourseCard } from '../components/Common/Cards/CourseCard';
import demoCourse from '../assets/img/course-3.jpg';
import demoTeacher from '../assets/img/trainers/trainer-2.jpg';

export const Courses: FC = (): JSX.Element => {
  return (
    <main id={'main'}>
      <BreadCrumb
        title={'Courses'}
        paragraph={
          'Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium. '
        }
      />
      <section id="courses" className="courses">
        <div className="container">
          <div className="row">
            <Heading title={'Online Courses'} paragraph={'Learn Online'} />
          </div>
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
          <div className="row mt-5">
            <Heading title={'On Campus Courses'} paragraph={'Learn on Campus'} />
          </div>
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
    </main>
  );
};
