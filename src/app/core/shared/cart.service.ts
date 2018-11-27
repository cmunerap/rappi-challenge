import { Injectable } from '@angular/core';
import { Product, CartItem } from './core.models';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class CartService {
  public items = new BehaviorSubject<CartItem[]>([]);
  public items$: Observable<CartItem[]>;

  constructor() {
    this.items$ = this.items.asObservable();

    const recover = JSON.parse(localStorage.getItem('items'));
    if (recover) {
      this.items.next(recover);
    }

    this.items$
    .subscribe(items => localStorage.setItem('items', JSON.stringify(items)));
  }

  addToCart(product: Product): boolean {
    const quantity = 1;
    const items = this.items.getValue();
    let item: CartItem = this.items.getValue().find(current => current.product.id === product.id);

    if (item) {
      item.quantity = item.quantity + quantity;
    } else {
      item = { product, quantity };
      items.push(item);
    }

    this.items.next([...items]);

    return true;
  }

  updateQuantity(product: Product, quantity: number) {
    const items = this.items.getValue();
    const item: CartItem = this.items.getValue().find(current => current.product.id === product.id);

    if (item) {
      item.quantity = quantity;
    }

    this.items.next([...items]);

    return true;
  }

  removeFromCart(product: Product) {
    const items = this.items.getValue();
    const index = items.findIndex(item => item.product.id === product.id);
    if (index >= 0) {
      items.splice(index, 1);
    }
    this.items.next([...items]);
  }

  checkout() {
    this.items.next([]);
  }
}
