
import React from 'react';
import { Special, OperatingHours, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Menu', href: '#menu' },
  { label: 'Services', href: '#services' },
  { label: 'Rewards', href: '#rewards' },
  { label: 'Catering', href: '#catering' },
  { label: 'Contact', href: '#contact' },
];

export const SPECIALS: Special[] = [
  { day: 'Tuesdays', offer: 'Kids Eat Free & Half-Price Deep Dish' },
  { day: 'Wednesdays', offer: 'Half-Price Wine Bottle' },
  { day: 'Happy Hour', offer: 'Daily 3:00 PM – 6:00 PM' },
];

export const HOURS: OperatingHours[] = [
  { days: 'Sun–Thu', time: '11:00 AM – 10:00 PM' },
  { days: 'Fri–Sat', time: '11:00 AM – 11:00 PM' },
  { days: 'Delivery', time: 'Daily until 9:00 PM' },
];

export const ADDRESS = '340 Lake Ave, Duluth, MN 55802';
export const PHONE_PRIMARY = '(218) 727-7000';
export const PHONE_ALT = '(218) 723-8510';
