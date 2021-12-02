import React, { FC } from 'react';
import { BreadCrumb } from '../components/Common/BreadCrumb';

export const Publications: FC = (): JSX.Element => {
  return (
    <main id={'main'}>
      <BreadCrumb
        title={'Publications'}
        paragraph={
          'Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium. '
        }
      />
    </main>
  );
};
