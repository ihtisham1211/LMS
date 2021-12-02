import React, { FC } from 'react';
import { BreadCrumb } from '../components/Common/BreadCrumb';

export const Events: FC = (): JSX.Element => {
  return (
    <main id={'main'}>
      <BreadCrumb
        title={'Events'}
        paragraph={
          'Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium. '
        }
      />
    </main>
  );
};
