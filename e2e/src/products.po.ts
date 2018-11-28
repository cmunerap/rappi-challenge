import { browser, by, element, ElementFinder, ExpectedConditions as EC } from 'protractor';

export class ProductsPage {
  logo: ElementFinder;
  product1: ElementFinder;
  product2: ElementFinder;
  product3: ElementFinder;
  amountItemsOnCart: ElementFinder;
  constructor() {
    this.logo = element(by.css('.logo'));
    this.product1 = element(by.css('app-products .products app-product:nth-child(1)'));
    this.product2 = element(by.css('app-products .products app-product:nth-child(2)'));
    this.product3 = element(by.css('app-products .products app-product:nth-child(3)'));
    this.amountItemsOnCart = element(by.css('#navbar .right a span'));
  }

  navigateTo() {
    return browser.get('/');
  }

  getLogoText() {
    return this.logo.getText();
  }

  async addProduct1ToCart() {
    const buttonToAdd: ElementFinder = this.product1.element(by.css('a'));
    await browser.wait(EC.elementToBeClickable(buttonToAdd), 3000);
    await buttonToAdd.click();
  }

  async addProduct2ToCart() {
    const buttonToAdd: ElementFinder = this.product2.element(by.css('a'));
    await browser.wait(EC.elementToBeClickable(buttonToAdd), 3000);
    await buttonToAdd.click();
  }

  async addProduct3ToCart() {
    const buttonToAdd: ElementFinder = this.product3.element(by.css('a'));
    await browser.wait(EC.elementToBeClickable(buttonToAdd), 3000);
    await buttonToAdd.click();
  }

  itemsOnCart() {
    return this.amountItemsOnCart.getText();
  }
}
