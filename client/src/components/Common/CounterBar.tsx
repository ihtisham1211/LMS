import React, { FC } from 'react';
import CountUp from 'react-countup';
import { CounterBarType } from '../../utils/types';
import { uuid } from '../../utils/Constants/constants';

interface CounterBarProps {
  dataArray: CounterBarType[];
}

export const CounterBar: FC<CounterBarProps> = ({ dataArray }: CounterBarProps): JSX.Element => {
  return (
    <section id="counts" className="counts section-bg">
      <div className="container">
        <div className="row counters">
          {dataArray.map((item) => {
            return (
              <div className="col-lg-3 col-6 text-center" key={uuid()}>
                <CountUp start={0} end={item.count} className="purecounter" duration={2} />
                <p>{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
