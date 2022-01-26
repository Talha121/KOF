import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { StockinService } from './../../../../../src/app/_service/stockin.service';

@Component({
  selector: 'app-AllInventory',
  templateUrl: './AllInventory.component.html',
  styleUrls: ['./AllInventory.component.scss']
})
export class AllInventoryComponent implements OnInit {
  key:string='rowid';
  reverse:boolean=false;
  invertorylist:any[];
  Searchinvertorylist:any[];
  p:number=1;
  Barcode:any;
  status :boolean;
  
  constructor(private SpinnerService: NgxSpinnerService,private service:StockinService) { }

  ngOnInit() {
    this.GetInventory();
  }
  Sort(key){
    this.key=key;
    this.reverse=!this.reverse;
  }
  GetInventory(){

    this.service.GetstockIn().subscribe((next:any) => {
      this.invertorylist=[];
      
      this.invertorylist=next;
      this.Searchinvertorylist=next;     
      console.log(this.invertorylist)
    }, error => {
      console.log(error);
    });
  
  }
  SearchProduct(){
    if(this.Barcode==""){
      this.Searchinvertorylist=[];
     this.Searchinvertorylist=this.invertorylist
    }
    else{
      if(this.invertorylist!=null){
        this.Searchinvertorylist=this.invertorylist.filter(res=>{
          return res.barcode.match(this.Barcode)
        })
      }
   
    }
  }
  onOptionsSelected(num){
    
    if(num=="0"){
      this.Searchinvertorylist=this.invertorylist;
    }
    if(num=="1"){
      this.status=true;
      this.Searchinvertorylist=this.invertorylist.filter(x=>x.productInventory_Status==this.status);
    }
    if(num=="2"){
    
      this.status=false;
      this.Searchinvertorylist=this.invertorylist.filter(x=>x.productInventory_Status==this.status);
    }

  }
  RemoveInventory(data:number){
this.service.RemoveInventory(data).subscribe((next:any)=>{
  this.GetInventory();
  //  this.invertorylist.forEach(x=>{if(x.data.inventory.id==data.id){x.productInventory_Status=!x.productInventory_Status}});
}, error => {
      console.log(error);
    })
  }
  changestatus(data:number){
this.service.ChangeStatus(data).subscribe((next:any)=>{
  this.GetInventory();
  
  //  this.invertorylist.forEach(x=>{if(x.data.inventory.id==data.id){x.productInventory_Status=!x.productInventory_Status}});
}, error => {
      console.log(error);
    })
  }
}
