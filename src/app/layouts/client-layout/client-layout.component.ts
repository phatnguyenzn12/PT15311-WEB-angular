import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-client-layout',
  templateUrl: './client-layout.component.html',
  styleUrls: ['./client-layout.component.css']
})
export class ClientLayoutComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }
  cates: Category[] = [];
  ngOnInit(): void {
    this.getMenuData();
  }

  getMenuData(){
    this.categoryService.all().subscribe(data => {
      this.cates = data;
    });
  }

}
