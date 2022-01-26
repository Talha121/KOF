import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { Supplier } from '../../../../../src/app/Models/Supplier.model';
import { ProductService } from '../../../../../src/app/_service/product.service';

@Component({
  selector: 'app-supplierlist',
  templateUrl: './supplierlist.component.html',
  styleUrls: ['./supplierlist.component.scss']
})
export class SupplierlistComponent implements OnInit {
  form: FormGroup;
  key: string = "rowid";
  reverse: boolean = false;
  p: number = 1;
  categotyid: number;
  noimage = "";
  showform: boolean = false;
  trigger:boolean=false;
  supplier: Supplier []=[];
  suppliermodel: Supplier;
  progress: number = 0;
  modalContent: string = "";
  constructor( 
    private SpinnerService: NgxSpinnerService,
    private productservice: ProductService,
    private modalService: NgbModal,
    private fb: FormBuilder) { 
   
  }
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
  closeform(){
    this.trigger=false;
  
  }
  AddSalesman(){
    this.SpinnerService.show();
    this.trigger=false;
    
    console.log(this.AddSuppluerForm.value)
    if(this.AddSuppluerForm.value.id==0)
    {
      this.productservice.postsupplier(this.AddSuppluerForm.value).subscribe(next => {
        this.SpinnerService.hide();
         this.AddSuppluerForm.reset();
    
         this.Getsalesmans();
       }, error => {
         console.log(error);
       });
    }else{
      this.productservice.Updatesupplier(this.AddSuppluerForm.value).subscribe(next => {
        this.SpinnerService.hide();
         this.AddSuppluerForm.reset();
    
         this.Getsalesmans();
       }, error => {
         console.log(error);
       });
    }
 
  }
  changestatus(data:any){
    this.SpinnerService.show();
    
    
    console.log(this.AddSuppluerForm.value)

      this.productservice.supplierstatus(data).subscribe(next => {
        this.SpinnerService.hide();
         this.AddSuppluerForm.reset();
    
         this.Getsalesmans();
       }, error => {
         console.log(error);
       });
    
 
  }
  UpdateView(id: number) {
   this.trigger=true;
    var data = this.supplier.find((res) => res.id == id);
    
    this.AddSuppluerForm.patchValue({
      id:data.id,
      name:data.name,
      company:data.company,
      address:data.address,
      phone:data.phone,
      email:data.email,
      isActive:data.isActive,
   
    });
  }
  // clickFunction(id:number) {
  //   this.salemanservice.Updatestatus(id).subscribe((next:any)=>{
  //     this.Getsalesmans();
  //     // this.SalesmanList.forEach(x=>{if(x.user_id==id){x.salesMan_Status=!x.salesMan_Status}});
  //   }, error => {
  //     console.log(error);
  //   });
 
    
  // }

  Getsalesmans(){
   
    this.productservice.GetSupplier().subscribe((next:any) => {
      this.supplier=[];
      this.supplier=next;
     // this.supplier=this.supplier;
     
    }, error => {
      console.log(error);
    });
  }
  // openLg(Showdetail,id:number) {
  //   
  //   this.salesmanId=id;
  //  this.vendorsdetail=this.salesmans.find(x=>x.salesmanInfo.salesMan_id==id);
   
  //  this.data=this.vendorsdetail.venders;
  //  console.log(this.data);
  //     this.modalService.open(Showdetail, { size: 'lg' });
    
  // }
  AddSuppluerForm:FormGroup=new FormGroup({
    name: new FormControl(""),
    company: new FormControl(""),
    phone: new FormControl(""),
     email: new FormControl(""),
     id: new FormControl(0),
     address: new FormControl(""),
    // dateTime: new FormControl(this.salesmanmodal.dateTime),
   });

}
