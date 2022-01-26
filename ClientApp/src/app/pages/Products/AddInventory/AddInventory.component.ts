import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { StockinService } from '../../../../../src/app/_service/stockin.service';
import { Supplier } from '../../../../../src/app/Models/Supplier.model';
import { ProductService } from '../../../../../src/app/_service/product.service';
import { Router } from '@angular/router';
import { AlertifyService } from '../../../../../src/app/_service/alertify.service';

@Component({
  selector: 'app-AddInventory',
  templateUrl: './AddInventory.component.html',
  styleUrls: ['./AddInventory.component.scss']
})
export class AddInventoryComponent implements OnInit {
  supplier: Supplier []=[];
  Addtocart: any []=[];
  productlist:any[];
  productid:number;
  supplierid:number=0;
  quantity:number=0;
 unit:string
  costPerUnit:number=0;
  totalCost:number=0;
  pricePerUnit:number=0;
  totalPrice:number=0;
  TotalQty:number=0;
  TotalcostPrice=0;
  TotalSalePrice=0;
  Searchableproductlist:any[];
  constructor(    private SpinnerService: NgxSpinnerService,
    private productservice: ProductService,
    private service:StockinService,
    private modalService: NgbModal,
    private router: Router,
    private alertify: AlertifyService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.Getsalesmans();
    this.getproducts();
  }
 
  Getsalesmans(){
   
    this.productservice.GetSupplier().subscribe((next:any) => {
      this.supplier=[];
      this.supplier=next;
     // this.supplier=this.supplier;
     
    }, error => {
      console.log(error);
    });
  }
  Add()
  {
    if(this.supplierid==0)
    {
    return this.alertify.warning("Supplier is not Selected")
    }
    if(this.productid==0)
    {
    return this.alertify.warning("Product is not Selected")
    }
    if(this.quantity==0)
    {
    return this.alertify.warning("Quntity is not Added")
    }
    if(this.costPerUnit==0)
    {
    return this.alertify.warning("Cost Per Unit Not Added")
    }
    if(this.pricePerUnit==0)
    {
    return this.alertify.warning("Price Per Unit Not Added")
    }
  
    var name=this.productlist.find(x=>x.product.id==this.productid).product.name;
   var obj={

      "productid":this.productid,
      "productname":name,
      "supplierid":this.supplierid,
      "quantity":this.quantity,
      "unit":this.unit,
      "status":true,
      "remainingQuantity":this.quantity,
      "costPerUnit":this.costPerUnit,
      "totalCost":this.quantity*this.costPerUnit,
      "pricePerUnit":this.pricePerUnit,
      "totalPrice":this.quantity*this.pricePerUnit
  }

  this.Addtocart.push(obj);
  this.TotalQty=0;
  this.TotalcostPrice=0;
  this.TotalSalePrice=0;
  this.Addtocart.forEach(a => this.TotalQty += a.quantity)
  this.Addtocart.forEach(a => this.TotalSalePrice += a.totalPrice)
  this.Addtocart.forEach(a => this.TotalcostPrice += a.totalCost)
  this.productid=0;
  this.quantity=0;
  return this.alertify.success("Product Added Successfully")

  }
  SaveInventory(){

    if(this.Addtocart.length>0)
    {
      this.Addtocart.forEach(element => {
        delete element.productname
       });
     
       
          this.service.PostInventory(this.Addtocart).subscribe(next => {
            
           this.Addtocart=[];
           this.TotalQty=0;
          this.TotalcostPrice=0;
          this.TotalSalePrice=0;
          this.router.navigate(['/inventory']);
             }, error => {
           
             });
            }

   
  }

remove(id:number)
{
  let data=this.Addtocart.find(x=>x.productid==id)
 let index=this.Addtocart.indexOf(x=>x.productid==id)
 this.Addtocart.splice(index, 1);
 this.TotalQty=data.quantity-this.quantity;
 this.TotalcostPrice=this.TotalcostPrice-data.totalCost;
 this.TotalSalePrice=this.TotalSalePrice-data.totalPrice;
 this.alertify.success("Product Removed Successfully")
}
  getproducts(){
    
    this.SpinnerService.show();
    this.productservice.GetAllProducts().subscribe((next:any) => {
      this.productlist=[];
    
      this.productlist=next;
      this.SpinnerService.hide();
      console.log(this.productlist);
      // this.listData = new MatTableDataSource(this.productlist);
      // this.listData.sort=this.sort;
      // this.listData.paginator=this.paginator;
    }, error => {
      console.log(error);
    });

  }

}
