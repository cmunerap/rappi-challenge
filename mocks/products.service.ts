import { of, empty } from 'rxjs';

export class ProductsServiceMock {
  constructor() {}
  getCategories() { return empty(); }
  getProducts() {}
  onCategorySelected() { return empty(); }
  selectCategory() {}
}
