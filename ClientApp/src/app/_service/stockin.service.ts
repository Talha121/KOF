import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class StockinService {
  baseUrl = environment.apiurl + 'Inventory/';
constructor(private http: HttpClient) { }
GetstockIn(){
  return this.http.get<any>(this.baseUrl+'getinventory')
};
ChangeStatus(data:any){
  return this.http.post<any>(this.baseUrl+'Changestatus',data)
};
RemoveInventory(data:any){
  return this.http.post<any>(this.baseUrl+'RemoveInventory',data)
};
PostInventory(data:any){
  
  return this.http.post<any>(this.baseUrl+'postinventory',data)
};
}
