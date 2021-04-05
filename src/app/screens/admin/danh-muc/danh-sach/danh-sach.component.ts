import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-danh-sach',
  templateUrl: './danh-sach.component.html',
  styleUrls: ['./danh-sach.component.css']
})
export class DanhSachComponent implements OnInit {
  cates!: Category[];
  constructor(private cateService: CategoryService) { }

  ngOnInit(): void {
    this.getCatesData();
  }

  getCatesData(){
    this.cateService.all().subscribe(data => {
      this.cates = data;
    })
  }

}
