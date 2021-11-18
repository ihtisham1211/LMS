import {NavItem} from "./types";

export const NAV_ITEMS: Array<NavItem> = [
    {
        label: 'Our Courses',
        children: [
            {
                label: 'On-site Courses',
                subLabel: 'Know about our on-site Courses',
                href: '/on-site-courses',
            },
            {
                label: 'Online Courses',
                subLabel: 'Know about our Online Courses',
                href: '/online-courses',
            }
        ],
    },
    {
        label: 'About Us',
        children: [
            {
                label: 'Head Faculty',
                subLabel: 'Know about our head faculty',
                href: '/head-faculty',
            },
            {
                label: 'Our Institute',
                subLabel: 'Know about our Institute',
                href: '/head-faculty',
            }
        ],
    },
];