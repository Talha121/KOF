import { DatePipe } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Walkinorderitem } from './../../../../../src/app/Models/Walkinorderitem';
import { ProductInventory } from './../../../../../src/app/Models/ProductInventory';
import { PosServiceService } from './../../../../../src/app/_service/PosService.service';
import { WalkinorderBilling } from './../../../../../src/app/Models/WalkinorderBilling';
import { Walkinorder } from './../../../../../src/app/Models/walkinorder';
import { AlertifyService } from '../.././../../../src/app/_service/alertify.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-MainPos',
  templateUrl: './MainPos.component.html',
  styleUrls: ['./MainPos.component.scss']
})
export class MainPosComponent implements OnInit {
  date : String;
  Barcode:string;
  amountvalidator:boolean=false;
  Invoicehide:boolean=false;
  poshide:boolean=true;
  product:ProductInventory;
  productlis:ProductInventory[]=[];
  cart:Walkinorderitem[]=[];
  printreceiveamount:number;
  TotalQty:number=0;
  walkinitem:Walkinorderitem={}as Walkinorderitem;
  walkinbilling:WalkinorderBilling={}as WalkinorderBilling;
  barcodeobj:{};
  grossamount:number=0;
  totalamount:number=0;
  amountrecieved:any;
  NextOrderNo:string;
  returnableamount:number=0;
  i:number;
  orderData:Walkinorder={}as Walkinorder;
  @ViewChild('barcodevalue', { static: true }) inputName; 
  @ViewChild('amn', { static: true }) amountr; 
  //@ViewChild('barcodevalue', { static: true }) MyDOMElement: ElementRef;
  
  constructor(public datepipe: DatePipe,private modalService: NgbModal,private pos:PosServiceService,private alertify: AlertifyService, private router: Router) { 
    
  }
  openLg(content) {
  
 
    this.modalService.open(content, {size:'xl', windowClass:'searchproduct'});
  }
 printxx()
 {
 this.Invoicehide=true;
 this.poshide=false;

   window.print();
   this.Invoicehide=false;
   this.poshide=true;
 }
 
  ngOnInit() {
    this.GetIrderNo();
    setInterval(() => {         
      let currentDate=new Date();
      this.date = currentDate.toDateString()+' '+ currentDate.toLocaleTimeString();
    }, 1000);
   


  };
  logout() {
    localStorage.removeItem('token');
    this.alertify.message('logout Successfully');
    this.router.navigate(['/authentication/login']);
  }
  onBarcodechange(barcode:string){
    
    var pro=this.productlis.filter(x=>x.barcode==barcode);
if(pro.length>0){

 var i=this.cart.findIndex(x=>x.barcode==barcode);
 if(pro[0].quntity>=this.cart[i].Quantity+1){
  this.cart[i].Quantity++;
  this.cart[i].TotalPrice=this.cart[i].singleQuantityprice*this.cart[i].Quantity;
  this.inputName.nativeElement.value = '';
  this.grossamount=0;
 
 this.TotalQty=0;
 for(i=0;i<this.cart.length;i++){
   this.grossamount+=this.cart[i].TotalPrice;
 this.TotalQty=this.TotalQty+this.cart[i].Quantity;
   
 }

 
 }
 else{
  this.inputName.nativeElement.value = '';
   alert(" No More Product In Inventory")
 }
 
}else{
  this.barcodeobj={"barcode":barcode};
  this.pos.GetSingleProducts(this.barcodeobj).subscribe((next:any)=>{


if(next.res[0]!=null){
  this.product=next.res[0];

  this.productlis.push(this.product);
  //this.Barcode=' ';
  this.walkinitem.productInvertory_Id=next.res[0].productInvertory_Id;
  this.walkinitem.Quantity=1;
  this.walkinitem.singleQuantityprice=next.res[0].productInventory_SellingPrice;
  this.walkinitem.TotalPrice=next.res[0].productInventory_SellingPrice;
  this.walkinitem.barcode=next.res[0].barcode;
  this.walkinitem.brandNameEng=next.res[0].brandNameEng;
  this.walkinitem.category_Name=next.res[0].category_Name;
  this.walkinitem.productName=next.res[0].productName;
  this.grossamount=this.grossamount+this.walkinitem.TotalPrice;


  this.cart.push(this.walkinitem)
  this.walkinitem={}as Walkinorderitem;
 
  this.inputName.nativeElement.value = '';
  this.grossamount=0;
this.TotalQty=0;
  for(i=0;i<this.cart.length;i++){
    this.grossamount+=this.cart[i].TotalPrice
    this.TotalQty=this.TotalQty+this.cart[i].Quantity;
  }
  
  
}

});
}



//this.inputName.nativeElement.value = ' ';
  }
  
  returnamount(num:any){
  
   
    if(num>=this.grossamount){
    this.printreceiveamount=num;
      this.returnableamount=num-this.grossamount;
    }
else{
  this.returnableamount=0;
}




 }
  
 saveorder(){
   
   this.walkinbilling.Discounted_Amount=0;
   this.walkinbilling.Delivery_Charges=0;
   this.walkinbilling.GrandTotal=this.grossamount;
   this.walkinbilling.Subtotal=this.grossamount;
   this.walkinbilling.Subtotal=this.grossamount;
   this.walkinbilling.Total_SumAmount=this.grossamount;

   var data={"orderData":this.orderData,"billingData":this.walkinbilling,"OrderItems":this.cart}
 this.pos.PostPosOrder(data).subscribe((next:any)=>{
 
  this.cart=[] as Walkinorderitem[];
this.productlis=[] as ProductInventory[];
this.grossamount=0;
this.returnableamount=0;
this.walkinitem={}as Walkinorderitem;
this.product={} as ProductInventory;
this.amountr.nativeElement.value = '';
 });
 }
 cancel(){
  this.cart=[] as Walkinorderitem[];
  this.productlis=[] as ProductInventory[];
  this.grossamount=0;
  this.returnableamount=0;
  this.walkinitem={}as Walkinorderitem;
  this.product={} as ProductInventory;
  this.amountr.nativeElement.value = '';
 }
 GetIrderNo(){
 
  this.pos.FindXtOrder().subscribe((next:any) => {
    
    this.NextOrderNo=next.res;
  }, error => {
    console.log(error);
  });

}
 Remove(i){
if(i!=-1){
  
 

 this.grossamount=this.grossamount-this.cart[i].TotalPrice

 this.TotalQty=0;
  for(i=0;i<this.cart.length;i++){
 
    this.TotalQty=this.TotalQty+this.cart[i].Quantity;
  }
 var pro=this.productlis.findIndex(x=>x.barcode==this.cart[i].barcode);
  this.cart.splice(i,1);
this.productlis.splice(pro,1);

}
 }
 addquantity(index){
  var pro=this.productlis.filter(x=>x.barcode==this.cart[index].barcode);
  if(pro.length>0){
  
   
   if(pro[0].quntity>=this.cart[index].Quantity+1){
    this.cart[index].Quantity++;
    this.cart[index].TotalPrice=this.cart[index].singleQuantityprice*this.cart[index].Quantity;
    this.inputName.nativeElement.value = '';
    this.grossamount=0;
   this.TotalQty=0;
   for(this.i=0;this.i<this.cart.length;this.i++){
     this.grossamount+=this.cart[this.i].TotalPrice
     this.TotalQty=this.TotalQty+this.cart[this.i].Quantity;
   }
   console.log(this.cart)
 
   
   }
   else{
    this.inputName.nativeElement.value = '';
     alert(" No More Product In Inventory")
   }
   
 }
}
 removequantity(index){
  var pro=this.productlis.filter(x=>x.barcode==this.cart[index].barcode);
  if(pro.length>0){
  
   
   if(this.cart[index].Quantity>1){
    this.cart[index].Quantity--;
    this.cart[index].TotalPrice=this.cart[index].singleQuantityprice*this.cart[index].Quantity;
    this.inputName.nativeElement.value = '';
    this.grossamount=0;
    this.TotalQty=0;
   for(this.i=0;this.i<this.cart.length;this.i++){
     this.grossamount+=this.cart[this.i].TotalPrice
     this.TotalQty=this.TotalQty+this.cart[this.i].Quantity;
   }
   
  
   
   }
   else{
    this.Remove(index);
   }
   
 }
 }
}
