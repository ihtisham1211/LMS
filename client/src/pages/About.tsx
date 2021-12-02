import React, { FC } from 'react';
import { BreadCrumb } from '../components/Common/BreadCrumb';
import { CounterBar } from '../components/Common/CounterBar';
import { HomeCountBar } from '../utils/Constants/constants';
import { About as AboutUS } from '../components/Home/About';
import { Button } from 'react-bootstrap';

export const About: FC = (): JSX.Element => {
  return (
    <main id={'main'}>
      <BreadCrumb
        title={'About'}
        paragraph={
          'Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium. '
        }
      />
      <AboutUS />
      <CounterBar dataArray={HomeCountBar} />
      <Button variant={'primary'}> button</Button>
    </main>
  );
};
