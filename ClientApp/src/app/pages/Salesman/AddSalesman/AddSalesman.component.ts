import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup  } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { Salesman } from '../../../../../src/app/Models/Salesman';
import { SalesmanService } from '../../../../../src/app/_service/salesman.service';

@Component({
  selector: 'app-AddSalesman',
  templateUrl: './AddSalesman.component.html',
  styleUrls: ['./AddSalesman.component.scss']
})
export class AddSalesmanComponent implements OnInit {
  SalesmanList:Salesman[];
  key:string='rowid';
  reverse:boolean=false;
  p:number=1;
  trigger:boolean=false;
  progress: number = 0;
  salesmanId:number;
  vendorsdetail:any;
  salesmans:any[];
  data:any;
  constructor( private SpinnerService: NgxSpinnerService,private salemanservice:SalesmanService,public salesmanmodal:Salesman,private modalService: NgbModal,private fb:FormBuilder) { }

  ngOnInit() {
    this.Getsalesmans();
  }
  Sort(key){
    this.key=key;
    this.reverse=!this.reverse;
  }
  ViewForm(){
    this.trigger=true;
  
  }
  AddSalesman(){
    this.SpinnerService.show();
    this.trigger=false;
    console.log(this.AddSalesmanForm.value)
   this.salemanservice.AddSalesman(this.AddSalesmanForm.value).subscribe(next => {
    this.SpinnerService.hide();
     this.AddSalesmanForm.reset();

     this.Getsalesmans();
   }, error => {
     console.log(error);
   });
  }
  clickFunction(id:number) {
    this.salemanservice.Updatestatus(id).subscribe((next:any)=>{
      this.Getsalesmans();
      // this.SalesmanList.forEach(x=>{if(x.user_id==id){x.salesMan_Status=!x.salesMan_Status}});
    }, error => {
      console.log(error);
    });
 
    
  }

  Getsalesmans(){
    this.SpinnerService.show();
    this.salemanservice.GetSalemans().subscribe((next:any) => {
      this.SalesmanList=[];
      this.SalesmanList=next.resp;
      this.salesmans=this.SalesmanList;
      this.SpinnerService.hide();
    }, error => {
      console.log(error);
    });
  }
  openLg(Showdetail,id:number) {
    
    this.salesmanId=id;
   this.vendorsdetail=this.salesmans.find(x=>x.salesmanInfo.salesMan_id==id);
   
   this.data=this.vendorsdetail.venders;
   console.log(this.data);
      this.modalService.open(Showdetail, { size: 'lg' });
    
  }
  AddSalesmanForm:FormGroup=new FormGroup({
    user_Name: new FormControl(this.salesmanmodal.user_Name),
    name: new FormControl(this.salesmanmodal.name),
     contact_Number: new FormControl(this.salesmanmodal.contact_Number),
     email: new FormControl(this.salesmanmodal.email),
     cnic: new FormControl(this.salesmanmodal.email),
     address: new FormControl(this.salesmanmodal.address),
     gender: new FormControl(this.salesmanmodal.gender),
     password: new FormControl(this.salesmanmodal.password),
    type: new FormControl("SalesMan"),
    // dateTime: new FormControl(this.salesmanmodal.dateTime),
   });
   
   
  
        
}
