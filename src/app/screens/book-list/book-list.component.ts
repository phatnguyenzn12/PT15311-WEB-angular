import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: any[];

  filterObject = {
    keyword: "",
    orderBy: "1"
  }

  orderCondition: any[] = [
    {
      id: "1",
      name: "Giá tăng dần"
    },
    {
      id: "2",
      name: "Giá giảm dần"
    },
    {
      id: "3",
      name: "Tên tăng dần"
    },
    {
      id: "4",
      name: "Tên giảm dần"
    }
  ];
  

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.search();
  }

  search(){
    this.bookService.getAll(this.filterObject).subscribe(data => {
      this.books = data;
    })
  }

}
