import { HttpClient, HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = environment.apiurl + 'category/';
constructor(private http: HttpClient) {
  
};
GetCategoryProduct(dto:any){
  return this.http.post<any>(this.baseUrl+ 'CategoryWiseProduct',dto)
};
postcategorey(form: any){
  return this.http.post<any>(this.baseUrl+'AddCategory', form)
};
Addcateogry(form: any){
  
  return this.http.post<any>(this.baseUrl+'postcategory', form)
};
GetCategorey(){
  return this.http.get<any>(this.baseUrl+'getcategories')
};
GetInventory(){
  return this.http.get<any>(this.baseUrl+'AllInventory')
};
GetSupplier(){
  return this.http.get<any>(environment.apiurl+'Supplier/getall')
};

Updatesupplier(form: any){
  return this.http.put<any>(environment.apiurl+'Supplier/updatesupplier', form)
};
postsupplier(form: any){
  
  return this.http.post<any>(environment.apiurl+'Supplier/postsupplier', form)
};
supplierstatus(form: any){
  
  return this.http.put<any>(environment.apiurl+'Supplier/supplierstatus', form)
};
productstatus(form: any){
  
  return this.http.put<any>(environment.apiurl+'Product/productstatus', form)
};
categorystatus(form: any){
  
  return this.http.put<any>(this.baseUrl+'categorystatus', form)
};

GetAllProducts(){
  return this.http.get<any>(environment.apiurl+'Product/getproducts')
};
UpdateProduct(form: any){
  return this.http.put<any>(environment.apiurl+'Product/UpdateProduct', form)
};
Postproduct(form: any){
  
  return this.http.post<any>(environment.apiurl+'Product/Postproducts', form)
};
UpdateCategory(form: any){
  
  return this.http.put<any>(this.baseUrl+'UpdateCategory', form)
};
UpdateBrand(form: any){
  return this.http.post<any>(this.baseUrl+'UpdateBrand', form)
};




upload(formData) {
  
  return this.http.post<any>(this.baseUrl+"AddproductExcel", formData, {
    reportProgress: true,
    observe: 'events'
  }).pipe(
    map(event => this.getEventMessage(event, formData)),
    catchError(this.handleError)
  );
}

private getEventMessage(event: HttpEvent<any>, formData) {

  switch (event.type) {
    case HttpEventType.UploadProgress:
      return this.fileUploadProgress(event);
  break;
    case HttpEventType.Response:
      return this.apiResponse(event);
  break;
    default:
      return `File "${formData.get('Uploadfile').name}" surprising upload event: ${event.type}.`;
  }
}

private fileUploadProgress(event) {
  const percentDone = Math.round(100 * event.loaded / event.total);
  return { status: 'progress', message: percentDone };
}

private apiResponse(event) {
  return event.body;
}

private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError('Something bad happened. Please try again later.');
}

}
