import { FC } from 'react';
import React from 'react';
import { Hero } from '../components/Home/Hero';
import { About } from '../components/Home/About';
import { CounterBar } from '../components/Common/CounterBar';
import { WhyUs } from '../components/Home/WhyUs';
import { HomeCountBar, HomeWhyNotReceiptCards } from '../utils/Constants/constants';
import { FeatureCard } from '../components/Common/Cards/FeatureCard';
import { PopularCourses } from '../components/Home/PopularCourses';
import { TeacherCard } from '../components/Common/Cards/TeacherCard';

import demoTeacher from '../assets/img/trainers/trainer-2.jpg';

export const Home: FC = () => {
  return (
    <main id={'main'}>
      <Hero />
      <About />
      <CounterBar dataArray={HomeCountBar} />
      <WhyUs receiptArray={HomeWhyNotReceiptCards} />
      <section id="features" className="features">
        <div className="container">
          <div className="row">
            <FeatureCard icon={<i className="ri-bar-chart-box-line" />} title={'Dolor Sitema'} />
            <FeatureCard icon={<i className="ri-bar-chart-box-line" />} title={'Dolor Sitema'} />
            <FeatureCard icon={<i className="ri-bar-chart-box-line" />} title={'Dolor Sitema'} />
            <FeatureCard icon={<i className="ri-bar-chart-box-line" />} title={'Dolor Sitema'} />
          </div>
        </div>
      </section>
      <PopularCourses />
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
