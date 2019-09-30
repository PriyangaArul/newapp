import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
=======
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { catchError, tap } from 'rxjs/operators';
// import { Observable, of } from 'rxjs';
>>>>>>> 7d91ccf8dfe9e90c3d5e2d830826db1bdc5bc6c9

@Injectable({
  providedIn: 'root'
})
export class FormserviceService {

  pageUrl= "http://localhost:8000/proj/user/";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

<<<<<<< HEAD
  add(data){ 
    return this.http.post(this.pageUrl,JSON.stringify(data),this.httpOptions)
    .pipe(
      tap(response => response),
      catchError(this.handleError('adduser'))
    );
  }

  getlist(){
    return this.http.get(this.pageUrl, this.httpOptions)
    .toPromise()
    .then(res => {
      console.log(res)
      return res
    })
  }

  delete(id){
    
    let delUrl = 'http://localhost:8000/proj/user/'+ id +'/'
     return this.http.delete(delUrl, this.httpOptions)
    .pipe(
      tap(response => response),
      catchError(this.handleError('deletestudent'))
    );
  }
  geteditdata(id)  {
    return this.http.get(this.pageUrl + '/' + id + '/', this.httpOptions)
    .pipe(
      tap(response => response),
      catchError(this.handleError('Editdata'))
    )
  }
​
  updateUser(user, id) {
    let url = this.pageUrl + '/' + id + '/'
    return this.http.put(url , user, this.httpOptions)
    .pipe(
      tap(response => response),
      catchError(this.handleError('updatedata'))
    )
  }
  private handleError<T> (operation = 'operation', result?: T) {
    
    return (error: any): Observable<T> => {

      
      console.error(error); 
      
      console.log(`${operation} failed: ${error.message}`);

     
      return of(result as T);
    };
  }
=======
  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };
  constructor() { }
>>>>>>> 7d91ccf8dfe9e90c3d5e2d830826db1bdc5bc6c9

}


