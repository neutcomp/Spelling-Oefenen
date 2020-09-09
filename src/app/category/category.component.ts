import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category.service';
import { ICategory } from './category';

@Component({
  selector: 'vk-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})

export class CategoryComponent implements OnInit {
  categories: ICategory[];
  selectedCategories: ICategory[];
  errorMessage = '';

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe({
      next: category => {
        this.categories = category;
        this.categories = this.categories
      },
      error: err => this.errorMessage = err
    });
  }

  setCategories(categories: ICategory): void {
    this.categoryService.setCategories(categories);
  }

  // filterCategories(filterBy: string): void {
  //   this.filterCategories = this.categoryService.filterCategories(filterBy);
  // }
}
