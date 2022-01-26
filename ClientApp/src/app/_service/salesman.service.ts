import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SalesmanService {
  baseUrl = environment.apiurl + 'Auth/';
  baseUrl2 = environment.apiurl + 'UsersApi/';
constructor(private http: HttpClient) { }

AddSalesman(form: any){
  return this.http.post<any>(this.baseUrl+'Register', form)
};
GetSalemans(){
  return this.http.get<any>(this.baseUrl2+'AllSalesmans')
};
Updatestatus(Id:number):Observable<any>{

  return this.http.post<any>(this.baseUrl2+'StatusChangesalesman', Id)}


}