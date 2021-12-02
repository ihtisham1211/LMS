import React, { FC } from 'react';
import { BreadCrumb } from '../components/Common/BreadCrumb';
import { TeacherCard } from '../components/Common/Cards/TeacherCard';
import demoTeacher from '../assets/img/trainers/trainer-2.jpg';

export const Trainers: FC = (): JSX.Element => {
  return (
    <main id={'main'}>
      <BreadCrumb
        title={'Trainers'}
        paragraph={
          'Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium. '
        }
      />
      <section id="trainers" className="trainers">
        <div className="container">
          <div className="row">
            <TeacherCard
              teacherImg={demoTeacher}
              name={'Ali'}
              role={'Web developer'}
              paragraph={'some words he said'}
            />
            <TeacherCard
              teacherImg={demoTeacher}
              name={'Ali'}
              role={'Web developer'}
              paragraph={'some words he said'}
            />
            <TeacherCard
              teacherImg={demoTeacher}
              name={'Ali'}
              role={'Web developer'}
              paragraph={'some words he said'}
            />
          </div>
        </div>
      </section>
    </main>
  );
};
