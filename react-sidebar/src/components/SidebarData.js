import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as BsIcons from 'react-icons/bs';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Maps',
    path: '/maps',
    icon: <FaIcons.FaMapMarkerAlt />,
  },
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <RiIcons.RiDashboardLine />
  },
  {
    title: 'Statistik',
    path: '/statistik',
    icon: <RiIcons.RiLineChartLine />
  },
  {
    title: 'Master Data',
    path: '/masterdata',
    icon: <BsIcons.BsDatabaseAdd />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Tanaman Pangan',
        path: '/masterdata/tanaman-pangan',
        cName: 'sub-nav'
      },
      {
        title: 'Holtikultura',
        path: '/masterdata/holtikultura',
        cName: 'sub-nav'
      },
      {
        title: 'Perkebunan',
        path: '/masterdata/perkebunan',
        cName: 'sub-nav'
      },
      {
        title: 'Petani',
        path: '/masterdata/petani',
        cName: 'sub-nav',
      },
      {
        title: 'Curah Hujan',
        path: '/masterdata/curah-hujan',
        cName: 'sub-nav',
      },
      {
        title:'Lahan Pertanian',
        path: '/masterdata/lahan-pertanian',
        cName: 'sub-nav',
      },
      {
        title: 'Kelompok Tani',
        path: '/masterdata/kelompok-tani',
        cName: 'sub-nav',
      }
    ]
  },
  {
    title: 'Logout',
    path: '/logout',
    icon: <RiIcons.RiLogoutBoxRLine />
  }
];