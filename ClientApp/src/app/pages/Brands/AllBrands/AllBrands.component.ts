import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FileuploadService } from '../../../../../src/app/_service/fileupload.service';
import { BrandService } from '../../../../../src/app/_service/brand.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Brand } from '../../../../../src/app/Models/Brand';
import { Router } from '@angular/router';
import { environment } from './../../../../../src/environments/environment.prod';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertifyService } from '../../../../../src/app/_service/alertify.service';
import { ProductService } from '../../../../../src/app/_service/product.service';

@Component({
  selector: 'app-AllBrands',
  templateUrl: './AllBrands.component.html',
  styleUrls: ['./AllBrands.component.scss']
})
export class AllBrandsComponent implements OnInit {
  form: FormGroup;
  ImagebaseUrl = environment.Imagebaseurl + 'BrandImages/';
 brandsList:any;
 key:string='rowid';
 reverse:boolean=false;
 p:number=1;
 showform:boolean=false;
 progress: number = 0;
 brandId:number;
 singlebrand:Brand;
 image:any ;
 noimage="";
 fileData: File = null;
  constructor(private productservice:ProductService,private alertify: AlertifyService,private SpinnerService: NgxSpinnerService,private router: Router,private brandservice:BrandService,private modalService: NgbModal,private uploadfileservice:FileuploadService,private fb:FormBuilder,private brandmodal:Brand) { }
  brandform:FormGroup=new FormGroup({
    brandImagePath: new FormControl(this.brandmodal.brandImagePath),
    brandId: new FormControl(this.brandmodal.brandId),
    brandNameEng: new FormControl(this.brandmodal.brandNameEng),
    brandNameUrdu: new FormControl(this.brandmodal.brandNameUrdu),
  
   });
   showinput()
   {
    this.showform=true;
   }
  ngOnInit() {

    this.GetBrands();
    this.form = this.fb.group({
    
      avatar: [null]
    })
   
  }
  UpdateView(content,id:number) {
    var data=this.brandsList.find(res=>res.brandId==id);
    
    this.singlebrand=data;
    this.brandform.setValue({
      brandImagePath:this.singlebrand.brandImagePath,
      brandId:this.singlebrand.brandId,
      brandNameEng:this.singlebrand.brandNameEng,
      brandNameUrdu:this.singlebrand.brandNameUrdu,
    });
  
   
      this.modalService.open(content, { size: 'lg' });
    }
    UpdateBrand(){
      
     this.productservice.UpdateBrand(this.brandform.value).subscribe(next => {
    
      this.modalService.dismissAll();
       this.brandform.reset();
       this.GetBrands();
       this.alertify.success('Brand Updated seccussfully');
      
     }, error => {
     
       console.log(error);
     });
      console.log(this.brandform.value)
    }
    AddBrand(){
      
     this.brandservice.AddBrand(this.brandform.value).subscribe(next => {
    
      this.modalService.dismissAll();
       this.brandform.reset();
       this.showform=false;
       this.GetBrands();
       this.alertify.success('Brand Add seccussfully');
      
     }, error => {
      this.alertify.error('already exists');
       console.log(error);
     });
    }
  
  GetBrands(){
    this.SpinnerService.show();
    this.brandservice.GetBrands().subscribe((next:any) => {
      this.brandsList=[];
      this.brandsList=next.resp;
      console.log(this.brandsList);
      this.SpinnerService.hide();
      
    }, error => {
      console.log(error);
    });
  }
  Sort(key){
    this.key=key;
    this.reverse=!this.reverse;
  }
  openLg(content,id:number) {
    
    this.brandId=id;
 
    this.modalService.open(content, { size: 'lg' });
  }

  uploadFile(event) {

    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      avatar: file
    });
    this.form.get('avatar').updateValueAndValidity();
   
  }
  
  SubmitImage() {
    this.SpinnerService.show();
    if(this.form.value.avatar!=null){
      var apipath="UploadImageBrand";
      
      this.uploadfileservice.uploadbrandimage(
     
        this.form.value.avatar,apipath,
        this.brandId
      ).subscribe((event: HttpEvent<any>) => {
        switch (event.type) {
          case HttpEventType.Sent:
            console.log('Request has been made!');
            break;
          case HttpEventType.ResponseHeader:
            console.log('Response header has been received!');
            this.form.reset();
    this.modalService.dismissAll();
            break;
          case HttpEventType.UploadProgress:
            this.progress = Math.round(event.loaded / event.total * 100);
            console.log(`Uploaded! ${this.progress}%`);
            break;
          case HttpEventType.Response:
            console.log('User successfully created!', event.body);
            setTimeout(() => {
              this.progress = 0;
            }, 1500);
    
        }
        this.GetBrands();
      })
    }
    this.SpinnerService.hide();
  }
}
