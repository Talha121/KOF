import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderDto } from '../../../Models/OrderDto.Model';
import { OrderService } from '../../../_service/order.service';
import { items } from '../../../Models/items.Model';
import { PosServiceService } from '../../../_service/PosService.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-PosOrder',
  templateUrl: './PosOrder.component.html',
  styleUrls: ['./PosOrder.component.scss']
})
export class PosOrderComponent implements OnInit {

  OrdersList:OrderDto[];
  SearchOrdersList:OrderDto[];
  key:string='rowid';
  reverse:boolean=false;
  p:number=1;
  form: FormGroup;
  orderid:number;
  orderitemns:items[];
  neworderdata:any;
  ordercode:string;
  statusorderid:number;
  status:string;
  ss:boolean=false;
 
  constructor(private SpinnerService: NgxSpinnerService,private orderservice:PosServiceService,private modalService: NgbModal,private posorderservice:OrderService) { }

  ngOnInit() {
    this.GetOrders();
  
  }
  openOrderDetailLg(content,id:number) {
    
    var data=this.OrdersList.find(res=>res.orderId==id);
    this.orderitemns=data.items;
    
    this.modalService.open(content, { size: 'lg' });
  }
  openOrderUpdateLg(content,id:number) {
    
   this.statusorderid=id;
    
    this.modalService.open(content, { size: 'lg' });
  }
 
 
  SearchRider(){
    
    if(this.ordercode==""){
      this.SearchOrdersList=this.OrdersList
     }
     else{
       if(this.OrdersList!=null){
         this.SearchOrdersList=this.OrdersList.filter(res=>{
           return res.ordercode.toLocaleLowerCase().match(this.ordercode.toLocaleLowerCase())
         })
       }
    
     }
  }
  GetOrders(){
    this.SpinnerService.show();
    this.posorderservice.GetPosOrders().subscribe((next:any) => {
      this.OrdersList=[];
      this.OrdersList=next.res;
      this.SpinnerService.hide();
      this.SearchOrdersList=this.OrdersList;
    
      console.log(this.OrdersList)
    }, error => {
      console.log(error);
    });
  }

  Sort(key){
    this.key=key;
    this.reverse=!this.reverse;
  }

}
