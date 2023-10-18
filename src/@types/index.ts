export interface HeroItemType {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  big_plant: string;
  small_plant: string;
  buttonText: string;
}

export type HeroType = HeroItemType[];
