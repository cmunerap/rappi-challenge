import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/cart.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  private quantity: Observable<number>;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.quantity = this.cartService.items$
    .pipe(
      map((items) => {
        let quantity = 0;
        items.forEach(item => {
          quantity = quantity + item.quantity;
        });
        return quantity;
      })
    );
  }

}
