import { Component, OnInit, Input } from '@angular/core';
import { BookService } from './book.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
  providers: [BookService]
})
export class TableListComponent implements OnInit {
  books: any[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.reload();
  }

  reload() {
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
    });
  }

}
