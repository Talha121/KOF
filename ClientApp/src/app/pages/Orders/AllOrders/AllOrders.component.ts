import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderDto } from './../../../../../src/app/Models/OrderDto.Model';
import { OrderService } from '../../../../../src/app/_service/order.service';
import { items } from './../../../../../src/app/Models/items.Model';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-AllOrders',
  templateUrl: './AllOrders.component.html',
  styleUrls: ['./AllOrders.component.scss']
})
export class AllOrdersComponent implements OnInit {
  OrdersList:OrderDto[];
  OrdersList2:any[];
  SearchOrdersList:OrderDto[];
  key:string='rowid';
  reverse:boolean=false;
  p:number=1;
  form: FormGroup;
  orderid:number;
  orderitemns:items[];
  neworderdata:any;
  vendorname:string;
  statusorderid:number;
  status:string;
  ordercurrentstatus:string;
  ss:boolean=false;
  orderstatus:FormGroup=new FormGroup({
    orderId:new FormControl(''),
    status: new FormControl('')
  
   });
  constructor(private SpinnerService: NgxSpinnerService,private orderservice:OrderService,private modalService: NgbModal,) { }

  ngOnInit() {
   
    this.GetOrders();
 
  
  }
  openOrderDetailLg(content,data:any) {
    debugger

    this.orderitemns=data;
    console.log(data)
    this.modalService.open(content, { size: 'lg' });
  }
  openOrderUpdateLg(content,data:any) {
   this.statusorderid=data.id;
 
    this.ordercurrentstatus=data.orderStatus;
    this.modalService.open(content, { size: 'lg' });
  }
  onOptionsOrderStatusSelected(){
((this.orderstatus.get('orderId').patchValue(this.statusorderid)));
let orderinfo=this.OrdersList2.find(x=>x.order.id==this.statusorderid);
orderinfo.order.orderStatus =this.orderstatus.value.status;
this.orderservice.UpdateOrderStatus(orderinfo.order).subscribe(next => {
  this.GetOrders();
 }, error => {
   console.log(error);
 });

    // ((this.orderstatus.get('orderId').patchValue(this.statusorderid)));
    // this.orderservice.UpdateOrderStatus(this.orderstatus.value).subscribe((next:any) => {
    //  this.OrdersList.forEach(x=>{if(x.orderId==this.statusorderid){x.status=this.orderstatus.value.status}})
    //   this.modalService.dismissAll();
    //   this.orderstatus.reset();

    // }, error => {
    //   console.log(error);
    // });
    
  }
  onOptionsSelected(num){
    if(num=="0"){
      this.SearchOrdersList=this.OrdersList;
    }
    if(num=="1"){
      this.status="Pending";
      this.OrdersList2=this.OrdersList2.filter(x=>x.order.orderStatus ==this.status);
    }
    if(num=="2"){
      this.status="Active";
      this.OrdersList2=this.OrdersList2.filter(x=>x.order.orderStatus ==this.status);
    }
    if(num=="3"){
      this.status="Completed";
      this.OrdersList2=this.OrdersList2.filter(x=>x.order.orderStatus ==this.status);
    }
    if(num=="4"){
      this.status="Cancelled";
      this.OrdersList2=this.OrdersList2.filter(x=>x.order.orderStatus ==this.status);
    }

  }
  SearchRider(){
    if(this.vendorname==""){
      this.SearchOrdersList=this.OrdersList
     }
     else{
       if(this.OrdersList!=null){
         this.SearchOrdersList=this.OrdersList.filter(res=>{
           return res.vendorname.match(this.vendorname)
         })
       }
    
     }
  }

  changestatus(data:any){
 
    
    

    this.orderservice.UpdateOrderStatus(data).subscribe(next => {
      this.GetOrders();
     }, error => {
       console.log(error);
     });
  

}
  GetOrders(){
    
    this.orderservice.GetOrders().subscribe((next:any) => {
      
      this.OrdersList2=[];
      this.OrdersList2=next;
    
     // this.SearchOrdersList2=this.OrdersList2;
   
     
    }, error => {
      console.log(error);
    });
 
  }

  Sort(key){
    this.key=key;
    this.reverse=!this.reverse;
  }

}
