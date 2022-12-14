import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { ReadVarExpr } from '@angular/compiler';
import { Injectable } from '@angular/core';


const URL = "http://localhost:8086/api/v1/digitalbooks";
@Injectable({
  providedIn: 'root'
})

export class BookserviceService {
  baseApiUrl = "https://file.io";
  constructor(public http: HttpClient) { }
  createBook(book: any) {
    let appendedURL = URL + "/author/" + book.userid + "/books"
    return this.http.post(appendedURL, book);

  }

  searchBook(book: any) {
    let appendedURL = URL + "/books/search"
    let queryParams = new HttpParams();
    queryParams = queryParams.append("category", book.category);
    queryParams = queryParams.append("author", book.author);
    queryParams = queryParams.append("publisher", book.publisher)
    return this.http.get(appendedURL, { params: queryParams });

  }

  

  getBook(userid: any) {
    let appendedURL = URL + "/allbooks/" + userid;
    return this.http.get(appendedURL);

  }

  upload(file: any) {
    const formData = new FormData();
    formData.append("file", file, file.name);
    return this.http.post(this.baseApiUrl, formData)
  }

  buyBook(reader: any) {
    // /payment/book/{bookId}/username/{username}/mailId/{mailId}
    let appendedURL = URL + "/payment/book/" + reader.bookId + "/username/" + reader.userName + "/mailId/" + reader.mailId;
    return this.http.post(appendedURL,reader);

  }
  edit(book: any){
    //"/author/{authorId}/books/{bookId}"
    let appendedURL = URL +"/author/" + book.authorId + "/books/" + book.bookId;
    let queryParams = new HttpParams();
    queryParams = queryParams.append("category", book.category);
    queryParams = queryParams.append("author", book.author);
    queryParams = queryParams.append("price", book.price)
    return this.http.get(appendedURL, { params: queryParams });
  }

  searchBookForReader(searchBookReaderPaymentId:String){
    // "/reader/payment/{paymentId}"
    let appendedURL = URL + "/reader/payment/" + searchBookReaderPaymentId;
    return this.http.get(appendedURL);
  }
}
