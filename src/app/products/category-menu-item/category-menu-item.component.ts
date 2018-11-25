import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../shared/products.model';
import { ProductsService } from '../shared/products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category-menu-item',
  templateUrl: './category-menu-item.component.html',
  styleUrls: ['./category-menu-item.component.scss']
})
export class CategoryMenuItemComponent implements OnInit {
  @Input() category: Category;
  private expanded = false;
  private selectedCategory: Observable<Category>;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.selectedCategory = this.productsService.onCategorySelected();
  }

  onCategorySelected() {
    this.expanded = !this.expanded;
    this.productsService.selectCategory(this.category);
  }

}
