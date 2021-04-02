import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  
  bookId: string;
  book = null;
  constructor(private route: ActivatedRoute,
              private bookService: BookService
    ) { }

  async ngOnInit() {
    await this.route.params.subscribe(params => {
      this.bookId = params.xxx;
    });

    await this.bookService.findById(this.bookId).subscribe(data => {
      this.book = data;
    });
  }

}
