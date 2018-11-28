import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreComponent } from './store/store.component';
import { ProductsService } from './shared/products.service';
import { CategoryMenuItemComponent } from './category-menu-item/category-menu-item.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { CoreModule } from '../core/core.module';
import { FilterProductsPipe } from './shared/filter-products.pipe';
import { CartModule } from '../cart/cart.module';
import { CartService } from '../core/shared/cart.service';
import { MenuService } from '../core/shared/menu.service';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    CartModule
  ],
  declarations: [StoreComponent, CategoryMenuItemComponent, ProductsComponent, ProductComponent, FilterProductsPipe],
  providers: [ProductsService, CartService, MenuService]
})
export class ProductsModule { }
