import { Component, OnInit } from '@angular/core';
import { Products, Category, SORT } from '../shared/products.model';
import { Product } from 'src/app/core/shared/core.models';
import { ProductsService } from '../shared/products.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  private products: Observable<Product[]>;
  private categories: Observable<Category[]>;
  private category: Category;
  private price = 50000;
  private quantity = 25;
  private available = true;
  private soldout = true;
  private sort: SORT = SORT.AVAILABLE_DESC;
  private SORT = SORT;
  private show = false;

  constructor(private productsService: ProductsService) {

  }

  ngOnInit() {
    this.categories = this.productsService.getCategories()
    .pipe(map(res => res.categories));

    this.productsService.onCategorySelected()
    .subscribe(category => {
      this.category = category;
      this.getProducts();
    });

    this.getProducts();
  }

  getProducts() {
    this.products = this.productsService.getProducts(
      {
        category: this.category,
        price: this.price,
        quantity: this.quantity,
        available: this.available,
        soldout: this.soldout,
        sort: this.sort
      }
    );
  }

  onFilterPriceChange(e) {
    this.getProducts();
  }

  onFilterQuantityChange(e) {
    this.getProducts();
  }

  onFilterAvailableChange(value) {
    this.available = value;
    this.getProducts();
  }

  onFilterSoldoutChange(value) {
    this.soldout = value;
    this.getProducts();
  }

  onSort(sort: SORT) {
    this.sort = sort;
    this.getProducts();
  }
}
