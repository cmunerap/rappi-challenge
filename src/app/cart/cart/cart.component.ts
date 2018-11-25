import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/shared/cart.service';
import { CartItem, Product } from 'src/app/core/shared/core.models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  private total$: Observable<number>;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.total$ = this.cartService.items$
    .pipe(
      map(items => items.reduce<number>(
          (accum: number, current) => accum + current.product.price * current.quantity, 0
        )
      )
    );
  }

  onChange(e, item: CartItem) {
    this.cartService.updateQuantity(item.product, +e.target.value);
  }

  onRemove(product: Product) {
    this.cartService.removeFromCart(product);
  }

  onPay() {
    this.cartService.checkout();
  }
}
