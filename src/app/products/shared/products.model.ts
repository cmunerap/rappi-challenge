import { Product } from 'src/app/core/shared/core.models';

export interface Products {
  products?: Product[];
}

export interface Categories {
  categories?: Category[];
}

export interface Category {
  id: number;
  name: string;
  sublevels?: Category[];
}

export enum SORT {
  AVAILABLE_DESC = 0,
  AVAILABLE_ASC = 1,
  PRICE_DESC = 2,
  PRICE_ASC = 3,
  QUANTITY_DESC = 4,
  QUANTITY_ASC = 5
}

export interface Search {
  category: Category;
  price: number;
  quantity: number;
  available: boolean;
  soldout: boolean;
  sort: SORT;
}
