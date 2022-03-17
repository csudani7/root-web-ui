import React from 'react';
import {
  AmericanFootballIcon,
  BasketballIcon,
  BoxingIcon,
  TennisIcon,
  BikeIcon,
  FootballIcon,
} from '../ui/Icons';

const header = {
  data: {
    headerLinks: [
      {
        label: 'Home',
        link: '/',
      },
      {
        label: 'Free Bets',
        link: '/',
      },
      {
        label: 'Casino',
        link: '/',
      },
      {
        label: 'Picks',
        link: '/',
      },
      {
        label: 'News',
        link: '/',
      },
      {
        label: 'Guides',
        link: '/',
      },
      {
        label: 'Legislation',
        link: '/',
      },
      {
        label: 'Handicappers',
        link: '/',
      },
    ],
    sportsLinks: [
      {
        label: 'NFL',
        icon: <AmericanFootballIcon />,
      },
      {
        label: 'NBA',
        icon: <FootballIcon />,
      },
      {
        label: 'NCAAB',
        icon: <BasketballIcon />,
      },
      {
        label: 'UFL',
        icon: <BoxingIcon />,
      },
      {
        label: 'BOXXING',
        icon: <BoxingIcon />,
      },
      {
        label: 'TENNIS',
        icon: <TennisIcon />,
      },
      {
        label: 'CYCLING',
        icon: <BikeIcon />,
      },
    ],
    oddsStatisticData: [
      {
        title: 'American',
        value: '+125',
      },
      {
        title: 'Decimal',
        value: '2.25',
      },
      {
        title: 'Fractional',
        value: '5/4',
      },
    ],
    stateStatisticData: [
      {
        title: 'New Jersey',
      },
      {
        title: 'Pennyslvania',
      },
    ],
  },
};
export default header;
