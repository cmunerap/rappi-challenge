import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponent } from './products.component';
import { CartService } from 'src/app/core/shared/cart.service';
import { CartServiceMock } from 'mocks/cart.service';
import { FormsModule } from '@angular/forms';
import { FilterProductsPipe } from '../shared/filter-products.pipe';
import { ProductComponent } from '../product/product.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsComponent, FilterProductsPipe, ProductComponent ],
      providers: [{provide: CartService, useClass: CartServiceMock}],
      imports: [FormsModule, HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
