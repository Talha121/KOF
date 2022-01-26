import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})


export class OrderService {
  
  baseUrl = environment.apiurl + 'Order/';
  baseUrl2 = environment.apiurl + 'PosOrder/';
constructor(private http: HttpClient) { }
GetOrders(){
  return this.http.get<any>(this.baseUrl+'getorders',httpOptions)
};
GetPosOrders(){
  return this.http.get<any>(this.baseUrl2+'GetPosOrders',httpOptions)
};
UpdateOrderStatus(form:any){
  return this.http.put<any>(this.baseUrl+'ChangeStatus',form)
};
};
var headers_object = new HttpHeaders({
  'Content-Type': 'application/json',
   'Authorization': "Bearer "+localStorage.getItem('token')
});
const httpOptions = {
  headers: headers_object
};