import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Salesman } from '../../../../../src/app/Models/Salesman';
import { SalesmanService } from '../../../../../src/app/_service/salesman.service';

@Component({
  selector: 'app-AllSalesmans',
  templateUrl: './AllSalesmans.component.html',
  styleUrls: ['./AllSalesmans.component.scss']
})
export class AllSalesmansComponent implements OnInit {
  form: FormGroup;
  SalesmanList:Salesman[];
  key:string='rowid';
  reverse:boolean=false;
  p:number=1;
  categotyid:number;
  noimage="";
  trigger:boolean=false;
  progress: number = 0;
  constructor(private salemanservice:SalesmanService,private salesmanmodal:Salesman,private fb:FormBuilder) { }

  ngOnInit() {
    this.AddSalesman();
    this.form = this.fb.group({
    
      avatar: [null]
    })
  }
  AddSalesman(){
    
 
   this.salemanservice.AddSalesman("pakistan").subscribe(next => {
   }, error => {
     console.log(error);
   });
  }
  Sort(key){
    this.key=key;
    this.reverse=!this.reverse;
  }
  AddSalesmanForm:FormGroup=new FormGroup({
    user_Name: new FormControl(this.salesmanmodal.user_Name),
    name: new FormControl(this.salesmanmodal.name),
    contact_Number: new FormControl(this.salesmanmodal.contact_Number),
    email: new FormControl(this.salesmanmodal.block),
    cnic: new FormControl(this.salesmanmodal.email),
    address: new FormControl(this.salesmanmodal.address),
    gender: new FormControl(this.salesmanmodal.gender),
    status: new FormControl(this.salesmanmodal.status),
    type: new FormControl(this.salesmanmodal.type),
    dateTime: new FormControl(this.salesmanmodal.dateTime),
    password: new FormControl(this.salesmanmodal.password),
   });


}
