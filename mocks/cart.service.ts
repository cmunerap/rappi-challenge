import { Observable, of } from 'rxjs';

export class CartServiceMock {
  items$ = of(null);
  constructor() {}
  addToCart() {}
  updateQuantity() {}
  removeFromCart() {}
  checkout() {}
}
