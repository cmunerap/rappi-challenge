import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { first, map, filter } from 'rxjs/operators';

import { Products, Categories, Category, SORT, Search } from './products.model';
import { Product } from 'src/app/core/shared/core.models';

@Injectable()
export class ProductsService {
  products = new BehaviorSubject<Products>({});
  categories = new BehaviorSubject<Categories>({});
  selectedCategory = new BehaviorSubject<Category>(null);

  sorting: {[sort: number]: (a: Product, b: Product) => any} = {
    0: (a: Product, b: Product) => +b.available - +a.available,
    1: (a: Product, b: Product) => +a.available - +b.available,
    2: (a: Product, b: Product) => b.price - a.price,
    3: (a: Product, b: Product) => a.price - b.price,
    4: (a: Product, b: Product) => b.quantity - a.quantity,
    5: (a: Product, b: Product) => a.price - b.price,
  };

  constructor(private http: HttpClient) {
    this.http.get<Products>('./assets/products.json')
    .pipe(
      first(),
      map(products => {
          return {
            products: products.products.map(
              product =>
                Object.assign(
                  {},
                  product,
                  {price: Number(product.price.replace(/[^0-9.-]+/g, ''))}
                )
            )
          };
        }
      )
    )
    .subscribe(products => this.products.next(products));

    this.http.get<Categories>('./assets/categories.json')
    .pipe(first())
    .subscribe(categories => this.categories.next(categories));
  }

  /**
   * returns the complete list of categories
   */
  getCategories(): Observable<Categories> {
    return this.categories.asObservable();
  }

  /**
   * returns an observable of products based on selected category
   */
  getProducts(search: Search): Observable<Product[]> {
    return this.products
    .asObservable()
    .pipe(
      filter(products => products.products ? true : false),
      map(products =>
        products.products
        .filter(
          (product) => {
            let condition = product.price <= search.price && product.quantity >= search.quantity;

            if (search.category) {
              // if category selected
              condition =
                condition && product.sublevel_id === search.category.id;
            }

            if (!search.available && !search.soldout) {
              // no products to show
              condition = condition && false;
            } else if (search.available && search.soldout) {
              // all products
              condition = condition && true;
            } else if (search.available) {
              // only availables
              condition = condition && product.available === true;
            } else if (search.soldout) {
              // only soldout
              condition = condition && product.available === false;
            }

            return condition;
          }
        )
        .sort(this.sorting[search.sort])
      )
    );
  }

  /**
   * returns an observable with the current category selected
   */
  onCategorySelected(): Observable<Category> {
    return this.selectedCategory.asObservable();
  }

  /**
   * allows to select the current category
   * @param category category to be selected
   */
  selectCategory(category: Category) {
    this.selectedCategory.next(category);
  }
}
