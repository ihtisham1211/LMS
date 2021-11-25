import { v4 } from 'uuid';
import { CounterBarType, ReceiptType } from '../types';
import React from 'react';
export const uuid = (): string => v4();

export const HomeAbout: { title: string }[] = [
  {
    title: 'Ullamco laboris nisi ut aliquip ex ea commodo'
  },
  {
    title: 'Ullamco laboris nisi ut aliquip ex ea commodo'
  },
  {
    title: 'Ullamco laboris nisi ut aliquip ex ea commodo'
  }
];
export const HomeCountBar: CounterBarType[] = [
  {
    count: 1232,
    title: 'Students'
  },
  {
    count: 64,
    title: 'Courses'
  },
  {
    count: 42,
    title: 'Events'
  },
  {
    count: 15,
    title: 'Trainers'
  }
];

export const HomeWhyNotReceiptCards: ReceiptType[] = [
  {
    title: 'Corporis voluptates sit',
    paragraph:
      'Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip',
    icon: <i className="bx bx-cube-alt" />
  },
  {
    title: 'Corporis voluptates sit',
    paragraph:
      'Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip',
    icon: <i className="bx bx-images" />
  },
  {
    title: 'Corporis voluptates sit',
    paragraph:
      'Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip',
    icon: <i className="bx bx-cube-alt" />
  }
];
