import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { OrderService } from '../../../../../src/app/_service/order.service';
import { ProductService } from '../../../../../src/app/_service/product.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {


  key: string = "rowid";
  reverse: boolean = false;
  p: number = 1;
  categotyid: number;
  noimage = "";
  showform: boolean = false;
  trigger:boolean=false;
messages:any[]=[];
  progress: number = 0;
  modalContent: string = "";
  constructor( 
    private SpinnerService: NgxSpinnerService,
    private OrderService: OrderService,
  
    ) { 
   
  }
  ngOnInit() {
    this.Getsalesmans();
  }
  Sort(key){
    this.key=key;
    this.reverse=!this.reverse;
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
   
    this.OrderService.Messages().subscribe((next:any) => {
      this.messages=[];
      this.messages=next;
      console.log(this.messages)
     // this.supplier=this.supplier;
     
    }, error => {
      console.log(error);
    });
  }

 
}
