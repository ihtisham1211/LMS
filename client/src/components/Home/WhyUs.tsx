import React, { FC } from 'react';
import { LearnMoreCard } from '../Common/Cards/LearnMoreCard';
import { ReceiptType } from '../../utils/types';
import { ReceiptCard } from '../Common/Cards/ReceiptCard';
import { uuid } from '../../utils/Constants/constants';

interface WhyUsProps {
  receiptArray: ReceiptType[];
}
export const WhyUs: FC<WhyUsProps> = ({ receiptArray }: WhyUsProps): JSX.Element => {
  return (
    <section id="why-us" className="why-us">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 d-flex align-items-stretch">
            <LearnMoreCard
              title={'Why Choose Mentor?'}
              paragraph={
                '               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n' +
                '                incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit\n' +
                '                Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel\n' +
                '                necessitatibus optio ad corporis.'
              }
              buttonText={'Learn More'}
              buttonTo={'/about'}
            />
          </div>
          <div className="col-lg-8 d-flex align-items-stretch">
            <div className="icon-boxes d-flex flex-column justify-content-center">
              <div className="row">
                {receiptArray.map((item: ReceiptType) => (
                  <ReceiptCard
                    key={uuid()}
                    title={item.title}
                    paragraph={item.paragraph}
                    icon={item.icon}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
