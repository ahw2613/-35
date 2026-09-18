export interface NavSubItem {
  title: string;
  path: string;
  desc?: string;
}

export interface NavItem {
  title: string;
  id: string;
  subItems?: NavSubItem[];
}

export interface SignatureItem {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tag: string;
}

export interface BeforeAfterItem {
  id: string;
  category: string;
  title: string;
  beforeImage: string;
  afterImage: string;
  summary: string;
  doctor: string;
}

export interface YoutubeItem {
  id: string;
  title: string;
  views: string;
  duration: string;
  thumbnail: string;
  url: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  procedure: string;
  image: string;
  quote: string;
  rating: number;
}

export interface SpecialPointItem {
  number: string;
  enTitle: string;
  krTitle: string;
  description: string;
  detail: string;
  image: string;
}
