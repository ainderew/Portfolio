import { experienceObject } from '../../../../../core/types/base';

export const experiences: experienceObject = {
  theoria: {
    position: ['Senior Fullstack Developer', 'Fullstack Web Developer'],
    duration: ['Aug 2023 - Present', 'June 2022 - Aug 2023'],
    employer: 'Theoria Medical',
    link: 'https://www.linkedin.com/company/theoria-medical',
    responsibilities: [
      'Designed notification and push notification system for 3 platforms namely for web, desktop and mobile that was integral for the project\'s success.',
      'Took part in in-depth planning and discussions in weekly sprint planning, finding ways to better streamline and make workflows more efficient by eliminating repetitive blockers.',
      'Implemented core app features through Typescript GraphQL backend and resolving application bugs.',
      'Collaborated in a 5-member team to create the company\'s second product that integrates with its main product',
    ],
    techstack: [
      'Typescript',
      'ReactJS',
      'NextJS',
      'TypeGraphQL',
      'NodeJS',
      'MongoDB',
    ],
  },
  group61: {
    position: 'Fullstack Web Developer',
    duration: 'Sep 2020 - June 2021',
    employer: 'Group 61',
    link: 'https://group61.com',
    responsibilities: [
      'Communicated with stakeholders directly to integrate demands into technical plans',
      'Designed Restful APIs to handle automation of student enrollment',
      'Developed and designed customer facing web interface',
    ],
    techstack: ['ReactJS', 'JavaScript', 'NodeJS', 'Express', 'MySql', 'Git'],
  },
};

export const jobList = [
  {
    name: 'Theoria Medical',
    experienceKey: 'theoria',
  },
  {
    name: 'Group61',
    experienceKey: 'group61',
  },
];
