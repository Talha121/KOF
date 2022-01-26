import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {animate, style, transition, trigger} from '@angular/animations';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VendorService } from '../../../../../src/app/_service/vendors.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-VendorDetail',
  templateUrl: './VendorDetail.component.html',
  styleUrls: ['./VendorDetail.component.scss'],
  animations: [
    trigger('fadeInOutTranslate', [
      transition(':enter', [
        style({opacity: 0}),
        animate('400ms ease-in-out', style({opacity: 1}))
      ]),
      transition(':leave', [
        style({transform: 'translate(0)'}),
        animate('400ms ease-in-out', style({opacity: 0}))
      ])
    ])
  ]
})
export class VendorDetailComponent implements OnInit {
VendorId:number;
editProfile = true;
editProfileIcon = 'icofont-edit';
editAbout = true;
editAboutIcon = 'icofont-edit';

public basicContent: string;
vendorInfo:any;
VendorOrder:any[];
vendorLadger:any;
data:any;
Orderitems:any;
public rowsOnPage = 10;
public filterQuery = '';
public sortBy = '';
public sortOrder = 'desc';
profitChartOption: any;

UserId:number;
Name:string;
Checker:boolean;
  constructor(private SpinnerService: NgxSpinnerService,private vendorservice:VendorService,private router: Router,private route: ActivatedRoute,private modalService: NgbModal,) { }

  ngOnInit() {
    this.modalService.dismissAll();
    this.VendorId = this.route.snapshot.params['vender_id'];
    
  this.GetVendorInfo(this.VendorId);
  this.VendorOrders(this.VendorId);
  this.Vendorladger(this.VendorId);
    
  }

  GetVendorInfo(Id:any)
  {
    this.SpinnerService.show();
    this.vendorservice.Vendordetail(Id).subscribe((next:any)=>{
      this.vendorInfo=next.resp;
      
      this.SpinnerService.hide();
    }, error => {
      console.log(error);
    });
  }
  VendorOrders(Id:any)
  {
    this.vendorservice.VendorOrders(Id).subscribe((next:any)=>{
      this.VendorOrder=next.resp;
      
    
 
    }, error => {
      console.log(error);
    });
  }
  Vendorladger(Id:any)
  {
    this.vendorservice.Vendorladger(Id).subscribe((next:any)=>{
      this.vendorLadger=next.res;
      
    
      console.log(this.vendorLadger)
    }, error => {
      console.log(error);
    });
  }
  openLg(Showdetail,id:number) {
    
  
   this.data=this.VendorOrder.find(x=>x.orderId==id);
   
   this.Orderitems=this.data.items;
   console.log(this.Orderitems);
      this.modalService.open(Showdetail, { size: 'lg' });
    
  }
  toggleEditProfile() {
    this.editProfileIcon = (this.editProfileIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
    this.editProfile = !this.editProfile;
  }

  toggleEditAbout() {
    this.editAboutIcon = (this.editAboutIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
    this.editAbout = !this.editAbout;
  }


}
