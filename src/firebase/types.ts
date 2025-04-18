export interface Review {
  rating: number;
  comment: string;
  reviewer: string;
}

export interface Psychologist {
  about: string;
  avatar_url: string;
  experience: string;
  initial_consultation: string;
  license: string;
  name: string;
  price_per_hour: number;
  rating: number;
  reviews: Review[];
  specialization: string;
}
