import { JSX } from 'react';

export interface NavigatorType {
  lable: string;
  isActive: boolean;
  href: string;
  hilightsIndex: number[];
}

export interface AdminNavigatorType {
  icon: JSX.Element | string;
  label: string;
  isActive: boolean;
  href: string;
}
