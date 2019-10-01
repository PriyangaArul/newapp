import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfoComponent } from './confo/confo.component';
@Injectable({
  providedIn: 'root'
})
export class FormserviceService {

  pageUrl= "http://127.0.0.1:8000/proj/user/";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient,private modalService: NgbModal) { }

  add(data){ 
    return this.http.post(this.pageUrl,JSON.stringify(data),this.httpOptions)
    .pipe(
      tap(response => response),
      catchError(this.handleError('add account'))
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

  public confirm(
    title: string,
    message: string,
    btnOkText: string = 'OK',
    btnCancelText: string = 'Cancel',
    dialogSize: 'sm'|'lg' = 'sm'): Promise<boolean> {
    const modalRef = this.modalService.open(ConfoComponent, { size: dialogSize });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.btnOkText = btnOkText;
    modalRef.componentInstance.btnCancelText = btnCancelText;

    return modalRef.result;
  }

  private handleError<T> (operation = 'operation', result?: T) {
    
    return (error: any): Observable<T> => {

      
      console.error(error); 
      
      console.log(`${operation} failed: ${error.message}`);

     
      return of(result as T);
    };
  }
  

}


