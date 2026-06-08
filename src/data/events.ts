import type { ArchiveEvent } from '../types';

// TODO: Add archive database search with full-text indexing

export const archiveEvents: ArchiveEvent[] = [
  {
    id: '1',
    title: 'First Archipelago Cultural Festival',
    date: '1978-08-15',
    year: 1978,
    island: 'San Andrés',
    category: 'Cultural',
    location: 'San Andrés Town Center',
    description: 'The inaugural archipelago-wide cultural festival brought together Raizal families from all three islands to celebrate music, food, and tradition. It became an annual landmark.',
  },
  {
    id: '2',
    title: 'UNESCO Seaflower Biosphere Reserve Designation',
    date: '2000-11-10',
    year: 2000,
    island: 'San Andrés',
    category: 'Environment',
    location: 'Caribbean Sea, Archipelago Waters',
    description: 'The Seaflower Biosphere Reserve was officially designated by UNESCO, recognizing the extraordinary marine biodiversity of the archipelago\'s waters.',
  },
  {
    id: '3',
    title: 'Hurricane Beta Strikes Providencia',
    date: '2005-10-29',
    year: 2005,
    island: 'Providencia',
    category: 'Weather',
    location: 'Providencia & Santa Catalina',
    description: 'Hurricane Beta made a direct hit on Providencia, causing significant damage to homes and infrastructure. The community response and recovery demonstrated remarkable resilience.',
  },
  {
    id: '4',
    title: 'Old Providence & Santa Catalina Heritage School Founded',
    date: '1995-03-01',
    year: 1995,
    island: 'Providencia',
    category: 'Education',
    location: 'Free Town, Providencia',
    description: 'The founding of the heritage school marked a landmark moment in preserving Raizal culture and language for future generations through formal education.',
  },
  {
    id: '5',
    title: 'First Island Half-Marathon',
    date: '2008-04-12',
    year: 2008,
    island: 'San Andrés',
    category: 'Sports',
    location: 'San Andrés',
    description: 'The inaugural San Andrés Half-Marathon drew participants from across Colombia and the Caribbean, establishing the event as an annual fixture in the island sports calendar.',
  },
  {
    id: '6',
    title: 'Hurricane Iota — Community Recovery Begins',
    date: '2020-11-16',
    year: 2020,
    island: 'Providencia',
    category: 'Weather',
    location: 'Providencia & Santa Catalina',
    description: 'Category 4 Hurricane Iota caused devastating damage to Providencia. Within days, community volunteers, local organizations, and national teams began an extraordinary recovery effort.',
  },
  {
    id: '7',
    title: 'Archipelago Sailing Regatta Celebrates 25th Anniversary',
    date: '2012-07-20',
    year: 2012,
    island: 'San Andrés',
    category: 'Sports',
    location: 'San Andrés Harbor',
    description: 'The annual sailing regatta celebrated its 25th anniversary with the largest fleet in its history, honoring the archipelago\'s deep seafaring traditions.',
  },
  {
    id: '8',
    title: 'Raizal Cultural Rights Declaration Signed',
    date: '2002-09-05',
    year: 2002,
    island: 'San Andrés',
    category: 'Cultural',
    location: 'San Andrés',
    description: 'Community leaders and organizations signed a historic declaration affirming Raizal cultural rights, language preservation, and territorial identity.',
  },
  {
    id: '9',
    title: 'First Community Radio Station Launch',
    date: '1991-06-01',
    year: 1991,
    island: 'Providencia',
    category: 'Cultural',
    location: 'Old Providence',
    description: 'The launch of the first community radio station gave Raizal voices a platform to broadcast in Creole, strengthening cultural identity and community communication.',
  },
  {
    id: '10',
    title: 'Seaflower Reef Restoration Project Begins',
    date: '2015-02-14',
    year: 2015,
    island: 'San Andrés',
    category: 'Environment',
    location: 'Seaflower Biosphere Reserve',
    description: 'A landmark coral reef restoration project began in collaboration with international marine biologists, local dive operators, and the Raizal community.',
  },
];

export function getEventsByYear(year: number): ArchiveEvent[] {
  return archiveEvents.filter((e) => e.year === year);
}

export function getEventsByIsland(island: string): ArchiveEvent[] {
  return archiveEvents.filter((e) => e.island === island);
}
