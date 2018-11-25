export interface Product {
  quantity?: number;
  price?: any;
  available?: boolean;
  sublevel_id?: number;
  name: string;
  id: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
