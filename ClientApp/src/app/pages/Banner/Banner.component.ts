import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FileuploadService } from '../../../../src/app/_service/fileupload.service';
import { BannerService } from '../../../../src/app/_service/banner.service';
import { environment } from './../../../../src/environments/environment.prod';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-Banner',
  templateUrl: './Banner.component.html',
  styleUrls: ['./Banner.component.scss']
})
export class BannerComponent implements OnInit {
  fileData: File = null;
  ImagebaseUrl = environment.Imagebaseurl + 'BannerImage/';
previewUrl:any = null;
fileUploadProgress: string = null;
uploadedFilePath: string = null;
form: FormGroup;
  bannerslist:any;
  constructor(private SpinnerService: NgxSpinnerService,private bannerservice:BannerService,private http: HttpClient,private uploadfileservice:FileuploadService,) { }

  ngOnInit() {
    this.GetBanners();
    console.log (this.bannerslist);
  }
  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    this.preview();
}

preview() {
  // Show preview
  var mimeType = this.fileData.type;
  if (mimeType.match(/image\/*/) == null) {
    return;
  }
  
  

  var reader = new FileReader();     
  reader.readAsDataURL(this.fileData);
  reader.onload = (_event) => {
    this.previewUrl = reader.result;
  }
}
clickFunction(id:number) {
  
  this.bannerservice.Removebanner(id).subscribe((next:any)=>{
    this.GetBanners();
  });
  
 

}
onSubmit() {
 
  const formData = new FormData();
    formData.append('image', this.fileData);
    var apipath="AddBanner";
    this.SpinnerService.show();
this.uploadfileservice.uploadbannerimage(this.fileData,apipath).subscribe(res => {
  this.previewUrl=null;
  this.SpinnerService.hide();
  this.GetBanners();
  
 
})
   
}






  GetBanners(){
    this.SpinnerService.show();
    this.bannerservice.GetBannerData().subscribe((next:any) => {
      
      this.bannerslist=[];
  
      this.bannerslist=next.res;
      this.SpinnerService.hide();
    }, error => {
      console.log(error);
    });
  }

}
