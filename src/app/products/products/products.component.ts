import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/core/shared/core.models';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Input() products: Product[];
  private searchText: string;
  constructor() { }

  ngOnInit() {
  }

}
