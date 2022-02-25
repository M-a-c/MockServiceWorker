import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Book } from 'src/models/Book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Angular-MSW-Example';

  getBooks(): Observable<Array<Book>> {
    console.log('called');
    return this.http.get<Array<Book>>('/books');
  }

  constructor(private http: HttpClient) {
  }

  public books: Array<Book> = [];

  ngOnInit(): void {
    this.getBooks().subscribe((books: Array<Book>)=>{this.books = books});
  }


}



