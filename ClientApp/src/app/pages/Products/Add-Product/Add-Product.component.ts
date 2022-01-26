import { HttpClient, HttpClientModule, HttpEvent, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//import { Supplier } from 'src/app/Models/Supplier.model';
 import { Supplier } from './../../../Models/Supplier.model';
import { Product } from './../../../Models/Product.Model';
import { ProductService } from './../../../_service/product.service';
import { FileuploadService } from './../../../_service/fileupload.service';
import { AlertifyService } from '../../../../../src/app/_service/alertify.service';

@Component({
  selector: 'app-Add-Product',
  templateUrl: './Add-Product.component.html',
  styleUrls: ['./Add-Product.component.scss']
})
export class AddProductComponent implements OnInit {

  closeResult: string;
   supplierlist:Supplier[];
   categoreylist:any[];
   singlecategorey:any;
   categoreyproducts:Product[];
   showcategoreysection:boolean;
   barcodeproducts:[];
   form: FormGroup;
   progress: number = 0;
   selectedbarcodeproduct:Product;
   productinfos:FormGroup;
  selectedsupplier:any;
  hidden: boolean = false;
  CategoryDto:{};
  newpackage(){
    return this.fb.group({
      productId:new FormControl(this.productmodel.productId),
      name:new FormControl(this.productmodel.name),
      categoryId:new FormControl(this.productmodel.categoryId),
      about:new FormControl(this.productmodel.about),
      description:new FormControl(this.productmodel.description),
     // Product_TotalPrice:new FormControl(this.productmodel.product_TotalPrice),
     isActive:new FormControl(this.productmodel.isActive),
  
    });
  }


  constructor(private modalService: NgbModal,private model:Supplier,private http:HttpClient,private productmodel:Product, private fb:FormBuilder,private productservice:ProductService, public fileUploadService: FileuploadService,private alertify: AlertifyService)
   {
    this.productinfos=this.fb.group({ 
      products:this.fb.array([this.newpackage()])
   })
  }
  myNameElem: ElementRef;
  
 
  ngOnInit(
    
  ) {
    this.form = this.fb.group({
    
      avatar: [null]
    })
   
  }
 s
 categorey:FormGroup=new FormGroup({
 
  category_Name: new FormControl('')

 });




 
 categoreyinfo:FormGroup=new FormGroup({
  categorey_Id:new FormControl('')
});
// productinfo:FormGroup=new FormGroup({
//   ProductId:new FormControl(this.productmodel.ProductId),
//   ProductName:new FormControl(this.productmodel.ProductName),
//   Barcode:new FormControl(this.productmodel.Barcode),
//   Description:new FormControl(this.productmodel.Description),
//   Product_Qty:new FormControl(this.productmodel.Product_Qty),
//   Product_TotalPrice:new FormControl(this.productmodel.Product_TotalPrice),
//   Unit_Price:new FormControl(this.productmodel.Unit_Price),
//   sellingprice:new FormControl(this.productmodel.sellingprice),
// });

get formArr() {
 
 
  return this.productinfos.get('products') as FormArray;
}


addNewRow() {
  if(this.formArr.length >= 6){
    return false
  }
  else {
    this.formArr.push(this.newpackage());
 
  }
  if(this.formArr.length > 1){
    this.hidden = true
  } else{
    this.hidden = false
  }
}

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }
  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }
  openVerticallyCenteredCategorey(categoreycontent) {
    this.modalService.open(categoreycontent, { centered: true });
  }
  savecategorey(){
    this.productservice.postcategorey(this.categorey.value).subscribe(next => {
     
      
      this.categorey.reset();
      this.Getcategorey();
      this.modalService.dismissAll();

      
    }, error => {
      console.log(error);
    });
  }

  removeQuantity(i:number) {
    if(this.formArr.length == 1){
      return false
    }
    else {
    this.formArr.removeAt(i);
    //this.hidden = true;
    }
  }

  Getcategorey(){
    
    this.productservice.GetCategorey().subscribe((next:any) => {
      this.categoreylist=[];
      this.categoreylist=next.resp;
      
      
    }, error => {
      console.log(error);
    });
  }
  saveproduct(){

  var  productobj={"supplier_Id":this.selectedsupplier.supplier_Id,"category_Id":this.singlecategorey.category_Id,"products":this.productinfos.value.products}
  console.log(productobj);
 
  this.http.post<any>('https://ewholesaler.conveyor.cloud/Api/ProductApi/AddSupplierWithProducts', productobj).subscribe(next => {
    console.log(next);
    this.productinfos.reset();
   this.singlecategorey=null;
  
    
  }, error => {
    console.log(error);
  });
  }
  onOptionsSelected(id){
console.log(id);

this.showcategoreysection=true;
this.Getcategorey();
console.log(this.selectedsupplier);

  }
  onOptionsCategoreySelected(id:number){


this.CategoryDto={"Category_Id":this.ConvertToInt(id)};

this.productservice.GetCategoryProduct(this.CategoryDto).subscribe((res:any)=>{
this.categoreyproducts=res;


}, error => {
    console.log(error);
  });
this.singlecategorey=this.categoreylist.find(x=>x.category_Id==id)

  }
  onBarcodechange(Barcode,id){
    
    var productdetails=this.categoreyproducts.find(x=>x.name==Barcode);

if(productdetails!=null&&productdetails!=undefined){

  this.selectedbarcodeproduct=productdetails;
  ((this.productinfos.get('products') as FormArray).at(id) as FormGroup).get('productId').patchValue(this.selectedbarcodeproduct.productId);
  ((this.productinfos.get('products') as FormArray).at(id) as FormGroup).get('name').patchValue(this.selectedbarcodeproduct.name);
  ((this.productinfos.get('products') as FormArray).at(id) as FormGroup).get('about').patchValue(this.selectedbarcodeproduct.about);
  ((this.productinfos.get('products') as FormArray).at(id) as FormGroup).get('description').patchValue(this.selectedbarcodeproduct.description);
  ((this.productinfos.get('products') as FormArray).at(id) as FormGroup).get('categoryId').patchValue(this.selectedbarcodeproduct.categoryId);
  ((this.productinfos.get('products') as FormArray).at(id) as FormGroup).get('isActive').patchValue(this.selectedbarcodeproduct.isActive);
}
else{
  ((this.productinfos.get('products') as FormArray).at(id) as FormGroup).get('productId').patchValue(0);
  ((this.productinfos.get('products') as FormArray).at(id) as FormGroup).get('name').patchValue("");
  ((this.productinfos.get('products') as FormArray).at(id) as FormGroup).get('about').patchValue("");
  ((this.productinfos.get('products') as FormArray).at(id) as FormGroup).get('description').patchValue("");
  ((this.productinfos.get('products') as FormArray).at(id) as FormGroup).get('categoryId').patchValue(0);
  ((this.productinfos.get('products') as FormArray).at(id) as FormGroup).get('isActive').patchValue(0);
}


   
      }
  
  ConvertToInt(val){
        return parseInt(val);
      }
//fileupload
uploadFile(event) {
  const file = (event.target as HTMLInputElement).files[0];
  this.form.patchValue({
    avatar: file
  });
  this.form.get('avatar').updateValueAndValidity()
}

submitUser() {
  var apipath="AddCatAndProductExcel";
  this.fileUploadService.uploadproductfile(
 
    this.form.value.avatar,apipath
  ).subscribe((event: HttpEvent<any>) => {
    switch (event.type) {
      case HttpEventType.Sent:
        console.log('Request has been made!');
        break;
      case HttpEventType.ResponseHeader:
     
        console.log('Response header has been received!11');
        this.form.reset();
    

this.modalService.dismissAll();
        break;
      case HttpEventType.UploadProgress:
        this.progress = Math.round(event.loaded / event.total * 100);
        console.log(`Uploaded! ${this.progress}%`);
        break;
      case HttpEventType.Response:
        this.modalService.dismissAll();
        this.form.reset();
          this.alertify.success('Data Updated seccussfully!');
          break;

        this.modalService.dismissAll();
        setTimeout(() => {
          this.progress = 0;
        }, 1500);
        default  :
        {
          this.modalService.dismissAll();
          this.form.reset();
          this.alertify.error('Some things Wrong  or file formate  is not supported');
        }

    }
   
  })
}

}