import { ProductsPage } from './products.po';
import { CartPage } from './cart.po';

describe('Startup of the application', () => {
  let productsPage: ProductsPage;
  let cartPage: CartPage;

  beforeEach(() => {
    productsPage = new ProductsPage();
    cartPage = new CartPage();
  });

  it('should display the name of the business', () => {
    productsPage.navigateTo();
    expect(productsPage.getLogoText()).toEqual('Tiendas EL BARATÓN');
  });

  it('should add a product to the cart', async () => {
    await productsPage.addProduct1ToCart();
    await productsPage.addProduct2ToCart();
    await productsPage.addProduct3ToCart();
    expect(productsPage.itemsOnCart()).toEqual('3');
  });

  it('should have items on cart', () => {
    cartPage.navigateTo();
    expect(cartPage.getAmountItemsOnCartList()).toBe(3);
    expect(cartPage.getItemsOnCart()).toEqual('3');
  });

  it('should convert the value of the order to $0 after payment', () => {
    expect(cartPage.getValueOfOrder()).not.toEqual('$0');
    cartPage.payOrder();
    expect(cartPage.getValueOfOrder()).toEqual('$0');
  });

});
