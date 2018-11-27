import { TestBed, inject, getTestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SORT } from './products.model';

describe('ProductsService', () => {
  let injector: TestBed;
  let service: ProductsService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsService],
      imports: [HttpClientTestingModule],
    });
    injector = getTestBed();
    service = injector.get(ProductsService);
    httpMock = injector.get(HttpTestingController);

    const reqProducts = httpMock.expectOne('./assets/products.json');
    const reCategories = httpMock.expectOne('./assets/categories.json');

    reqProducts.flush({ products: [
      {
        quantity: 308,
        price: '$8,958',
        available: false,
        sublevel_id: 1,
        name: 'aute',
        id: '58b5a5b1b6b6c7aacc25b3fb'
      },
      {
        quantity: 891,
        price: '$5,450',
        available: true,
        sublevel_id: 2,
        name: 'mollit',
        id: '58b5a5b117bf36cf8aed54ab'
      },
      {
        quantity: 698,
        price: '$17,001',
        available: false,
        sublevel_id: 3,
        name: 'eiusmod',
        id: '58b5a5b18607b1071fb5ab5b'
      }
    ]});

    reCategories.flush({ categories: [
      {
        id: 1,
        name: 'Bebidas',
        sublevels: [
          {
            id: 1,
            name: 'Gaseosas',
            sublevels: [
              {
                id: 2,
                name: 'Con azúcar'
              },
              {
                id: 3,
                name: 'Sin azúcar'
              }
            ]
          }
        ]
      }]});

  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all the products', () => {
    service.getProducts({
      category: null,
      price: 50000,
      quantity: 100,
      available: true,
      soldout: true,
      sort: SORT.AVAILABLE_ASC
    }).subscribe(data => {
      expect(data).toEqual(
        [
          {
            quantity: 308,
            price: 8958,
            available: false,
            sublevel_id: 1,
            name: 'aute',
            id: '58b5a5b1b6b6c7aacc25b3fb'
          },
          {
            quantity: 698,
            price: 17001,
            available: false,
            sublevel_id: 3,
            name: 'eiusmod',
            id: '58b5a5b18607b1071fb5ab5b'
          },
          {
            quantity: 891,
            price: 5450,
            available: true,
            sublevel_id: 2,
            name: 'mollit',
            id: '58b5a5b117bf36cf8aed54ab'
          },
        ]
      );
    });
  });

  it('Should get all the categories', () => {
    service.getCategories()
    .subscribe(data => {
      expect(data).toEqual(
        { categories: [
          {
            id: 1,
            name: 'Bebidas',
            sublevels: [
              {
                id: 1,
                name: 'Gaseosas',
                sublevels: [
                  {
                    id: 2,
                    name: 'Con azúcar'
                  },
                  {
                    id: 3,
                    name: 'Sin azúcar'
                  }
                ]
              }
            ]
          }]
        }
      );
    });
  });

  it('Should return selected category', () => {
    service.selectCategory({
      id: 1,
      name: 'Con azúcar'
    });

    service.onCategorySelected()
    .subscribe(data => {
      expect(data).toEqual(
        {
          id: 1,
          name: 'Con azúcar'
        }
      );
    });
  });

  it('Should get the products from corresponding category', () => {
    service.getProducts({
      category: {id: 3, name: 'Sin azúcar'},
      price: 50000,
      quantity: 100,
      available: true,
      soldout: true,
      sort: SORT.AVAILABLE_ASC
    }).subscribe(data => {
      expect(data).toEqual(
        [
          {
            quantity: 698,
            price: 17001,
            available: false,
            sublevel_id: 3,
            name: 'eiusmod',
            id: '58b5a5b18607b1071fb5ab5b'
          },
        ]
      );
    });
  });

  it('Should get only the available products', () => {
    service.getProducts({
      category: null,
      price: 50000,
      quantity: 100,
      available: true,
      soldout: false,
      sort: SORT.AVAILABLE_ASC
    }).subscribe(data => {
      expect(data).toEqual(
        [
          {
            quantity: 891,
            price: 5450,
            available: true,
            sublevel_id: 2,
            name: 'mollit',
            id: '58b5a5b117bf36cf8aed54ab'
          },
        ]
      );
    });
  });

  it('Should get only the products that costs less than $10.000', () => {
    service.getProducts({
      category: null,
      price: 10000,
      quantity: 100,
      available: true,
      soldout: true,
      sort: SORT.AVAILABLE_ASC
    }).subscribe(data => {
      expect(data).toEqual(
        [
          {
            quantity: 308,
            price: 8958,
            available: false,
            sublevel_id: 1,
            name: 'aute',
            id: '58b5a5b1b6b6c7aacc25b3fb'
          },
          {
            quantity: 891,
            price: 5450,
            available: true,
            sublevel_id: 2,
            name: 'mollit',
            id: '58b5a5b117bf36cf8aed54ab'
          },
        ]
      );
    });
  });

  it('Should get the products sorted by more quantity', () => {
    service.getProducts({
      category: null,
      price: 50000,
      quantity: 100,
      available: true,
      soldout: true,
      sort: SORT.QUANTITY_DESC
    }).subscribe(data => {
      expect(data).toEqual(
        [
          {
            quantity: 891,
            price: 5450,
            available: true,
            sublevel_id: 2,
            name: 'mollit',
            id: '58b5a5b117bf36cf8aed54ab'
          },
          {
            quantity: 698,
            price: 17001,
            available: false,
            sublevel_id: 3,
            name: 'eiusmod',
            id: '58b5a5b18607b1071fb5ab5b'
          },
          {
            quantity: 308,
            price: 8958,
            available: false,
            sublevel_id: 1,
            name: 'aute',
            id: '58b5a5b1b6b6c7aacc25b3fb'
          },
        ]
      );
    });
  });

});
