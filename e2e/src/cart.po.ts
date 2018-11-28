import { browser, by, element, ElementFinder, ExpectedConditions as EC, ElementArrayFinder } from 'protractor';

export class CartPage {
  itemsOnCartList: ElementArrayFinder;
  payButton: ElementFinder;
  amountItemsOnCart: ElementFinder;
  valueOfOrder: ElementFinder;

  constructor() {
    this.itemsOnCartList = element.all(by.css('app-cart .container .item'));
    this.payButton = element(by.css('app-cart .container .pay a'));
    this.valueOfOrder = element(by.css('app-cart .container .total span'));
    this.amountItemsOnCart = element(by.css('#navbar .right a span'));
  }

  navigateTo() {
    return browser.get('/cart');
  }

  getAmountItemsOnCartList() {
    return this.itemsOnCartList.count();
  }

  payOrder() {
    this.payButton.click();
  }

  getItemsOnCart() {
    return this.amountItemsOnCart.getText();
  }

  getValueOfOrder() {
    return this.valueOfOrder.getText();
  }

}
