import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  baseUrl = environment.apiurl + 'DashboardApi/';
constructor(private http: HttpClient) { }
GetDashboardData(){
  return this.http.get<any>(this.baseUrl+'Dashboard')
};
Datefilter(form: any){
  return this.http.post<any>(this.baseUrl+'datefilter', form)
};
}
