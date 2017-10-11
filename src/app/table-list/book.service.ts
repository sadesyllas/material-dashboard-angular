import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BookService {

    constructor(private http: Http) { }

    getBooks() {
        return this.http.get('/api/books')
            .map((res: any) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}