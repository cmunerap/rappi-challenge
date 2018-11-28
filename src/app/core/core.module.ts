import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { SwitchComponent } from './switch/switch.component';
import { CartService } from './shared/cart.service';
import { MenuComponent } from './menu/menu.component';
import { MenuService } from './shared/menu.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [SwitchComponent, MenuComponent],
  exports: [SwitchComponent, MenuComponent],
  providers: [CartService, MenuService]
})
export class CoreModule { }
