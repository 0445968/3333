import type { MarketIndicator } from '../types';

// TODO: Add market indicator API connection

export const marketIndicators: MarketIndicator[] = [
  {
    id: '1',
    label: 'USD/COP',
    value: '3,950',
    change: '+0.8%',
    positive: false,
    description: 'US Dollar to Colombian Peso exchange rate',
  },
  {
    id: '2',
    label: 'Tourism Index',
    value: '87.4',
    change: '+3.2%',
    positive: true,
    description: 'Monthly visitor activity index for the Archipelago',
  },
  {
    id: '3',
    label: 'Fuel (Gallon)',
    value: '$4.20',
    change: '-1.4%',
    positive: true,
    description: 'Average local fuel price per gallon',
  },
  {
    id: '4',
    label: 'Fish Market',
    value: '↑ Active',
    change: '+12%',
    positive: true,
    description: 'Catch volume and market activity at island docks',
  },
  {
    id: '5',
    label: 'COP Inflation',
    value: '5.6%',
    change: '-0.3%',
    positive: true,
    description: 'Annual consumer price inflation rate in Colombia',
  },
];
