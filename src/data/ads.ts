import type { Ad } from '../types';

// TODO: Add payment system for advertisements and ad rotation logic

export const ads: Ad[] = [
  {
    id: '1',
    title: 'Explore the Archipelago — Coral Reef Tours',
    placement: 'homepage-banner',
    sponsor: 'Coral Reef Tours',
    image: 'coral-reef-ad',
    url: '/directory/coral-reef-tours',
  },
  {
    id: '2',
    title: 'Blue Crab Restaurant — Taste the Island',
    placement: 'article-sidebar',
    sponsor: 'Blue Crab Restaurant',
    image: 'restaurant-ad',
    url: '/directory/blue-crab-restaurant',
  },
  {
    id: '3',
    title: 'Stay at Old Providence Lodge',
    placement: 'category-top',
    sponsor: 'Old Providence Lodge',
    image: 'lodge-ad',
    url: '/directory/old-providence-lodge',
  },
  {
    id: '4',
    title: 'Advertise on Raizal.tv — Reach the whole island',
    placement: 'footer',
    sponsor: 'Raizal.tv',
    image: 'self-promo',
    url: '/advertise',
  },
];
