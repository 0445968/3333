export interface Article {
  id: string;
  title: string;
  slug: string;
  subtitle?: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string;
  readingTime: number;
  image: string;
  imageAlt?: string;
  featured: boolean;
  body?: string;
}

export interface VideoSegment {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  host: string;
  duration: string;
  publishedAt: string;
  thumbnail: string;
  featured: boolean;
}

export interface Recipe {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  prepTime: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  culturalNote: string;
  image: string;
  featured?: boolean;
}

export interface Business {
  id: string;
  name: string;
  slug: string;
  category: string;
  island: string;
  location: string;
  description: string;
  phone?: string;
  email?: string;
  website?: string;
  featured: boolean;
  rating: number;
  services?: string[];
  hours?: string;
  ownerStory?: string;
}

export interface ArchiveEvent {
  id: string;
  title: string;
  date: string;
  year: number;
  island: string;
  category: string;
  location: string;
  description: string;
}

export interface Memorial {
  id: string;
  name: string;
  years: string;
  community: string;
  tribute: string;
  image?: string;
  familyMessage?: string;
}

export interface Ad {
  id: string;
  title: string;
  placement: 'homepage-banner' | 'article-sidebar' | 'footer' | 'category-top';
  sponsor: string;
  image: string;
  url: string;
}

export interface MarketIndicator {
  id: string;
  label: string;
  value: string;
  change: string;
  positive: boolean;
  description: string;
}

export interface MusicTrack {
  id: string;
  rank: number;
  previousRank: number | null;
  title: string;
  artist: string;
  slug: string;
  genre: string;
  island: string;
  weeksOnChart: number;
  peakPosition: number;
  movement: 'up' | 'down' | 'same' | 'new' | 'reentry';
  coverImage: string;
  audioPreviewUrl?: string;
  featured: boolean;
}

export interface MusicRelease {
  id: string;
  title: string;
  artist: string;
  releaseDate: string;
  type: 'Single' | 'EP' | 'Album' | 'Music Video' | 'Live Session';
  genre: string;
  description: string;
  coverImage: string;
}

export interface ArtistInterview {
  id: string;
  artistName: string;
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  image: string;
  category: string;
}

export interface LyricFeature {
  id: string;
  songTitle: string;
  artist: string;
  slug: string;
  excerpt: string;
  language: string;
  culturalNote: string;
}

export interface MusicVideo {
  id: string;
  title: string;
  artist: string;
  slug: string;
  duration: string;
  publishedAt: string;
  thumbnail: string;
  category: string;
}

export interface Artist {
  id: string;
  name: string;
  slug: string;
  island: string;
  genres: string[];
  bio: string;
  image: string;
  featured: boolean;
  latestRelease?: string;
}

export type Language = 'en' | 'es' | 'cr';

export interface NavItem {
  label: string;
  href: string;
  key: string;
}
