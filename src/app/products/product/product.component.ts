import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/core/shared/core.models';
import { CartService } from 'src/app/core/shared/cart.service';
import { filter, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  private quantity: Observable<number>;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.quantity = this.cartService.items$
    .pipe(
      map((items) => {
        const founded = items.find(item => item.product.id === this.product.id);
        return founded ? founded.quantity : 0;
      }),
      filter(quantity => quantity > 0)
    );
  }

  onAdd() {
    if (!this.product.available) {
      return;
    }
    this.cartService.addToCart(this.product);
  }

}
