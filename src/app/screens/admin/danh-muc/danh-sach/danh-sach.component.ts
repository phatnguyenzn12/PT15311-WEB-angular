import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { BookService } from 'src/app/services/book.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-danh-sach',
  templateUrl: './danh-sach.component.html',
  styleUrls: ['./danh-sach.component.css']
})
export class DanhSachComponent implements OnInit {
  cates!: Category[];
  constructor(private cateService: CategoryService,
            private bookService: BookService) { }

  ngOnInit(): void {
    this.getCatesData();
  }

  getCatesData(){
    this.cateService.all().subscribe(data => {
      this.cates = data;
    })
  }

  deleteCate(id: any){
    debugger;
    // lấy thông tin danh mục kèm các quyển sách
    this.cateService.findById(id).subscribe(cate => {
      cate.books?.forEach(book => {
        this.bookService.removeBook(book.id);
      });

      this.cateService.delete(cate.id);
    });
    
    // xóa danh mục
  }

}
