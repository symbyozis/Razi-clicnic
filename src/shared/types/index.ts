export interface IServiceItem {
  image: string;
  title: string;
  text: string;
}

export interface ICheckup {
  image: string;
  name: string;
  price: number;
  points: string[];
  link: string;
}

export interface IDoctor {
  name: string;
  specialization: string;
  image: string;
  experience?: number;
}

export interface IReview {
  author: string;
  text: string;
  rating: number;
  date?: string;
}

export interface INews {
  title: string;
  description: string;
  image: string;
  date: string;
  link: string;
}
