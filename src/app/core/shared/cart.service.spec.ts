import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;
  beforeEach(() => {
    service = new CartService();
    service.items.next(
      []
    );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should add a product to the cart', () => {
    service.addToCart({
      id: 'test',
      name: 'test',
      available: true,
      price: 100,
      quantity: 100
    });

    service.items$
    .subscribe(data => {
      expect(data.length).toBe(1);
      expect(data).toEqual([
        {
          product: {
            id: 'test',
            name: 'test',
            available: true,
            price: 100,
            quantity: 100
          },
          quantity: 1
        }
      ]);
    });
  });

  it('Should update the quantity of products added to the cart', () => {
      service.items.next(
        [
          {
            product: {
              id: 'test',
              name: 'test',
              available: true,
              price: 100,
              quantity: 100
            },
            quantity: 1
          }
        ]
      );

      service.updateQuantity(
        {
          id: 'test',
          name: 'test',
          available: true,
          price: 100,
          quantity: 100
        },
        10
      );

      service.items$
      .subscribe(data => {
        expect(data.length).toBe(1);
        expect(data).toEqual([
          {
            product: {
              id: 'test',
              name: 'test',
              available: true,
              price: 100,
              quantity: 100
            },
            quantity: 10
          }
        ]);
      });
  });

  it('Should remove an item from the cart', () => {
    service.items.next(
      [
        {
          product: {
            id: 'test',
            name: 'test',
            available: true,
            price: 100,
            quantity: 100
          },
          quantity: 1
        },
        {
          product: {
            id: 'test2',
            name: 'test2',
            available: true,
            price: 100,
            quantity: 100
          },
          quantity: 1
        }
      ]
    );

    service.removeFromCart(
      {
        id: 'test',
        name: 'test',
        available: true,
        price: 100,
        quantity: 100
      }
    );

    service.items$
    .subscribe(data => {
      expect(data.length).toBe(1);
      expect(data).toEqual([
        {
          product: {
            id: 'test2',
            name: 'test2',
            available: true,
            price: 100,
            quantity: 100
          },
          quantity: 1
        }
      ]);
    });

  });

  it('Should checkout and remove all the items from the cart', () => {
    service.items.next(
      [
        {
          product: {
            id: 'test',
            name: 'test',
            available: true,
            price: 100,
            quantity: 100
          },
          quantity: 1
        },
        {
          product: {
            id: 'test2',
            name: 'test2',
            available: true,
            price: 100,
            quantity: 100
          },
          quantity: 1
        }
      ]
    );

    service.checkout();

    service.items$
    .subscribe(data => {
      expect(data.length).toBe(0);
      expect(data).toEqual([]);
    });
  });

});
