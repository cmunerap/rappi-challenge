import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreComponent } from './store.component';
import { CategoryMenuItemComponent } from '../category-menu-item/category-menu-item.component';
import { SwitchComponent } from 'src/app/core/switch/switch.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from '../products/products.component';
import { FilterProductsPipe } from '../shared/filter-products.pipe';
import { ProductComponent } from '../product/product.component';
import { ProductsService } from '../shared/products.service';
import { ProductsServiceMock } from 'mocks/products.service';
import { MenuService } from 'src/app/core/shared/menu.service';

describe('StoreComponent', () => {
  let component: StoreComponent;
  let fixture: ComponentFixture<StoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreComponent, CategoryMenuItemComponent, SwitchComponent, ProductsComponent, FilterProductsPipe, ProductComponent ],
      imports: [FormsModule],
      providers: [
        {provide: ProductsService, useClass: ProductsServiceMock},
        MenuService
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
